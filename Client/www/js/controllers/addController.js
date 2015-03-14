angular.module('APINotack.addController', ['ionic'])
 .controller('addCtrl', function ($scope, $ionicPopup, $location, restClient) {

        $scope.add=function() {
        	var title = $scope.title;
        	var body = $scope.body;
        	var user = localStorage.getItem("user");
        	if (user) { // Usuario logueado.
	        	if (title && body) { // Campos no vacíos.
	        		var promise = restClient.signup(user, title, body);
	                promise.then(function() {
                		/* Mostrar popUp. */
            			var alertPopup = $ionicPopup.alert({
            				title: 'Nota añadida',
            				template: 'La nueva nota ha sido correctamente añadida.'
            				});
            			alertPopup.then(function(res) {
            				$location.path("/notes");
            			});
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
        	} else // Usuario no logueado.
        		$location.path("/login");
        }
})