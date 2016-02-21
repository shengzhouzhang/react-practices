
import * as _ from 'lodash';
import * as React from 'react';
import { IMenu } from '../../domains/menu';
import { Menu } from '../../components/menu/Menu';
import { IMenuRepository } from '../../browser/repositories/Menu';

export interface IMenuLoaderProps extends React.Props<any> {
  repository : IMenuRepository;
};

export interface IMenuLoaderState {
  menu?: IMenu;
};

export class MenuLoader extends React.Component<IMenuLoaderProps, IMenuLoaderState> {
  repository: IMenuRepository;

  constructor (props) {
    super(props);
    this.repository = props.repository;
  };

  public render () {
    return (<Menu {...this.state.menu} />);
  };

  public componentDidMount () {
    this.fetchMenu();
  };

  private fetchMenu () {
    return this.repository.fetchMenu().then(menu => {
      this.setState({ menu: menu });
    });
  }
};
