define([], function() {
  var controller = function($scope, ingredients, drinks, drinkService, $location, localStorageService) {
    $scope.selectedDrink = {};
    $scope.ingredients = ingredients
    $scope.selectedIndex = ingredients.length - 1;
    $scope.isOfAge = localStorageService.get('isOfAge');
    $scope.checkedAge = localStorageService.get('isOfAge');

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

    $scope.checkAge = function() {
      $scope.checkedAge = true;
      localStorageService.set('isOfAge', $scope.isOfAge);
      if(!$scope.isOfAge) {
        window.location.href = 'http://responsibility.org/';
      }
    };
  };

  controller.$inject = ['$scope', 'ingredients', 'drinks', 'drinkService', '$location', 'localStorageService'];
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
