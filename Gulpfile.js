var gulp = require('gulp'),
    blog = require('gulp-blog'),
    md = require('gulp-markdown'),
    header = require('gulp-header'),
    footer = require('gulp-footer'),
    fs = require('fs'),
    through = require('through2');

gulp.task('page', function () {
  gulp.src('./src/page/**/*.md')
      .pipe(md({
      }))
      .pipe(blog())
      .pipe(header(fs.readFileSync('./config/qingo.prefix', 'utf8')))
      .pipe(footer(fs.readFileSync('./config/qingo.suffix', 'utf8')))
      .pipe(gulp.dest('www'))
});