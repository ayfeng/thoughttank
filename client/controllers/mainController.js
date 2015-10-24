angular.module('ionicMeteorSkeleton').controller('mainController', function($scope, $http, $rootScope, $ionicSideMenuDelegate, $ionicLoading, $q, $timeout) {
    //initialize empty data object
    $scope.data = {};

    //populate members of $scope.data
    $scope.data.user = {};
    $scope.data.user.authenticated = false;

    //keep track of the date
    $scope.data.date = new Date();

    //toggle the side menu (hide/show)
    $scope.toggleMenu = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
});
