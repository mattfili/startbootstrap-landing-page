'use strict';

(function () {
    'use strict';

    angular.module('airvel.modals').service('signupModalService', signupModalService);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RhbC9zaWdudXAtbW9kYWwuc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsWUFBWTtBQUNULGdCQUFZLENBQUM7O0FBRWIsV0FBTyxDQUNSLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FDdkIsT0FBTyxDQUFDLG9CQUFvQixFQUFFLGtCQUFrQixDQUFDLENBQUM7O0FBRWpELFVBQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDOztBQUVoRCxhQUFTLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFOztBQUVoRCxZQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7O0FBRWQsVUFBRSxDQUFDLFNBQVMsR0FBRyxVQUFVLFFBQVEsRUFBRTs7QUFFL0IsZ0JBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDNUIseUJBQVMsRUFBRSxJQUFJO0FBQ2YsMkJBQVcsRUFBRSx5QkFBeUI7QUFDdEMsMEJBQVUsRUFBRSw0QkFBNEI7QUFDeEMsNEJBQVksRUFBRSxPQUFPO2FBQ3hCLENBQUMsQ0FBQzs7QUFFSCx5QkFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWTs7QUFFdkQsNkJBQWEsR0FBRyxTQUFTLENBQUM7YUFFN0IsQ0FBQyxDQUFDO1NBQ04sQ0FBQzs7QUFFRixVQUFFLENBQUMsVUFBVSxHQUFHLFVBQVUsTUFBTSxFQUFFO0FBQzlCLGdCQUFJLGFBQWEsRUFBRTtBQUNmLDZCQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQy9CO1NBQ0osQ0FBQzs7QUFFRixVQUFFLENBQUMsWUFBWSxHQUFHLFVBQVUsTUFBTSxFQUFFO0FBQ2hDLGdCQUFJLGFBQWEsRUFBRTtBQUNmLDZCQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2pDO1NBQ0osQ0FBQztLQUdMO0NBR0osQ0FBQSxFQUFHLENBQUMiLCJmaWxlIjoic2lnbnVwLW1vZGFsLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXJcblx0XHQubW9kdWxlKCdhaXJ2ZWwubW9kYWxzJylcblx0XHQuc2VydmljZSgnc2lnbnVwTW9kYWxTZXJ2aWNlJywgc2lnbnVwTW9kYWxTZXJ2aWNlKTtcblxuICAgIHNpZ251cC4kaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRtb2RhbCcsICckcSddO1xuXG4gICAgZnVuY3Rpb24gc2lnbnVwTW9kYWxTZXJ2aWNlKCRyb290U2NvcGUsICRtb2RhbCwgJHEpIHtcblxuICAgICAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgICAgIHZtLm9wZW5Nb2RhbCA9IGZ1bmN0aW9uIChjYWxsYmFjaykgeyBcblxuICAgICAgICAgICAgdmFyIG1vZGFsSW5zdGFuY2UgPSAkbW9kYWwub3Blbih7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kYWwvc2lnbnVwLW1vZGFsLmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdzaWdudXAtbW9kYWwuY29udHJvbGxlci5qcycsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlckFzOiAnbW9kYWwnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbihjYWxsYmFjaylbJ2ZpbmFsbHknXShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gdW5zZXQgbW9kYWxJbnN0YW5jZSB0byBwcmV2ZW50IGRvdWJsZSBjbG9zZSBvZiBtb2RhbCB3aGVuICRyb3V0ZUNoYW5nZVN0YXJ0XG4gICAgICAgICAgICAgICAgbW9kYWxJbnN0YW5jZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uY2xvc2VNb2RhbCA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChtb2RhbEluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgbW9kYWxJbnN0YW5jZS5jbG9zZShyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmRpc21pc3NNb2RhbCA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChtb2RhbEluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgbW9kYWxJbnN0YW5jZS5kaXNtaXNzKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cblxuICAgIH1cblxuXG59KSgpO1xuXG4iXX0=
