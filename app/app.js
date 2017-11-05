(function() {
  const learnAiApp = angular.module('learnAiApp', ['ngMaterial', 'ngRoute']);
  learnAiApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl : 'landing.html'
    })
    .when('/profile', {
      templateUrl : 'profile.html'
    })
    .when('/home', {
      templateUrl : 'home.html'
    })
    .when('/learn', {
      templateUrl : 'learn.html'
    })
    .when('/analytics', {
      templateUrl : 'analytics.html'
    })
    .when('/assessment', {
      templateUrl : 'assessment.html'
    })
    .when('/candidates', {
      templateUrl : 'candidates.html'
    })
    .when('/results', {
      templateUrl : 'results.html'
    })
    .otherwise({
      templateUrl : '404.html'
    });
  });
})();