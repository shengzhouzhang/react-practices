
import { Photos, Photo } from '../../domains/photo';

export function parsePhotos (entity: any = {}): Photos {
  return new Photos(
    entity.title,
    _.map(entity.items, (item: any) => new Photo(item.name, item.imageUrl, item.width, item.height))
  );
}
