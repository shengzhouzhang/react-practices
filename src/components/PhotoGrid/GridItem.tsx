
import * as React from 'react';
import { IPhoto } from '../../domains/photo';

export interface IPhotoProps extends IPhoto, React.Props<any> {};

export class Photo extends React.Component<IPhotoProps, {}> {

  render () {
    return (
      <div className="grid-item">
        <img className="photo-cover" src={ this.props.imageUrl } />
        <span className="name">{ this.props.name }</span>
      </div>
    );
  }
}
