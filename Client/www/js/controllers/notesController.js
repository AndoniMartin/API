angular.module('APINotack.notesController', ['ionic'])
 .controller('notesCtrl', function ($scope, $ionicPopup, $location, restClient,notesListService) {
	 $scope.notes=notesListService.getNoteList();
	 if(!localStorage.getItem("user"))
		 $location.path("/login");
	 
	 $scope.getNotes=function(){
		 var user=JSON.parse(localStorage.getItem('user'));
		 restClient.getNotes(user.name,user.pass).then(function(notes){
			 if(notes.data)
				 notesListService.setNoteList(notes.data);
			 else
				 ;
				//TODO: Popup error
		 });
	 }
	 $scope.deleteNote=function(note) {
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
 })