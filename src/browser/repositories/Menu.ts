
import * as _ from 'lodash';
import * as Promise from 'bluebird';
import { IMenu, IMenuItem } from '../../domains/menu';
import { IAgent } from '../../browser/repositories/Agent';

export interface IMenuRepository {
  responseEntityToMenu (entity: any): IMenu;
  fetchMenu(): Promise<IMenu>;
};

export class MenuRepository implements IMenuRepository {
  agent: IAgent;
  path: string;

  constructor(agent: IAgent, path: string) {
    this.agent = agent;
    this.path = path;
  };

  public responseEntityToMenu (entity: any = {}): IMenu {
    return {
      title: entity.title,
      items: _.map(entity.items, (item: any): IMenuItem => {
        return { name: item.name, imageUrl: item.imageUrl };
      })
    };
  };

  public fetchMenu(): Promise<IMenu> {
    return this.agent.request('GET', this.path)
      .then(entity => this.responseEntityToMenu(entity));
  };
};
