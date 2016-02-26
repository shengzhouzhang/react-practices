
import * as _ from 'lodash';
import * as Promise from 'bluebird';
import * as Immutable from 'immutable';
import { IPhotos, IPhoto } from '../../domains/photo';
import { IAgent } from '../../server/repositories/Agent';
import logger from '../../server/utils/logger';

export interface IPhotosRepository {
  search(tags: string): Promise<IPhotos>;
  getRecent(): Promise<IPhotos>;
};

export class PhotosRepository implements IPhotosRepository {
  agent: IAgent;

  constructor (agent: IAgent) {
    this.agent = agent;
  };

  search = (tags: string = ''): Promise<IPhotos> => {
    logger.info('search', tags);
    return this.agent.request('GET', `&method=flickr.photos.search&text=${tags}&sort=relevance&extras=url_m`)
      .then(entity => this.parse(entity))
      .then(items => {
        return { title: tags, items: items };
      });
  };

  getRecent = (): Promise<IPhotos> => {
    logger.info('getRecent');
    return this.agent.request('GET', `&method=flickr.photos.getRecent&extras=url_m`)
      .then(entity => this.parse(entity))
      .then(items => {
        return { title: null, items: items };
      });
  };

  parse (raw: any = {}): Immutable.List<IPhoto> {
    try {
      let photos = _.chain(JSON.parse(raw).photos.photo)
        .map((item: any) => {
          return {
            name: item.title,
            imageUrl: item.url_m,
            width: parseInt(item.width_m),
            height: parseInt(item.height_m)
          };
        })
        .filter(photos => photos.width && photos.height)
        .value();
      return Immutable.List(photos);
    } catch (error) {
      throw new Error(`${error.message}: ${raw}`)
    }
  };
};
