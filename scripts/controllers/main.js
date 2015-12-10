'use strict'

/**
 * @ngdoc function
 * @name houseOfIdeasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the houseOfIdeasApp
 */
;
angular.module('houseOfIdeasApp').controller('MainCtrl', function ($scope, $location, $firebaseArray, Auth) {
  var postsRef = new Firebase("https://hoideas.firebaseio.com/posts");
  $scope.auth = Auth;
  $scope.loaded = false;
  $scope.auth.$onAuth(function (authData) {
    $scope.authData = authData;
  });
  $scope.ideas = $firebaseArray(postsRef);
  $scope.ideas.$loaded().then(function () {
    NProgress.done();
    $scope.counter = 0;
    $scope.loaded = true;
  });

  $scope.buttonLogout = function () {
    $scope.auth.$unauth();
    $location.path('/login');
  };
});