'use strict';

eventsApp.directive('sessionThumbnail',function () {
    return {
        restrict: "E",
        templateUrl: "/partials/directives/sessionThumbnail.html",
        scope: {
            session: '=',
            editable: '=',
            edit: '&'
        }
    }
});