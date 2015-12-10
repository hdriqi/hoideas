'use strict'

/**
 * @ngdoc function
 * @name houseOfIdeasApp.controller:BrowseCtrl
 * @description
 * # BrowseCtrl
 * Controller of the houseOfIdeasApp
 */
;
angular.module('houseOfIdeasApp').controller('BrowseCtrl', function ($scope, $firebaseArray, Auth) {
  var postsRef = new Firebase("https://hoideas.firebaseio.com/posts");
  $scope.auth = Auth;
  $scope.loaded = false;
  $scope.auth.$onAuth(function (authData) {
    $scope.authData = authData;
  });

  $scope.ideas = $firebaseArray(postsRef);
  $scope.ideas.$loaded().then(function () {
    $scope.ideas.sort(function (x, y) {
      return y.timestamp - x.timestamp;
    });
    var ideasArray = [];
    var tempArray = [];
    var counter = 1;
    for (var i = 0; i < $scope.ideas.length; i++) {
      tempArray.push($scope.ideas[i]);
      if (tempArray.length == 4 || i + 1 == $scope.ideas.length) {
        ideasArray.push(tempArray);
        tempArray = [];
        counter++;
      }
    };
    $scope.rowz = ideasArray;
    NProgress.done();
    $scope.loaded = true;
  });
});