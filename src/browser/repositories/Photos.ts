
import * as _ from 'lodash';
import * as Promise from 'bluebird';
import { IPhotos } from '../../domains/photo';
import { IAgent } from '../../browser/repositories/Agent';
import * as Utils from '../../browser/utils/photos';

export interface IPhotosRepository {
  fetchPhotos(): Promise<IPhotos>;
};

export class PhotosRepository implements IPhotosRepository {
  agent: IAgent;
  path: string;

  constructor (agent: IAgent, path: string) {
    this.agent = agent;
    this.path = path;
  };

  fetchPhotos = (): Promise<IPhotos> => {
    return this.agent.request('GET', this.path)
      .then(entity => Utils.parsePhotos(entity));
  };
};
