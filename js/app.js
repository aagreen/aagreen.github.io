angular.module("teahouse", ['ngMaterial', 'ngRoute', 'ngAnimate'])
    
.config(function($routeProvider, $mdThemingProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'home.html',
            controller: 'homeCtrl'
        })
        .when('/home', {
            templateUrl: 'home.html',
            controller: 'homeCtrl'
        })
    
        // about
        .when('/gallery', {
            templateUrl: 'gallery.html',
            controller: 'galleryCtrl'
        })
    
        // submissions
        .when('/menu', {
            templateUrl: 'menu.html',
            controller: 'menuCtrl'
        })
    
        // poetry
        .when('/contact', {
            templateUrl: 'contact.html',
            controller: 'homeCtrl'
        })

	.otherwise('/');    
    
    $mdThemingProvider.theme('default')
        .primaryPalette('green', {
            'default': '600'
        })
        .accentPalette('blue-grey', {
            'default': '700'
        });
});
