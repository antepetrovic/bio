module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    
    cssmin: {
      target: {
           src: ['css/main.css'],
          dest: 'dist/main.min.css',
          ext: '.min.css'
      }
    },

    uglify: {
      options: {
      mangle: false
      },
      my_target: {
        files: {
          'dist/app.min.js': ['app.js']
          }
        }
    },

      watch: {
          css: {
              files: ['css/main.css'],
              tasks: ['cssmin']
          }

      }


  });

  // Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  // Default task(s).
  grunt.registerTask('default', ['cssmin', 'uglify']);

};


