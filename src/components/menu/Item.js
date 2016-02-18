
import React from 'react';

export default class MenuItem extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    imageUrl: React.PropTypes.string.isRequired
  };
  render = () => {
    return (
      <div className="menu-item">
        <img className="image-cover" src={ this.props.imageUrl } />
        <span className="name">{ this.props.name }</span>
      </div>
    );
  };
};
