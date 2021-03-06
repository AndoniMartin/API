// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','APINotack.loginController','APINotack.services','APINotack.configController','APINotack.signupController','APINotack.shareController','APINotack.notesController','APINotack.noteController'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.directive('notes',function(){
	return{
		templateUrl:'templates/directives/notes.html'
	};
})

.directive('note',function(){
	return{
		templateUrl:'templates/directives/note.html'
	}
})

.directive('actions',function(){
	return{
		templateUrl:'templates/directives/actions.html'
	}
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  
  	 .state('login',{
	 url: '/login',
	 templateUrl:'templates/login.html',
	 controller:'loginCtrl'
	 })
	 .state('notes',{
	 url: '/notes',
	 templateUrl:'templates/notes.html',
	 controller:'notesCtrl'
	 })
	 .state('note',{
	 url: '/note/:noteId',
	 templateUrl:'templates/note.html',
	 controller:'noteCtrl'
	 })
	 .state('configuration',{
		 url:'/configuration',
		 templateUrl:'templates/configuration.html',
		 controller:'configCtrl'
	 })
	 .state('signup',{
		 url:'/signup',
		 templateUrl:'templates/signup.html',
		 controller:'signupCtrl'
	 })
	 .state('share',{
		 url:'/share/:noteId',
		 templateUrl:'templates/share.html',
		 controller:'shareCtrl'
	 })
	 $urlRouterProvider.otherwise('/login');
});
