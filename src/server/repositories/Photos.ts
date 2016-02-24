
import * as _ from 'lodash';
import * as Promise from 'bluebird';
import { IPhotos, IPhoto } from '../../domains/photo';
import { IAgent } from '../../server/repositories/Agent';

export interface IPhotosRepository {
  fetchPhotos(tags: string): Promise<IPhotos>;
};

export class PhotosRepository implements IPhotosRepository {
  agent: IAgent;
  path: string;

  constructor (agent: IAgent, path: string) {
    this.agent = agent;
    this.path = path;
  };

  public fetchPhotos = (tags: string): Promise<IPhotos> => {
    return this.agent.request('GET', `&method=${this.path}&tags=${tags}`)
      .then(entity => this.parse(entity))
      .then(items => {
        return { title: tags, items: items };
      });
  };

  private parse (raw: any = {}): Array<IPhoto> {
    try {
      return _.map(JSON.parse(raw).photos.photo, (item: any) => {
        return {
          name: item.title,
          imageUrl: `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`
        };
      });
    } catch (error) {
      throw new Error(`${error.message}: ${raw}`)
    }
  };
};
