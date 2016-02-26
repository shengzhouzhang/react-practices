
var path = require('path');
var express = require('express');
var server = require('./dist/src/server').default;
var appConfig = require('./dist/src/server/config').default;
var logger = require ('./dist/src/server/utils/logger').default;

server.use('/assets/', express.static(path.join(__dirname, 'dist', 'assets')));

server.listen(appConfig.PORT, function (err) {
  if (err) { return logger.error(err); }
  logger.info('Server on %s', appConfig.PORT);
});
