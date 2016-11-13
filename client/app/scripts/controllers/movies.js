'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  /*  .controller('MoviesCtrl', function ($scope) {
  $scope.movies = [
		{title: 'new hope', url: 'http://youtube.com/embed/lg3_CFmnU7k'},
		{title: 'empire', url: 'http://youtube.com/embed/96v4XraJEPI'},
		{title: 'Jedi', url: 'http://youtube.com/embed/5UfA_aKBGMc'}
	];*/
	.controller('MoviesCtrl', function ($scope, Movie) {//add factory
		$scope.movies = Movie.getList().$object;//use restangular
  });
