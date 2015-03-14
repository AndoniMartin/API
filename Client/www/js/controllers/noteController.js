angular.module('APINotack.noteController', ['ionic'])
 .controller('noteCtrl', function ($scope, $ionicPopup, $location, restClient) {
	 
	 if(localStorage.getItem("user")) {
		 $scope.save=function(id, title, text) { // Guardar.
			 var promise = restClient.updateNote(id, title, text);
			 promise.then(function() {
				 var alertPopup = $ionicPopup.alert({
					 title: 'Nota modificada',
   				     template: 'La nota ha sido modificada.'
   				   });
   				 alertPopup.then(function(res) {
   				     ;
   				 })
			 })
		 }
		 
		 $scope.add=function(title, body) { // Nueva.
	        	var user = localStorage.getItem("user");
	        	if (title && body) { // Campos no vacíos.
		        	var promise = restClient.signup(user, title, body);
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