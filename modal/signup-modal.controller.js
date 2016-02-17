"use strict";

(function () {
    angular.module("airvel.modals").controller("signupModalController", signupModalController);

    signupModalController.$inject = ['$scope', 'ContactUsService', 'security', 'signupModalService', '$modal', '$timeout'];

    function signupModalController($scope, signupModalService, $modal, $timeout) {
        var vm = this;

        $scope.$on('$routeChangeStart', function (event, newUrl, oldUrl) {
            signupModalService.closeModal();
        });

        var signupModal = function signupModal(firstname, lastname, operatorname, position, email, phone, city, state, fleetcount, schedulingtool) {
            return {
                firstname: firstname ? firstname : null,
                lastname: lastname ? lastname : null,
                operatorname: operatorname ? operatorname : null,
                position: position ? position : null,
                email: email ? email : null,
                phone: phone ? phone : null,
                city: city ? city : null,
                state: state ? state : null,
                fleetcount: fleetcount ? fleetcount : null,
                schedulingtool: schedulingtool ? schedulingtool : null
            };
        };

        $scope.params = {
            signupForm: true,
            signupThanks: false
        };

        $scope.signupModalSubmit = function () {

            var model = signupModel($scope.firstname, $scope.lastname, $scope.operatorname, $scope.position, $scope.email, $scope.phone, $scope.city, $scope.state, $scope.fleetcount, $scope.schedulingtool);

            // ContactUsService.post(model).then(function () {
            //         $scope.params.contactUsForm = false;
            //         $scope.params.signupThanks = true;

            //         signupModalService.closeModal();

            // });
        };
    }
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RhbC9zaWdudXAtbW9kYWwuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsWUFBWTtBQUNULFdBQU8sQ0FDRixNQUFNLENBQUMsZUFBZSxDQUFDLENBQ3ZCLFVBQVUsQ0FBQyx1QkFBdUIsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDOztBQUVoRSx5QkFBcUIsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQzs7QUFFdkgsYUFBUyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRTtBQUN6RSxZQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7O0FBRWQsY0FBTSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxVQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO0FBQzdELDhCQUFrQixDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25DLENBQUMsQ0FBQzs7QUFFSCxZQUFJLFdBQVcsR0FBRyxTQUFkLFdBQVcsQ0FBYSxTQUFTLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUU7QUFDNUgsbUJBQU87QUFDSCx5QkFBUyxFQUFHLFNBQVMsR0FBSSxTQUFTLEdBQUcsSUFBSTtBQUN6Qyx3QkFBUSxFQUFFLFFBQVEsR0FBRyxRQUFRLEdBQUUsSUFBSTtBQUNuQyw0QkFBWSxFQUFFLFlBQVksR0FBRyxZQUFZLEdBQUUsSUFBSTtBQUMvQyx3QkFBUSxFQUFFLFFBQVEsR0FBRyxRQUFRLEdBQUUsSUFBSTtBQUNuQyxxQkFBSyxFQUFHLEtBQUssR0FBSSxLQUFLLEdBQUcsSUFBSTtBQUM3QixxQkFBSyxFQUFHLEtBQUssR0FBSSxLQUFLLEdBQUcsSUFBSTtBQUM3QixvQkFBSSxFQUFHLElBQUksR0FBSSxJQUFJLEdBQUcsSUFBSTtBQUMxQixxQkFBSyxFQUFHLEtBQUssR0FBSSxLQUFLLEdBQUcsSUFBSTtBQUM3QiwwQkFBVSxFQUFHLFVBQVUsR0FBSSxVQUFVLEdBQUcsSUFBSTtBQUM1Qyw4QkFBYyxFQUFFLGNBQWMsR0FBRyxjQUFjLEdBQUUsSUFBSTthQUN4RCxDQUFBO1NBQ0osQ0FBQzs7QUFFRixjQUFNLENBQUMsTUFBTSxHQUFHO0FBQ1osc0JBQVUsRUFBRSxJQUFJO0FBQ2hCLHdCQUFZLEVBQUUsS0FBSztTQUN0QixDQUFDOztBQUVGLGNBQU0sQ0FBQyxpQkFBaUIsR0FBRyxZQUFZOztBQUVuQyxnQkFBSSxLQUFLLEdBQUcsV0FBVyxDQUNuQixNQUFNLENBQUMsU0FBUyxFQUNoQixNQUFNLENBQUMsUUFBUSxFQUNmLE1BQU0sQ0FBQyxZQUFZLEVBQ25CLE1BQU0sQ0FBQyxRQUFRLEVBQ2YsTUFBTSxDQUFDLEtBQUssRUFDWixNQUFNLENBQUMsS0FBSyxFQUNaLE1BQU0sQ0FBQyxJQUFJLEVBQ1gsTUFBTSxDQUFDLEtBQUssRUFDWixNQUFNLENBQUMsVUFBVSxFQUNqQixNQUFNLENBQUMsY0FBYyxDQUN4QixDQUFDOzs7Ozs7Ozs7U0FTTCxDQUFDO0tBRUw7Q0FFSixDQUFBLEVBQUcsQ0FBQyIsImZpbGUiOiJzaWdudXAtbW9kYWwuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG4gICAgYW5ndWxhclxuICAgICAgICAubW9kdWxlKFwiYWlydmVsLm1vZGFsc1wiKVxuICAgICAgICAuY29udHJvbGxlcihcInNpZ251cE1vZGFsQ29udHJvbGxlclwiLCBzaWdudXBNb2RhbENvbnRyb2xsZXIpO1xuXG4gICAgc2lnbnVwTW9kYWxDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICdDb250YWN0VXNTZXJ2aWNlJywgJ3NlY3VyaXR5JywgJ3NpZ251cE1vZGFsU2VydmljZScsICckbW9kYWwnLCAnJHRpbWVvdXQnXTtcblxuICAgIGZ1bmN0aW9uIHNpZ251cE1vZGFsQ29udHJvbGxlcigkc2NvcGUsIHNpZ251cE1vZGFsU2VydmljZSwgJG1vZGFsLCAkdGltZW91dCkge1xuICAgICAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgICAgICRzY29wZS4kb24oJyRyb3V0ZUNoYW5nZVN0YXJ0JywgZnVuY3Rpb24gKGV2ZW50LCBuZXdVcmwsIG9sZFVybCkge1xuICAgICAgICAgICAgc2lnbnVwTW9kYWxTZXJ2aWNlLmNsb3NlTW9kYWwoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHNpZ251cE1vZGFsID0gZnVuY3Rpb24gKGZpcnN0bmFtZSwgbGFzdG5hbWUsIG9wZXJhdG9ybmFtZSwgcG9zaXRpb24sIGVtYWlsLCBwaG9uZSwgY2l0eSwgc3RhdGUsIGZsZWV0Y291bnQsIHNjaGVkdWxpbmd0b29sKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGZpcnN0bmFtZSA6IGZpcnN0bmFtZSAgPyBmaXJzdG5hbWUgOiBudWxsLFxuICAgICAgICAgICAgICAgIGxhc3RuYW1lOiBsYXN0bmFtZSA/IGxhc3RuYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9ybmFtZTogb3BlcmF0b3JuYW1lID8gb3BlcmF0b3JuYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbiA/IHBvc2l0aW9uOiBudWxsLFxuICAgICAgICAgICAgICAgIGVtYWlsIDogZW1haWwgID8gZW1haWwgOiBudWxsLFxuICAgICAgICAgICAgICAgIHBob25lIDogcGhvbmUgID8gcGhvbmUgOiBudWxsLFxuICAgICAgICAgICAgICAgIGNpdHkgOiBjaXR5ICA/IGNpdHkgOiBudWxsLFxuICAgICAgICAgICAgICAgIHN0YXRlIDogc3RhdGUgID8gc3RhdGUgOiBudWxsLFxuICAgICAgICAgICAgICAgIGZsZWV0Y291bnQgOiBmbGVldGNvdW50ICA/IGZsZWV0Y291bnQgOiBudWxsLFxuICAgICAgICAgICAgICAgIHNjaGVkdWxpbmd0b29sOiBzY2hlZHVsaW5ndG9vbCA/IHNjaGVkdWxpbmd0b29sOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgJHNjb3BlLnBhcmFtcyA9IHtcbiAgICAgICAgICAgIHNpZ251cEZvcm06IHRydWUsXG4gICAgICAgICAgICBzaWdudXBUaGFua3M6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgICAgJHNjb3BlLnNpZ251cE1vZGFsU3VibWl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgbW9kZWwgPSBzaWdudXBNb2RlbChcbiAgICAgICAgICAgICAgICAkc2NvcGUuZmlyc3RuYW1lLCBcbiAgICAgICAgICAgICAgICAkc2NvcGUubGFzdG5hbWUsXG4gICAgICAgICAgICAgICAgJHNjb3BlLm9wZXJhdG9ybmFtZSxcbiAgICAgICAgICAgICAgICAkc2NvcGUucG9zaXRpb24sXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVtYWlsLFxuICAgICAgICAgICAgICAgICRzY29wZS5waG9uZSxcbiAgICAgICAgICAgICAgICAkc2NvcGUuY2l0eSwgXG4gICAgICAgICAgICAgICAgJHNjb3BlLnN0YXRlLCBcbiAgICAgICAgICAgICAgICAkc2NvcGUuZmxlZXRjb3VudCxcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2NoZWR1bGluZ3Rvb2wsXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyBDb250YWN0VXNTZXJ2aWNlLnBvc3QobW9kZWwpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gICAgICAgICAkc2NvcGUucGFyYW1zLmNvbnRhY3RVc0Zvcm0gPSBmYWxzZTtcbiAgICAgICAgICAgIC8vICAgICAgICAgJHNjb3BlLnBhcmFtcy5zaWdudXBUaGFua3MgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyAgICAgICAgIHNpZ251cE1vZGFsU2VydmljZS5jbG9zZU1vZGFsKCk7XG5cbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9O1xuXG4gICAgfVxuXG59KSgpO1xuXG5cblxuXG5cblxuXG4iXX0=
