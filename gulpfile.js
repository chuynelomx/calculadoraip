// including plugins
var gulp = require('gulp')
, uglify = require("gulp-uglify");
 
// task
gulp.task('minify-js', function () {
    gulp.src('js/app.js') // path to your files
    .pipe(uglify())
    .pipe(gulp.dest('js/production'));
});

gulp.task('minify-js2', function () {
    gulp.src('js/app2.js') // path to your files
    .pipe(uglify())
    .pipe(gulp.dest('js/production'));
});