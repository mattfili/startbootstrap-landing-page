(function () {
    'use strict';

    angular
		.module('airvel.modals')
		.service('signupModalService', signupModalService);

    signup.$inject = ['$rootScope', '$modal', '$q'];

    function signupModalService($rootScope, $modal, $q) {

        var vm = this;

        vm.openModal = function (callback) { 

            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'modal/signup-modal.html',
                controller: 'signup-modal.controller.js',
                controllerAs: 'modal'
            });
            
            modalInstance.result.then(callback)['finally'](function () {
                // unset modalInstance to prevent double close of modal when $routeChangeStart
                modalInstance = undefined;

            });
        };

        vm.closeModal = function (result) {
            if (modalInstance) {
                modalInstance.close(result);
            }
        };

        vm.dismissModal = function (result) {
            if (modalInstance) {
                modalInstance.dismiss(result);
            }
        };


    }


})();

