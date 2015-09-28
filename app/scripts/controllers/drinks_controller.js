define([], function() {
  var controller = function($scope, ingredients, drinks, drinkService, localStorageService, $timeout) {
    $scope.selectedDrink = {};
    $scope.modalShown = false;
    $scope.ingredients = ingredients
    $scope.selectedIndex = ingredients.length - 1;

    $scope.ingredients.forEach(function(ingredient) {
      var ingredientType = ingredient.type;
      ingredient.type = ingredientType.charAt(0).toUpperCase() + ingredientType.substring(1);
    });

    $scope.drinks = drinks;

    $scope.getDrinksWith = function(ingredient, index) {
      $scope.selectedIndex = index;

      drinkService.getDrinks(ingredient).then(function(drinks) {
        $scope.drinks = drinks;
      });
    };

    $scope.showSelectedDrink = function(drink) {
      localStorageService.set('drink', drink);
      $location.path("/drink");
    };

    $timeout(function() {
      $scope.modalShown = !localStorageService.get('isOfAge');
    }, 3000);
  };

  controller.$inject = ['$scope', 'ingredients', 'drinks', 'drinkService', 'localStorageService', '$timeout'];
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
