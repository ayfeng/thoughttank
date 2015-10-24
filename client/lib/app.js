'use strict';

angular.module('ionicMeteorSkeleton',['angular-meteor',
    'ui.router',
    'ionic']);

function onReady() {
    angular.bootstrap(document, ['ionicMeteorSkeleton']);
}

if (Meteor.isCordova) {
    angular.element(document).on("deviceready", onReady);
}
else {
    angular.element(document).ready(onReady);
}
