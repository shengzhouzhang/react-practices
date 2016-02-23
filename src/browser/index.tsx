
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Agent } from '../repositories/Agent';
import { PhotosRepository } from '../repositories/Photos';
import { parse } from '../browser/repositories/photos';
import { GirdContainer } from '../components/PhotoGrid/Container';

const BASE_URI = '';
const MENU_PATH = '';

let agent = new Agent(BASE_URI);

function renderMenuView () {
  let photos = JSON.parse(document.querySelector('.initial-state').innerHTML);
  ReactDOM.render(
    <GirdContainer photos={photos} repository={new PhotosRepository(agent, MENU_PATH, parse)} />,
    document.querySelector('.app-container')
  );
};
