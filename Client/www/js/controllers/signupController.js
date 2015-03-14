angular.module('APINotack.signupController', ['ionic'])
 .controller('configCtrl', function ($scope, $ionicPopup, $location, restClient) {

        $scope.signup=function() {
        	/* Comprobaciones de las contraseñas. */
        	var name = signup.user;
        	var pass = signup.pass;
        	var repPass = signup.reppass;
        	
        	//if (!localStorage.getItem("user")) { // Usuario no logueado.
	        	if (name !== null && pass !== null && repPass != null) { // Campos no vacíos.
	        		pass = sha512(pass);
	        		repPass = sha512(repPass);
	        		if (pass == repPass) { // Los campos de la nueva contraseña coinciden.
	        			var promise = restClient.signup(name, pass);
	                	promise.then(function(signedup) {
	                		if (signedup) {
	                			/* Guardar el usuario en el local storage. */
	                			var user = new Object();
	                			user.name = username;
	                			user.pass = newPass;
	                			user.logged = logged;
	                			localStorage.setItem("user", JSON.stringify(user));
	                			
	                			/* Mostrar popUp. */
	                			var alertPopup = $ionicPopup.alert({
	                				title: 'Usuario registrado',
	                				template: 'Gracias por registrarte en APINotack.'
	                				});
	                			alertPopup.then(function(res) {
	                				$location.path("/notes");
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