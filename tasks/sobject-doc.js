/*
 * grunt-apex-doc
 * https://github.com/derrek/grunt-apex-doc
 *
 * Copyright (c) 2016 Derrek Harrison
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('sobjectdoc', 'A grunt wrapper for sobject-doc-node.', function() {

    var engine = require('sobject-doc-node');

    // Read in any custom config
    var config = this.data.config;
    if(config) {
      engine.config.addData(config);
    }

    engine.run();
  });

};
