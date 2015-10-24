'use strict';

angular.module("ionicMeteorSkeleton").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider){
        $locationProvider.html5Mode(true);

        $stateProvider


        $urlRouterProvider.otherwise('tasks');
}]);
