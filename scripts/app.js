define(['angular',  'controllers/controller', 'services/drink_service', 'angular-route'], function(angular, controller, drinkService) {
  var app = angular.module('drinkApp', ['ngRoute']);

  app.init = function() {
    angular.bootstrap(document, ['drinkApp']);
  }

  app.service('drinkService', drinkService);

  app.controller('mainController', controller);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'template/main.html',
      controller: controller,
      resolve: controller.$resolve
    });
  }]);



  return app;
});

