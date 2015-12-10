'use strict'

/**
 * @ngdoc service
 * @name houseOfIdeasApp.usersFactory
 * @description
 * # usersFactory
 * Factory in the houseOfIdeasApp.
 */
;
angular.module('houseOfIdeasApp').factory('usersFactory', function ($firebaseObject) {
  return function () {
    var usersRef = new Firebase("https://hoideas.firebaseio.com/users/");
    return $firebaseObject(usersRef);
  };
});