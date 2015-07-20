define([
  'angular',
  'controllers/drinks_controller',
  'controllers/drink_controller',
  'services/drink_service',
  'routes',
  'angular-route'
], function(
  angular,
  drinks_controller,
  drink_controller,
  drinkService,
  routes
) {
  var app = angular.module('drinkApp', ['ngRoute']);

  app.service('drinkService', drinkService);
  app.controller('drinksController', drinks_controller);
  app.controller('drinkController', drink_controller);
  app.config(routes);

  app.init = function() {
    angular.bootstrap(document, ['drinkApp']);
  }

  return app;
});

