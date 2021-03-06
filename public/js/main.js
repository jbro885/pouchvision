require.config({
  paths: {
    'jquery': 'libs/jquery',
    'jquery-color': 'libs/jquery-color',
    'backbone': 'libs/backbone',
    'underscore': 'libs/underscore',
    'd3': 'libs/d3.v3',
    'app': 'src/app',
    'store': 'libs/store',
    'templates': 'templates/template',
    'pouch': 'libs/pouch',
    'bootstrap': 'libs/bootstrap',
    'inspector_json': 'libs/inspector_json',
    'codemirror': 'libs/codemirror',
    'javascript': 'libs/javascript',
    'pouchvision': 'src/pouchvision',
    'intro': 'libs/intro',
  },
  shim: {
    'underscore': {
      deps: [],
      exports: '_'
    },
    'javascript': {
      deps: ['codemirror'],
      exports: 'CodeMirror'
    },
    'store': {
      deps: [],
      exports: 'store'
    },
    'pouchvision': {
      deps: [],
      exports: 'PouchVision'
    },
    'inspector_json': {
      deps: ['jquery', 'underscore', 'store'],
      exports: 'InspectorJSON'
    },
    'pouch': {
      deps: [],
      exports: 'Pouch'
    },
    'd3': {
      deps: [],
      exports: 'd3'
    },
    'bootstrap': {
      deps: ['jquery'],
      exports: 'bootstrap'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'jquery-color': {
      deps: ['jquery'],
      exports: 'jquery-color'
    },
    'intro': {
      deps: [],
      exports: 'introJs'
    }
  }
});

require(['app'], function(PouchVision) {
  window.router = new PouchVision.Routers.MainRouter();
  Backbone.history.start();
});
