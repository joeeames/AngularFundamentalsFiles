'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope, eventData, $location, $routeParams, authService, $timeout) {
        if (!authService.isAuthenticated()) {
            $location.url('/login');
            return;
        }

        $scope.event = {};
        $scope.showDatePicker = false;
        $scope.editingEvent = $location.$$url.indexOf('/events/edit') > -1;


        if ($scope.editingEvent) {
            eventData.getEvent($routeParams.eventId, setEventOrRedirectIfNotAuthorized);
        }

        $scope.saveEvent = function (event, form) {
            if (!form.$valid) return;

            eventData.save(event, function() { $location.url('/event/' + event.id); });
        };

        $scope.cancelEdit = function () {
            $location.url("/events");
        };

        $scope.dateFocus = function() {
            $scope.showDatePicker = true;
        }

        $scope.dateBlur = function() {
            $timeout(function() {$scope.showDatePicker = false; }, 200);
        }

        $scope.setDateFromPicker = function(date) {
            $scope.event.date = date;
            $scope.showDatePicker = false;
        }

        function setEventOrRedirectIfNotAuthorized(event)  {
            if (authService.userCanEditEvent(event)) {
                $scope.event = event;
            } else {
                $location.url('/login');
            }
        }
    }
);