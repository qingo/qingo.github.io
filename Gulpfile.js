var gulp = require('gulp'),
    blog = require('gulp-blog'),
    md = require('gulp-markdown'),
    fix = require('gulp-fix'),
    fs = require('fs');

gulp.task('page', function () {
  gulp.src('./src/page/**/*.md')
      .pipe(md())
      .pipe(blog())
      .pipe(fix(fs.readFileSync('./config/qingo.prefix', 'utf8'), fs.readFileSync('./config/qingo.suffix', 'utf8'), null, null, ['json']))
      .pipe(gulp.dest('www'))
});
