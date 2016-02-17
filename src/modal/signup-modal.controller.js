(function () {
    angular
        .module("airvel.modals")
        .controller("signupModalController", signupModalController);

    signupModalController.$inject = ['$scope', 'ContactUsService', 'security', 'signupModalService', '$modal', '$timeout'];

    function signupModalController($scope, signupModalService, $modal, $timeout) {
        var vm = this;

        $scope.$on('$routeChangeStart', function (event, newUrl, oldUrl) {
            signupModalService.closeModal();
        });

        var signupModal = function (firstname, lastname, operatorname, position, email, phone, city, state, fleetcount, schedulingtool) {
            return {
                firstname : firstname  ? firstname : null,
                lastname: lastname ? lastname: null,
                operatorname: operatorname ? operatorname: null,
                position: position ? position: null,
                email : email  ? email : null,
                phone : phone  ? phone : null,
                city : city  ? city : null,
                state : state  ? state : null,
                fleetcount : fleetcount  ? fleetcount : null,
                schedulingtool: schedulingtool ? schedulingtool: null
            }
        };

        $scope.params = {
            signupForm: true,
            signupThanks: false
        };

        $scope.signupModalSubmit = function () {
            
            var model = signupModel(
                $scope.firstname 
                $scope.lastname
                $scope.operatorname
                $scope.position
                $scope.email 
                $scope.phone 
                $scope.city 
                $scope.state 
                $scope.fleetcount 
                $scope.schedulingtool
            );

            // ContactUsService.post(model).then(function () {
            //         $scope.params.contactUsForm = false;
            //         $scope.params.signupThanks = true;

            //         signupModalService.closeModal();

            });
        };

    }

})();







