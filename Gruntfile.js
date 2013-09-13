"use strict";

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("bower.json"),

        less: {
            dev: {
                files: {
                    "cobalt.css": "cobalt.less"
                }
            },
            production: {
                options: {
                    yuicompress: true,
                    report: 'gzip'
                },
                files: {
                    "cobalt.min.css": "cobalt.less"
                }
            }
        },

        watch: {
            build: {
                files: ['cobalt.less', 'less/**/*.less'],
                tasks: ['less']
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
};
