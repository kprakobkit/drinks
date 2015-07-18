require.config({
  baseUrl:'/scripts',
  paths: {
    'angular': '../bower_components/angular/angular',
    'angular-route': '../bower_components/angular-route/angular-route',
  },
  shim: {
    'angular': {
      exports: 'angular'
    },
    'angular-route': {
      deps: ['angular']
    }
  }
});

require(['app'], function(app) {
  app.init();
});
