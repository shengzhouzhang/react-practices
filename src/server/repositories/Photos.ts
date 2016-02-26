
import * as _ from 'lodash';
import * as Promise from 'bluebird';
import { Photos, Photo } from '../../domains/photo';
import { IAgent } from '../../server/repositories/Agent';
import logger from '../../server/utils/logger';

export interface IPhotosRepository {
  search(tags: string): Promise<Photos>;
  getRecent(): Promise<Photos>;
};

export class PhotosRepository implements IPhotosRepository {
  agent: IAgent;

  constructor (agent: IAgent) {
    this.agent = agent;
  };

  search = (tags: string = ''): Promise<Photos> => {
    logger.info('search', tags);
    return this.agent.request('GET', `&method=flickr.photos.search&text=${tags}&sort=relevance&extras=url_m`)
      .then(entity => this.parse(entity))
      .then(items => new Photos(tags, items));
  };

  getRecent = (): Promise<Photos> => {
    logger.info('getRecent');
    return this.agent.request('GET', `&method=flickr.photos.getRecent&extras=url_m`)
      .then(entity => this.parse(entity))
      .then(items => new Photos(null, items));
  };

  parse (raw: any = {}): Array<Photo> {
    try {
      return _.chain(JSON.parse(raw).photos.photo)
        .filter(item => item.url_m && item.width_m && item.height_m)
        .map((item: any) => new Photo(item.title, item.url_m, parseInt(item.width_m), parseInt(item.height_m)))
        .value();
    } catch (error) {
      throw new Error(`${error.message}: ${raw}`)
    }
  };
};
