var myTC = angular.module("myTC", []);

myTC.config(['$routeProvider', function ($routeProvider) {

  $routeProvider
  .when('/', {
    templateUrl: 'partials/main.html',
    controller: "mainCtrl"
  })
  .when('/login', {
    templateUrl: 'partials/login.html',
    controller: "loginCtrl"
  })
  .when('/selector', {
    templateUrl: 'partials/login.html',
    controller: ""
  })
  .otherwise({
    redirectTo: '/'
  });

}]);