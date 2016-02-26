
import * as express from 'express';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { GirdContainer } from '../../../components/PhotoGrid/Container';
import { IPhotosRepository } from '../../../server/repositories/Photos';
import { BaseController } from '../../../server/controllers/interface';
import CONFIG from '../../../server/config';
import logger from '../../../server/utils/logger';

export default class PhotoAppController extends BaseController {
  photosRepository: IPhotosRepository;

  constructor(photosRepository: IPhotosRepository) {
    super();
    this.photosRepository = photosRepository;
    this.router.get('/:tag', this.search);
    this.router.get('/', this.getRecent);
  };

  search = (req, res) => {
    let searchTag = req.params.tag;

    this.photosRepository.search(searchTag)
      .then(photos => {
        res.render('index', {
          html: ReactDOMServer.renderToString(<GirdContainer {...photos} repository={null} />),
          data: JSON.stringify(photos)
        });
      })
      .catch(error => {
        logger.error(error);
        return res.status(500).send({ message: error.message });
      });
  };

  getRecent = (req, res) => {

    this.photosRepository.getRecent()
      .then(photos => {
        res.render('index', {
          html: ReactDOMServer.renderToString(<GirdContainer {...photos} repository={null} />),
          data: JSON.stringify(photos)
        });
      })
      .catch(error => {
        logger.error(error);
        return res.status(500).send({ message: error.message });
      });
  };
};
