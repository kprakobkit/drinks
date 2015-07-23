var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT });
var livereloadMiddleware = function (connect, options) {
  return [
    lrSnippet,
    connect.static(options.base[0]),
    connect.directory(options.base[0])
  ];
};

module.exports = function(grunt) {
  grunt.initConfig({
    distFolder: 'dist',
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      client: {
        options: {
          port: 9000,
          base:'app/',
          middleware: livereloadMiddleware
        }
      }
    },
    watch: {
      client: {
        files: ['app/**/*'],
        tasks:[],
        options: {
          livereload:LIVERELOAD_PORT
        }
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('preview', ['connect:client','watch:client']);
};
