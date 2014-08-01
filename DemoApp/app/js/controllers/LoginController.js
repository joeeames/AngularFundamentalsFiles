'use strict';

eventsApp.controller('LoginController',
    function LoginController($scope, $location, userData, authService) {
        $scope.user = {userName:"", password:""};
        $scope.login = function () {
            userData.getUser($scope.user.userName, function (user) {
                if (!!user && user.password === $scope.user.password) {
                    authService.setCurrentUser(user);
                    $location.url('/events');
                }
            });
        };
    }
);