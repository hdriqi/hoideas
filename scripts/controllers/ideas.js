'use strict'

/**
 * @ngdoc function
 * @name houseOfIdeasApp.controller:IdeasCtrl
 * @description
 * # IdeasCtrl
 * Controller of the houseOfIdeasApp
 */
;
angular.module('houseOfIdeasApp').controller('IdeasCtrl', function ($scope, $routeParams, $timeout, $firebaseObject, $firebaseArray, Auth) {
	$scope.auth = Auth;
	var postsRef = new Firebase("https://hoideas.firebaseio.com/posts");
	$scope.myPost = true;
	var postRef = postsRef.child($routeParams.ideas);
	var commentRef = postRef.child('comment');
	var similarRef = postRef.child('similar');
	var ratingRef = postRef.child('rating');
	$scope.post = $firebaseObject(postRef);
	$scope.comments = $firebaseArray(commentRef);

	$scope.similars = $firebaseArray(similarRef);
	$scope.ratings = $firebaseArray(ratingRef);
	$scope.counter = 0;
	$scope.auth.$onAuth(function (authData) {
		$scope.authData = authData;

		$scope.ratings.$loaded().then(function () {
			for (var i = 0; i < $scope.ratings.length; i++) {
				if ($scope.ratings[i].uid == $scope.authData.uid) {
					$scope.liked = true;
				}
				$scope.counter += 1;
			};
		});

		$scope.submitComment = function () {
			var list = $firebaseArray(postRef.child('comment'));
			var usersRef = new Firebase("https://hoideas.firebaseio.com/users");
			var authorName = $firebaseObject(usersRef.child($scope.authData.uid));
			authorName.$loaded().then(function () {
				list.$add({
					comment: $scope.inputComment,
					author: {
						firstname: authorName.firstname,
						lastname: authorName.lastname
					},
					timestamp: Firebase.ServerValue.TIMESTAMP
				}).then(function () {
					console.log("Ntaps");
					$scope.inputComment = "";
				});
			});
		};

		$scope.submitSimilar = function () {
			var list = $firebaseArray(postRef.child('similar'));
			list.$add({
				title: $scope.inputTitle,
				link: $scope.inputLink
			}).then(function () {
				console.log("ntaps");
				$scope.inputTitle = "";
				$scope.inputLink = "";
			});
		};

		$scope.inputRating = function () {
			var list = $firebaseArray(postRef.child('rating'));
			list.$add({
				uid: $scope.authData.uid
			}).then(function () {
				console.log('ntaps');
				$scope.counter += 1;
				$scope.liked = true;
			});
		};
	});
	
	$scope.post.$loaded().then(function () {
		NProgress.done();
	});
});