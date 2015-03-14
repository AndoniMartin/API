angular.module('APINotack.notasController', ['ionic'])
 .controller('configCtrl', function ($scope, $ionicPopup, $location, restClient) {
	 
	 if(localStorage.getItem("user"))
		 {
		 	 $scope.edit=function(note)
		 	 {
		 		$location.path("/edit/"+note.id);
		 	 }
		 	 
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
            	}
		 	 }
		 	 
		 	 $scope.share=function(note)
		 	 {
		 		$location.path("/share/"+note.id);
		 	 }
		 }
 }