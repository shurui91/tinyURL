var app = angular.module('tinyUrlApp');

app.controller('homeController', [
	'$scope',
	'$http',
	'$location',
	function($scope, $http, $location) {
		$scope.submit = function() {
			$http
				.post('/api/v1/urls', {
					longUrl: $scope.longUrl
				})
				.success(function(data) {
					$location.path('/urls/' + data.shortUrl);
				});
		};
	}
]);
