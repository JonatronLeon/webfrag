'use strict';
// define root application
var app = angular.module('DeFragApp', [
    'ngRoute',
    'ngCookies',
    'ui.bootstrap'
]).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {    
    $routeProvider
        .when('/', {
            templateUrl: 'views/desktop/desktop.html',
            controller: 'DesktopCtrl'
        });
    $locationProvider.html5Mode(true);
}]).constant('API_PATH', {
    baseURL: '/api/v1/',
    profilepicDir: '/styles/img/users/'
});
