const { shareAll, withModuleFederationPlugin, share } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'mfe2',

  exposes: {
    './Module': './projects/mfe2/src/app/flights-booking/flights-booking.module.ts',
  },

  // Implicitly shared dependencies
  // shared: {
  //   ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  // },

  // Explicitly share packages:
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
