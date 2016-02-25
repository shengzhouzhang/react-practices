/// <reference path="../../typings/body-parser/body-parser.d.ts"/>
/// <reference path="../../typings/express-handlebars/express-handlebars.d.ts"/>
/// <reference path="../../typings/webpack/webpack.d.ts"/>

import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as handlebars from 'express-handlebars';
import APP_CONFIG from './config';
import APP_ROUTES from '../routes';
import { Agent } from '../server/repositories/Agent';
import { PhotosRepository } from '../server/repositories/Photos';
import PhotoAppController from '../server/controllers/apps/Photos';
import logger from '../server/utils/logger';

let agent = new Agent('https://api.flickr.com/services/rest/?', APP_CONFIG.FLICKR_KEY);
let photosRepository = new PhotosRepository(agent);

let server = express();

server.engine('handlebars', handlebars());

server.set('view engine', 'handlebars');
server.set('views', path.join(__dirname, 'templates'));

server.use(bodyParser.json());

server.use(APP_ROUTES.PhotoAPP, new PhotoAppController(photosRepository).getRouter());

export default server;
