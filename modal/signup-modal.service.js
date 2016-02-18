'use strict';

(function () {
    'use strict';

    angular.module('operator-landing').service('signupModalService', signupModalService);

    signupModalService.$inject = ['$rootScope', '$uibModal', '$q'];

    function signupModalService($rootScope, $modal, $q) {

        var vm = this;

        vm.openModal = function (callback) {

            var modalInstance = $uibModal.open({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RhbC9zaWdudXAtbW9kYWwuc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsWUFBWTtBQUNULGdCQUFZLENBQUM7O0FBRWIsV0FBTyxDQUNSLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUMxQixPQUFPLENBQUMsb0JBQW9CLEVBQUUsa0JBQWtCLENBQUMsQ0FBQzs7QUFFakQsc0JBQWtCLENBQUMsT0FBTyxHQUFHLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQzs7QUFFL0QsYUFBUyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTs7QUFFaEQsWUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDOztBQUVkLFVBQUUsQ0FBQyxTQUFTLEdBQUcsVUFBVSxRQUFRLEVBQUU7O0FBRS9CLGdCQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO0FBQy9CLHlCQUFTLEVBQUUsSUFBSTtBQUNmLDJCQUFXLEVBQUUseUJBQXlCO0FBQ3RDLDBCQUFVLEVBQUUsNEJBQTRCO0FBQ3hDLDRCQUFZLEVBQUUsT0FBTzthQUN4QixDQUFDLENBQUM7O0FBRUgseUJBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVk7O0FBRXZELDZCQUFhLEdBQUcsU0FBUyxDQUFDO2FBRTdCLENBQUMsQ0FBQztTQUNOLENBQUM7O0FBRUYsVUFBRSxDQUFDLFVBQVUsR0FBRyxVQUFVLE1BQU0sRUFBRTtBQUM5QixnQkFBSSxhQUFhLEVBQUU7QUFDZiw2QkFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUMvQjtTQUNKLENBQUM7O0FBRUYsVUFBRSxDQUFDLFlBQVksR0FBRyxVQUFVLE1BQU0sRUFBRTtBQUNoQyxnQkFBSSxhQUFhLEVBQUU7QUFDZiw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNqQztTQUNKLENBQUM7S0FHTDtDQUdKLENBQUEsRUFBRyxDQUFDIiwiZmlsZSI6InNpZ251cC1tb2RhbC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyXG5cdFx0Lm1vZHVsZSgnb3BlcmF0b3ItbGFuZGluZycpXG5cdFx0LnNlcnZpY2UoJ3NpZ251cE1vZGFsU2VydmljZScsIHNpZ251cE1vZGFsU2VydmljZSk7XG5cbiAgICBzaWdudXBNb2RhbFNlcnZpY2UuJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckdWliTW9kYWwnLCAnJHEnXTtcblxuICAgIGZ1bmN0aW9uIHNpZ251cE1vZGFsU2VydmljZSgkcm9vdFNjb3BlLCAkbW9kYWwsICRxKSB7XG5cbiAgICAgICAgdmFyIHZtID0gdGhpcztcblxuICAgICAgICB2bS5vcGVuTW9kYWwgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHsgXG5cbiAgICAgICAgICAgIHZhciBtb2RhbEluc3RhbmNlID0gJHVpYk1vZGFsLm9wZW4oe1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZGFsL3NpZ251cC1tb2RhbC5odG1sJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnc2lnbnVwLW1vZGFsLmNvbnRyb2xsZXIuanMnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ21vZGFsJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oY2FsbGJhY2spWydmaW5hbGx5J10oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIHVuc2V0IG1vZGFsSW5zdGFuY2UgdG8gcHJldmVudCBkb3VibGUgY2xvc2Ugb2YgbW9kYWwgd2hlbiAkcm91dGVDaGFuZ2VTdGFydFxuICAgICAgICAgICAgICAgIG1vZGFsSW5zdGFuY2UgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmNsb3NlTW9kYWwgPSBmdW5jdGlvbiAocmVzdWx0KSB7IFxuICAgICAgICAgICAgaWYgKG1vZGFsSW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBtb2RhbEluc3RhbmNlLmNsb3NlKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZGlzbWlzc01vZGFsID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKG1vZGFsSW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBtb2RhbEluc3RhbmNlLmRpc21pc3MocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuXG4gICAgfVxuXG5cbn0pKCk7XG5cbiJdfQ==
