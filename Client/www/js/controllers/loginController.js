
angular.module('APINotack.loginController', ['ionic',])
 .controller('loginCtrl', function ($scope,$location,$ionicPopup,restClient) {

        $scope.checkLogin=function(){
        	var user = $scope.login.user;
        	var pass = $scope.login.pass;
        	if(user!=null & pass!=null)
        	{
	        	var promise=restClient.login(user,pass);
	        	promise.then(function(logged){
	        		if(logged)
	        		{
	        			var user=new Object();
	        			user.name=user;
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
        	else
       		{
	        	var alertPopup = $ionicPopup.alert({
				     title: 'Login vacío',
				     template: 'Debe rellenar todos los campos.'
				   });
				alertPopup.then(function(res) {
				     ;
				   });
       		}
        }
})