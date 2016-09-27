var config = {
  title: 'react-drill',
  outputDir: 'docs',
  publicPath: '',
  disqus: false,
  allowUserSettings: false,
  stylesheet: 'doc/style.less',
  styleOverrides: {
    "accent": "#DD4A68",
    "solarized-cyan": "#b58900",
  }
};

config.layoutOptions = {
  rewrite: {
    'README.md': '/index.html'
  },

  bannerLinks: [
    {
      text: 'API',
      href: '/api/index.html'
    }
  ]
};

config.plugins = [
  require('megadoc-theme-qt')({}),
  require('megadoc-plugin-markdown')({
    id: 'articles',
    source: [ 'README.md' ],
  }),

  require('megadoc-plugin-js')({
    id: 'api',
    baseURL: '/api',
    title: 'react-drill',

    source: [
      'index.js',
      'lib/**/*.js',
    ],

    exclude: [
      /\.test\.js$/,
    ],

    inferModuleIdFromFileName: true,
    useDirAsNamespace: true,
    linkToNamespacesInBrowser: true,
    showNamespaceInModuleHeader: true,
    sortModulesAlphabetically: false,

    builtInTypes: [
      {
        name: 'AssertionError',
        href: 'https://www.npmjs.com/package/assertion-error'
      },

      // React
      {
        name: 'React',
        href: 'https://facebook.github.io/react/docs/component-api.html',
      },
      {
        name: 'React.Class',
        href: 'https://facebook.github.io/react/docs/component-api.html',
      },
      {
        name: 'React.Component',
        href: 'https://facebook.github.io/react/docs/component-api.html',
      },

      // Native browser elements
      {
        name: 'Event',
        href: 'https://developer.mozilla.org/en/docs/Web/API/Event',
      },
      {
        name: 'HTMLElement',
        href: 'https://developer.mozilla.org/en/docs/Web/API/HTMLElement',
      },
      {
        name: 'Node',
        href: 'https://developer.mozilla.org/en/docs/Web/API/Node',
      },
      {
        name: 'Selector',
        href: 'https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Selectors',
      }
    ]
  }),
];

module.exports = config;
