'use strict'

/**
 * @ngdoc function
 * @name houseOfIdeasApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the houseOfIdeasApp
 */
;
angular.module('houseOfIdeasApp').controller('RegisterCtrl', function ($scope, $location, Auth, usersFactory) {
  NProgress.done();
  var usersRef = new Firebase("https://hoideas.firebaseio.com/users/");
  $scope.submitRegister = function () {
    NProgress.start();
    Auth.$createUser({
      email: $scope.registerEmail,
      password: $scope.registerPassword
    }).then(function (userData) {
      usersRef.child(userData.uid).set({
        firstname: $scope.registerFirstname,
        lastname: $scope.registerLastname
      }, function () {
        NProgress.done();
        window.location = '/#/login';
      });
    }).catch(function (error) {
      console.log($scope.registerEmail);
      console.log($scope.registerPassword);
      NProgress.done();
      console.log(error);
    });
  };
});