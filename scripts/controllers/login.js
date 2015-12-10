'use strict'

/**
 * @ngdoc function
 * @name houseOfIdeasApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the houseOfIdeasApp
 */
;
angular.module('houseOfIdeasApp').controller('LoginCtrl', function ($scope, $location, Auth) {
  NProgress.done();
  $scope.auth = Auth;
  $scope.auth.$onAuth(function (authData) {
    $scope.authData = authData;
  });

  $scope.submitLogin = function () {
    NProgress.start();
    var session = $scope.sessionLength ? "default" : "sessionOnly";
    Auth.$authWithPassword({
      email: $scope.loginEmail,
      password: $scope.loginPassword
    }, function (error) {
      if (error) {
        console.log("Wrong email/password");
      }
    }, {
      remember: session
    }).then(function () {
      $location.path('/');
    }).catch(function (error) {
      switch (error.code) {
        case "INVALID_EMAIL":
          $scope.invalidEmail = true;
          $scope.invalidPassword = false;
          $scope.invalidUser = false;
          console.log("The specified user account email is invalid.");
          break;
        case "INVALID_PASSWORD":
          $scope.invalidEmail = false;
          $scope.invalidPassword = true;
          $scope.invalidUser = false;
          console.log("The specified user account password is incorrect.");
          break;
        case "INVALID_USER":
          $scope.invalidEmail = false;
          $scope.invalidPassword = false;
          $scope.invalidUser = true;
          console.log("The specified user account does not exist.");
          break;
        default:
          console.log("Error logging user in:", error);
      }
      NProgress.done();
    });
  };
});