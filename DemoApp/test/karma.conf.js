module.exports = function (config) {
    config.set({

        basePath: '../app',


         preprocessors: {
            '**/*.html': 'ng-html2js'
        },

        files: [
            'lib/angular/angular.js',
            'lib/angular/angular-*.js',
            '../test/lib/angular-mocks.js',
            '../test/lib/sinon-1.10.2.js',
            'js/**/*.js',
            '../test/unit/**/*.js',
            'partials/directives/*.html',

        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-ng-html2js-preprocessor'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};