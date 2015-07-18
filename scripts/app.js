define(['angular',  'controllers/controller', 'services/drink_service', 'routes', 'angular-route'], function(angular, controller, drinkService, routes) {
  var app = angular.module('drinkApp', ['ngRoute']);

  app.service('drinkService', drinkService);
  app.controller('mainController', controller);
  app.config(routes);

  app.init = function() {
    angular.bootstrap(document, ['drinkApp']);
  }

  return app;
});

