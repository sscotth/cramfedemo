const { ModuleFederationPlugin } = require('webpack').container;

const webpackConfigPath = 'react-scripts/config/webpack.config';
const webpackConfig = require(webpackConfigPath);

const override = (config) => {
  config.plugins.push(
    new ModuleFederationPlugin(require('../../modulefederation.config.js')),
  );

  // @TODO: Correct publicPath to the deployed location before production build
  config.output.publicPath =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/'
      : 'https://sscotth.github.io/cramfedemo/';

  return config;
};

require.cache[require.resolve(webpackConfigPath)].exports = (env) =>
  override(webpackConfig(env));

module.exports = require(webpackConfigPath);
