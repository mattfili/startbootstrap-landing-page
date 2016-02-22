'use strict';

(function () {
    'use strict';

    angular.module('operator-landing').service('signupModalService', signupModalService);

    signupModalService.$inject = ['$rootScope', '$uibModal', '$q'];

    function signupModalService($rootScope, $uibModal, $q) {

        var vm = this;

        vm.openModal = function (callback) {

            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'modal/signup-modal.html',
                controller: 'signupModalController',
                controllerAs: 'modal'
            });

            $rootScope.modalInstance = modalInstance;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RhbC9zaWdudXAtbW9kYWwuc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsWUFBWTtBQUNULGdCQUFZLENBQUM7O0FBRWIsV0FBTyxDQUNSLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUMxQixPQUFPLENBQUMsb0JBQW9CLEVBQUUsa0JBQWtCLENBQUMsQ0FBQzs7QUFFakQsc0JBQWtCLENBQUMsT0FBTyxHQUFHLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQzs7QUFFL0QsYUFBUyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTs7QUFFbkQsWUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDOztBQUVkLFVBQUUsQ0FBQyxTQUFTLEdBQUcsVUFBVSxRQUFRLEVBQUU7O0FBRS9CLGdCQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO0FBQy9CLHlCQUFTLEVBQUUsSUFBSTtBQUNmLDJCQUFXLEVBQUUseUJBQXlCO0FBQ3RDLDBCQUFVLEVBQUUsdUJBQXVCO0FBQ25DLDRCQUFZLEVBQUUsT0FBTzthQUN4QixDQUFDLENBQUM7O0FBRUgsc0JBQVUsQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1NBRTVDLENBQUM7O0FBRUYsVUFBRSxDQUFDLFVBQVUsR0FBRyxVQUFVLE1BQU0sRUFBRTtBQUM5QixnQkFBSSxhQUFhLEVBQUU7QUFDZiw2QkFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUMvQjtTQUNKLENBQUM7O0FBRUYsVUFBRSxDQUFDLFlBQVksR0FBRyxVQUFVLE1BQU0sRUFBRTtBQUNoQyxnQkFBSSxhQUFhLEVBQUU7QUFDZiw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNqQztTQUNKLENBQUM7S0FHTDtDQUdKLENBQUEsRUFBRyxDQUFDIiwiZmlsZSI6InNpZ251cC1tb2RhbC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgXG4gICAgYW5ndWxhclxuXHRcdC5tb2R1bGUoJ29wZXJhdG9yLWxhbmRpbmcnKVxuXHRcdC5zZXJ2aWNlKCdzaWdudXBNb2RhbFNlcnZpY2UnLCBzaWdudXBNb2RhbFNlcnZpY2UpO1xuXG4gICAgc2lnbnVwTW9kYWxTZXJ2aWNlLiRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHVpYk1vZGFsJywgJyRxJ107XG5cbiAgICBmdW5jdGlvbiBzaWdudXBNb2RhbFNlcnZpY2UoJHJvb3RTY29wZSwgJHVpYk1vZGFsLCAkcSkge1xuXG4gICAgICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICAgICAgdm0ub3Blbk1vZGFsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7IFxuXG4gICAgICAgICAgICB2YXIgbW9kYWxJbnN0YW5jZSA9ICR1aWJNb2RhbC5vcGVuKHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IHRydWUsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2RhbC9zaWdudXAtbW9kYWwuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ3NpZ251cE1vZGFsQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlckFzOiAnbW9kYWwnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJHJvb3RTY29wZS5tb2RhbEluc3RhbmNlID0gbW9kYWxJbnN0YW5jZTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmNsb3NlTW9kYWwgPSBmdW5jdGlvbiAocmVzdWx0KSB7IFxuICAgICAgICAgICAgaWYgKG1vZGFsSW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBtb2RhbEluc3RhbmNlLmNsb3NlKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZGlzbWlzc01vZGFsID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKG1vZGFsSW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBtb2RhbEluc3RhbmNlLmRpc21pc3MocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuXG4gICAgfVxuXG5cbn0pKCk7XG5cbiJdfQ==
