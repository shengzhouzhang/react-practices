
import * as _ from 'lodash';
import * as React from 'react';
import * as Immutable from 'immutable';
import * as Rx from 'rx';
import { IAdjustedPhoto, Photo } from '../../components/PhotoGrid/GridItem';
import { IPhotos, IPhoto } from '../../domains/photo';
import CONFIG from '../../browser/config';

const DEFAULT_SCREEN_WIDTH = CONFIG.DEFAULT_SCREEN_WIDTH;
const DEFAULT_PHOTO_MARGIN = CONFIG.DEFAULT_PHOTO_MARGIN;
const DEFAULT_PHOTO_HEIGHT = CONFIG.DEFAULT_PHOTO_HEIGHT;
const DEFAULT_SCREEN_MARGIN = 100;
const MINIMUM_SCREEN_WIDTH = 200;
const MINIMUM_PHOTO_HEIGHT = 220;
const MAXIMUM_PHOTO_HEIGHT = 280;

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
      width: this.state.screenWidth + .1,
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
    this.addResizeObservable();
  };

  componentWillUnMount () {
  };

  addResizeObservable = () => {

    Rx.Observable.fromEvent(window, 'resize')
      .map(event => { return window.innerWidth; })
      .debounce(200)
      .distinctUntilChanged()
      .subscribe(this.resize);
  };

  resize = () => {
    this.setState({
      screenWidth: _.max([
        window.innerWidth - DEFAULT_SCREEN_MARGIN,
        MINIMUM_SCREEN_WIDTH
      ])
    });
  };

  resizePhotos = (photos: Immutable.List<IPhoto>, screenWidth: number): Array<IAdjustedPhoto> => {

    let rowWidth = 0;
    let adjustedPhotos = [];
    let photosInRow = [];
    for (let index = 0; index < photos.size; index++) {
      let photo = photos.get(index);
      rowWidth += photo.width;
      photosInRow.push(photos.get(index));
      if (rowWidth >= screenWidth) {
        adjustedPhotos = [
          ...adjustedPhotos,
          ...this.resizePhotosInRow(Immutable.List(photosInRow), screenWidth)
        ];
        rowWidth = 0;
        photosInRow = [];
      }
    }
    return adjustedPhotos;
  };

  resizePhotosInRow = (photoList: Immutable.List<IPhoto>, screenWidth: number): Array<IAdjustedPhoto> => {

    let photos = photoList.toJS();
    let totalWidth = _.sumBy(photos, (photo: IPhoto) => photo.width);
    let rate = (screenWidth - DEFAULT_PHOTO_MARGIN * 2) / totalWidth;
    let minHeight = _.minBy(photos, (photo: IPhoto) => photo.height).height * rate - DEFAULT_PHOTO_MARGIN * 2;

    return _.map(photos, (photo: IPhoto) => {
      return {
        name: photo.name,
        imageUrl: photo.imageUrl,
        width: photo.width,
        height: photo.height,
        adjustedWidth: photo.width * rate - DEFAULT_PHOTO_MARGIN * 2,
        adjustedHeight: minHeight > MINIMUM_PHOTO_HEIGHT ?
          minHeight < MAXIMUM_PHOTO_HEIGHT ? minHeight : MAXIMUM_PHOTO_HEIGHT :
          MINIMUM_PHOTO_HEIGHT,
        margin: DEFAULT_PHOTO_MARGIN
      };
    });
  };
};
