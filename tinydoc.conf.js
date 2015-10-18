var path = require('path');
var config = {
  title: 'react-drill',
  outputDir: 'doc/compiled',
  readme: 'README.md',
  publicPath: '',
  disqus: false,
  layout: 'single-page',
  allowUserSettings: false,
  stylesheet: 'doc/style.less',
};

config.plugins = [
  require('tinydoc/plugins/cjs')({
    navigationLabel: 'API',

    source: [
      'index.js',
      'lib/**/*.js',
    ],

    exclude: [
      /\.test\.js$/,
    ],

    inferModuleIdFromFileName: true,
    useDirAsNamespace: true,

    showNamespaceInModuleHeader: true,
    sortModulesAlphabetically: false,
  }),
];

module.exports = config;