// Wrapper function
module.exports = function (grunt) {

    // Configure grunt
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Configure jshint to valite js files
        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            // Files to lint
            build: ['Gruntfile.js', 'src/**/*.js']
        },
        // Configure uglify to minify js files
        uglify: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:mm") %> \n*/\n'
            },
            build: {
                files: {
                    'build/js/app.min.js': ['src/js/app.js', 'src/js/test.js']
                }
            }
        },
        // Compile less stylesheet to css
        less: {
            build: {
                files: {
                    'build/css/app.css': 'src/css/app.less'
                }
            }
        },
        // Configure cssmin to minify css files
        cssmin: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:mm") %> \n*/\n'
            },
            build: {
                files: {
                    'build/css/app.min.css': 'build/css/app.css'
                }
            }
        }
    });
    // Load grunt plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Create create task
    grunt.registerTask('default', ['jshint', 'uglify', 'less', 'cssmin']);
};
