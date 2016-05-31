var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    less = require('gulp-less'),
    minify = require('gulp-minify-css');

gulp.task('default', function() {
  gulp.src('src/*.js')
                 .pipe(concat('main.js'))
                 .pipe(rename({suffix: '.min'}))
                 .pipe(uglify())
                 .pipe(gulp.dest('static'))
                 .pipe(notify({ message: 'Scripts task complete' }));

  gulp.src('src/*.less')
                 .pipe(less())
                 .pipe(concat('main.css'))
                 .pipe(minify())
                 .pipe(rename({suffix: '.min'}))
                 .pipe(gulp.dest('static'))
                 .pipe(notify({ message: 'Less task complete.' }));
});
