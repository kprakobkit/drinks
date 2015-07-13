var app = angular.module('drinkApp', ['ngRoute']);

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
    templateUrl: 'main.html',
    controller: controller,
    resolve: controller.$resolve
  });
}]);

var controller = function($scope, ingredients, drinks, drinkService) {
  $scope.ingredients = ingredients;
  $scope.drinks = drinks;
  $scope.getDrinkWith = function(ingredient) {
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
