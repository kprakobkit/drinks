define([], function() {
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

  return controller;
});


