
import * as _ from 'lodash';
import * as React from 'react';
import * as MenuItem from '../../components/menu/MenuItem';
import { IMenu, IMenuItem } from '../../domains/menu';

export interface IMenuProps extends IMenu, React.Props<any> {};

export class Menu extends React.Component<IMenuProps, any> {

  public render () {
    let items = _.map(this.props.items, (item, index) => {
      return (<MenuItem.MenuItem key={`menu-item-${index}`} {...item} />)
    });
    return (
      <div className="menu">
        <div className="header">{ this.props.title }</div>
        <div className="item-list">{ items }</div>
      </div>
    );
  };
};
