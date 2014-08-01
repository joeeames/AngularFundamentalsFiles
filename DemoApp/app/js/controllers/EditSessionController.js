'use strict';

eventsApp.controller('EditSessionController',
    function EditSessionController($scope, eventData, $routeParams, $location, authService) {
        if (!authService.isAuthenticated()) {
            $location.url('/login');
            return;
        }

        $scope.editingSession = $location.$$url.indexOf('/sessions/edit') > -1;
        $scope.session = {};

        if(!$scope.editingSession) {
            $scope.session.duration = "1";
        }

        $scope.event = eventData.getEvent($routeParams.eventId, setSession);


        $scope.saveSession = function (session, form) {
            if (!form.$valid) return;

            session.creator = authService.getCurrentUserName();
            session.creatorName = authService.getCurrentUser().name;
            session.duration = parseInt(session.duration);
            if (!$scope.editingSession) {
                session.id = eventData.getNextSessionId($scope.event);
                session.upVoteCount = 0;
                $scope.event.sessions.push(session);
            }
            eventData.save($scope.event);
            $location.url('/event/' + $routeParams.eventId);
        }

        function setSession(event) {
            if($scope.editingSession) {
                $scope.session = _.findWhere(event.sessions, {id:parseInt($routeParams.sessionId)});
            }
        }
    }
);