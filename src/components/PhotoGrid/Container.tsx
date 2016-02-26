
import * as _ from 'lodash';
import * as React from 'react';
import * as Immutable from 'immutable';
import { IPhotos, IPhoto } from '../../domains/photo';
import { Grid } from '../../components/PhotoGrid/Grid';
import { IPhotosRepository } from '../../browser/repositories/Photos';

export interface IGirdContainerProps extends React.Props<any> {
  photos: IPhotos;
  repository: IPhotosRepository;
};

export interface IGirdContainerState {
  photos: Immutable.List<IPhoto>;
};

export class GirdContainer extends React.Component<IGirdContainerProps, IGirdContainerState> {
  repository: IPhotosRepository;

  constructor (props) {
    super(props);
    this.repository = props.repository;
    this.state = { photos: Immutable.List(this.props.photos.items) };
  };

  render () {
    return (<Grid title={this.props.photos.title} items={this.state.photos} />);
  };

  componentDidMount () {
  };

  private fetchPhotos = () => {
    return this.repository.fetchPhotos().then(photos => {
      this.setState({ photos: Immutable.List(photos.items) });
    });
  }
};
