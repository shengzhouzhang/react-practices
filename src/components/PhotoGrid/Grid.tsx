
import * as _ from 'lodash';
import * as React from 'react';
import * as GridItem from '../../components/PhotoGrid/GridItem';
import { IPhotos, IPhoto } from '../../domains/photo';

export interface IGridProps extends IPhotos, React.Props<any> {};

export class Grid extends React.Component<IGridProps, any> {

  render () {
    let items = _.map(this.props.items, (item, index) => {
      return (<GridItem.Photo key={`grid-item-${index}`} {...item} />)
    });
    return (
      <div className="photos">
        <div className="header">{ this.props.title }</div>
        <div className="photo-list">{ items }</div>
      </div>
    );
  };
};

// /services/rest?extras=can_comment%2Ccount_comments%2Ccount_faves%2Cdescription%2Cisfavorite%2Clicense%2Cmedia%2Cneeds_interstitial%2Cowner_name%2Cpath_alias%2Crealname%2Crotation%2Curl_c%2Curl_l%2Curl_m%2Curl_n%2Curl_q%2Curl_s%2Curl_sq%2Curl_t%2Curl_z&per_page=50&page=2&date=2016-02-23&viewerNSID=138755656%40N06&method=flickr.interestingness.getList&csrf=1456338411%3Al2coq3tro6hqto6r%3Adaf5344b8a5f2e2931fefb71990ff2a7&api_key=5cc4133a5f7ce2dead7e293b4505c4b3&format=json&hermes=1&hermesClient=1&reqId=d08d073d&nojsoncallback=1
