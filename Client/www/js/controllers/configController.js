angular.module('APINotack.configController', ['ionic'])
 .controller('configCtrl', function ($scope,$ionicPopup,restClient) {

        $scope.updatePassword=function(){
        	/* Comprobaciones de las contraseñas. */
        	var oldPass = config.oldpass;
        	var newPass = config.newpass;
        	var repPass = config.reppass;
        	
        	if (oldPass !== null && newPass !== null & repPass != null) { // Campos no vacíos.
        		newPass = sha512(newPass);
        		repPass = sha512(repPass);
        		if (newPass == repPass) { // Los campos de la nueva contraseña coinciden.
	        		/* Comprobar en local Storage la contraseña actual. */
	        		oldPass = sha512(oldPass);
	        		var savedPass = JSON.parse(localStorage.getItem("user")).pass;
	        		if (oldPass == savedPass) {
	        			var username = JSON.parse(localStorage.getItem("user")).name;
	        			/* Llamando al server. */
	                	var promise=restClient.changePass(username, oldPass, newPass);
	                	promise.then(function(updated) {
	                		if (updated) {
	                			/* Guardar el usuario en el local storage. */
	                			var user = new Object();
	                			user.name = username;
	                			user.pass = newPass;
	                			user.logged = logged;
	                			localStorage.setItem("user", JSON.stringify(user));
	                			
	                			/* Mostrar popUp. */
	                			var alertPopup = $ionicPopup.alert({
	                				title: 'Contraseña actualizada',
	                				template: 'La contraseña ha sido correctamente actualizada.'
	                				});
	                			alertPopup.then(function(res) {
	                				null;
	                			});
	                		} else {
	                			/* Mostrar popUp. */
	                			var alertPopup = $ionicPopup.alert({
	                				title: 'Error',
	                				template: 'No se ha podido actualizar la contraseña.'
	                				});
	                			alertPopup.then(function(res) {
	                				null;
	                			});
	                		}
	                	})
	        		} else { // Contraseña antigua no coincide.
	        			/* Mostrar popUp. */
            			var alertPopup = $ionicPopup.alert({
            				title: 'Las contraseñas no coinciden',
            				template: 'Su antigua contraseña no coincide con la almacenada.'
            				});
            			alertPopup.then(function(res) {
            				null;
            			});
	        		}
        		} else { // Nuevas contraseñas no coinciden.
        			/* Mostrar popUp. */
        			var alertPopup = $ionicPopup.alert({
        				title: 'Las contraseñas no coinciden',
        				template: 'Los campos de la nueva contraseña no coinciden.'
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
        }
})