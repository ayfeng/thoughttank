'use strict';

angular.module('ionicMeteorSkeleton').controller('subjectController', ['$scope', '$meteor', '$state',
    function($scope, $meteor, $state) {
        $scope.data = {};
        $scope.data.subject = ['Chemistry', 'Biology', 'Physics', 'Math']

        $scope.addTask = function() {
            var taskObj = {
                text: $scope.data.taskText,
                deadline: $scope.data.taskDeadline
            };

            $meteor.call('addTask', taskObj);
            $state.go('tasks');
        };
    }
]);
