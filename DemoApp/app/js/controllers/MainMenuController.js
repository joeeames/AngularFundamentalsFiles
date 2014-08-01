'use strict';

eventsApp.controller('MainMenuController',
    function MainMenuController($scope, authService) {
        $scope.user = {};
        $scope.$watch(authService.getCurrentUserName, function () {
            $scope.user = authService.getCurrentUser();
        });

        $scope.isAuthenticated = function () {
            return authService.isAuthenticated();
        };

        $scope.logout = function () {
            authService.setCurrentUser({});
        };
    }
);