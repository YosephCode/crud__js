app.controller('ModalController', function ($scope) {

    $scope.showModal = false;

    $scope.toggleModal = function(value) {
		$scope.showModal = !$scope.showModal;
    };

    $scope.setState = function(name) {
    	$scope.$parent.titleModal = name;
		$scope.template = 'js/modals/templates/modal-'+ name +'.html';
	}

	$scope.addCar = function(car) {
		var crud = "addCar";
		$scope.$parent.cars.push(car);
		$scope.showModal = false;

		$scope.$emit('LAST_IMAGE_CAR_ADD', crud);	
	}

	$scope.$on('CAR_READY', function (event, car) {
        $scope.updateCar = car;
        $scope.setState('editar'); 
    });

	$scope.update = function(car){
		var crud = "update";
		$scope.$emit('LAST_IMAGE_CAR_ADD', crud, car);		
		$scope.showModal = false;
	}
});