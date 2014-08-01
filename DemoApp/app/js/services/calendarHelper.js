eventsApp.factory('calendarHelper', function () {
    var monthNames = [ "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December" ];

    return {
        getCalendarDays: function (year, month) {
            var monthStartDate = new Date(year, month, 1);
            var days = [];
            for (var idx = 0; idx < monthStartDate.getDay(); idx++) {
                days.push('');
            }
            for (var idx = 1; idx <= new Date(year, month+1, 0).getDate(); idx++) {
                days.push(idx);
            }
            return days;
        },
        getMonthName: function(monthNumber) {
            return monthNames[monthNumber];
        }
    }
});