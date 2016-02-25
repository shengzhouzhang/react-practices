
import * as express from 'express';

export interface IController {
  getRouter(): express.Router;
};

export class BaseController implements IController {
  router: express.Router;

  constructor () {
    this.router = express.Router();
  }

  getRouter = () => {
    return this.router;
  };
};
