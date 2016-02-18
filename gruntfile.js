module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'gh-pages': {
      options: {
        base: 'public'
      },
      src: ['**']
    },
    autoprefixer: {
      main: {
        options: ['>1% in US'],
        src: 'public/css/main.css'
      }
    },
    babel: {
      dev: {
        options: {
          sourceMap: 'inline'
        },
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**/*.js'],
            dest: 'public/'
          }
        ]
      },
      prod: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**/*.js'],
            dest: 'public/'
          }
        ]
      }
    },
    bower_concat: {
      main: {
        dest: 'public/lib/build.js',
        cssDest: 'public/lib/build.css',
        mainFiles: {
          bootstrap: [ 'dist/css/bootstrap.min.css', 'dist/js/bootstrap.min.js' ]
        }
      }
    },
    clean: ['public'],
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: [
              '**',
              'img/**/*',
              'font-awesome/**/*',
              'fonts/**/*',
              '!**/*.jade',
              '!css/**/*',
              '!scripts/**/*'
            ],
            dest: 'public/',
            filter: 'isFile'
          }
        ]
      }
    },
    cssmin: {
      main: {
        files: {
          'public/css/landing-page.css': 'public/css/landing-page.css'
        }
      }
    },
    jade: {
      dev: {
        options: {
          pretty: true
        },
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**/*.jade', '!**/_*.jade'],
            dest: 'public/',
            ext: '.html'
          }
        ]
      },
      prod: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**/*.jade', '!**/_*.jade'],
            dest: 'public/',
            ext: '.html'
          }
        ]
      }
    },
    sass: {
      prod: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'public/css/landing-page.css': 'src/css/landing-page.scss'
        }
      },
      dev: {
        options: {
          sourceMap: true,
          sourceMapEmbed: true
        },
        files: {
          'public/css/landing-page.css': 'src/css/landing-page.scss'
        }
      }
    },
    uglify: {
      bower: {
        files: {
          'public/lib/build.js': 'public/lib/build.js'
        }
      },
      main: {
        files: [
          {
            expand: true,
            cwd: 'public/',
            src: ['**/*.js'],
            dest: 'public/'
          }
        ]
      }
    },
    watch: {
      livereload: {
        options: {
          livereload: true
        },
        files: [
          'public/css/landing-page.css',
          'public/scripts/**/*.js',
          'public/**/*.html'
        ]
      },
      jade: {
        files: ['src/**/*.jade'],
        tasks: ['jade:dev']
      },
      sass: {
        files: ['src/**/*.scss'],
        tasks: ['sass:dev', 'autoprefixer']
      },
      js: {
        files: ['src/**/*.js'],
        tasks: ['babel:dev']
      }
    },
    nodemon: {
      dev: {
        script: 'app.js'
      }
    },
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      tasks: ['watch']
    },
    connect: {
      main: {
        options: {
          port: 8080,
          base: 'public/',
          open: false,
          livereload: true
        }
      }
    }
  });

  grunt.registerTask('build', [
    'clean',
    'copy',
    'babel:prod',
    'bower_concat',
    'jade:prod',
    'sass:prod',
    'autoprefixer',
    'uglify',
    'cssmin'
  ]);
  grunt.registerTask('build-dev', [
    'clean',
    'copy',
    'sass:dev',
    'babel:dev',
    'bower_concat',
    'jade:dev',
    'autoprefixer'
  ]);

  grunt.registerTask('serve', [
    'build-dev',
    'connect',
    'watch'
  ]);

  grunt.registerTask('host', [
    'build-dev',
    'gh-pages'
  ]);



};