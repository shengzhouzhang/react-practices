///<reference path='../../../node_modules/immutable/dist/immutable.d.ts'/>

import * as _ from 'lodash';
import * as React from 'react';
import * as Immutable from 'immutable';
import { IAdjustedPhoto, Photo } from '../../components/PhotoGrid/GridItem';
import { IPhotos, IPhoto } from '../../domains/photo';
import CONFIG from '../../browser/config';

export interface IGridProps extends IPhotos, React.Props<any> {};

export class Grid extends React.Component<IGridProps, any> {

  render () {
    let items = _.map(this.adjustSize(this.props.items), (item, index) => {
      return (<Photo key={`grid-item-${index}`} {...item} />)
    });
    let style = {
      width: CONFIG.SCREEN_WIDTH,
      padding: CONFIG.PHOTO_MARGIN
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
      if (rowWidth >= CONFIG.SCREEN_WIDTH) {
        for (; adjustedIndex <= index; adjustedIndex++) {
          let photo = photos.get(adjustedIndex);
          let rate = CONFIG.SCREEN_WIDTH / rowWidth;
          adjustedPhotos.push({
            name: photo.name,
            imageUrl: photo.imageUrl,
            width: photo.width,
            height: photo.height,
            adjustedWidth: photo.width * rate - CONFIG.PHOTO_MARGIN * 2,
            adjustedHeight: CONFIG.PHOTO_DEFAULT_HEIGHT,
            margin: CONFIG.PHOTO_MARGIN
          });
        }
        rowWidth = 0;
      }
    }
    return adjustedPhotos;
  };
};
