// Wrapper function
module.exports = function (grunt) {

    // Configure grunt
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });
    // Load grunt plugins
    grunt.loadNpmTask('grunt-contrib-jshint');
    grunt.loadNpmTask('grunt-contrib-uglify');
    grunt.loadNpmTask('grunt-contrib-less');
    grunt.loadNpmTask('grunt-contrib-cssmin');
    grunt.loadNpmTask('grunt-contrib-watch');
};

