
import * as _ from 'lodash';
import * as React from 'react';
import * as Immutable from 'immutable';
import { IAdjustedPhoto, Photo } from '../../components/PhotoGrid/GridItem';
import { IPhotos, IPhoto } from '../../domains/photo';
import CONFIG from '../../browser/config';

const DEFAULT_SCREEN_WIDTH = CONFIG.DEFAULT_SCREEN_WIDTH;
const DEFAULT_PHOTO_MARGIN = CONFIG.DEFAULT_PHOTO_MARGIN;
const DEFAULT_PHOTO_HEIGHT = CONFIG.DEFAULT_PHOTO_HEIGHT;
const DEFAULT_SCREEN_MARGIN = 100;

export interface IGridProps extends IPhotos, React.Props<any> {};

export interface IGridState {
  screenWidth: number;
};

export class Grid extends React.Component<IGridProps, IGridState> {

  constructor (props) {
    super(props);
    this.state = { screenWidth: DEFAULT_SCREEN_WIDTH };
  }

  render () {
    let resizedPhotos = this.resizePhotos(this.props.items, this.state.screenWidth);
    let items = _.map(resizedPhotos, (resizedPhoto, index) => {
        return (<Photo key={`grid-item-${index}`} {...resizedPhoto} />)
    });
    let style = {
      width: this.state.screenWidth,
      padding: DEFAULT_PHOTO_MARGIN
    };
    return (
      <div className="photos">
        <div className="photo-list" style={style}>{ items }</div>
      </div>
    );
  };

  componentDidMount () {
    this.resize();
    window.addEventListener('resize', this.resize);
  };

  componentWillUnMount () {
    window.removeEventListener('resize', this.resize);
  };

  resize = () => {
    console.log('resizing');
    this.setState({ screenWidth: window.innerWidth - DEFAULT_SCREEN_MARGIN });
  };

  resizePhotos = (photos: Immutable.List<IPhoto>, screenWidth: number): Array<IAdjustedPhoto> => {

    let rowWidth = 0;
    let index = 0;
    let adjustedIndex = 0;
    let adjustedPhotos = [];
    for (; index < photos.size; index++) {
      let photo = photos.get(index);
      rowWidth += photo.width || 500;
      if (rowWidth >= screenWidth) {
        for (; adjustedIndex <= index; adjustedIndex++) {
          let photo = photos.get(adjustedIndex);
          let rate = screenWidth / rowWidth;
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
