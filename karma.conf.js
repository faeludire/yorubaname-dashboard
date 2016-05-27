module.exports = function (config) {

    config.set({
        frameworks: ['jasmine'],
        basePath: '',
        browsers: ['PhantomJS'],
        //browsers: ['Chrome'],
        logLevel: config.LOG_DEBUG,
        plugins: ['karma-jasmine', 'karma-phantomjs-launcher'],
        //plugins: ['karma-jasmine', 'karma-chrome-launcher'],
        ngHtml2JsPreprocessor: {
            // strip app from the file path
            stripPrefix: 'app'
        },
        files: [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/jquery-ui/jquery-ui.js',
            'bower_components/keyboard/dist/js/jquery.keyboard.min.js',
            'bower_components/multiselect/js/jquery.multi-select.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/bootstrap/dist/js/bootstrap.js',
            'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            'bower_components/angular-bootstrap-show-errors/src/showErrors.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-sanitize/angular-sanitize.js',
            'bower_components/angular-touch/angular-touch.js',
            'bower_components/papaparse/papaparse.js',
            'bower_components/ng-file-upload/ng-file-upload.js',
            'bower_components/ng-file-upload-shim/ng-file-upload-shim.js',
            'bower_components/angular-file-upload/angular-file-upload.min.js',
            'bower_components/angular-loader/angular-loader.js',
            'bower_components/angular-scenario/angular-scenario.js',
            'bower_components/ui-router/release/angular-ui-router.js',
            'bower_components/rangy/rangy-core.js',
            'bower_components/rangy/rangy-classapplier.js',
            'bower_components/rangy/rangy-highlighter.js',
            'bower_components/rangy/rangy-selectionsaverestore.js',
            'bower_components/rangy/rangy-serializer.js',
            'bower_components/rangy/rangy-textrange.js',
            'bower_components/textAngular/dist/textAngular.js',
            'bower_components/textAngular/dist/textAngular-sanitize.js',
            'bower_components/textAngular/dist/textAngularSetup.js',
            'bower_components/sifter/sifter.js',
            'bower_components/microplugin/src/microplugin.js',
            'bower_components/selectize/dist/js/selectize.js',
            'bower_components/footable/js/footable.js',
            'bower_components/autosize/dist/autosize.js',
            'bower_components/angular-breadcrumb/release/angular-breadcrumb.js',
            'bower_components/angular-retina/build/angular-retina.js',
            'bower_components/select2/dist/js/select2.js',
            'bower_components/angular-toastr/dist/angular-toastr.tpls.js',
            'bower_components/angular-md5/angular-md5.js',
            'bower_components/ngstorage/ngStorage.js',
            'bower_components/transitionize/dist/transitionize.js',
            'bower_components/fastclick/lib/fastclick.js',
            'bower_components/switchery/dist/switchery.js',
            'bower_components/ng-switchery/src/ng-switchery.js',
            'bower_components/underscore/underscore.js',
            'bower_components/ng-tags-input/ng-tags-input.min.js',
            'bower_components/angularUtils-pagination/dirPagination.js',
            'bower_components/keyboard/dist/layouts/keyboard-layouts-combined.min.js',
            'bower_components/keyboard/dist/layouts/keyboard-layouts-greywyvern.min.js',
            'bower_components/countUp.js/dist/countUp.min.js',
            'bower_components/bootstrap/dist/css/bootstrap.css',
            'bower_components/textAngular/dist/textAngular.css',
            'bower_components/selectize/dist/css/selectize.css',
            'bower_components/footable/css/footable.core.css',
            'bower_components/multiselect/css/multi-select.css',
            'bower_components/angular-toastr/dist/angular-toastr.css',
            'bower_components/switchery/dist/switchery.css',
            'bower_components/ng-tags-input/ng-tags-input.min.css',
            'bower_components/keyboard/dist/css/keyboard.min.css',
            'app/scripts/app/*.js',
            'app/scripts/app/**/*Module.js',
            'app/scripts/app/**/*.js',
            'app/styles/**/*.css',
            'app/tmpls/**/*.html',
            'test/**/*.js'
        ]
    });

};