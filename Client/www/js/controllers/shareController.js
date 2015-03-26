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
	 
	 // A SABER COMO PONER EL JODIDO TIPO DE LA NOTA.
	 $scope.share = function(user, note) {
		 if (user && note) {
			 restClient.shareNote(user, 1, note).then(function() {
				 var alertPopup = $ionicPopup.alert({
					 title: 'Nota compartida',
  				     template: 'La nota ha sido compartida.'
  				   });
         	})
		 }
	 }
	 
	 $scope.unShare = function(user, note) {
		 if (user && note) {
			 restClient.unShareNote(user, 1, note).then(function() {
				 var alertPopup = $ionicPopup.alert({
					 title: 'Nota no compartida',
  				     template: 'La nota ha dejado de compartirse.'
  				   });
         	})
		 }
	 }
 }
