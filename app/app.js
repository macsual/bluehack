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
    .otherwise({
      templateUrl : '404.html'
    });
  });
})();