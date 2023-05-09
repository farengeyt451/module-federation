const { shareAll, withModuleFederationPlugin, share } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  // Explicitly defined mfe route
  remotes: {
    // mfe1: 'http://localhost:4201/remoteEntry.js',
  },

  // Implicitly shared dependencies
  // shared: {
  //   ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  // },

  // Share each dependency explicitly
  shared: share({
    '@angular/core': {
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    },
    '@angular/common': {
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    },
    '@angular/common/http': {
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    },
    '@angular/router': {
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    },
  }),

  // Explicitly share mono-repo libs:
  sharedMappings: ['auth-lib'],
});
