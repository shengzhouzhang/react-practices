
import * as _ from 'lodash';
import * as React from 'react';
import * as GridItem from '../../components/PhotoGrid/GridItem';
import { IPhotos, IPhoto } from '../../domains/photo';

export interface IGridProps extends IPhotos, React.Props<any> {};

export class Grid extends React.Component<IGridProps, any> {

  render () {
    let items = _.map(this.props.items, (item, index) => {
      return (<GridItem.Photo key={`menu-item-${index}`} {...item} />)
    });
    return (
      <div className="menu">
        <div className="header">{ this.props.title }</div>
        <div className="item-list">{ items }</div>
      </div>
    );
  };
};
