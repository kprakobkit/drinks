define([
  'controllers/drinks_controller',
  'controllers/drink_controller',
  'services/ad_service'
], function(
  drinks_controller,
  drink_controller,
  ad_service
) {
  var routes = function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'templates/main.html',
      controller: drinks_controller,
      resolve: drinks_controller.$resolve
    })
    .when('/drink', {
      templateUrl: 'templates/drink.html',
      controller: drink_controller,
      resolve: drink_controller.$resolve
    });
  }

  routes.$inject = ['$routeProvider'];
  return routes;
});
