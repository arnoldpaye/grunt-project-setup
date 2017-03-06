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
        }
    });
    // Load grunt plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
};

