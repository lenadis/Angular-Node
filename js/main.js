var myApp = angular.module('myApp',['ui.router']);

myApp.controller('MyController', function MyController($scope, $http) {
    $http.get("api.json")
//    $http.get("http://nodeexamapi.herokuapp.com/movies")
    .then(function(response) {
        $scope.allmovies = response.data;
        myrandnumb = Math.floor(Math.random() * $scope.allmovies.length);
        $scope.movie = response.data[myrandnumb];
    });
    $scope.randomMovie
    $scope.filterByGenre = function(genre) {
        filteredarray = []
        for(i=0; i < $scope.allmovies.length; i++){
            if ($scope.allmovies[i].genre == genre){
                filteredarray.push($scope.allmovies[i])
            }     
        }
        myrandnumb = Math.floor(Math.random() * filteredarray.length);
        $scope.movie = filteredarray[myrandnumb];
    };
                                                                       
                                                                       
});

myApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/index.html");
  
  $stateProvider
//        .state('frontpage', {
//          url: "/frontpage",
//          templateUrl: "partials/frontpage.html"
//        })
    
      .state('movie', {
      url: "/movie",
      templateUrl: "partials/movie.html"
    })
    
    
});


