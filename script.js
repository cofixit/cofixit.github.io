// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// create the controller and inject Angular's $scope
scotchApp.config(function($routeProvider, $locationProvider) {
	$routeProvider
		// route for the home page
		.when('/', {
			templateUrl: 'pages/home.html',
			controller: 'mainController'
		})

		// route for the about page
		.when('/infiniteProgress', {
			templateUrl: 'pages/progress.html',
			controller: 'progressController'
		})

		// route for the contact page
		.when('/contact', {
			templateUrl: 'pages/contact.html', 
			controller: 'contactController'
		});
	// $locationProvider.html5Mode(true);
});

scotchApp.controller('mainController', function($scope) {
	// create a message to display in our view
	console.log('home');
	$scope.message = 'Everyone come and see how good I look!';
});

scotchApp.controller('progressController', function($scope) {
	console.log('about');
	var i = 0;
	setInterval(function() {
		$scope.progress = 100 * (1 - Math.pow(Math.E, i));
		$scope.$apply()
		i -= 0.01;
	}, 100);
})

scotchApp.controller('contactController', function($scope) {
	console.log('contact');
	$scope.message = 'Contact us! JK. This is just a demo.';
});