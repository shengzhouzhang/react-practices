
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Agent } from '../browser/repositories/Agent';
import { PhotosRepository } from '../browser/repositories/Photos';
import { GirdContainer } from '../components/PhotoGrid/Container';

const BASE_URI = '';
const MENU_PATH = '';

let agent = new Agent(BASE_URI);

function renderMenuView () {
  ReactDOM.render(
    <GirdContainer repository={new PhotosRepository(agent, MENU_PATH)} />,
    document.querySelector('.app-container')
  );
};
