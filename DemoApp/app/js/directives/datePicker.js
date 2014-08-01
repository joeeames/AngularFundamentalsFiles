'use strict';

eventsApp.directive('datePicker', function (calendarHelper) {
    return {
        restrict: "E",
        templateUrl: "/partials/directives/datePicker.html",
        scope: {
            date: '=',
            setDate: '='
        },
        link: function (scope) {
            scope.calendar = {
                year: new Date().getFullYear(),
                month: new Date().getMonth(),
                monthName: calendarHelper.getMonthName(new Date().getMonth())
            };

            scope.days = calendarHelper.getCalendarDays(new Date().getFullYear(), new Date().getMonth());

            scope.nextMonth = function () {
                if (scope.calendar.month === 11) {
                    scope.calendar.month = 0;
                    scope.calendar.year++;
                } else {
                    scope.calendar.month++;
                }
                scope.calendar.monthName = calendarHelper.getMonthName(scope.calendar.month);
                scope.days = calendarHelper.getCalendarDays(scope.calendar.year, scope.calendar.month);
            }

            scope.previousMonth = function () {
                if (scope.calendar.month === 0) {
                    scope.calendar.month = 11;
                    scope.calendar.year--;
                } else {
                    scope.calendar.month--;
                }
                scope.calendar.monthName = calendarHelper.getMonthName(scope.calendar.month);
                scope.days = calendarHelper.getCalendarDays(scope.calendar.year, scope.calendar.month);
            }

            scope.nextYear = function () {
                scope.calendar.year++;
                scope.days = calendarHelper.getCalendarDays(scope.calendar.year, scope.calendar.month);
            }

            scope.previousYear = function () {
                scope.calendar.year--;
                scope.days = calendarHelper.getCalendarDays(scope.calendar.year, scope.calendar.month);
            }

            scope.selectDate = function (day) {
                scope.setDate((scope.calendar.month + 1) + "/" + day + "/" + + scope.calendar.year);
            }
        }
    };
});