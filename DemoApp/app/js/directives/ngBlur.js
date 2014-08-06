'use strict';

eventsApp.directive('ngBlur', function ($parse) {
    return  function (scope, element, attrs) {
        var fn = $parse(attrs.ngBlur);
        element.bind('blur', function (event) {
            scope.$apply(function () {
                fn(scope, {$event: event});
            });
        });

    };
});
