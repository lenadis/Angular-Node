angular.module('movieApp')
    .config(function($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.otherwise('/movies'); //url

        $stateProvider.state('movies', {
                url: '/movies',
                templateUrl: 'app/partialviews/movies.html',
                controller: 'allMoviesController',
                params:{movieAppParameter: null}
            })

            .state('form', {
                url: '/form', //part of the url in browser, #/
                templateUrl: 'app/partialviews/form.html', //partial view here
                controller: 'formController'
            })
    });
