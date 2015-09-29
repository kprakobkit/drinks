define([], function() {
  var drinkService = function($http) {

    function getDrinks(ingredient) {
      return $http.get('json/' + ingredient.toLowerCase() + '.json').then(function(response) {
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
  }

  drinkService.$inject = ['$http'];
  return drinkService;
});
