'use strict'

module.exports = (grunt) ->
  grunt.initConfig
    coffee:
      options:
        bare: true
      glob_to_multiple:
        expand: true
        cwd: 'coffee/lib/game/'
        src: ['**/*.coffee']
        dest: 'lib/game/'
        ext: '.js'

  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.registerTask 'default', ['coffee']
