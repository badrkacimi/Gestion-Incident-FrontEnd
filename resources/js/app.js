angular.module('myApp',['ngRoute','ficheController']) 

// The ngRoute module routes your application to different pages without reloading the entire app.
// Thanks to routeProvider we can define what page to display when you click a link.
.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'views/home.html'
	})
	.when('/fiches',{	
		templateUrl:'views/fiches.html',
		controller:'ficheController'
	})
}]);