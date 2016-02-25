
var gulp = require("gulp");
var rimraf = require('gulp-rimraf');

gulp.task('clean', function() {
 return gulp.src([ 'src/**/*.js', 'specs/**/*.js' ], { read: false })
   .pipe(rimraf({ force: true }));
});
