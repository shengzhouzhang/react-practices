
import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as handlebars from 'express-handlebars';
import { ROUTES } from '../config';
import APP_CONFIG from '../server/config';
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

server.use(ROUTES.PhotoAPP, new PhotoAppController(photosRepository).getRouter());

export default server;
