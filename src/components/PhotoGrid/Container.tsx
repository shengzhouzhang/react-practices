
import * as _ from 'lodash';
import * as React from 'react';
import { IPhotos } from '../../domains/photo';
import { Grid } from '../../components/PhotoGrid/Grid';
import { IPhotosRepository } from '../../repositories/Photos';

export interface IGirdContainerProps extends React.Props<any> {
  photos: IPhotos;
  repository: IPhotosRepository;
};

export interface IGirdContainerState {
  photos?: IPhotos;
};

export class GirdContainer extends React.Component<IGirdContainerProps, IGirdContainerState> {
  repository: IPhotosRepository;

  constructor (props) {
    super(props);
    this.repository = props.repository;
    this.state.photos = this.props.photos;
  };

  public render () {
    return (<Grid {...this.state.photos} />);
  };

  public componentDidMount () {
    this.fetchPhotos();
  };

  private fetchPhotos () {
    return this.repository.fetchPhotos().then(photos => {
      this.setState({ photos: photos });
    });
  }
};
