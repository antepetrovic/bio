module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'scss/main.css': 'scss/main.scss',
        }
      }
    },
    
    cssmin: {
      target: {
           src: ['scss/main.css'],
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
        'dist/app.min.js': ['dist/built.js']
        }
      }
    },

    concat: {
        options: {
            separator: ';'
        },
        dist: {
            src: ['bioenergija.js', 'app.js'],
            dest: 'dist/built.js'
        }
    },

    watch: {
      css: {
          files: ['scss/*.scss', 'app.js'],
          tasks: ['sass', 'cssmin', 'concat', 'uglify']
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', 'watch');
};


