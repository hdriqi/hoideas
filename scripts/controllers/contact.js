'use strict'

/**
 * @ngdoc function
 * @name houseOfIdeasApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the houseOfIdeasApp
 */`
;
angular.module('houseOfIdeasApp').controller('ContactCtrl', function ($scope) {
  $scope.submitted = false;
  NProgress.done();
  $scope.submitContact = function(){
  	NProgress.start();
  	$scope.submitted = true;
  	NProgress.done();
  }
});