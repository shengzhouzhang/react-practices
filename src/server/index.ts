
import * as express from 'express';
import APP_CONFIG from './config';
import { Agent } from '../repositories/Agent';
import { PhotosRepository } from '../repositories/Photos';
import { parse } from '../server/repositories/Photos';
import PhotoAppController from '../server/controllers/apps/photos';

let agent = new Agent('http://api.flickr.com');
let photosRepository = new PhotosRepository(agent, '/services/feeds/photos_public.gne?jsoncallback=?', parse);
let photoAppController = new PhotoAppController(photosRepository);

let server = express();

server.use('/', photoAppController.route);

server.listen(APP_CONFIG.PORT, function () {
  console.log('Server on %s', APP_CONFIG.PORT);
});
