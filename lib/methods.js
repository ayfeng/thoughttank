'use strict';

Meteor.methods({
    addTask: function(taskObject) {
        Tasks.insert({
            text: taskObject.text,
            deadline: taskObject.deadline
        }, function(err) {
            if (err) {
                console.log(err);
            }
        });
    },
    removeTask: function(taskId) {
        Tasks.remove({
            _id: taskId
        }, function(err) {
            console.log(err);
        });
    }
});
