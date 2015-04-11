angular.module('APINotack.noteController', ['ionic'])
.controller('noteCtrl', function ($scope, $ionicPopup, $location, restClient) {
	if(!localStorage.getItem("user"))
		 $location.path("/login");
	$scope.save = function() {
		//TODO implementar la actualización de la nota
		/*$scope.note = notesListService.getNoteIndex($stateParams.noteId);
		if ($scope.note != null) {
			var promise = restClient.updateNote($scope.note, $scope.title, $scope.text);
			 promise.then(function() {
				 var alertPopup = $ionicPopup.alert({
					 title: 'Nota modificada',
  				     template: 'La nota ha sido modificada.'
  				   });
  				 alertPopup.then(function(res) {
  				     ;
  				 })
			 })
		} else */{
			var user=JSON.parse(localStorage.getItem('user'));
			var title = this.title;
			var text = this.body;
        	if (title!= null && text!=null) { // Campos no vacíos.
	        	var promise = restClient.addNote(user.name, title, text);
                promise.then(function() {
            		$location.path("/notes");
            	});
        	} else { // Algún campo vacío.
        		/* Mostrar popUp. */
    			var alertPopup = $ionicPopup.alert({
    				title: 'Error',
    				template: 'Existe algún campo no rellenado.'
    				});
    			alertPopup.then(function(res) {
    				null;
    			});
        	}
		}
	}
})
