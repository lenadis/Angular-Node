var myApp = angular.module('myApp',['ui.router']);

myApp.controller('MyController', function MyController($scope, $http) {     console.log("Good day sir")
    $http.get("api.json")
//    $http.get("http://nodeexamapi.herokuapp.com/movies")
    .then(function(response) {
        $scope.allmovies = response.data;
        myrandnumb = Math.floor(Math.random() * $scope.allmovies.length);
        $scope.movie = response.data[myrandnumb];                       
        console.log($scope.movie);
    });
    
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


