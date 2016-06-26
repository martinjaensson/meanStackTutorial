var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("Hello World from controller");
	
	var refresh = function() {
		$http.get('/contactlist').success(function(response) {
			console.log('I got the data I requested');
			$scope.contacts = response;
			$scope.contact = "";
		});
	};
	refresh();
	$scope.addContact = function(){
		console.log($scope.contact);
		$http.post('/contactlist', $scope.contact).success(function(response){
			console.log(response);
			refresh();
		});
	};

	$scope.removeContact = function(id) {
		console.log(id);
		$http.delete('/contactlist/' + id).success(function(response) {
			refresh();
		});

	}

	$scope.editContact = function(id) {
		console.log(id);
		$http.get('/contactlist/' + id).success(function(response) {
			console.log(response.name);
			$scope.contact = response;		
		});
	};

	$scope.updateContact = function() {
		console.log($scope.contact._id);
		$http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response) {
			refresh();
		});
	};

	$scope.clearInput = function() {
		$scope.contact = "";
	};


}]);
