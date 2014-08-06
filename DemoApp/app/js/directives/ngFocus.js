'use strict';

eventsApp.directive('ngFocus', function ($parse) {
    return  function (scope, element, attrs) {
        var fn = $parse(attrs.ngFocus);
        element.bind('focus', function (event) {
            scope.$apply(function () {
                fn(scope, {$event: event});
            });
        });

    };
});
