
import * as _ from 'lodash';
import * as React from 'react';
import { IPhotos, IPhoto } from '../../domains/photo';
import { Grid } from '../../components/PhotoGrid/Grid';
import { IPhotosRepository } from '../../browser/repositories/Photos';

export interface IGirdContainerProps extends IPhotos, React.Props<any> {
  repository: IPhotosRepository;
};

export interface IGirdContainerState extends IPhotos {};

export class GirdContainer extends React.Component<IGirdContainerProps, IGirdContainerState> {
  repository: IPhotosRepository;

  constructor (props) {
    super(props);
    this.repository = props.repository;
    this.state = {
      title: this.props.title,
      items: this.props.items
    };
  };

  render () {
    return (<Grid {...this.state} />);
  };

  componentDidMount () {
  };

  private fetchPhotos = () => {
    return this.repository.fetchPhotos().then(photos => {
      this.setState({
        title: photos.title,
        items: photos.items
      });
    });
  }
};
