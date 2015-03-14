angular.module('APINotack.addController', ['ionic'])
 .controller('editCtrl', function ($scope, $ionicPopup, $location, restClient) {
	 
	 if(localStorage.getItem("user"))
	 {
		 $scope.save=function(id, title, text)
		 {
			 var promise = restClient.updateNote(id, title, text);
			 promise.then(function() {
				 var alertPopup = $ionicPopup.alert({
					 title: 'Nota modificada',
   				     template: 'La nota ha sido modificada.'
   				   });
   				 alertPopup.then(function(res) {
   				     ;
   				 });
			 }
		 }
	 }
 }