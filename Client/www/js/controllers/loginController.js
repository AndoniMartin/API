
angular.module('APINotack.loginController', ['ionic'])
 .controller('loginCtrl', function ($scope,$location,$ionicPopup,restClient) {

	 var oldUsr = JSON.parse(localStorage.getItem("user"));
	 if(oldUsr)
		$location.path("/notes");
		 
        $scope.checkLogin=function(){
        	var name = $scope.user===undefined?null:$scope.user;
        	var pass = $scope.pass===undefined?null:$scope.pass;
        	
        	if(name && pass)
        	{
        		pass = sha512(pass);
	        	var promise=restClient.login(name,pass);
	        	promise.then(function(logged){
	        		if(logged.data)
	        		{
	        			var user=new Object();
	        			user.name=name;
	        			user.pass=pass;
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