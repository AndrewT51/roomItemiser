var myApp = angular.module('myApp',[]);

myApp.controller('homeCtrl',function ($scope){
	$scope.whichRoom;
	$scope.roomObj = {};


	$scope.rooms =[];
	
	$scope.message = 'hello';
	console.log('loaded');

	$scope.addRoom = function(room){
		$scope.rooms.push(room);
		$scope.room = '';

	}

	$scope.collate = function(item,whichRoom){
		if (!$scope.roomObj[$scope.whichRoom]){
			$scope.roomObj[$scope.whichRoom] = [];

		}
		$scope.roomObj[$scope.whichRoom].push(item);
		console.log($scope.roomObj);
		
	}
	

})