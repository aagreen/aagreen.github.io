angular.module("teahouse", ['ngMaterial', 'ngRoute', 'ngAnimate'])
    
.config(function($routeProvider, $mdThemingProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'homeCtrl'
        })
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'homeCtrl'
        })
    
        // about
        .when('/gallery', {
            templateUrl: 'views/gallery.html',
            controller: 'galleryCtrl'
        })
    
        // submissions
        .when('/menu', {
            templateUrl: 'views/menu.html',
            controller: 'menuCtrl'
        })
    
        // poetry
        .when('/contact', {
            templateUrl: 'views/contact.html',
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