
import * as _ from 'lodash';
import * as Promise from 'bluebird';
import * as _request from 'request';
import logger from '../../server/utils/logger';

export interface IAgent {
  request(method: string, path: string, headers?: any): Promise<any>
};

export class Agent implements IAgent {
  baseUri: string;
  apiKey: string;

  constructor (baseUri: string, apiKey: string) {
    this.baseUri = baseUri;
    this.apiKey = apiKey;
  };

  request = (method: string, path: string, headers?: any): Promise<any> => {
    let options = {
      method: method,
      uri: `${this.baseUri}${path}&api_key=${this.apiKey}&format=json&nojsoncallback=1`,
      headers: _.merge({ 'Content-Type': 'application/json' }, headers)
    };
    
    logger.info('request', JSON.stringify(options));

    return new Promise<any>((resolve, reject) => {
      _request(options, (error: any, response: any, body: any) => {
        if (error) {
          return reject(new Error(error.message));
        } else if (response && response.statusCode !== 200) {
          return reject(new Error(`${response.statusCode}: ${JSON.stringify(body)}`));
        } else {
          return resolve(body);
        }
      });
    });
  };
};
