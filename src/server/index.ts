
import * as path from 'path';
import * as express from 'express';
import * as handlebars from 'express-handlebars';
import APP_CONFIG from './config';
import { Agent } from '../repositories/Agent';
import { PhotosRepository } from '../repositories/Photos';
import { parse } from '../server/repositories/photos';
import PhotoAppController from '../server/controllers/apps/photos';

let agent = new Agent('http://api.flickr.com');
let photosRepository = new PhotosRepository(agent, '/services/feeds/photos_public.gne?format=json&nojsoncallback=1', parse);

let server = express();

server.engine('handlebars', handlebars());

server.set('view engine', 'handlebars');
server.set('views', path.join(__dirname, 'templates'));


server.use('/', new PhotoAppController(photosRepository).route);

server.listen(APP_CONFIG.PORT, function () {
  console.log('Server on %s', APP_CONFIG.PORT);
});
