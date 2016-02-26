
import * as dotenv from 'dotenv';

dotenv.load();

const CONFIG = {
  PORT: parseInt(process.env.PORT),
  DEFAULT_SEARCH: process.env.DEFAULT_SEARCH,
  FLICKR_KEY: process.env.FLICKR_KEY,
  TZ: 'Australia/Sydney'
};

console.info('PORT', CONFIG.PORT);
console.info('DEFAULT_SEARCH', CONFIG.DEFAULT_SEARCH);
console.info('FLICKR_KEY', CONFIG.FLICKR_KEY);

export default CONFIG;
