
import * as _ from 'lodash';
import * as Promise from 'bluebird';
import { IPhotos, IPhoto } from '../../domains/photo';

export function parse (entity: any = {}): IPhotos {
  return {
    title: entity.title,
    items: _.map(entity.items, (item: any): IPhoto => {
      return { author: item.author, imageUrl: item.media.m };
    })
  };
};
