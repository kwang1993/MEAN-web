'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieAddCtrl
 * @description
 * # MovieAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MovieAddCtrl', function ($scope, $location, Movie) {
    $scope.movie = {};
	$scope.saveMovie = function(){
		Movie.post($scope.movie).then(function(){//callback
			$location.path('/movies');
		});
	};
  });
