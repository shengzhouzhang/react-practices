
import * as _ from 'lodash';
import * as Promise from 'bluebird';
import { IPhotos, IPhoto } from '../domains/photo';
import { IAgent } from '../repositories/Agent';

export interface IPhotosRepository {
  parse (entity: any): IPhotos;
  fetchPhotos(): Promise<IPhotos>;
};

export class PhotosRepository implements IPhotosRepository {
  agent: IAgent;
  path: string;
  parse: (entity: any) => IPhotos;

  constructor (agent: IAgent, path: string, parse: (entity: any) => IPhotos) {
    this.agent = agent;
    this.path = path;
    this.parse = parse;
  };

  public fetchPhotos = (): Promise<IPhotos> => {
    return this.agent.request('GET', this.path)
      .then(entity => this.parse(entity));
  };
};
