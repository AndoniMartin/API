
angular.module('APINotack.loginController', ['ionic',])
 .controller('loginCtrl', function ($scope,$location,$ionicPopup,restClient) {

        $scope.checkLogin=function(){
        	var promise=restClient.login(usuario,contraseña);
        	promise.then(function(logged){
        		if(logged)
        		{
        			var user=new Object();
        			user.name=null;
        			user.pass=null;
        			user.logged=logged;
        			localStorage.setItem("user",JSON.stringify(user));
        			$location.path("/notes");
        		}
        		else
        		{
        				   var alertPopup = $ionicPopup.alert({
        				     title: 'Login incorrecto',
        				     template: 'Usuario o contraseña incorrectos'
        				   });
        				   alertPopup.then(function(res) {
        				     ;
        				   });
        		}
        	})
        }
})