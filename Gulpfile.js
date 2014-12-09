var gulp = require('gulp'),
    blog = require('gulp-blog'),
    rename = require('gulp-rename');

gulp.task('page', function () {
  gulp.src('./src/page/**/*.md')
      .pipe(blog())
      .pipe(rename({extname: ".html"}))
      .pipe(gulp.dest('www'))
});