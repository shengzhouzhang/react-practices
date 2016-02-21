
import * as _ from 'lodash';
import * as Promise from 'bluebird';
import { IMenu, IMenuItem } from '../../domains/menu';
import { IAgent } from '../../browser/repositories/Agent';

export default class MenuRepository {
  agent: IAgent;

  constructor(agent: IAgent) {
    this.agent = agent;
  };

  public responseEntityToMenu (entity: any = {}): IMenu {
    return {
      title: entity.title,
      items: _.map(entity.items, (item: any): IMenuItem => {
        return { name: item.name, imageUrl: item.imageUrl };
      })
    };
  };

  public fetchMenu(uri: string): Promise<IMenu> {
    return this.agent.request('GET', uri)
      .then(entity => this.responseEntityToMenu(entity));
  };
};
