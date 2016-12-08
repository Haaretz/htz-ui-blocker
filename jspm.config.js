SystemJS.config({
  nodeConfig: {
    "paths": {
      "htz-ui-blocker/": "src/"
    }
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.10"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "htz-ui-blocker": {
      "main": "index.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "htz-dispatch-event": "github:haaretz/htz-dispatch-event@1.0.3"
  },
  packages: {}
});
