var app = angular.module('register', []);

app.controller('CarsController', ['$scope','$http', function($scope, $http){
	$http.get('js/config/cars.json').success(function(data){
		$scope.cars = angular.fromJson(data.cars);
		
		var crud = "read";
		$scope.$broadcast('LAST_IMAGE_CAR_ADD', crud);	
	});

	$scope.removeCar = function(index){
  		$scope.cars.splice(index, 1);
	}
	
	$scope.open = function(car){
		$scope.$broadcast('CAR_READY', $scope.cars[car]);
	}

	$scope.$on('LAST_IMAGE_CAR_ADD', function (event, value, newValue) {
        
        if(value === "read") {
        	
        	angular.forEach($scope.cars, function(obj) {
			    if(obj.imagem == null || obj.imagem == undefined || obj.imagem == "")   {
			    	obj.imagem = "https://contaazul.com/img/fb_thumb3.jpg";
			    }
		    });
        }else if(value === "addCar") {
        	
        	if($scope.cars[$scope.cars.length-1].imagem == null || $scope.cars[$scope.cars.length-1].imagem == undefined || $scope.cars[$scope.cars.length-1].imagem == ""){
				$scope.cars[$scope.cars.length-1].imagem = "https://contaazul.com/img/fb_thumb3.jpg";
			}
			
        }else if(value === "update"){
        	
        	if(newValue.imagem == null || newValue.imagem == undefined || newValue.imagem == ""){
				newValue.imagem = "https://contaazul.com/img/fb_thumb3.jpg";
			}
        }
    });


}]);