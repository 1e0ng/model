var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    less = require('gulp-less'),
    minify = require('gulp-minify-css'),
    livereload = require('gulp-livereload'),
    del = require('del');

gulp.task('styles', function() {
  return gulp.src('src/*.less')
    .pipe(less())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(concat('main.css'))
    .pipe(minify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('static'));
});

gulp.task('scripts', function() {
  return gulp.src('src/*.js')
    .pipe(concat('main.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('static'));
});

gulp.task('clean', function(cb) {
  del(['static'], cb);
});

gulp.task('default', function() {
  gulp.start('styles', 'scripts');
});

gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch('src/*.less', ['styles']);
  // Watch .js files
  gulp.watch('src/*.js', ['scripts']);
  // Create LiveReload server
  livereload.listen();
  // Watch any files in dist/, reload on change
  gulp.watch(['static/**']).on('change', livereload.changed);
});
