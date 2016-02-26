
import * as Immutable from 'immutable';
import { IPhotos, IPhoto } from '../../domains/photo';

export function parsePhotos (entity: any = {}): IPhotos {
  let photos = _.map(entity.items, (item: any): IPhoto => {
    return { name: item.name, imageUrl: item.imageUrl, height: item.height, width: item.width };
  });
  return {
    title: entity.title,
    items: Immutable.List(photos)
  };
}
