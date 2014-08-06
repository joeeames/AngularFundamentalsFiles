'use strict';

eventsApp.directive('enterTarget', function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind('keyup', function (event) {
                var elementSelectors = "#" + attrs.enterTarget.split(",").join(",#");
                var targetElements = angular.element(elementSelectors).filter(":visible");
                if (event.keyCode === 13) {
                    targetElements.click();
                }
            });
        }
    }
});

