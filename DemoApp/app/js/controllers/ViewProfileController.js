'use strict';

eventsApp.controller('ViewProfileController',
    function ViewProfileController($scope, $routeParams, userData) {
        $scope.user = userData.getUser($routeParams.userName);
    }
);