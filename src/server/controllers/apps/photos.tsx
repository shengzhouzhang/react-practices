
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { GirdContainer } from '../../../components/PhotoGrid/Container';
import { IPhotosRepository } from '../../../repositories/Photos';

export default class PhotoAppController {
  photosRepository: IPhotosRepository;

  constructor(photosRepository: IPhotosRepository) {
    this.photosRepository = photosRepository;
  };

  route = (req, res) => {
    this.photosRepository.fetchPhotos()
      .then(photos => {
        res.render('index', {
          html: ReactDOMServer.renderToString(<GirdContainer photos={photos} repository={this.photosRepository} />),
          data: JSON.stringify(photos)
        });
      })
      .catch(error => {
        console.error(error);
        return res.status(500).send({ message: error.message });
      });
  };
};
