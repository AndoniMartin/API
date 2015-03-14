angular.module('APINotack.configController', ['ionic'])
 .controller('configCtrl', function ($scope,$ionicPopup,restClient) {

        $scope.updatePassword=function(){
        	/* Comprobaciones de las contraseñas. */
        	var oldPass = config.oldpass;
        	var newPass = config.newpass;
        	var repPass = config.reppass;
        	
        	if (newPass == repPass) {
        		/* Comprobar en local Storage la contraseña actual. */
        		
        	}
        	
        	/* Llamando al server. */
        	var promise=restClient.changePass(contraseñaVieja,contraseñaNueva,contraseñaRep);
        	promise.then(function(updated){
        		if(updated) {
        			var user=new Object();
        			user.name=null;
        			user.pass=null;
        			user.logged=logged;
        			localStorage.setItem("user",JSON.stringify(user));
        		} else {
				   var alertPopup = $ionicPopup.alert({
				     title: 'Imposible actualizar contraseña',
				     template: 'Las contraseñas no coinciden o la original es incorrecta.'
				   });
				   alertPopup.then(function(res) {
				     ;
				   });
        		}
        	})
        }
})