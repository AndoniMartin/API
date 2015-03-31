angular.module('APINotack.notesController', ['ionic'])
 .controller('notesCtrl', function ($scope, $ionicPopup, $location, restClient, notesListService) {
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
		 restClient.deleteNote(note.title)
    	.then(function(updated) {
    		$ionicPopup.alert({
			     title: 'Nota Eliminada',
			     template: 'La nota '+note.title+' ha sido borrada.'
			   })
			   .then(function(res) {
			     ;
			   });
    	});
 	 }
 })