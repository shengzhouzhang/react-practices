
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Agent } from '../browser/repositories/Agent';
import { MenuRepository } from '../browser/repositories/Menu';
import { MenuLoader } from '../components/menu/MenuLoader';

const BASE_URI = '';
const MENU_PATH = '';

let agent = new Agent(BASE_URI);

function renderMenuView () {
  ReactDOM.render(
    <MenuLoader repository={new MenuRepository(agent, MENU_PATH)} />,
    document.querySelector('.app-container')
  );
};
