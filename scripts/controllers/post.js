'use strict'

/**
 * @ngdoc function
 * @name houseOfIdeasApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the houseOfIdeasApp
 */
;
angular.module('houseOfIdeasApp').controller('PostCtrl', function ($scope, $location, $interval, $firebaseArray, $firebaseObject, Auth) {
	NProgress.done();
	var postsRef = new Firebase("https://hoideas.firebaseio.com/posts");
	var posts = $firebaseArray(postsRef);
	$scope.auth = Auth;
	$scope.auth.$onAuth(function (authData) {
		$scope.authData = authData;
		$scope.plsMsg = "Please log in to post your idea!";
		$scope.countDown = 5;
		if ($scope.authData) {
			var usersRef = new Firebase("https://hoideas.firebaseio.com/users");
			var authorName = $firebaseObject(usersRef.child($scope.authData.uid));
			$scope.submitPost = function () {
				NProgress.start();
				posts.$add({
					title: $scope.inputTitle,
					content: $scope.inputContent,
					genre: $scope.inputGenre,
					author: {
						uid: $scope.authData.uid,
						firstname: authorName.firstname,
						lastname: authorName.lastname
					},
					timestamp: Firebase.ServerValue.TIMESTAMP
				}).then(function (postsRef) {
					console.log("Success");
					NProgress.done();
					$location.path('/posts/' + postsRef.key());
				});
			};
		} else {
			$interval(function () {
				$scope.countDown--;
				if ($scope.countDown == 0) {
					console.log("Ea");
					$interval.cancel();
					$location.path('/login');
				}
			}, 1000, 5);
		}
	});
});