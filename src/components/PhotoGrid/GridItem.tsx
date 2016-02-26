
import * as React from 'react';
import { IPhoto } from '../../domains/photo';
import CONFIG from '../../browser/config';

const DEFAULT_PHOTO_WIDTH = CONFIG.DEFAULT_PHOTO_WIDTH;
const DEFAULT_PHOTO_HEIGHT = CONFIG.DEFAULT_PHOTO_HEIGHT;

export interface IAdjustedPhoto extends IPhoto, React.Props<any> {
  adjustedWidth?: number;
  adjustedHeight?: number;
  margin?: number;
};

export interface IPhotoProps extends IAdjustedPhoto, React.Props<any> {};

export class Photo extends React.Component<IPhotoProps, {}> {

  static defaultProps = {
    width: DEFAULT_PHOTO_WIDTH,
    height: DEFAULT_PHOTO_HEIGHT
  };

  render () {
    let style = {
      width: this.props.adjustedWidth,
      height: this.props.adjustedHeight,
      margin: this.props.margin,
      backgroundImage: `url("${this.props.imageUrl}")`
    };
    return (
      <div className="photo-cover" style={style} >
      </div>
    );
  }
}
