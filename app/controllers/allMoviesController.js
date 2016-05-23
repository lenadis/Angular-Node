var movieApp = angular.module("movieApp");

movieApp.controller('formController', function ($scope, $http, $resource, $state, $stateParams) {

    $scope.editmovieApp = function (movieApp) {
        var copy = angular.copy(movieApp);
        $state.go("movies", { movieApp: copy });
    };

});

