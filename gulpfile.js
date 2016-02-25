
var gulp = require("gulp");
var rimraf = require('gulp-rimraf');
var sass = require('gulp-sass');
var gutil = require("gulp-util");
var runSequence = require('run-sequence');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

gulp.task('clean', function() {
 return gulp.src([ 'src/**/*.js', 'specs/**/*.js', 'build' ], { read: false })
   .pipe(rimraf({ force: true }));
});

gulp.task('sass', function () {
  return gulp.src('./src/browser/style/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/'));
});

gulp.task("webpack", function (callback) {
  webpack(webpackConfig, function (err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString());
    callback();
  });
});

gulp.task('build', function() {
  runSequence('clean', 'sass', 'webpack');
});
