define(['angular',  'controllers/controller', 'angular-route'], function(angular, controller) {
  var app = angular.module('drinkApp', ['ngRoute']);

  app.init = function() {
    angular.bootstrap(document, ['drinkApp']);
  }

  app.service('drinkService', ['$http', function($http) {
    function getDrinks(ingredient) {
      return $http.get('json/' + ingredient + '.json').then(function(response) {
        return response.data.result;
      });
    }

    function getIngredients() {
      return $http.get('json/ingredients.json').then(function(response) {
        return response.data.result;
      });
    }

    return {
      getDrinks: getDrinks,
      getIngredients: getIngredients
    }
  }]);

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

