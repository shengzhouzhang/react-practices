
import * as React from 'react';

export interface IMenuItemProps extends React.Props<any> {
  key?: string,
  name: string,
  imageUrl: string
}

export class MenuItem extends React.Component<IMenuItemProps, {}> {

  public render () {
    return (
      <div className="menu-item">
        <img className="image-cover" src={ this.props.imageUrl } />
        <span className="name">{ this.props.name }</span>
      </div>
    );
  }
}
