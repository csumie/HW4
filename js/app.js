angular.module('app', []);


angular.module('app').controller("NavController", function( $scope, $http ) {

	let onUserComplete = function (response){
		$scope.user = response.data;
	}

	$http.get('https://api.github.com/users/csumie').then( onUserComplete );
});