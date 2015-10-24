'use strict';

angular.module('ionicMeteorSkeleton').controller('taskController', ['$scope', '$meteor', '$state',
    function($scope, $meteor, $state) {
        $scope.data = {};
        $scope.data.tasks = $meteor.collection(Tasks);

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
