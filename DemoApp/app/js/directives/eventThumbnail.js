'use strict';

eventsApp .directive('eventThumbnail', function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "partials/directives/eventThumbnail.html",
        scope: {
            event: '=',
            showDetails: '&'
        }
    }
});