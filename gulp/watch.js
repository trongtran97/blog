'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

// Paths
var path = require('./paths');

// Watch
gulp.task('watch', function() {
  
  // Watch HTML
  gulp.watch( path.DEST.templates + '**/*.html').on('change', browserSync.reload);
   // Watch Sass
  gulp.watch( path.SRC.styles + '**/*.{scss,sass}', ['styles']);
  
  // Watch JS
  gulp.watch( path.SRC.scripts + '**/*.js', ['scripts']);
  // Watch Images
  gulp.watch( path.SRC.images + '*/**', ['images']);
});
