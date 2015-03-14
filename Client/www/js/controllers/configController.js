angular.module('APINotack.configController', ['ionic'])
 .controller('configCtrl', function ($scope, $ionicPopup, $location, restClient) {

        $scope.updatePassword=function(){
        	var oldPass = $scope.oldpass;
        	var newPass = $scope.newpass;
        	var repPass = $scope.reppass;
        	
	        	if (oldPass !== undefined && newPass !== undefined && repPass !== undefined) { // Campos no vacíos.
	        		if (newPass == repPass) { // Los campos de la nueva contraseña coinciden.
		        		
	        			oldPass = sha512(oldPass);
		        		var user = JSON.parse(localStorage.getItem("user"));
		        		
		        		if (oldPass === user.pass) {
		                	restClient.changePass(user.name, oldPass, sha512(newPass)).
		                	then(function(updated) {
		                		if (updated) {
		                			user.pass=sha512(newPass);
		                			localStorage.setItem("user", JSON.stringify(user));
		                			
		                			$ionicPopup.alert({
		                				title: 'Contraseña actualizada',
		                				template: 'La contraseña ha sido correctamente actualizada.'
		                				}).then(function(res) {
		                					null;
		                				}
		                			);
		                		} else {
		                			/* Mostrar popUp. */
		                			$ionicPopup.alert({
		                				title: 'Error',
		                				template: 'No se ha podido actualizar la contraseña.'
		                				}).
		                				then(function(res){
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
	        		console.log(3);
	        		/* Mostrar popUp. */
	    			var alertPopup = $ionicPopup.alert({
	    				title: 'Error',
	    				template: 'Existe algún campo no rellenado.'
	    				});
	    			alertPopup.then(function(res) {
	    				null;
	    			});
	        	}
        	//} else // Usuario no logueado.
        		//$location.path("/login");
        }
})
