define([], function() {
  var errSrc = function($location, localStorageService) {
    return {
      link: function(scope, element, attrs) {
        element.bind('error', function() {
          if (attrs.src != attrs.errSrc) {
            var parentElement = element.parent()[0];
            parentElement.style.display = 'none';
          }
        });
      }
    };
  };

  return errSrc
});
