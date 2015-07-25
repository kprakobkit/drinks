define(['underscore'], function(_) {
  var adService = function($http) {
    var tools;

    function promise() {
      return $http.get('json/tools.json').then(function(_) {
        return tools = _.data;
      });
    };

    function getLinkFor(id) {
      return _.filter(tools, function(tool) {
        return tool.id === id;
      })[0].affiliate_link;
    };

    return {
      promise: promise,
      getLinkFor: getLinkFor
    }
  };

  adService.$inject = ['$http'];
  return adService
});
