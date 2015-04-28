var app = angular.module('register', []);

app.controller('CarsController', ['$scope','$http', function($scope, $http){
	$http.get('js/config/cars.json').success(function(data){
		$scope.cars = angular.fromJson(data.cars);
		console.log($scope.cars);
	});

	$scope.removeCar = function(index){
  		  $scope.cars.splice(index, 1);
	}
	$scope.open = function(car){
		$scope.$broadcast('CAR_READY', $scope.cars[car]);	
	}
}]);