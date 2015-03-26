angular.module('APINotack.noteController', ['ionic'])
.controller('noteCtrl', function ($scope, $ionicPopup, $location, restClient) {
	if(!localStorage.getItem("user"))
		 $location.path("/login");
	$scope.save = function() {
		$scope.note = notesListService.getNoteIndex($stateParams.noteId);
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
		} else {
			var user = localStorage.getItem("user");
        	if (title && body) { // Campos no vacíos.
	        	var promise = restClient.addNote(user, $scope.title, $scope.text);
                promise.then(function() {
            		$location.path("/notes");
            	})
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
