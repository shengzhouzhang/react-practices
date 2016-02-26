
var gulp = require("gulp");
var rimraf = require('gulp-rimraf');
var sass = require('gulp-sass');
var webpack = require('webpack-stream');
var ts = require('gulp-typescript');
var runSequence = require('run-sequence');
var webpackConfig = require('./webpack.config');

gulp.task('clean', function() {
 return gulp.src([ 'src/**/*.js', 'specs/**/*.js', 'src/**/*.js.map', 'dist' ], { read: false })
   .pipe(rimraf({ force: true }));
});

gulp.task('html', function () {
  return gulp.src('src/server/templates/*.handlebars')
    .pipe(gulp.dest('dist/src/server/templates'));
});

gulp.task('sass', function () {
  return gulp.src('./src/browser/style/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/assets'));
});

gulp.task("webpack", function (callback) {
  return gulp.src('./dist/src/browser/index.js')
  .pipe(webpack(webpackConfig))
  .pipe(gulp.dest('dist/assets'));
});

gulp.task('typescript', function () {
  var tsProject = ts.createProject('tsconfig.json');
  var tsResult = tsProject.src()
		.pipe(ts(tsProject));
	return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('build', function() {
  runSequence('clean', [ 'html', 'sass', 'typescript' ], 'webpack');
});
