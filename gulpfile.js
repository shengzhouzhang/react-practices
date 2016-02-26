
var gulp = require("gulp");
var rimraf = require('gulp-rimraf');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var gutil = require("gulp-util");
var webpack = require('webpack');
var runSequence = require('run-sequence');

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
  webpack({
    entry: [ './dist/src/browser/index.js' ],
    evtool: '#source-map',
    output: {
      path: './dist/assets',
      filename: "bundle.js"
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({ minimize: true })
    ]
  }, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    callback();
  });
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
