"use strict";

var tC = angular.module("myTCApp", ["ngRoute", "firebase"]);
  // .constant("firebaseURL", "https://resplendent-inferno-6925.firebaseio.com/");

/*
  Define a promise for any view that needs an authenticated user
  before it will resolve (see below)
 */
// let isAuth = (authFactory) => new Promise((resolve, reject) => {
//   if (authFactory.isAuthenticated()) {
//     console.log("User is authenticated, resolve route promise");
//     resolve();
//   } else {
//     console.log("User is not authenticated, reject route promise");
//     reject();
//   }
// });

tC.config(["$routeProvider", 
	function ($routeProvider) {
		$routeProvider
		  // .when("/", {
		  //   templateUrl: "partials/main.html",
		  //   controller: "mainCtrl"
		  // })
		  .when("/", {
		    templateUrl: "partials/login.html",
		    controller: "loginCtrl"
		  })
		  // .when('/selector', {
		  //   templateUrl: 'partials/login.html',
		  //   controller: ""
		  // })
		  .otherwise({
		    redirectTo: "/login"
		  });

}]);
// tC.run([
//   "$location",

//   ($location) => {
//     let myTCAppRef = new Firebase("https://resplendent-inferno-6925.firebaseio.com/");

//     myTCAppRef.onAuth(authData => {
//       if (!authData) {
//         $location.path("/login");
  //     }
  //   });
  // }
// ]);