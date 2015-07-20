define([], function() {
  var controller = function($scope, drinkService) {;
    $scope.drink = drinkService.getSelectedDrink();
  };

  controller.$inject = ['$scope', 'drinkService'];

  return controller;
});


