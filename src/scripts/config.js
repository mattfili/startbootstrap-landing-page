angular.module('operator-landing', [])

.controller('main', function ($rootScope, signupModalService) {
	var vm = this;

    $rootScope.$on('$routeChangeStart', function (event, next, current) {

        if ($location.path() === '/customtrip-modal') {
            customTripModalService.openModal();
            event.preventDefault();
        }

        $rootScope.$broadcast(LISTENER.UpdateHeaderMenu);
    });


})
