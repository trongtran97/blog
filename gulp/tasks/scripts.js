'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserSync = require('browser-sync');

// Paths
var path = require('../paths');

// App
gulp.task('scripts', function() {
  return browserify( path.SRC.scripts + 'index.js' )
    // browserify
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest( path.DEST.scripts ))
    .pipe(buffer())
    // uglify
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest( path.DEST.scripts ))
    .pipe(notify({ title: 'Done', message: 'Converted JS ✔ (<%= file.relative %>)' }))
    .pipe(browserSync.stream());
});