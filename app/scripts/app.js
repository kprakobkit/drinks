define([
  'angular',
  'controllers/drinks_controller',
  'controllers/drink_controller',
  'services/drink_service',
  'services/ad_service',
  'routes',
  'directives/err_src',
  'directives/modal_dialog',
  'angular-route',
  'angular-local-storage'
], function(
  angular,
  drinks_controller,
  drink_controller,
  drinkService,
  adService,
  routes,
  errSrcDirective,
  modalDialogDirective
) {
  var app = angular.module('drinkApp', ['ngRoute', 'LocalStorageModule']);

  app.service('drinkService', drinkService);
  app.service('adService', adService);
  app.controller('drinksController', drinks_controller);
  app.controller('drinkController', drink_controller);
  app.controller('navController',  function(){});
  app.directive('errSrc', errSrcDirective);
  app.directive('modalDialog', modalDialogDirective);
  app.config(routes);

  app.init = function() {
    angular.bootstrap(document, ['drinkApp']);
  }

  return app;
});

