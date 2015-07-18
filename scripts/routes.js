define(['controllers/controller'], function(controller) {
  var routes = function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'template/main.html',
      controller: controller,
      resolve: controller.$resolve
    });
  }

  routes.$inject = ['$routeProvider'];
  return routes;
});
