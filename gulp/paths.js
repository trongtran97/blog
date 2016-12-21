'use strict';

// Base paths
var src  = 'dev/';
var dest = 'www/';

module.exports = {

  serve: dest,

  SRC: { // Source paths
    templates: src + 'views/',
    styles: src + 'styles/',
    scripts: src + 'scripts/',
    images: src + 'images/'
  },


  DEST: { // Destination paths
    templates: dest + '',
    styles: dest + 'css/',
    scripts: dest + 'js/',
    images: dest + 'assets/img/'
  }
};
