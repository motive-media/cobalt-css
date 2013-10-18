"use strict";

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("bower.json"),

        urlBase: '.',
        urlBuild: '<%= urlBase %>/build',

        clean: {
            build: "build"
        },

        less: {
            dev: {
                files: {
                    "<%= urlBuild %>/cobalt.css": "build.less"
                }
            },
            production: {
                options: {
                    yuicompress: true,
                    report: "gzip"
                },
                files: {
                    "<%= urlBuild %>/cobalt.min.css": "build.less"
                }
            }
        },

        watch: {
            build: {
                files: ["*.less", "less/**/*.less"],
                tasks: ["clean", "less"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
};
