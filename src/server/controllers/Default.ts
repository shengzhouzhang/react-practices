
import logger from '../../server/utils/logger';

export default class DefaultController {
  path: string;

  constructor(path: string) {
    this.path = path;
  };

  route = (req, res) => {
    logger.info(`redirect to ${this.path}`);
    res.redirect(this.path);
  };
};
