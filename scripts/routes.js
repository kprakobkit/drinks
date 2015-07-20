define([
  'controllers/drinks_controller',
  'controllers/drink_controller'
], function(
  drinks_controller,
  drink_controller
) {
  var routes = function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'templates/main.html',
      controller: drinks_controller,
      resolve: drinks_controller.$resolve
    })
    .when('/drink?drinkName', {
      templateUrl: 'templates/drink.html',
      controller: drink_controller
    });
  }

  routes.$inject = ['$routeProvider'];
  return routes;
});
