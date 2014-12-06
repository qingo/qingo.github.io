var gulp = require('gulp'),
    blog = require('gulp-blog');

gulp.task('page', function () {
  gulp.src('./src/page/**/*.md')
      .pipe(blog())
      .pipe(gulp.dest('www'))
});