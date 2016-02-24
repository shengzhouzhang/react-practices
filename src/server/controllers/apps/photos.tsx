
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { GirdContainer } from '../../../components/PhotoGrid/Container';
import { IPhotosRepository } from '../../../server/repositories/Photos';
import logger from '../../../server/utils/logger';

export default class PhotoAppController {
  photosRepository: IPhotosRepository;

  constructor(photosRepository: IPhotosRepository) {
    this.photosRepository = photosRepository;
  };

  route = (req, res) => {
    let tag = req.params.tag;
    if (!tag) { return res.status(400).send({ message: 'missing tag' }); }

    this.photosRepository.fetchPhotos(tag)
      .then(photos => {
        res.render('index', {
          html: ReactDOMServer.renderToString(<GirdContainer photos={photos} repository={null} />),
          data: JSON.stringify(photos)
        });
      })
      .catch(error => {
        logger.error(error);
        return res.status(500).send({ message: error.message });
      });
  };
};
