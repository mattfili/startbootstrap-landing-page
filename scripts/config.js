'use strict';

angular.module('operator-landing', ['ui.bootstrap', 'ui.router']).config(function ($stateProvider, $urlRouterProvider) {
				$urlRouterProvider.otherwise("/landing");

				$stateProvider.state('landing', {
								url: "/landing",
								templateUrl: "./assets/landing.html",
								controller: 'main',
								controllerAs: 'main'
				});
}).controller('AppCtrl', function ($rootScope, signupModalService, $scope, $location) {
				var vm = this;

				$scope.world = 'hello';

				$rootScope.$on('$routeChangeStart', function (event, next, current) {

								if ($location.path() === '/signup') {
												signupModalService.openModal();
												event.preventDefault();
								}
				});
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL2NvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FFaEUsTUFBTSxDQUFDLFVBQVMsY0FBYyxFQUFFLGtCQUFrQixFQUFFO0FBQ3BELHNCQUFrQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7QUFFekMsa0JBQWMsQ0FDVCxLQUFLLENBQUMsU0FBUyxFQUFFO0FBQ2hCLFdBQUcsRUFBRSxVQUFVO0FBQ2YsbUJBQVcsRUFBRSx1QkFBdUI7QUFDcEMsa0JBQVUsRUFBRSxNQUFNO0FBQ2xCLG9CQUFZLEVBQUUsTUFBTTtLQUNyQixDQUFDLENBQUE7Q0FDTixDQUFDLENBRUQsVUFBVSxDQUFDLFNBQVMsRUFBRSxVQUFVLFVBQVUsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFO0FBQ25GLFFBQUksRUFBRSxHQUFHLElBQUksQ0FBQzs7QUFFZCxVQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQTs7QUFFbkIsY0FBVSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxVQUFVLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFOztBQUVoRSxZQUFJLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxTQUFTLEVBQUU7QUFDaEMsOEJBQWtCLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDL0IsaUJBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUMxQjtLQUVKLENBQUMsQ0FBQztDQUdOLENBQUMsQ0FBQSIsImZpbGUiOiJjb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnb3BlcmF0b3ItbGFuZGluZycsIFsndWkuYm9vdHN0cmFwJywgJ3VpLnJvdXRlciddKVxuXG4uY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcblx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZShcIi9sYW5kaW5nXCIpO1xuXG5cdCRzdGF0ZVByb3ZpZGVyXG5cdCAgICAuc3RhdGUoJ2xhbmRpbmcnLCB7XG5cdCAgICAgIHVybDogXCIvbGFuZGluZ1wiLFxuXHQgICAgICB0ZW1wbGF0ZVVybDogXCIuL2Fzc2V0cy9sYW5kaW5nLmh0bWxcIixcblx0ICAgICAgY29udHJvbGxlcjogJ21haW4nLFxuXHQgICAgICBjb250cm9sbGVyQXM6ICdtYWluJ1xuXHQgICAgfSlcbn0pXG5cbi5jb250cm9sbGVyKCdBcHBDdHJsJywgZnVuY3Rpb24gKCRyb290U2NvcGUsIHNpZ251cE1vZGFsU2VydmljZSwgJHNjb3BlLCAkbG9jYXRpb24pIHtcblx0dmFyIHZtID0gdGhpcztcblxuXHQkc2NvcGUud29ybGQgPSAnaGVsbG8nXG5cbiAgICAkcm9vdFNjb3BlLiRvbignJHJvdXRlQ2hhbmdlU3RhcnQnLCBmdW5jdGlvbiAoZXZlbnQsIG5leHQsIGN1cnJlbnQpIHtcblxuICAgICAgICBpZiAoJGxvY2F0aW9uLnBhdGgoKSA9PT0gJy9zaWdudXAnKSB7XG4gICAgICAgICAgICBzaWdudXBNb2RhbFNlcnZpY2Uub3Blbk1vZGFsKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICB9KTtcblxuXG59KVxuIl19
