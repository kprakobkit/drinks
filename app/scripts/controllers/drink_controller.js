define([], function() {
  var controller = function($scope, localStorageService, adService) {;
    $scope.drink = localStorageService.get('drink');

    $scope.adService = adService;
  };

  controller.$inject = ['$scope', 'localStorageService', 'adService'];
  controller.$resolve = {
    loadTools: ['adService', function(adService) {
      return adService.promise();
    }]
  }

  return controller;
});


