/// <reference path="../../../typings/dotenv/dotenv.d.ts"/>

import * as dotenv from 'dotenv';

dotenv.load();

const CONFIG = {
  PORT: 8080,
  FLICKR_KEY: process.env.FLICKR_KEY,
  FLICKR_SECRET: process.env.FLICKR_SECRET,
  TZ: 'Australia/Sydney'
};

export default CONFIG;
