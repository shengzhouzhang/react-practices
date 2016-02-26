
import * as _ from 'lodash';
import * as React from 'react';
import * as Immutable from 'immutable';
import { IAdjustedPhoto, Photo } from '../../components/PhotoGrid/GridItem';
import { IPhotos, IPhoto } from '../../domains/photo';
import CONFIG from '../../browser/config';

const DEFAULT_SCREEN_WIDTH = CONFIG.DEFAULT_SCREEN_WIDTH;
const DEFAULT_PHOTO_MARGIN = CONFIG.DEFAULT_PHOTO_MARGIN;
const DEFAULT_PHOTO_HEIGHT = CONFIG.DEFAULT_PHOTO_HEIGHT;

export interface IGridProps extends IPhotos, React.Props<any> {};

export class Grid extends React.Component<IGridProps, any> {

  render () {
    let items = _.map(this.adjustSize(this.props.items), (item, index) => {
      return (<Photo key={`grid-item-${index}`} {...item} />)
    });
    let style = {
      width: DEFAULT_SCREEN_WIDTH,
      padding: DEFAULT_PHOTO_MARGIN
    };
    return (
      <div className="photos">
        <div className="photo-list" style={style}>{ items }</div>
      </div>
    );
  };

  adjustSize = (photos: Immutable.List<IPhoto>): Array<IAdjustedPhoto> => {

    let rowWidth = 0;
    let index = 0;
    let adjustedIndex = 0;
    let adjustedPhotos = [];
    for (; index < photos.size; index++) {
      let photo = photos.get(index);
      rowWidth += photo.width || 500;
      if (rowWidth >= DEFAULT_SCREEN_WIDTH) {
        for (; adjustedIndex <= index; adjustedIndex++) {
          let photo = photos.get(adjustedIndex);
          let rate = DEFAULT_SCREEN_WIDTH / rowWidth;
          adjustedPhotos.push({
            name: photo.name,
            imageUrl: photo.imageUrl,
            width: photo.width,
            height: photo.height,
            adjustedWidth: photo.width * rate - DEFAULT_PHOTO_MARGIN * 2,
            adjustedHeight: DEFAULT_PHOTO_HEIGHT,
            margin: DEFAULT_PHOTO_MARGIN
          });
        }
        rowWidth = 0;
      }
    }
    return adjustedPhotos;
  };
};
