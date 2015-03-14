angular.module('APINotack.signupController', ['ionic'])
 .controller('signupCtrl', function ($scope, $ionicPopup, $location, restClient) {

        $scope.signup=function() {
        	var name = $scope.user;
        	var pass = $scope.pass;
        	var repPass = $scope.reppass;
        	
        	//if (!localStorage.getItem("user")) { // Usuario no logueado.
	        	if (name !== undefined && pass !== undefined && repPass !== undefined) { // Campos no vacíos.
	        		pass = sha512(pass);
	        		repPass = sha512(repPass);
	        		if (pass == repPass) { // Los campos de la nueva contraseña coinciden.
	        			var promise = restClient.signup(name, pass);
	                	promise.then(function(signedup) {
	                		if (signedup) {
	                			/* Mostrar popUp. */
	                			var alertPopup = $ionicPopup.alert({
	                				title: 'Usuario registrado',
	                				template: 'Gracias por registrarte en APINotack.'
	                				});
	                			alertPopup.then(function(res) {
	                				$location.path("/login");
	                			});
	                		} else {
	                			/* Mostrar popUp. */
	                			var alertPopup = $ionicPopup.alert({
	                				title: 'Error',
	                				template: 'No se ha podido registrar su usuario.'
	                				});
	                			alertPopup.then(function(res) {
	                				null;
	                			});
	                		}
	                	})
	        		} else { // Nuevas contraseñas no coinciden.
	        			/* Mostrar popUp. */
	        			var alertPopup = $ionicPopup.alert({
	        				title: 'Las contraseñas no coinciden',
	        				template: 'Los campos de la contraseña no coinciden.'
	        				});
	        			alertPopup.then(function(res) {
	        				null;
	        			});
	        		}
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
        	//} else // Usuario logueado.
        		//$location.path("/notes");
        }
})