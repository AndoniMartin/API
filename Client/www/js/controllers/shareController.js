angular.module('APINotack.shareController', ['ionic'])
 .controller('shareCtrl', function ($scope, $ionicPopup, $location, restClient) {
	 $scope.users = restClient.getUserList();
	 
	 if(!localStorage.getItem("user"))
		 $location.path("/login");
	 
	 $scope.getUsers = function() {
		 restClient.getUsers().then(function(users){
			 if (users.data)
				 restClient.setUserList(users.data);
			 else
				 ;
		 });
	 }
	 
	 $scope.share = function(user, note, type) {
		 if (user && note && type) {
			 restClient.shareNote(user, note, type).then(function() {
				 var alertPopup = $ionicPopup.alert({
					 title: 'Nota compartida',
  				     template: 'La nota ha sido compartida.'
  				   });
         	})
		 }
	 }
	 
	 $scope.unShare = function(user, note) {
		 if (user && note) {
			 restClient.unShareNote(user, note).then(function() {
				 var alertPopup = $ionicPopup.alert({
					 title: 'Nota no compartida',
  				     template: 'La nota ha dejado de compartirse.'
  				   });
         	})
		 }
	 }
 })
