
var server = require('./src/server').default;
var webpack = require('webpack');
var WebpackDevMiddleware = require('webpack-dev-middleware');
var WebpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('./webpack.config');
var appConfig = require('./src/server/config').default;
var logger = require ('./src/server/utils/logger').default;
var compiler = webpack(webpackConfig);

server.use(WebpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
server.use(WebpackHotMiddleware(compiler, { log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000 }));

server.listen(appConfig.PORT, function (err) {
  if (err) { return logger.error(err); }
  logger.info('Server on %s', appConfig.PORT);
});
