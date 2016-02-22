
var gulp = require("gulp");
var babel = require('gulp-babel');
var rimraf = require('gulp-rimraf');

gulp.task('clean', function() {
 return gulp.src([ 'src/**/*.js', 'specs/**/*.js' ], { read: false })
   .pipe(rimraf({ force: true }));
});
