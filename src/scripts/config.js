angular.module('operator-landing', ['ui.bootstrap', 'ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/landing");

	$stateProvider
	    .state('landing', {
	      url: "/landing",
	      templateUrl: "./assets/landing.html",
	      controller: 'main',
	      controllerAs: 'main'
	    })
})

.controller('AppCtrl', function ($rootScope, signupModalService, $scope, $location) {
	var vm = this;

	$scope.world = 'hello'

    $rootScope.$on('$routeChangeStart', function (event, next, current) {

        if ($location.path() === '/signup') {
            signupModalService.openModal();
            event.preventDefault();
        }

    });


})
