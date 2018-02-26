var path = require('path')
var configureJS = config => Object.assign({}, {
  baseURL: '/api',
  title: 'FMA API',
  showSourcePaths: false,
  hideBlankParameters: true,
  hideBlankReturns: true,
  hidePrivateSymbols: true,
  expandReturnedFunctionSignatures: true,
}, config)

const sidebarLayout = {
  name: 'Core::Sidebar',
  outlets: [
    {
      name: 'Markdown::Browser',
      using: 'articles'
    },
    {
      name: 'Core::SidebarHeader',
      options: {
        text: 'API'
      }
    },
    {
      name: 'JS::Browser',
      using: 'api'
    },
    {
      name: 'Core::SidebarHeader',
      options: {
        text: 'Examples'
      }
    },
    {
      name: 'Markdown::Browser',
      using: 'examples'
    },
  ]
}

var config = {
  title: 'react-drill',
  outputDir: path.resolve(__dirname, 'docs'),
  assetRoot: path.resolve(__dirname),

  serializer: [ 'megadoc-html-serializer', {
    theme: 'megadoc-theme-minimalist',
    rewrite: {
      '/readme.html': '/index.html'
    },

    footer: '',
    styleSheet: path.resolve(__dirname, 'doc/style.less'),

    banner: false,
    fixedSidebar: true,
    sidebarWidth: 320,
    resizableSidebar: false,

    layoutOptions: {
      customLayouts: [
        {
          match: { by: 'namespace', on: 'api' },
          regions: [
            {
              name: 'Core::Content',
              options: { framed: true },
              outlets: [
                {
                  name: 'JS::Module'
                },
              ]
            },
            sidebarLayout
          ]
        },
        {
          match: { by: 'namespace', on: ['articles', 'examples'] },
          regions: [
            {
              name: 'Core::Content',
              options: { framed: true },
              outlets: [
                {
                  name: 'Markdown::Document'
                },
              ]
            },
            sidebarLayout
          ]
        }
      ]
    }
  }]
};

config.sources = [
  {
    id: 'articles',
    include: [
      'README.md',
      'CHANGES.md',
      'UPGRADE.md',
    ],

    processor: [ 'megadoc-plugin-markdown', {
      baseURL: '/',
      title: 'React Drill',
      sanitize: true
    } ],
  },
  {
    id: 'examples',
    include: [
      'examples/*.md'
    ],

    processor: [ 'megadoc-plugin-markdown', {
      baseURL: '/examples',
      title: 'React Drill',
      sanitize: true
    } ],
  },

  {
    id: 'api',
    include: [
      'index.js',
      'lib/**/*.js',
    ],

    exclude: [
      '**/*.test.js',
    ],

    processor: [ 'megadoc-plugin-js', configureJS({
      id: 'api',
      baseURL: '/api',
      title: 'react-drill',

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

    }) ],
  },
];

module.exports = config;
