
import * as _ from 'lodash';
import * as Promise from 'bluebird';
// import * as _request from 'request';

export interface IAgent {
  request(method: string, path: string, headers?: any): Promise<any>
};

export class Agent implements IAgent {
  baseUri: string;

  constructor (baseUri: string) {
    this.baseUri = baseUri;
  };

  request = (method: string, path: string, headers?: any): Promise<any> => {
    let options = {
      method: method,
      uri: `${this.baseUri}${path}`,
      headers: _.merge({ 'Content-Type': 'application/json' }, headers)
    };
    return new Promise<any>((resolve, reject) => {
      // _request(options, (error: any, response: any, body: any) => {
      //   if (error) {
      //     return reject(new Error(error.message));
      //   } else if (response && response.statusCode !== 200) {
      //     return reject(new Error(`${response.statusCode}: ${JSON.stringify(body)}`));
      //   } else {
      //     return resolve(body);
      //   }
      // });
    });
  };
};
