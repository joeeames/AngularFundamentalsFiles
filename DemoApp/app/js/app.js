'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute']);
eventsApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/events', {templateUrl: '/partials/eventList.html', controller: 'EventListController'});
    $routeProvider.when('/events/:eventId/sessions/edit/:sessionId', {templateUrl: '/partials/editSession.html', controller: 'EditSessionController'});
    $routeProvider.when('/events/:eventId/sessions/new', {templateUrl: '/partials/editSession.html', controller: 'EditSessionController'});
    $routeProvider.when('/event/:eventId', {templateUrl: '/partials/event.html', controller: 'EventController'});
    $routeProvider.when('/events/new', {templateUrl: '/partials/editEvent.html', controller: 'EditEventController'});
    $routeProvider.when('/events/edit/:eventId', {templateUrl: '/partials/editEvent.html', controller: 'EditEventController'});
    $routeProvider.when('/register', {templateUrl: '/partials/editProfile.html', controller: 'EditProfileController'});
    $routeProvider.when('/editProfile', {templateUrl: '/partials/editProfile.html', controller: 'EditProfileController'});
    $routeProvider.when('/viewProfile/:userName', {templateUrl: '/partials/viewProfile.html', controller: 'ViewProfileController'});
    $routeProvider.when('/login', {templateUrl: '/partials/login.html', controller: 'LoginController'});
    $routeProvider.otherwise({redirectTo: '/events'});
    $locationProvider.html5Mode(true);
  }]);
