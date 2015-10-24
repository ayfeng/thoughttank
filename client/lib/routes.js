'use strict';

angular.module("ionicMeteorSkeleton").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider){
        $locationProvider.html5Mode(true);

        $stateProvider
         .state('tasks', {
            url: '/tasks',
            templateUrl: 'client/views/task-list.ng.html'
        })
        .state('taskForm', {
            url: '/taskForm',
            templateUrl: 'client/views/task-form.ng.html'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'client/views/login.ng.html'
        });


        $urlRouterProvider.otherwise('tasks');
}]);
