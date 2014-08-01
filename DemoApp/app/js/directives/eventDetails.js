'use strict';

eventsApp.directive('eventDetails',function () {
    return {
        restrict: "E",
        templateUrl: "/partials/directives/eventDetails.html",
        scope: {
            event: '=',
            editable: '=',
            edit: '&'
        }
    }
});
