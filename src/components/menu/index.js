
import _ from 'lodash';
import React from 'react';
import MenuItem from '../../components/menu/Item';

export default class Menu extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    items: React.PropTypes.array.isRequired
  };
  render = () => {
    let items = _.map(this.props.items, (item, index) => {
      return (<MenuItem key={`menu-item-${index}`} {...item} />)
    });
    return (
      <div className="menu">
        <div className="header">{ this.props.title }</div>
        <div className="item-list">{ items }</div>
      </div>
    );
  };
};
