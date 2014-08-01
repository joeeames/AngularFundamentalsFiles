'use strict';

eventsApp.directive('upvote', function () {
    return {
        restrict: "E",
        templateUrl: "/partials/directives/upvote.html",
        scope: {
            count: '@',
            upvote: '&',
            downvote: '&'
        }
    }
});
