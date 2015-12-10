'use strict'

/**
 * @ngdoc service
 * @name houseOfIdeasApp.loadingbar
 * @description
 * # loadingbar
 * Factory in the houseOfIdeasApp.
 */
;
angular.module('houseOfIdeasApp').factory('loadingbar', function () {
  // Service logic
  // ...

  var meaningOfLife = 42;

  // Public API here
  return {
    someMethod: function someMethod() {
      return meaningOfLife;
    }
  };
});