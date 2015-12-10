'use strict'

/**
 * @ngdoc function
 * @name houseOfIdeasApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the houseOfIdeasApp
 */
;
angular.module('houseOfIdeasApp').controller('CategoryCtrl', function ($scope, $routeParams, $firebaseArray) {
  var postsRef = new Firebase("https://hoideas.firebaseio.com/posts");
  $scope.ideas = $firebaseArray(postsRef);
  $scope.ideas.$loaded().then(function () {
    $scope.ideas.sort(function (x, y) {
      return y.timestamp - x.timestamp;
    });
    var ideasArray = [];
    var tempArray = [];

    for (var i = 0; i < $scope.ideas.length; i++) {
      var myGenre = $scope.ideas[i].genre;

      console.log($routeParams.category);
      if (myGenre.toLowerCase() == $routeParams.category) {
        console.log("ea");
        tempArray.push($scope.ideas[i]);
      }
      if (tempArray.length == 4 || i + 1 == $scope.ideas.length) {
        ideasArray.push(tempArray);
        tempArray = [];
      }
    }
    $scope.rowz = ideasArray;
    NProgress.done();
    $scope.loaded = true;
  });
});