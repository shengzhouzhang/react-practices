
import * as React from 'react';
import { IPhoto } from '../../domains/photo';

export interface IPhotoProps extends IPhoto, React.Props<any> {};

export class Photo extends React.Component<IPhotoProps, {}> {

  static defaultProps = {
    width: '300px',
    height: '300px'
  };

  render () {
    let style = {
      width: this.props.width,
      height: this.props.height,
      backgroundImage: `url("${this.props.imageUrl}")`
    };
    return (
      <div className="photo-cover" style={style} >
      </div>
    );
  }
}
