'use strict'

/**
 * @ngdoc function
 * @name houseOfIdeasApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the houseOfIdeasApp
 */
;
angular.module('houseOfIdeasApp').controller('NavigationCtrl', function ($scope, $location, Auth) {
  $scope.isActive = function (viewLocation) {
    return viewLocation == $location.path();
  };

  $scope.auth = Auth;
  $scope.auth.$onAuth(function (authData) {
    $scope.authData = authData;
  });
});