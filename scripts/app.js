'use strict'

/**
 * @ngdoc overview
 * @name houseOfIdeasApp
 * @description
 * # houseOfIdeasApp
 *
 * Main module of the application.
 */
;
angular.module('houseOfIdeasApp', ['ngRoute', 'firebase']).config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  }).when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl',
    controllerAs: 'about'
  }).when('/register', {
    templateUrl: 'views/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'register'
  }).when('/post', {
    templateUrl: 'views/post.html',
    controller: 'PostCtrl',
    controllerAs: 'post'
  }).when('/posts/:ideas', {
    templateUrl: 'views/ideas.html',
    controller: 'IdeasCtrl',
    controllerAs: 'ideas'
  }).when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  }).when('/browse', {
    templateUrl: 'views/browse.html',
    controller: 'BrowseCtrl',
    controllerAs: 'browse'
  }).when('/browse/:category', {
    templateUrl: 'views/browse.html',
    controller: 'CategoryCtrl',
    controllerAs: 'category'
  }).when('/search/:query', {
    templateUrl: 'views/search.html',
    controller: 'SearchCtrl',
    controllerAs: 'search'
  }).when('/terms', {
    templateUrl: 'views/terms.html',
    controller: 'TermsCtrl',
    controllerAs: 'terms'
  }).when('/contact', {
    templateUrl: 'views/contact.html',
    controller: 'ContactCtrl',
    controllerAs: 'contact'
  }).otherwise({
    redirectTo: '/'
  });
});