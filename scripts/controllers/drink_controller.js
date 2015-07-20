define([], function() {
  var controller = function($scope, localStorageService) {;
    $scope.drink = localStorageService.get('drink');
  };

  controller.$inject = ['$scope', 'localStorageService'];

  return controller;
});


