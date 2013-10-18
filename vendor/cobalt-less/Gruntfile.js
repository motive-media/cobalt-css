"use strict";

module.exports = function (grunt) {
    // Load all grunt tasks
    require("matchdep").filter("grunt-*").forEach(grunt.loadNpmTasks);

    // Initialize grunt
    grunt.initConfig({
        pkg: grunt.file.readJSON("bower.json"),

        // Less
        less: {
            test: {
                options: {
                    yuicompress: false
                },
                files: {
                    "test/style.css" : "test/style.less"
                }
            }
        },

        // Lint Less
        lesslint: {
            test: {
                src: ["cobalt.less"]
            }
        },

        // CSS Lint
        csslint: {
            options: {
                "ids": false,
                "duplicate-properties": false
            },
            test: {
                src: ["test/**/*.css"]
            }
        }
    });

    // Setup default tasks
    grunt.registerTask("default", [
        "less"
    ]);

    // Create build for test files
    grunt.registerTask("test", [
        "lesslint:test",
        "less:test",
        "csslint:test"
    ]);
};
