define([], function() {
  var drinkService = function($http) {
    var state = {};

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

    function setSelectedDrink(drink) {
      state.selectedDrink = drink;
    }

    function getSelectedDrink() {
      return state.selectedDrink;
    }

    return {
      getDrinks: getDrinks,
      getIngredients: getIngredients,
      setSelectedDrink: setSelectedDrink,
      getSelectedDrink: getSelectedDrink
    }
  }

  drinkService.$inject = ['$http'];
  return drinkService;
});
