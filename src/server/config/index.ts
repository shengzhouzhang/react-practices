
const CONFIG = {
  PORT: parseInt(process.env.PORT) || 8080,
  FLICKR_KEY: process.env.FLICKR_KEY,
  TZ: 'Australia/Sydney'
};

console.info('PORT', CONFIG.PORT);
console.info('FLICKR_KEY', CONFIG.FLICKR_KEY);

export default CONFIG;
