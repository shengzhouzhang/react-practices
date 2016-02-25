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
import { PhotosRepository } from '../server/repositories/Photos-1';
import PhotoAppController from '../server/controllers/apps/photos';
import logger from '../server/utils/logger';

let agent = new Agent('https://api.flickr.com/services/rest/?', APP_CONFIG.FLICKR_KEY);
let photosRepository = new PhotosRepository(agent, `flickr.photos.search`);

let server = express();

server.engine('handlebars', handlebars());

server.set('view engine', 'handlebars');
server.set('views', path.join(__dirname, 'templates'));

server.use(bodyParser.json());

server.use(APP_ROUTES.PhotoAPP, new PhotoAppController(photosRepository).route);

export default server;

// server.listen(APP_CONFIG.PORT, function () {
//   logger.info('Server on %s', APP_CONFIG.PORT);
// });
