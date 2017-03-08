var app = angular.module('tinyUrlApp');

app.controller('urlController', 
	['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
		$http.get("/api/v1/urls/" + $routeParams.shortUrl)
			.success(function (data) {
				$scope.shortUrl = data.shortUrl;
				$scope.longUrl = data.longUrls;
				$scope.shortUrlToShow = "http://localhost:3000/" + data.shortUrl;
			})
	}]);