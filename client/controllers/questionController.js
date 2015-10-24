'use strict';

angular.module('ionicMeteorSkeleton').controller('questionController', ['$scope', '$meteor', '$state',
    function($scope, $meteor, $state) {
        $scope.data = {};
        $scope.data.questions = $meteor.collection(Questions);

        $scope.addTask = function() {
            var taskObj = {
                text: $scope.data.questionText,
                deadline: $scope.data.questionDeadline
            };

            $meteor.call('askQuestion', questionObj);
            $state.go('questions');
        };
    }
]);
