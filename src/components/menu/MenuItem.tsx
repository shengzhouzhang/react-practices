/// <reference path="../../../src/components/menu/interface.d.ts"/>

import * as React from 'react';

export default class MenuItem extends React.Component<IMenuItem, {}> {

  public render () {
    return (
      <div className="menu-item">
        <img className="image-cover" src={ this.props.imageUrl } />
        <span className="name">{ this.props.name }</span>
      </div>
    );
  }
}
