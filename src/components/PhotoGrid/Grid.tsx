
import * as _ from 'lodash';
import * as React from 'react';
import { IAdjustedPhoto, Photo } from '../../components/PhotoGrid/GridItem';
import { IPhotos, IPhoto } from '../../domains/photo';

export interface IGridProps extends IPhotos, React.Props<any> {};

const DEFAULT_WIDTH = 1200;
const DEFAULT_MARGIN = 2;

export class Grid extends React.Component<IGridProps, any> {

  render () {
    let items = _.map(this.adjustSize(this.props.items), (item, index) => {
      return (<Photo key={`grid-item-${index}`} {...item} />)
    });
    let style = {
      width: DEFAULT_WIDTH,
      padding: DEFAULT_MARGIN
    };
    return (
      <div className="photos">
        <div className="photo-list" style={style}>{ items }</div>
      </div>
    );
  };

  adjustSize = (photos: Array<IPhoto>): Array<IAdjustedPhoto> => {

    let rowWidth = 0;
    let index = 0;
    let adjustedIndex = 0;
    let numberOfPhotosInRow = 0;
    let adjustedPhotos = [];
    for (; index < photos.length; index++) {
      let photo = photos[index];
      rowWidth += photo.width || 500;
      if (rowWidth >= DEFAULT_WIDTH) {
        let adjustedRowWidth = 0;
        for (; adjustedIndex <= index; adjustedIndex++) {
          let photo = photos[adjustedIndex];
          let rate = DEFAULT_WIDTH / rowWidth;
          let adjustedWidth = photo.width * rate - DEFAULT_MARGIN * 2;
          adjustedPhotos.push({
            name: photo.name,
            imageUrl: photo.imageUrl,
            width: photo.width,
            height: photo.height,
            adjustedWidth: adjustedWidth,
            adjustedHeight: 200,
            margin: DEFAULT_MARGIN
          });
          adjustedRowWidth += adjustedWidth;
        }
        rowWidth = 0;
      }
    }

    return adjustedPhotos;
  };
};
