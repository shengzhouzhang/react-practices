
import * as React from 'react';
import { IMenuItem } from '../../domains/menu';

export interface IMenuItemProps extends IMenuItem, React.Props<any> {};

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
