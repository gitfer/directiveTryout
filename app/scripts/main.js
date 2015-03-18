require.config({
    baseUrl: 'scripts',
    urlArgs: 'v=1.0'
});

require(
    [
        'app',
        'services/languageService'
    ],
    function () {
        angular.bootstrap(document, ['directivesTryoutApp']);
    });