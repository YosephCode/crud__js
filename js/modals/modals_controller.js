app.controller('ModalController', function ($scope) {
    $scope.showModal = false;
	//$scope.templateType = null;

    $scope.toggleModal = function(value){
		$scope.showModal = !$scope.showModal;
    };

    $scope.setState = function(name){
		$scope.template = 'js/modals/modal-'+ name +'.html';
	}

	$scope.addCar = function(car){
		console.log(car);
		console.log($scope.cars);
		$scope.$parent.cars.push(car);
		$scope.showModal = false;
		delete $scope.car;
	}


	$scope.$on('CAR_READY', function (event, car) {
        $scope.updateCar = car;
        $scope.setState('editar'); //interesse do usuário logado
        
    });

	$scope.update = function(car){
		$scope.showModal = false;
	}
});
/*$scope.$broadcast('AUTH_USER_READY');*/