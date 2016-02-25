
var path = require('path');
var express = require('express');
var server = require('./src/server').default;
var appConfig = require('./src/server/config').default;
var logger = require ('./src/server/utils/logger').default;

server.use('/static/', express.static(path.join(__dirname, 'build')));

server.listen(appConfig.PORT, function (err) {
  if (err) { return logger.error(err); }
  logger.info('Server on %s', appConfig.PORT);
});
