angular.module('APINotack.shareController', ['ionic'])
 .controller('shareCtrl', function ($scope,$location,$ionicPopup,restClient) {
	 
	 if(localStorage.getItem("user"))
	 {
		 
	 }
	 else
	 {
		 $location.path("/login");
   	 }
 })