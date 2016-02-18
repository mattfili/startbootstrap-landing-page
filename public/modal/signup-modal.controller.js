"use strict";

(function () {
    angular.module("operator-landing").controller("signupModalController", signupModalController);

    signupModalController.$inject = ['$scope', 'signupModalService', '$uibModal', '$timeout'];

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RhbC9zaWdudXAtbW9kYWwuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsWUFBWTtBQUNULFdBQU8sQ0FDRixNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FDMUIsVUFBVSxDQUFDLHVCQUF1QixFQUFFLHFCQUFxQixDQUFDLENBQUM7O0FBRWhFLHlCQUFxQixDQUFDLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBQyxvQkFBb0IsRUFBQyxXQUFXLEVBQUMsVUFBVSxDQUFDLENBQUM7O0FBRXZGLGFBQVMscUJBQXFCLENBQUMsTUFBTSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUU7QUFDekUsWUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDOztBQUVkLGNBQU0sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsVUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRTtBQUM3RCw4QkFBa0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQyxDQUFDLENBQUM7O0FBRUgsWUFBSSxXQUFXLEdBQUcsU0FBZCxXQUFXLENBQWEsU0FBUyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFO0FBQzVILG1CQUFPO0FBQ0gseUJBQVMsRUFBRyxTQUFTLEdBQUksU0FBUyxHQUFHLElBQUk7QUFDekMsd0JBQVEsRUFBRSxRQUFRLEdBQUcsUUFBUSxHQUFFLElBQUk7QUFDbkMsNEJBQVksRUFBRSxZQUFZLEdBQUcsWUFBWSxHQUFFLElBQUk7QUFDL0Msd0JBQVEsRUFBRSxRQUFRLEdBQUcsUUFBUSxHQUFFLElBQUk7QUFDbkMscUJBQUssRUFBRyxLQUFLLEdBQUksS0FBSyxHQUFHLElBQUk7QUFDN0IscUJBQUssRUFBRyxLQUFLLEdBQUksS0FBSyxHQUFHLElBQUk7QUFDN0Isb0JBQUksRUFBRyxJQUFJLEdBQUksSUFBSSxHQUFHLElBQUk7QUFDMUIscUJBQUssRUFBRyxLQUFLLEdBQUksS0FBSyxHQUFHLElBQUk7QUFDN0IsMEJBQVUsRUFBRyxVQUFVLEdBQUksVUFBVSxHQUFHLElBQUk7QUFDNUMsOEJBQWMsRUFBRSxjQUFjLEdBQUcsY0FBYyxHQUFFLElBQUk7YUFDeEQsQ0FBQTtTQUNKLENBQUM7O0FBRUYsY0FBTSxDQUFDLE1BQU0sR0FBRztBQUNaLHNCQUFVLEVBQUUsSUFBSTtBQUNoQix3QkFBWSxFQUFFLEtBQUs7U0FDdEIsQ0FBQzs7QUFFRixjQUFNLENBQUMsaUJBQWlCLEdBQUcsWUFBWTs7QUFFbkMsZ0JBQUksS0FBSyxHQUFHLFdBQVcsQ0FDbkIsTUFBTSxDQUFDLFNBQVMsRUFDaEIsTUFBTSxDQUFDLFFBQVEsRUFDZixNQUFNLENBQUMsWUFBWSxFQUNuQixNQUFNLENBQUMsUUFBUSxFQUNmLE1BQU0sQ0FBQyxLQUFLLEVBQ1osTUFBTSxDQUFDLEtBQUssRUFDWixNQUFNLENBQUMsSUFBSSxFQUNYLE1BQU0sQ0FBQyxLQUFLLEVBQ1osTUFBTSxDQUFDLFVBQVUsRUFDakIsTUFBTSxDQUFDLGNBQWMsQ0FDeEIsQ0FBQzs7Ozs7Ozs7O1NBU0wsQ0FBQztLQUVMO0NBRUosQ0FBQSxFQUFHLENBQUMiLCJmaWxlIjoic2lnbnVwLW1vZGFsLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICAgIGFuZ3VsYXJcbiAgICAgICAgLm1vZHVsZShcIm9wZXJhdG9yLWxhbmRpbmdcIilcbiAgICAgICAgLmNvbnRyb2xsZXIoXCJzaWdudXBNb2RhbENvbnRyb2xsZXJcIiwgc2lnbnVwTW9kYWxDb250cm9sbGVyKTtcblxuICAgIHNpZ251cE1vZGFsQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCdzaWdudXBNb2RhbFNlcnZpY2UnLCckdWliTW9kYWwnLCckdGltZW91dCddO1xuXG4gICAgZnVuY3Rpb24gc2lnbnVwTW9kYWxDb250cm9sbGVyKCRzY29wZSwgc2lnbnVwTW9kYWxTZXJ2aWNlLCAkbW9kYWwsICR0aW1lb3V0KSB7XG4gICAgICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICAgICAgJHNjb3BlLiRvbignJHJvdXRlQ2hhbmdlU3RhcnQnLCBmdW5jdGlvbiAoZXZlbnQsIG5ld1VybCwgb2xkVXJsKSB7XG4gICAgICAgICAgICBzaWdudXBNb2RhbFNlcnZpY2UuY2xvc2VNb2RhbCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgc2lnbnVwTW9kYWwgPSBmdW5jdGlvbiAoZmlyc3RuYW1lLCBsYXN0bmFtZSwgb3BlcmF0b3JuYW1lLCBwb3NpdGlvbiwgZW1haWwsIHBob25lLCBjaXR5LCBzdGF0ZSwgZmxlZXRjb3VudCwgc2NoZWR1bGluZ3Rvb2wpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZmlyc3RuYW1lIDogZmlyc3RuYW1lICA/IGZpcnN0bmFtZSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbGFzdG5hbWU6IGxhc3RuYW1lID8gbGFzdG5hbWU6IG51bGwsXG4gICAgICAgICAgICAgICAgb3BlcmF0b3JuYW1lOiBvcGVyYXRvcm5hbWUgPyBvcGVyYXRvcm5hbWU6IG51bGwsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uID8gcG9zaXRpb246IG51bGwsXG4gICAgICAgICAgICAgICAgZW1haWwgOiBlbWFpbCAgPyBlbWFpbCA6IG51bGwsXG4gICAgICAgICAgICAgICAgcGhvbmUgOiBwaG9uZSAgPyBwaG9uZSA6IG51bGwsXG4gICAgICAgICAgICAgICAgY2l0eSA6IGNpdHkgID8gY2l0eSA6IG51bGwsXG4gICAgICAgICAgICAgICAgc3RhdGUgOiBzdGF0ZSAgPyBzdGF0ZSA6IG51bGwsXG4gICAgICAgICAgICAgICAgZmxlZXRjb3VudCA6IGZsZWV0Y291bnQgID8gZmxlZXRjb3VudCA6IG51bGwsXG4gICAgICAgICAgICAgICAgc2NoZWR1bGluZ3Rvb2w6IHNjaGVkdWxpbmd0b29sID8gc2NoZWR1bGluZ3Rvb2w6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUucGFyYW1zID0ge1xuICAgICAgICAgICAgc2lnbnVwRm9ybTogdHJ1ZSxcbiAgICAgICAgICAgIHNpZ251cFRoYW5rczogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUuc2lnbnVwTW9kYWxTdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBtb2RlbCA9IHNpZ251cE1vZGVsKFxuICAgICAgICAgICAgICAgICRzY29wZS5maXJzdG5hbWUsIFxuICAgICAgICAgICAgICAgICRzY29wZS5sYXN0bmFtZSxcbiAgICAgICAgICAgICAgICAkc2NvcGUub3BlcmF0b3JuYW1lLFxuICAgICAgICAgICAgICAgICRzY29wZS5wb3NpdGlvbixcbiAgICAgICAgICAgICAgICAkc2NvcGUuZW1haWwsXG4gICAgICAgICAgICAgICAgJHNjb3BlLnBob25lLFxuICAgICAgICAgICAgICAgICRzY29wZS5jaXR5LCBcbiAgICAgICAgICAgICAgICAkc2NvcGUuc3RhdGUsIFxuICAgICAgICAgICAgICAgICRzY29wZS5mbGVldGNvdW50LFxuICAgICAgICAgICAgICAgICRzY29wZS5zY2hlZHVsaW5ndG9vbCxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vIENvbnRhY3RVc1NlcnZpY2UucG9zdChtb2RlbCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgICRzY29wZS5wYXJhbXMuY29udGFjdFVzRm9ybSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gICAgICAgICAkc2NvcGUucGFyYW1zLnNpZ251cFRoYW5rcyA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vICAgICAgICAgc2lnbnVwTW9kYWxTZXJ2aWNlLmNsb3NlTW9kYWwoKTtcblxuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgIH07XG5cbiAgICB9XG5cbn0pKCk7XG5cblxuXG5cblxuXG5cbiJdfQ==
