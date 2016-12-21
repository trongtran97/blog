'use strict';

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');

// Paths
var path = require('../paths');

// Images
gulp.task('images', function() {
  return gulp.src( path.SRC.images + '**/*' )
    // compress
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(notify({ title: 'Done', message: 'Converted Images ✔' }))
    .pipe(gulp.dest( path.DEST.images ))
    .pipe(browserSync.stream());
});
