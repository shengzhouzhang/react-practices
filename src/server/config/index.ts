/// <reference path="../../../typings/dotenv/dotenv.d.ts"/>

import * as dotenv from 'dotenv';

if (process.env.DOTENV) { dotenv.load(); }

const CONFIG = {
  PORT: parseInt(process.env.PORT),
  FLICKR_KEY: process.env.FLICKR_KEY,
  TZ: 'Australia/Sydney'
};

export default CONFIG;
