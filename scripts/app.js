define(['angular', 'angular-route'], function(angular) {
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

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'template/main.html',
      controller: controller,
      resolve: controller.$resolve
    });
  }]);


  var controller = function($scope, ingredients, drinks, drinkService) {
    $scope.selectedDrink = {};
    $scope.ingredients = ingredients

    $scope.ingredients.forEach(function(ingredient) {
      var ingredientType = ingredient.type;
      ingredient.type = ingredientType.charAt(0).toUpperCase() + ingredientType.substring(1);
    });

    $scope.drinks = drinks;
    $scope.getDrinksWith = function(ingredient) {
      drinkService.getDrinks(ingredient).then(function(drinks) {
        $scope.drinks = drinks;
      });
    }
  };

  controller.$inject = ['$scope', 'ingredients', 'drinks', 'drinkService'];
  controller.$resolve = {
    ingredients: ['drinkService', function(drinkService) {
      return drinkService.getIngredients();
    }],
    drinks: ['drinkService', function(drinkService) {
      return drinkService.getDrinks('whisky');
    }]
  }
  app.controller('mainController', controller);


  return app;
});

