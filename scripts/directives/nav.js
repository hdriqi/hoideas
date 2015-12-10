'use strict'

/**
 * @ngdoc directive
 * @name houseOfIdeasApp.directive:nav
 * @description
 * # nav
 */
;
angular.module('houseOfIdeasApp').directive('nav', function () {
  return {
    template: '<div></div>',
    restrict: 'E',
    link: function postLink(scope, element, attrs) {
      element.text('this is the nav directive');
    }
  };
});