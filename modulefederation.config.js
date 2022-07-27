const { dependencies } = require('./package.json');

module.exports = {
  name: 'cramfedemo',
  exposes: {
    './App': './src/App.tsx',
  },
  filename: 'remoteEntry.js',
  library: { type: 'umd', name: 'cramfedemo' },
  shared: {
    ...dependencies,
    'react': {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};
