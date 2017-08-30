const path = require('path');
const sidebar = {
  name: 'Layout::Sidebar',
  outlets: [
    {
      name: 'Markdown::Browser',
      using: 'articles'
    },
    {
      name: 'Layout::SidebarHeader',
      options: {
        text: 'API'
      }
    },
    {
      name: 'CJS::ClassBrowser',
      using: 'js',
    },

    {
      name: 'Layout::SidebarSearch',
      options: {
        text: 'Search'
      }
    },
  ]
}

const layout = [
  {
    match: [
      { by: 'namespace', on: 'js' },
      { by: 'type', on: [ 'Document', 'DocumentEntity' ] }
    ],
    regions: [
      {
        name: 'Layout::Content',
        options: { framed: true },
        outlets: [
          { name: 'CJS::ModuleHeader' },
          { name: 'CJS::ModuleIndex' },
          { name: 'CJS::ModuleBody' },
        ]
      },

      sidebar
    ]
  },

  {
    match: { by: 'namespace', on: 'articles' },
    regions: [
      {
        name: 'Layout::Content',
        options: { framed: true },
        outlets: [
          {
            name: 'Markdown::Document',
          },
        ]
      },

      sidebar
    ]
  },
];

module.exports = {
  outputDir: path.resolve(__dirname, 'docs'),
  assetRoot: path.resolve(__dirname),
  strict: false,
  serializer: [ 'megadoc-html-serializer', {
    theme: 'megadoc-theme-minimalist',
    title: 'react-drill',
    resizableSidebar: true,
    fixedSidebar: true,
    favicon: null,
    metaDescription: 'React DOM testing utilities',
    footer: 'Crafted with &#9829; using <a href="https://github.com/megadoc">megadoc</a>.',
    tooltipPreviews: false,
    rewrite: {
      'README.md': '/index.html'
    },
    runtimeOutputPath: 'megadoc-assets',
    layoutOptions: {
      banner: false,
      customLayouts: layout,
    },
  }],

  sources: [
    {
      id: 'js',
      include: [ 'index.js', 'lib/**/*.js' ],
      exclude: [ /\.test\.js$/ ],
      processor: [ 'megadoc-plugin-js', {
        baseURL: '/api',
        title: 'API',
        strict: false,

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
      }]
    },
    {
      id: 'articles',
      include: [
        'README.md',
        'CHANGES.md',
      ],
      processor: [ 'megadoc-plugin-markdown', {
        id: 'articles',
        baseURL: '/articles',
        title: 'Documentation',
        strict: false,
        fullFolderTitles: false,
      }]
    }
  ]
}