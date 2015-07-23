require.config({
  baseUrl:'/scripts',
  paths: {
    'angular': '../bower_components/angular/angular',
    'angular-route': '../bower_components/angular-route/angular-route',
    'angular-local-storage': '../bower_components/angular-local-storage/dist/angular-local-storage'
  },
  shim: {
    'angular': {
      exports: 'angular'
    },
    'angular-route': {
      deps: ['angular']
    },
    'angular-local-storage': {
      deps: ['angular']
    }
  }
});

require(['app'], function(app) {
  app.init();
});
