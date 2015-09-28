define([], function() {
  var modalDialog = function(localStorageService) {
    return {
      restrict: 'E',
      scope: {
        show: '='
      },
      link: function(scope, element, attrs) {
        scope.hideModal = function() {
          scope.show = false;
        };

        scope.checkAge = function() {
          localStorageService.set('isOfAge', scope.isOfAge);
          if(!scope.isOfAge) {
            window.location.href = 'http://responsibility.org/';
          } else {
            scope.hideModal();
          }
        };
      },
      templateUrl: 'templates/modal_dialog.html'
    };
  }

  modalDialog.$inject = ['localStorageService'];

  return modalDialog
});
