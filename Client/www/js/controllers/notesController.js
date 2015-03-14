angular.module('APINotack.notesController', ['ionic'])
 .controller('notesCtrl', function ($scope, $ionicPopup, $location, restClient) {
	 
	 if(localStorage.getItem("user"))
		 {	 	 
		 	 $scope.del=function(note)
		 	 {
		 		var promise=restClient.deleteNote(note.title);
            	promise.then(function(updated) {
            		var alertPopup = $ionicPopup.alert({
   				     title: 'Nota Eliminada',
   				     template: 'La nota '+note.title+' ha sido borrada.'
   				   });
   				   alertPopup.then(function(res) {
   				     ;
   				   });
            	});
		 	 }	 	 
		 }
	 else
	 {
		 $location.path("/login");
	 }
 })