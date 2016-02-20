/// <reference path="../../../src/components/menu/interface.d.ts"/>

import * as _ from 'lodash';
import * as React from 'react';
import MenuItem from '../../components/menu/MenuItem.tsx';

export default class Menu extends React.Component<IMenu, any> {

  public render () {
    let items = _.map(this.props.items, (item, index) => {
      return (<MenuItem key={`menu-item-${index}`} {...item} />)
    });
    return (
      <div className="menu">
        <div className="header">{ this.props.title }</div>
        <div className="item-list">{ items }</div>
      </div>
    );
  }
}
