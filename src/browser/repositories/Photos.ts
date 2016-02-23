
import * as _ from 'lodash';
import * as Promise from 'bluebird';
import { IPhotos, IPhoto } from '../../domains/photo';
import { IAgent } from '../../browser/repositories/Agent';

export interface IPhotosRepository {
  responseEntityToPhotos (entity: any): IPhotos;
  fetchPhotos(): Promise<IPhotos>;
};

export class PhotosRepository implements IPhotosRepository {
  agent: IAgent;
  path: string;

  constructor(agent: IAgent, path: string) {
    this.agent = agent;
    this.path = path;
  };

  public responseEntityToPhotos (entity: any = {}) {
    return {
      title: entity.title,
      items: _.map(entity.items, (item: any) => {
        return { name: item.name, imageUrl: item.imageUrl };
      })
    };
  };

  public fetchPhotos(): Promise<IPhotos> {
    return this.agent.request('GET', this.path)
      .then(entity => this.responseEntityToPhotos(entity));
  };
};
