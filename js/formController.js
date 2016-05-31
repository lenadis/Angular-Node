myApp.controller('formController', function ($scope, $state, $stateParams, $http) {
    $scope.contact = {};

    $scope.saveForm = function () {
    console.log($scope.contact);
        $http({
            method: "POST",
            data: $scope.contact,
            url: "http://nodeexamapi.herokuapp.com/movies"
        })
            .success(function (data) {
                //deferred.resolve(data);

            }).error(function (data) {
            //deferred.reject(data);

        });

    };



    var self = this;
    self.submit = function() {
        console.log('User clicked submit with ', self.user);
    };

    $scope.list = [];
    $scope.text = 'hello';
    $scope.submit = function() {
        if ($scope.text) {
            $scope.list.push(this.text);
            $scope.text = '';
        }
    };

    $scope.contacts = ["hi@me.no", "hi@you.com"];

    $scope.addMail = function(mailAddress) {
        if($scope.mailAddress) {
            $scope.contacts.push(mailAddress);
            $scope.mailAddress = "";
        }
    };



});