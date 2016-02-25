
import * as React from 'react';
import { IPhoto } from '../../domains/photo';
import CONFIG from '../../browser/config';

export interface IAdjustedPhoto extends IPhoto, React.Props<any> {
  adjustedWidth?: number;
  adjustedHeight?: number;
  margin?: number;
};

export interface IPhotoProps extends IAdjustedPhoto, React.Props<any> {};

export class Photo extends React.Component<IPhotoProps, {}> {

  static defaultProps = {
    width: CONFIG.PHOTO_DEFAULT_WIDTH,
    height: CONFIG.PHOTO_DEFAULT_HEIGHT
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
