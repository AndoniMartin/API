angular.module('APINotack.loginController', ['ionic'])
 .controller('loginCtrl', function ($scope,$location,$ionicPopup,restClient) {
	 
	 if(localStorage.getItem("user"))
	 {
		 
	 }
	 else
	 {
		 $location.path("/login");
   	 }
 }