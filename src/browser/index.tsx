
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Immutable from 'immutable';
import { ROUTES } from '../config';
import { Agent } from '../browser/repositories/Agent';
import { PhotosRepository } from '../browser/repositories/Photos';
import { GirdContainer } from '../components/PhotoGrid/Container';
import * as Utils from '../browser/utils/photos';

let agent = new Agent();

function renderMenuView () {
  let data = JSON.parse(document.querySelector('.initial-state').innerHTML);
  ReactDOM.render(
    <GirdContainer {...Utils.parsePhotos(data)} repository={new PhotosRepository(agent, ROUTES.PhotoAPI)} />,
    document.querySelector('.app-container')
  );
};

document.addEventListener("DOMContentLoaded", function(event) {
  renderMenuView();
});
