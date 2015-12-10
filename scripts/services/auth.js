'use strict'

/**
 * @ngdoc service
 * @name houseOfIdeasApp.Auth
 * @description
 * # Auth
 * Factory in the houseOfIdeasApp.
 */
;
angular.module('houseOfIdeasApp').factory('Auth', function ($firebaseAuth) {
  var ref = new Firebase("https://hoideas.firebaseio.com/");
  return $firebaseAuth(ref);
});