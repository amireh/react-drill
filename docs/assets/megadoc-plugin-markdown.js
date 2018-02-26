exports["megadoc-plugin-markdown"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var BrowserOutlet = __webpack_require__(2);
	var DocumentOutlet = __webpack_require__(15);
	var DocumentTOCOutlet = __webpack_require__(19);
	var InspectorOutlet = __webpack_require__(20);
	
	module.exports = {
	  name: 'megadoc-plugin-lua',
	  outlets: ['Markdown::Document', 'Markdown::DocumentTOC', 'Markdown::Browser'],
	
	  outletOccupants: [{ name: 'Markdown::Document', component: DocumentOutlet }, { name: 'Markdown::DocumentTOC', component: DocumentTOCOutlet }, { name: 'Markdown::Browser', component: BrowserOutlet }, { name: 'Core::Inspector', component: InspectorOutlet }]
	};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(3);
	var Browser = __webpack_require__(4);
	var _React$PropTypes = React.PropTypes,
	    array = _React$PropTypes.array,
	    object = _React$PropTypes.object,
	    shape = _React$PropTypes.shape,
	    bool = _React$PropTypes.bool;
	
	
	module.exports = React.createClass({
	  displayName: 'Markdown::BrowserOutlet',
	
	  propTypes: {
	    namespaceNode: object,
	    $outletOptions: shape({
	      flat: bool,
	      filter: array
	    })
	  },
	
	  render: function render() {
	    return React.createElement(Browser, _extends({}, this.props, {
	      flat: this.props.$outletOptions.flat,
	      filter: this.props.$outletOptions.filter
	    }));
	  }
	});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["react"];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var Link = __webpack_require__(5);
	var HotItemIndicator = __webpack_require__(6);
	
	var _require = __webpack_require__(7),
	    ROOT_FOLDER_ID = _require.ROOT_FOLDER_ID;
	
	var ArticleTOC = __webpack_require__(8);
	var filterDocuments = __webpack_require__(13);
	var object = React.PropTypes.object;
	
	
	var Browser = React.createClass({
	  displayName: 'Browser',
	
	  propTypes: {
	    namespaceNode: object,
	    documentNode: object,
	    documentEntityNode: object,
	    expanded: React.PropTypes.bool,
	    flat: React.PropTypes.bool,
	    filter: React.PropTypes.array
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      groupByFolder: false
	    };
	  },
	  render: function render() {
	    var namespaceNode = this.props.namespaceNode;
	
	
	    return React.createElement(
	      'nav',
	      { className: 'megadoc-document-browser markdown-browser' },
	      React.createElement(
	        'div',
	        null,
	        Array.isArray(namespaceNode.config.folders) && namespaceNode.config.folders.length > 0 ? FolderHierarchy(namespaceNode).map(this.renderFolder) : namespaceNode.documents.filter(filterDocuments(this.props.filter)).map(this.renderArticle)
	      )
	    );
	  },
	  renderFolders: function renderFolders(folders) {
	    return React.createElement(
	      'div',
	      null,
	      folders.map(this.renderFolder)
	    );
	  },
	  renderFolder: function renderFolder(folder) {
	    var documents = folder.documents;
	
	    var filtered = filterDocuments(this.props.filter)(documents);
	
	    if (!filtered.length) {
	      return null;
	    }
	
	    return React.createElement(
	      'div',
	      { key: folder.path, className: 'class-browser__category' },
	      React.createElement(
	        'h3',
	        { className: 'class-browser__category-name' },
	        folder.title === '.' ? '/' : folder.title
	      ),
	      React.createElement(
	        'div',
	        null,
	        documents.map(this.renderArticle)
	      )
	    );
	  },
	  renderArticle: function renderArticle(documentNode) {
	    var article = documentNode.properties;
	    var isActive = this.props.documentNode === documentNode || this.props.expanded;
	    var title = article.title || '';
	
	    if (this.state.groupByFolder && article.folderTitle !== ROOT_FOLDER_ID && article.folderTitle !== '.') {
	
	      if (title.indexOf(article.folderTitle + '/') === 0) {
	        title = title.substr(article.folderTitle.length + 1 /* '/' */);
	      }
	    }
	
	    return React.createElement(
	      'div',
	      { key: documentNode.uid },
	      React.createElement(
	        Link,
	        { to: documentNode, className: 'class-browser__entry-link' },
	        article.plainTitle,
	        documentNode.meta.gitStats && React.createElement(HotItemIndicator, { timestamp: documentNode.meta.gitStats.lastCommittedAt })
	      ),
	      isActive && !this.props.flat && this.renderTOC(documentNode)
	    );
	  },
	  renderTOC: function renderTOC(documentNode) {
	    return React.createElement(ArticleTOC, { documentNode: documentNode });
	  }
	});
	
	function FolderHierarchy(namespaceNode) {
	  var _require2 = __webpack_require__(12),
	      assign = _require2.assign,
	      findWhere = _require2.findWhere,
	      sortBy = _require2.sortBy;
	
	  var strHumanize = __webpack_require__(14);
	  var config = namespaceNode.config,
	      documents = namespaceNode.documents;
	
	  var folders = {};
	
	  sortBy(documents, 'title').forEach(function (documentNode) {
	    var folderPath = documentNode.properties.folder;
	
	    if (!(folderPath in folders)) {
	      folders[folderPath] = createFolderConfig(folderPath);
	    }
	
	    folders[folderPath].documents.push(documentNode);
	  });
	
	  for (var folderPath in folders) {
	    var folder = folders[folderPath];
	
	    if (folder.series) {
	      folder.documents = sortBy(folder.documents, 'properties.fileName');
	    }
	
	    // README always comes first
	    folder.documents = sortBy(folder.documents, function (a) {
	      if (a.properties.fileName === 'README') {
	        return -1;
	      } else {
	        return 1;
	      }
	    });
	  }
	
	  // TODO: can we please do this at compile-time instead??
	  //
	  // no we can't, zip it
	  function createFolderConfig(folderPath) {
	    var folderConfig = findWhere(config.folders, { path: folderPath });
	    var folder = assign({}, folderConfig, {
	      path: folderPath,
	      documents: []
	    });
	
	    // generate a title
	    if (!folder.title) {
	      if (config.fullFolderTitles) {
	        folder.title = folderPath.replace(config.commonPrefix, '').split('/').map(strHumanize).join(config.fullFolderTitleDelimiter);
	      } else {
	        var fragments = folderPath.split('/');
	        folder.title = strHumanize(fragments[fragments.length - 1]);
	      }
	    }
	
	    return folder;
	  }
	
	  return sortBy(Object.keys(folders).map(function (x) {
	    return folders[x];
	  }), 'title');
	}
	
	module.exports = Browser;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["components/Link"];

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["components/HotItemIndicator"];

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.SORT_ASC = "asc";
	exports.SORT_DESC = "desc";
	
	exports.QUERY_ON = "1";
	exports.QUERY_OFF = undefined;
	
	exports.KC_RETURN = 13;
	exports.KC_K = 75;
	exports.KC_ESCAPE = 27;
	
	exports.AVAILABLE_SCHEMES = ['plain', 'steel', 'solarized--light', 'solarized--dark'];
	
	exports.AVAILABLE_SCHEME_NAMES = ['Light', 'Steel', 'Solarized (light)', 'Solarized (dark)'];
	
	exports.AVAILABLE_LAYOUTS = ['single-page', 'multi-page'];
	
	exports.DEFAULT_SCHEME = 'plain';
	
	exports.CFG_COLOR_SCHEME = 'colorScheme';
	exports.CFG_SYNTAX_HIGHLIGHTING = 'highlightingEnabled';
	exports.CFG_SIDEBAR_WIDTH = 'sidebarWidth';
	exports.MIN_SIDEBAR_WIDTH = 160;
	exports.INITIAL_SIDEBAR_WIDTH = 240;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var React = __webpack_require__(3);
	var Link = __webpack_require__(5);
	var Icon = __webpack_require__(9);
	var classSet = __webpack_require__(10);
	var SectionTree = __webpack_require__(11);
	
	var _require = __webpack_require__(12),
	    assign = _require.assign;
	
	var ArticleTOC = React.createClass({
	  displayName: 'ArticleTOC',
	
	  propTypes: {
	    documentNode: React.PropTypes.object,
	    documentEntityNode: React.PropTypes.object,
	    flat: React.PropTypes.bool,
	    grouped: React.PropTypes.bool
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      collapsed: {}
	    };
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      flat: false
	    };
	  },
	  render: function render() {
	    var sections = SectionTree(this.props.documentNode);
	    var rootSections = sections.filter(function (x) {
	      return x.root;
	    });
	    var hasChildren = rootSections.some(function (branch) {
	      return branch.children.length > 0;
	    });
	
	    if (!hasChildren) {
	      return null;
	    }
	
	    if (this.props.grouped) {
	      return React.createElement(
	        'ul',
	        { className: 'markdown-toc markdown-toc--flat' },
	        this.renderNodeInBranch(sections, rootSections[0].node)
	      );
	    }
	
	    return React.createElement(
	      'div',
	      { className: 'markdown-toc' },
	      rootSections.map(this.renderTree.bind(null, sections))
	    );
	  },
	  renderTree: function renderTree(tree, branch) {
	    if (!branch.children.length) {
	      return null;
	    }
	
	    return React.createElement(
	      'ul',
	      {
	        key: branch.node.uid,
	        className: classSet("markdown-toc", {
	          "markdown-toc--flat": this.props.flat && branch.root
	        })
	      },
	      branch.children.map(this.renderNodeInBranch.bind(null, tree))
	    );
	  },
	  renderNodeInBranch: function renderNodeInBranch(tree, node) {
	    var children = tree.filter(function (x) {
	      return x.node.uid === node.uid;
	    })[0];
	    var collapsed = this.state.collapsed[node.uid];
	
	    return React.createElement(
	      'li',
	      {
	        key: node.uid,
	        className: classSet({
	          'markdown-toc__entry': true,
	          'markdown-toc__entry--collapsible': !!children,
	          'markdown-toc__entry--collapsed': collapsed
	        })
	      },
	      children && React.createElement(Icon, {
	        className: classSet({
	          "icon-arrow-down": collapsed,
	          "icon-arrow-right": !collapsed
	        }),
	        onClick: this.collapse.bind(null, node.uid)
	      }),
	      React.createElement(Link, { to: node, children: node.properties.text }),
	      children && !collapsed && this.renderTree(tree, children)
	    );
	  },
	  collapse: function collapse(key) {
	    this.setState({
	      collapsed: assign({}, this.state.collapsed, _defineProperty({}, key, !this.state.collapsed[key]))
	    });
	  }
	});
	
	module.exports = ArticleTOC;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["components/Icon"];

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["utils/classSet"];

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function (documentNode) {
	  var tree = documentNode.entities.reduce(function (map, x, i) {
	    var myLevel = x.properties.level;
	    var parents = documentNode.entities.slice(0, i).filter(function (y) {
	      return y.properties.level < myLevel;
	    });
	    var closestParent = void 0;
	
	    parents.forEach(function (y) {
	      if (!closestParent || y.properties.level >= closestParent.properties.level) {
	        closestParent = y;
	      }
	    });
	
	    if (closestParent) {
	      map[closestParent.uid] = map[closestParent.uid] || {
	        node: closestParent,
	        children: []
	      };
	
	      map[closestParent.uid].children.push(x);
	    } else {
	      map[x.uid] = map[x.uid] || { root: true, node: x, children: [] };
	    }
	
	    return map;
	  }, {});
	
	  return Object.keys(tree).map(function (x) {
	    return tree[x];
	  }).sort(function (a, b) {
	    if (a.node.properties.level > b.node.properties.level) {
	      return 1;
	    } else {
	      return -1;
	    }
	  });
	};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["lodash"];

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["utils/filterDocuments"];

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function (str) {
	  return str.replace(/[_-]/g, ' ').replace(/(\w+)/g, function (match) {
	    return match.charAt(0).toUpperCase() + match.slice(1);
	  });
	};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(3);
	var Article = __webpack_require__(16);
	var object = React.PropTypes.object;
	var PropTypes = React.PropTypes;
	
	
	module.exports = React.createClass({
	  displayName: 'Markdown::DocumentOutlet',
	
	  propTypes: {
	    documentNode: object,
	    $outletOptions: PropTypes.shape({
	      className: PropTypes.string
	    })
	  },
	
	  render: function render() {
	    if (!this.props.documentNode || !this.props.documentNode.properties) {
	      return null;
	    }
	
	    return React.createElement(Article, _extends({}, this.props, this.props.$outletOptions));
	  }
	});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var HighlightedText = __webpack_require__(17);
	var Disqus = __webpack_require__(18);
	
	var _React$PropTypes = React.PropTypes,
	    shape = _React$PropTypes.shape,
	    string = _React$PropTypes.string,
	    object = _React$PropTypes.object,
	    oneOfType = _React$PropTypes.oneOfType,
	    bool = _React$PropTypes.bool;
	
	
	var Article = React.createClass({
	  displayName: 'Article',
	
	  contextTypes: {
	    location: shape({ pathname: string }).isRequired,
	    config: shape({
	      disqus: oneOfType([bool, object])
	    }).isRequired
	  },
	
	  propTypes: {
	    className: string,
	    documentNode: shape({
	      source: string
	    }).isRequired
	  },
	
	  render: function render() {
	    var article = this.props.documentNode.properties;
	
	    return React.createElement(
	      'div',
	      { className: this.props.className },
	      React.createElement(
	        HighlightedText,
	        null,
	        article.source
	      ),
	      this.context.config.disqus && React.createElement(Disqus, {
	        identifier: article.id,
	        title: article.title,
	        pathname: this.context.location.pathname,
	        config: this.context.config.disqus
	      })
	    );
	  }
	});
	
	module.exports = Article;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["components/HighlightedText"];

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["components/Disqus"];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(3);
	var ArticleTOC = __webpack_require__(8);
	var _React$PropTypes = React.PropTypes,
	    object = _React$PropTypes.object,
	    bool = _React$PropTypes.bool,
	    shape = _React$PropTypes.shape;
	
	
	module.exports = React.createClass({
	  displayName: 'Markdown::DocumentTOCOutlet',
	
	  propTypes: {
	    documentEntityNode: object,
	    documentNode: object.isRequired,
	    namespaceNode: object.isRequired,
	    $outletOptions: shape({
	      grouped: bool
	    })
	  },
	
	  render: function render() {
	    if (!this.props.documentNode) {
	      return null;
	    }
	
	    return React.createElement(ArticleTOC, _extends({ flat: true, grouped: this.props.$outletOptions.grouped }, this.props));
	  }
	});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var _React$PropTypes = React.PropTypes,
	    shape = _React$PropTypes.shape,
	    string = _React$PropTypes.string,
	    number = _React$PropTypes.number;
	
	var WPM = 275; // https://help.medium.com/hc/en-us/articles/214991667-Read-time
	
	module.exports = React.createClass({
	  displayName: 'Markdown::InspectorOutlet',
	
	  propTypes: {
	    documentNode: shape({
	      properties: shape({
	        title: string,
	        wordCount: number
	      })
	    })
	  },
	
	  render: function render() {
	    var doc = this.props.documentNode.properties;
	    var expectedReadTime = Math.ceil(doc.wordCount / WPM);
	
	    return React.createElement(
	      'p',
	      null,
	      doc.title,
	      ' ',
	      React.createElement(
	        'small',
	        null,
	        '(',
	        expectedReadTime,
	        ' min read)'
	      )
	    );
	  }
	});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmYwMjNlYmQ2ODNiMDk3ZWU2MGUiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tbWFya2Rvd24vdWkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tbWFya2Rvd24vdWkvb3V0bGV0cy9Ccm93c2VyT3V0bGV0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcInJlYWN0XFxcIl1cIiIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1tYXJrZG93bi91aS9jb21wb25lbnRzL0Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwiY29tcG9uZW50cy9MaW5rXFxcIl1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJjb21wb25lbnRzL0hvdEl0ZW1JbmRpY2F0b3JcXFwiXVwiIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtaHRtbC1zZXJpYWxpemVyL3VpL3NoYXJlZC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tbWFya2Rvd24vdWkvY29tcG9uZW50cy9BcnRpY2xlVE9DLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImNvbXBvbmVudHMvSWNvblxcXCJdXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwidXRpbHMvY2xhc3NTZXRcXFwiXVwiIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLW1hcmtkb3duL3VpL1NlY3Rpb25UcmVlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImxvZGFzaFxcXCJdXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwidXRpbHMvZmlsdGVyRG9jdW1lbnRzXFxcIl1cIiIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1tYXJrZG93bi9saWIvdXRpbHMvc3RySHVtYW5pemUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tbWFya2Rvd24vdWkvb3V0bGV0cy9Eb2N1bWVudE91dGxldC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1tYXJrZG93bi91aS9jb21wb25lbnRzL0FydGljbGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwiY29tcG9uZW50cy9IaWdobGlnaHRlZFRleHRcXFwiXVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImNvbXBvbmVudHMvRGlzcXVzXFxcIl1cIiIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1tYXJrZG93bi91aS9vdXRsZXRzL0RvY3VtZW50VE9DT3V0bGV0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLW1hcmtkb3duL3VpL291dGxldHMvSW5zcGVjdG9yT3V0bGV0LmpzIl0sIm5hbWVzIjpbIkJyb3dzZXJPdXRsZXQiLCJyZXF1aXJlIiwiRG9jdW1lbnRPdXRsZXQiLCJEb2N1bWVudFRPQ091dGxldCIsIkluc3BlY3Rvck91dGxldCIsIm1vZHVsZSIsImV4cG9ydHMiLCJuYW1lIiwib3V0bGV0cyIsIm91dGxldE9jY3VwYW50cyIsImNvbXBvbmVudCIsIlJlYWN0IiwiQnJvd3NlciIsIlByb3BUeXBlcyIsImFycmF5Iiwib2JqZWN0Iiwic2hhcGUiLCJib29sIiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsIm5hbWVzcGFjZU5vZGUiLCIkb3V0bGV0T3B0aW9ucyIsImZsYXQiLCJmaWx0ZXIiLCJyZW5kZXIiLCJwcm9wcyIsIkxpbmsiLCJIb3RJdGVtSW5kaWNhdG9yIiwiUk9PVF9GT0xERVJfSUQiLCJBcnRpY2xlVE9DIiwiZmlsdGVyRG9jdW1lbnRzIiwiZG9jdW1lbnROb2RlIiwiZG9jdW1lbnRFbnRpdHlOb2RlIiwiZXhwYW5kZWQiLCJnZXRJbml0aWFsU3RhdGUiLCJncm91cEJ5Rm9sZGVyIiwiQXJyYXkiLCJpc0FycmF5IiwiY29uZmlnIiwiZm9sZGVycyIsImxlbmd0aCIsIkZvbGRlckhpZXJhcmNoeSIsIm1hcCIsInJlbmRlckZvbGRlciIsImRvY3VtZW50cyIsInJlbmRlckFydGljbGUiLCJyZW5kZXJGb2xkZXJzIiwiZm9sZGVyIiwiZmlsdGVyZWQiLCJwYXRoIiwidGl0bGUiLCJhcnRpY2xlIiwicHJvcGVydGllcyIsImlzQWN0aXZlIiwic3RhdGUiLCJmb2xkZXJUaXRsZSIsImluZGV4T2YiLCJzdWJzdHIiLCJ1aWQiLCJwbGFpblRpdGxlIiwibWV0YSIsImdpdFN0YXRzIiwibGFzdENvbW1pdHRlZEF0IiwicmVuZGVyVE9DIiwiYXNzaWduIiwiZmluZFdoZXJlIiwic29ydEJ5Iiwic3RySHVtYW5pemUiLCJmb3JFYWNoIiwiZm9sZGVyUGF0aCIsImNyZWF0ZUZvbGRlckNvbmZpZyIsInB1c2giLCJzZXJpZXMiLCJhIiwiZmlsZU5hbWUiLCJmb2xkZXJDb25maWciLCJmdWxsRm9sZGVyVGl0bGVzIiwicmVwbGFjZSIsImNvbW1vblByZWZpeCIsInNwbGl0Iiwiam9pbiIsImZ1bGxGb2xkZXJUaXRsZURlbGltaXRlciIsImZyYWdtZW50cyIsIk9iamVjdCIsImtleXMiLCJ4IiwiU09SVF9BU0MiLCJTT1JUX0RFU0MiLCJRVUVSWV9PTiIsIlFVRVJZX09GRiIsInVuZGVmaW5lZCIsIktDX1JFVFVSTiIsIktDX0siLCJLQ19FU0NBUEUiLCJBVkFJTEFCTEVfU0NIRU1FUyIsIkFWQUlMQUJMRV9TQ0hFTUVfTkFNRVMiLCJBVkFJTEFCTEVfTEFZT1VUUyIsIkRFRkFVTFRfU0NIRU1FIiwiQ0ZHX0NPTE9SX1NDSEVNRSIsIkNGR19TWU5UQVhfSElHSExJR0hUSU5HIiwiQ0ZHX1NJREVCQVJfV0lEVEgiLCJNSU5fU0lERUJBUl9XSURUSCIsIklOSVRJQUxfU0lERUJBUl9XSURUSCIsIkljb24iLCJjbGFzc1NldCIsIlNlY3Rpb25UcmVlIiwiZ3JvdXBlZCIsImNvbGxhcHNlZCIsImdldERlZmF1bHRQcm9wcyIsInNlY3Rpb25zIiwicm9vdFNlY3Rpb25zIiwicm9vdCIsImhhc0NoaWxkcmVuIiwic29tZSIsImJyYW5jaCIsImNoaWxkcmVuIiwicmVuZGVyTm9kZUluQnJhbmNoIiwibm9kZSIsInJlbmRlclRyZWUiLCJiaW5kIiwidHJlZSIsImNvbGxhcHNlIiwidGV4dCIsImtleSIsInNldFN0YXRlIiwiZW50aXRpZXMiLCJyZWR1Y2UiLCJpIiwibXlMZXZlbCIsImxldmVsIiwicGFyZW50cyIsInNsaWNlIiwieSIsImNsb3Nlc3RQYXJlbnQiLCJzb3J0IiwiYiIsInN0ciIsIm1hdGNoIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJBcnRpY2xlIiwiY2xhc3NOYW1lIiwic3RyaW5nIiwiSGlnaGxpZ2h0ZWRUZXh0IiwiRGlzcXVzIiwib25lT2ZUeXBlIiwiY29udGV4dFR5cGVzIiwibG9jYXRpb24iLCJwYXRobmFtZSIsImlzUmVxdWlyZWQiLCJkaXNxdXMiLCJzb3VyY2UiLCJjb250ZXh0IiwiaWQiLCJudW1iZXIiLCJXUE0iLCJ3b3JkQ291bnQiLCJkb2MiLCJleHBlY3RlZFJlYWRUaW1lIiwiTWF0aCIsImNlaWwiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQSxLQUFNQSxnQkFBZ0IsbUJBQUFDLENBQVEsQ0FBUixDQUF0QjtBQUNBLEtBQU1DLGlCQUFpQixtQkFBQUQsQ0FBUSxFQUFSLENBQXZCO0FBQ0EsS0FBTUUsb0JBQW9CLG1CQUFBRixDQUFRLEVBQVIsQ0FBMUI7QUFDQSxLQUFNRyxrQkFBa0IsbUJBQUFILENBQVEsRUFBUixDQUF4Qjs7QUFFQUksUUFBT0MsT0FBUCxHQUFpQjtBQUNmQyxTQUFNLG9CQURTO0FBRWZDLFlBQVMsQ0FDUCxvQkFETyxFQUVQLHVCQUZPLEVBR1AsbUJBSE8sQ0FGTTs7QUFRZkMsb0JBQWlCLENBQ2YsRUFBRUYsTUFBTSxvQkFBUixFQUE4QkcsV0FBV1IsY0FBekMsRUFEZSxFQUVmLEVBQUVLLE1BQU0sdUJBQVIsRUFBaUNHLFdBQVdQLGlCQUE1QyxFQUZlLEVBR2YsRUFBRUksTUFBTSxtQkFBUixFQUE2QkcsV0FBV1YsYUFBeEMsRUFIZSxFQUlmLEVBQUVPLE1BQU0saUJBQVIsRUFBMkJHLFdBQVdOLGVBQXRDLEVBSmU7QUFSRixFQUFqQixDOzs7Ozs7Ozs7O0FDTEEsS0FBTU8sUUFBUSxtQkFBQVYsQ0FBUSxDQUFSLENBQWQ7QUFDQSxLQUFNVyxVQUFVLG1CQUFBWCxDQUFRLENBQVIsQ0FBaEI7d0JBQ3dDVSxNQUFNRSxTO0tBQXRDQyxLLG9CQUFBQSxLO0tBQU9DLE0sb0JBQUFBLE07S0FBUUMsSyxvQkFBQUEsSztLQUFPQyxJLG9CQUFBQSxJOzs7QUFFOUJaLFFBQU9DLE9BQVAsR0FBaUJLLE1BQU1PLFdBQU4sQ0FBa0I7QUFDakNDLGdCQUFhLHlCQURvQjs7QUFHakNDLGNBQVc7QUFDVEMsb0JBQWVOLE1BRE47QUFFVE8scUJBQWdCTixNQUFNO0FBQ3BCTyxhQUFNTixJQURjO0FBRXBCTyxlQUFRVjtBQUZZLE1BQU47QUFGUCxJQUhzQjs7QUFXakNXLFNBWGlDLG9CQVd4QjtBQUNQLFlBQ0Usb0JBQUMsT0FBRCxlQUNNLEtBQUtDLEtBRFg7QUFFRSxhQUFNLEtBQUtBLEtBQUwsQ0FBV0osY0FBWCxDQUEwQkMsSUFGbEM7QUFHRSxlQUFRLEtBQUtHLEtBQUwsQ0FBV0osY0FBWCxDQUEwQkU7QUFIcEMsUUFERjtBQU9EO0FBbkJnQyxFQUFsQixDQUFqQixDOzs7Ozs7QUNKQSxrRDs7Ozs7Ozs7QUNBQSxLQUFNYixRQUFRLG1CQUFBVixDQUFRLENBQVIsQ0FBZDtBQUNBLEtBQU0wQixPQUFPLG1CQUFBMUIsQ0FBUSxDQUFSLENBQWI7QUFDQSxLQUFNMkIsbUJBQW1CLG1CQUFBM0IsQ0FBUSxDQUFSLENBQXpCOztnQkFDMkIsbUJBQUFBLENBQVEsQ0FBUixDO0tBQW5CNEIsYyxZQUFBQSxjOztBQUNSLEtBQU1DLGFBQWEsbUJBQUE3QixDQUFRLENBQVIsQ0FBbkI7QUFDQSxLQUFNOEIsa0JBQWtCLG1CQUFBOUIsQ0FBUSxFQUFSLENBQXhCO0tBQ1FjLE0sR0FBV0osTUFBTUUsUyxDQUFqQkUsTTs7O0FBRVIsS0FBSUgsVUFBVUQsTUFBTU8sV0FBTixDQUFrQjtBQUFBOztBQUM5QkUsY0FBVztBQUNUQyxvQkFBZU4sTUFETjtBQUVUaUIsbUJBQWNqQixNQUZMO0FBR1RrQix5QkFBb0JsQixNQUhYO0FBSVRtQixlQUFVdkIsTUFBTUUsU0FBTixDQUFnQkksSUFKakI7QUFLVE0sV0FBTVosTUFBTUUsU0FBTixDQUFnQkksSUFMYjtBQU1UTyxhQUFRYixNQUFNRSxTQUFOLENBQWdCQztBQU5mLElBRG1COztBQVU5QnFCLGtCQVY4Qiw2QkFVWjtBQUNoQixZQUFPO0FBQ0xDLHNCQUFlO0FBRFYsTUFBUDtBQUdELElBZDZCO0FBZ0I5QlgsU0FoQjhCLG9CQWdCckI7QUFBQSxTQUNDSixhQURELEdBQ21CLEtBQUtLLEtBRHhCLENBQ0NMLGFBREQ7OztBQUdQLFlBQ0U7QUFBQTtBQUFBLFNBQUssV0FBVSwyQ0FBZjtBQUNFO0FBQUE7QUFBQTtBQUNHZ0IsZUFBTUMsT0FBTixDQUFjakIsY0FBY2tCLE1BQWQsQ0FBcUJDLE9BQW5DLEtBQStDbkIsY0FBY2tCLE1BQWQsQ0FBcUJDLE9BQXJCLENBQTZCQyxNQUE3QixHQUFzQyxDQUFyRixHQUNDQyxnQkFBZ0JyQixhQUFoQixFQUErQnNCLEdBQS9CLENBQW1DLEtBQUtDLFlBQXhDLENBREQsR0FHQ3ZCLGNBQWN3QixTQUFkLENBQ0dyQixNQURILENBQ1VPLGdCQUFnQixLQUFLTCxLQUFMLENBQVdGLE1BQTNCLENBRFYsRUFFR21CLEdBRkgsQ0FFTyxLQUFLRyxhQUZaO0FBSko7QUFERixNQURGO0FBYUQsSUFoQzZCO0FBa0M5QkMsZ0JBbEM4Qix5QkFrQ2hCUCxPQWxDZ0IsRUFrQ1A7QUFDckIsWUFDRTtBQUFBO0FBQUE7QUFDR0EsZUFBUUcsR0FBUixDQUFZLEtBQUtDLFlBQWpCO0FBREgsTUFERjtBQUtELElBeEM2QjtBQTBDOUJBLGVBMUM4Qix3QkEwQ2pCSSxNQTFDaUIsRUEwQ1Q7QUFBQSxTQUNYSCxTQURXLEdBQ0dHLE1BREgsQ0FDWEgsU0FEVzs7QUFFbkIsU0FBTUksV0FBV2xCLGdCQUFnQixLQUFLTCxLQUFMLENBQVdGLE1BQTNCLEVBQW1DcUIsU0FBbkMsQ0FBakI7O0FBRUEsU0FBSSxDQUFDSSxTQUFTUixNQUFkLEVBQXNCO0FBQ3BCLGNBQU8sSUFBUDtBQUNEOztBQUVELFlBQ0U7QUFBQTtBQUFBLFNBQUssS0FBS08sT0FBT0UsSUFBakIsRUFBdUIsV0FBVSx5QkFBakM7QUFDRTtBQUFBO0FBQUEsV0FBSSxXQUFVLDhCQUFkO0FBQ0dGLGdCQUFPRyxLQUFQLEtBQWlCLEdBQWpCLEdBQXVCLEdBQXZCLEdBQTZCSCxPQUFPRztBQUR2QyxRQURGO0FBS0U7QUFBQTtBQUFBO0FBQ0dOLG1CQUFVRixHQUFWLENBQWMsS0FBS0csYUFBbkI7QUFESDtBQUxGLE1BREY7QUFXRCxJQTdENkI7QUErRDlCQSxnQkEvRDhCLHlCQStEaEJkLFlBL0RnQixFQStERjtBQUMxQixTQUFNb0IsVUFBVXBCLGFBQWFxQixVQUE3QjtBQUNBLFNBQU1DLFdBQVcsS0FBSzVCLEtBQUwsQ0FBV00sWUFBWCxLQUE0QkEsWUFBNUIsSUFBNEMsS0FBS04sS0FBTCxDQUFXUSxRQUF4RTtBQUNBLFNBQUlpQixRQUFRQyxRQUFRRCxLQUFSLElBQWlCLEVBQTdCOztBQUVBLFNBQUksS0FBS0ksS0FBTCxDQUFXbkIsYUFBWCxJQUNGZ0IsUUFBUUksV0FBUixLQUF3QjNCLGNBRHRCLElBRUZ1QixRQUFRSSxXQUFSLEtBQXdCLEdBRjFCLEVBRStCOztBQUU3QixXQUFJTCxNQUFNTSxPQUFOLENBQWNMLFFBQVFJLFdBQVIsR0FBc0IsR0FBcEMsTUFBNkMsQ0FBakQsRUFBb0Q7QUFDbERMLGlCQUFRQSxNQUFNTyxNQUFOLENBQWFOLFFBQVFJLFdBQVIsQ0FBb0JmLE1BQXBCLEdBQTZCLENBQTFDLENBQTRDLFNBQTVDLENBQVI7QUFDRDtBQUNGOztBQUVELFlBQ0U7QUFBQTtBQUFBLFNBQUssS0FBS1QsYUFBYTJCLEdBQXZCO0FBQ0U7QUFBQyxhQUFEO0FBQUEsV0FBTSxJQUFJM0IsWUFBVixFQUF3QixXQUFVLDJCQUFsQztBQUNHb0IsaUJBQVFRLFVBRFg7QUFHRzVCLHNCQUFhNkIsSUFBYixDQUFrQkMsUUFBbEIsSUFDQyxvQkFBQyxnQkFBRCxJQUFrQixXQUFXOUIsYUFBYTZCLElBQWIsQ0FBa0JDLFFBQWxCLENBQTJCQyxlQUF4RDtBQUpKLFFBREY7QUFTR1QsbUJBQVksQ0FBQyxLQUFLNUIsS0FBTCxDQUFXSCxJQUF4QixJQUFnQyxLQUFLeUMsU0FBTCxDQUFlaEMsWUFBZjtBQVRuQyxNQURGO0FBYUQsSUExRjZCO0FBNEY5QmdDLFlBNUY4QixxQkE0RnBCaEMsWUE1Rm9CLEVBNEZOO0FBQ3RCLFlBQU8sb0JBQUMsVUFBRCxJQUFZLGNBQWNBLFlBQTFCLEdBQVA7QUFDRDtBQTlGNkIsRUFBbEIsQ0FBZDs7QUFrR0EsVUFBU1UsZUFBVCxDQUF5QnJCLGFBQXpCLEVBQXdDO0FBQUEsbUJBQ0EsbUJBQUFwQixDQUFRLEVBQVIsQ0FEQTtBQUFBLE9BQzlCZ0UsTUFEOEIsYUFDOUJBLE1BRDhCO0FBQUEsT0FDdEJDLFNBRHNCLGFBQ3RCQSxTQURzQjtBQUFBLE9BQ1hDLE1BRFcsYUFDWEEsTUFEVzs7QUFFdEMsT0FBTUMsY0FBYyxtQkFBQW5FLENBQVEsRUFBUixDQUFwQjtBQUZzQyxPQUc5QnNDLE1BSDhCLEdBR1JsQixhQUhRLENBRzlCa0IsTUFIOEI7QUFBQSxPQUd0Qk0sU0FIc0IsR0FHUnhCLGFBSFEsQ0FHdEJ3QixTQUhzQjs7QUFJdEMsT0FBTUwsVUFBVSxFQUFoQjs7QUFFQTJCLFVBQU90QixTQUFQLEVBQWtCLE9BQWxCLEVBQTJCd0IsT0FBM0IsQ0FBbUMsd0JBQWdCO0FBQ2pELFNBQU1DLGFBQWF0QyxhQUFhcUIsVUFBYixDQUF3QkwsTUFBM0M7O0FBRUEsU0FBSSxFQUFFc0IsY0FBYzlCLE9BQWhCLENBQUosRUFBOEI7QUFDNUJBLGVBQVE4QixVQUFSLElBQXNCQyxtQkFBbUJELFVBQW5CLENBQXRCO0FBQ0Q7O0FBRUQ5QixhQUFROEIsVUFBUixFQUFvQnpCLFNBQXBCLENBQThCMkIsSUFBOUIsQ0FBbUN4QyxZQUFuQztBQUNELElBUkQ7O0FBVUEsUUFBSyxJQUFJc0MsVUFBVCxJQUF1QjlCLE9BQXZCLEVBQWdDO0FBQzlCLFNBQU1RLFNBQVNSLFFBQVE4QixVQUFSLENBQWY7O0FBRUEsU0FBSXRCLE9BQU95QixNQUFYLEVBQW1CO0FBQ2pCekIsY0FBT0gsU0FBUCxHQUFtQnNCLE9BQU9uQixPQUFPSCxTQUFkLEVBQXlCLHFCQUF6QixDQUFuQjtBQUNEOztBQUVEO0FBQ0FHLFlBQU9ILFNBQVAsR0FBbUJzQixPQUFPbkIsT0FBT0gsU0FBZCxFQUF5QixVQUFTNkIsQ0FBVCxFQUFZO0FBQ3RELFdBQUlBLEVBQUVyQixVQUFGLENBQWFzQixRQUFiLEtBQTBCLFFBQTlCLEVBQXdDO0FBQ3RDLGdCQUFPLENBQUMsQ0FBUjtBQUNELFFBRkQsTUFHSztBQUNILGdCQUFPLENBQVA7QUFDRDtBQUNGLE1BUGtCLENBQW5CO0FBUUQ7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsWUFBU0osa0JBQVQsQ0FBNEJELFVBQTVCLEVBQXdDO0FBQ3RDLFNBQU1NLGVBQWVWLFVBQVUzQixPQUFPQyxPQUFqQixFQUEwQixFQUFFVSxNQUFNb0IsVUFBUixFQUExQixDQUFyQjtBQUNBLFNBQU10QixTQUFTaUIsT0FBTyxFQUFQLEVBQVdXLFlBQVgsRUFBeUI7QUFDdEMxQixhQUFNb0IsVUFEZ0M7QUFFdEN6QixrQkFBVztBQUYyQixNQUF6QixDQUFmOztBQUtBO0FBQ0EsU0FBSSxDQUFDRyxPQUFPRyxLQUFaLEVBQW1CO0FBQ2pCLFdBQUlaLE9BQU9zQyxnQkFBWCxFQUE2QjtBQUMzQjdCLGdCQUFPRyxLQUFQLEdBQWVtQixXQUNaUSxPQURZLENBQ0p2QyxPQUFPd0MsWUFESCxFQUNpQixFQURqQixFQUVaQyxLQUZZLENBRU4sR0FGTSxFQUdackMsR0FIWSxDQUdSeUIsV0FIUSxFQUlaYSxJQUpZLENBSVAxQyxPQUFPMkMsd0JBSkEsQ0FBZjtBQU1ELFFBUEQsTUFRSztBQUNILGFBQU1DLFlBQVliLFdBQVdVLEtBQVgsQ0FBaUIsR0FBakIsQ0FBbEI7QUFDQWhDLGdCQUFPRyxLQUFQLEdBQWVpQixZQUFZZSxVQUFVQSxVQUFVMUMsTUFBVixHQUFpQixDQUEzQixDQUFaLENBQWY7QUFDRDtBQUNGOztBQUVELFlBQU9PLE1BQVA7QUFDRDs7QUFFRCxVQUFPbUIsT0FBT2lCLE9BQU9DLElBQVAsQ0FBWTdDLE9BQVosRUFBcUJHLEdBQXJCLENBQXlCO0FBQUEsWUFBS0gsUUFBUThDLENBQVIsQ0FBTDtBQUFBLElBQXpCLENBQVAsRUFBa0QsT0FBbEQsQ0FBUDtBQUNEOztBQUVEakYsUUFBT0MsT0FBUCxHQUFpQk0sT0FBakIsQzs7Ozs7O0FDNUtBLDREOzs7Ozs7QUNBQSx3RTs7Ozs7Ozs7QUNBQU4sU0FBUWlGLFFBQVIsR0FBbUIsS0FBbkI7QUFDQWpGLFNBQVFrRixTQUFSLEdBQW9CLE1BQXBCOztBQUVBbEYsU0FBUW1GLFFBQVIsR0FBbUIsR0FBbkI7QUFDQW5GLFNBQVFvRixTQUFSLEdBQW9CQyxTQUFwQjs7QUFFQXJGLFNBQVFzRixTQUFSLEdBQW9CLEVBQXBCO0FBQ0F0RixTQUFRdUYsSUFBUixHQUFlLEVBQWY7QUFDQXZGLFNBQVF3RixTQUFSLEdBQW9CLEVBQXBCOztBQUVBeEYsU0FBUXlGLGlCQUFSLEdBQTRCLENBQzFCLE9BRDBCLEVBRTFCLE9BRjBCLEVBRzFCLGtCQUgwQixFQUkxQixpQkFKMEIsQ0FBNUI7O0FBT0F6RixTQUFRMEYsc0JBQVIsR0FBaUMsQ0FDL0IsT0FEK0IsRUFFL0IsT0FGK0IsRUFHL0IsbUJBSCtCLEVBSS9CLGtCQUorQixDQUFqQzs7QUFPQTFGLFNBQVEyRixpQkFBUixHQUE0QixDQUMxQixhQUQwQixFQUUxQixZQUYwQixDQUE1Qjs7QUFLQTNGLFNBQVE0RixjQUFSLEdBQXlCLE9BQXpCOztBQUVBNUYsU0FBUTZGLGdCQUFSLEdBQTJCLGFBQTNCO0FBQ0E3RixTQUFROEYsdUJBQVIsR0FBa0MscUJBQWxDO0FBQ0E5RixTQUFRK0YsaUJBQVIsR0FBNEIsY0FBNUI7QUFDQS9GLFNBQVFnRyxpQkFBUixHQUE0QixHQUE1QjtBQUNBaEcsU0FBUWlHLHFCQUFSLEdBQWdDLEdBQWhDLEM7Ozs7Ozs7Ozs7QUNuQ0EsS0FBTTVGLFFBQVEsbUJBQUFWLENBQVEsQ0FBUixDQUFkO0FBQ0EsS0FBTTBCLE9BQU8sbUJBQUExQixDQUFRLENBQVIsQ0FBYjtBQUNBLEtBQU11RyxPQUFPLG1CQUFBdkcsQ0FBUSxDQUFSLENBQWI7QUFDQSxLQUFNd0csV0FBVyxtQkFBQXhHLENBQVEsRUFBUixDQUFqQjtBQUNBLEtBQU15RyxjQUFjLG1CQUFBekcsQ0FBUSxFQUFSLENBQXBCOztnQkFDbUIsbUJBQUFBLENBQVEsRUFBUixDO0tBQVhnRSxNLFlBQUFBLE07O0FBRVIsS0FBTW5DLGFBQWFuQixNQUFNTyxXQUFOLENBQWtCO0FBQUE7O0FBQ25DRSxjQUFXO0FBQ1RZLG1CQUFjckIsTUFBTUUsU0FBTixDQUFnQkUsTUFEckI7QUFFVGtCLHlCQUFvQnRCLE1BQU1FLFNBQU4sQ0FBZ0JFLE1BRjNCO0FBR1RRLFdBQU1aLE1BQU1FLFNBQU4sQ0FBZ0JJLElBSGI7QUFJVDBGLGNBQVNoRyxNQUFNRSxTQUFOLENBQWdCSTtBQUpoQixJQUR3Qjs7QUFRbkNrQixrQkFSbUMsNkJBUWpCO0FBQ2hCLFlBQU87QUFDTHlFLGtCQUFXO0FBRE4sTUFBUDtBQUdELElBWmtDO0FBY25DQyxrQkFkbUMsNkJBY2pCO0FBQ2hCLFlBQU87QUFDTHRGLGFBQU07QUFERCxNQUFQO0FBR0QsSUFsQmtDO0FBb0JuQ0UsU0FwQm1DLG9CQW9CMUI7QUFDUCxTQUFNcUYsV0FBV0osWUFBWSxLQUFLaEYsS0FBTCxDQUFXTSxZQUF2QixDQUFqQjtBQUNBLFNBQU0rRSxlQUFlRCxTQUFTdEYsTUFBVCxDQUFnQjtBQUFBLGNBQUs4RCxFQUFFMEIsSUFBUDtBQUFBLE1BQWhCLENBQXJCO0FBQ0EsU0FBTUMsY0FBY0YsYUFBYUcsSUFBYixDQUFrQjtBQUFBLGNBQVVDLE9BQU9DLFFBQVAsQ0FBZ0IzRSxNQUFoQixHQUF5QixDQUFuQztBQUFBLE1BQWxCLENBQXBCOztBQUVBLFNBQUksQ0FBQ3dFLFdBQUwsRUFBa0I7QUFDaEIsY0FBTyxJQUFQO0FBQ0Q7O0FBRUQsU0FBSSxLQUFLdkYsS0FBTCxDQUFXaUYsT0FBZixFQUF3QjtBQUN0QixjQUNFO0FBQUE7QUFBQSxXQUFJLFdBQVUsaUNBQWQ7QUFDRyxjQUFLVSxrQkFBTCxDQUF3QlAsUUFBeEIsRUFBa0NDLGFBQWEsQ0FBYixFQUFnQk8sSUFBbEQ7QUFESCxRQURGO0FBS0Q7O0FBRUQsWUFDRTtBQUFBO0FBQUEsU0FBSyxXQUFVLGNBQWY7QUFDR1Asb0JBQWFwRSxHQUFiLENBQWlCLEtBQUs0RSxVQUFMLENBQWdCQyxJQUFoQixDQUFxQixJQUFyQixFQUEyQlYsUUFBM0IsQ0FBakI7QUFESCxNQURGO0FBS0QsSUExQ2tDO0FBNENuQ1MsYUE1Q21DLHNCQTRDeEJFLElBNUN3QixFQTRDbEJOLE1BNUNrQixFQTRDVjtBQUN2QixTQUFJLENBQUNBLE9BQU9DLFFBQVAsQ0FBZ0IzRSxNQUFyQixFQUE2QjtBQUMzQixjQUFPLElBQVA7QUFDRDs7QUFFRCxZQUNFO0FBQUE7QUFBQTtBQUNFLGNBQUswRSxPQUFPRyxJQUFQLENBQVkzRCxHQURuQjtBQUVFLG9CQUFXOEMsU0FBUyxjQUFULEVBQXlCO0FBQ2xDLGlDQUFzQixLQUFLL0UsS0FBTCxDQUFXSCxJQUFYLElBQW1CNEYsT0FBT0g7QUFEZCxVQUF6QjtBQUZiO0FBTUdHLGNBQU9DLFFBQVAsQ0FBZ0J6RSxHQUFoQixDQUFvQixLQUFLMEUsa0JBQUwsQ0FBd0JHLElBQXhCLENBQTZCLElBQTdCLEVBQW1DQyxJQUFuQyxDQUFwQjtBQU5ILE1BREY7QUFVRCxJQTNEa0M7QUE2RG5DSixxQkE3RG1DLDhCQTZEaEJJLElBN0RnQixFQTZEVkgsSUE3RFUsRUE2REo7QUFDN0IsU0FBTUYsV0FBV0ssS0FBS2pHLE1BQUwsQ0FBWTtBQUFBLGNBQUs4RCxFQUFFZ0MsSUFBRixDQUFPM0QsR0FBUCxLQUFlMkQsS0FBSzNELEdBQXpCO0FBQUEsTUFBWixFQUEwQyxDQUExQyxDQUFqQjtBQUNBLFNBQU1pRCxZQUFZLEtBQUtyRCxLQUFMLENBQVdxRCxTQUFYLENBQXFCVSxLQUFLM0QsR0FBMUIsQ0FBbEI7O0FBRUEsWUFDRTtBQUFBO0FBQUE7QUFDRSxjQUFLMkQsS0FBSzNELEdBRFo7QUFFRSxvQkFBVzhDLFNBQVM7QUFDbEIsa0NBQXVCLElBREw7QUFFbEIsK0NBQW9DLENBQUMsQ0FBQ1csUUFGcEI7QUFHbEIsNkNBQWtDUjtBQUhoQixVQUFUO0FBRmI7QUFRR1EsbUJBQ0Msb0JBQUMsSUFBRDtBQUNFLG9CQUFXWCxTQUFTO0FBQ2xCLDhCQUFtQkcsU0FERDtBQUVsQiwrQkFBb0IsQ0FBQ0E7QUFGSCxVQUFULENBRGI7QUFLRSxrQkFBUyxLQUFLYyxRQUFMLENBQWNGLElBQWQsQ0FBbUIsSUFBbkIsRUFBeUJGLEtBQUszRCxHQUE5QjtBQUxYLFNBVEo7QUFrQkUsMkJBQUMsSUFBRCxJQUFNLElBQUkyRCxJQUFWLEVBQWdCLFVBQVVBLEtBQUtqRSxVQUFMLENBQWdCc0UsSUFBMUMsR0FsQkY7QUFvQkdQLG1CQUFZLENBQUNSLFNBQWIsSUFBMkIsS0FBS1csVUFBTCxDQUFnQkUsSUFBaEIsRUFBc0JMLFFBQXRCO0FBcEI5QixNQURGO0FBd0JELElBekZrQztBQTJGbkNNLFdBM0ZtQyxvQkEyRjFCRSxHQTNGMEIsRUEyRnJCO0FBQ1osVUFBS0MsUUFBTCxDQUFjO0FBQ1pqQixrQkFBVzNDLE9BQU8sRUFBUCxFQUFXLEtBQUtWLEtBQUwsQ0FBV3FELFNBQXRCLHNCQUNSZ0IsR0FEUSxFQUNGLENBQUMsS0FBS3JFLEtBQUwsQ0FBV3FELFNBQVgsQ0FBcUJnQixHQUFyQixDQURDO0FBREMsTUFBZDtBQUtEO0FBakdrQyxFQUFsQixDQUFuQjs7QUFvR0F2SCxRQUFPQyxPQUFQLEdBQWlCd0IsVUFBakIsQzs7Ozs7O0FDM0dBLDREOzs7Ozs7QUNBQSwyRDs7Ozs7Ozs7QUNBQXpCLFFBQU9DLE9BQVAsR0FBaUIsVUFBUzBCLFlBQVQsRUFBdUI7QUFDdEMsT0FBTXlGLE9BQU96RixhQUFhOEYsUUFBYixDQUFzQkMsTUFBdEIsQ0FBNkIsVUFBU3BGLEdBQVQsRUFBYzJDLENBQWQsRUFBaUIwQyxDQUFqQixFQUFvQjtBQUM1RCxTQUFNQyxVQUFVM0MsRUFBRWpDLFVBQUYsQ0FBYTZFLEtBQTdCO0FBQ0EsU0FBTUMsVUFBVW5HLGFBQWE4RixRQUFiLENBQXNCTSxLQUF0QixDQUE0QixDQUE1QixFQUErQkosQ0FBL0IsRUFBa0N4RyxNQUFsQyxDQUF5QztBQUFBLGNBQUs2RyxFQUFFaEYsVUFBRixDQUFhNkUsS0FBYixHQUFxQkQsT0FBMUI7QUFBQSxNQUF6QyxDQUFoQjtBQUNBLFNBQUlLLHNCQUFKOztBQUVBSCxhQUFROUQsT0FBUixDQUFnQixVQUFTZ0UsQ0FBVCxFQUFZO0FBQzFCLFdBQUksQ0FBQ0MsYUFBRCxJQUFrQkQsRUFBRWhGLFVBQUYsQ0FBYTZFLEtBQWIsSUFBc0JJLGNBQWNqRixVQUFkLENBQXlCNkUsS0FBckUsRUFBNEU7QUFDMUVJLHlCQUFnQkQsQ0FBaEI7QUFDRDtBQUNGLE1BSkQ7O0FBTUEsU0FBSUMsYUFBSixFQUFtQjtBQUNqQjNGLFdBQUkyRixjQUFjM0UsR0FBbEIsSUFBeUJoQixJQUFJMkYsY0FBYzNFLEdBQWxCLEtBQTBCO0FBQ2pEMkQsZUFBTWdCLGFBRDJDO0FBRWpEbEIsbUJBQVU7QUFGdUMsUUFBbkQ7O0FBS0F6RSxXQUFJMkYsY0FBYzNFLEdBQWxCLEVBQXVCeUQsUUFBdkIsQ0FBZ0M1QyxJQUFoQyxDQUFxQ2MsQ0FBckM7QUFDRCxNQVBELE1BUUs7QUFDSDNDLFdBQUkyQyxFQUFFM0IsR0FBTixJQUFhaEIsSUFBSTJDLEVBQUUzQixHQUFOLEtBQWMsRUFBRXFELE1BQU0sSUFBUixFQUFjTSxNQUFNaEMsQ0FBcEIsRUFBdUI4QixVQUFVLEVBQWpDLEVBQTNCO0FBQ0Q7O0FBRUQsWUFBT3pFLEdBQVA7QUFDRCxJQXhCWSxFQXdCVixFQXhCVSxDQUFiOztBQTBCQSxVQUFPeUMsT0FBT0MsSUFBUCxDQUFZb0MsSUFBWixFQUFrQjlFLEdBQWxCLENBQXNCO0FBQUEsWUFBSzhFLEtBQUtuQyxDQUFMLENBQUw7QUFBQSxJQUF0QixFQUFvQ2lELElBQXBDLENBQXlDLFVBQVM3RCxDQUFULEVBQVc4RCxDQUFYLEVBQWM7QUFDNUQsU0FBSTlELEVBQUU0QyxJQUFGLENBQU9qRSxVQUFQLENBQWtCNkUsS0FBbEIsR0FBMEJNLEVBQUVsQixJQUFGLENBQU9qRSxVQUFQLENBQWtCNkUsS0FBaEQsRUFBdUQ7QUFDckQsY0FBTyxDQUFQO0FBQ0QsTUFGRCxNQUdLO0FBQ0gsY0FBTyxDQUFDLENBQVI7QUFDRDtBQUNGLElBUE0sQ0FBUDtBQVFELEVBbkNELEM7Ozs7OztBQ0FBLG1EOzs7Ozs7QUNBQSxrRTs7Ozs7Ozs7QUNBQTdILFFBQU9DLE9BQVAsR0FBaUIsVUFBU21JLEdBQVQsRUFBYztBQUM3QixVQUFPQSxJQUNKM0QsT0FESSxDQUNJLE9BREosRUFDYSxHQURiLEVBRUpBLE9BRkksQ0FFSSxRQUZKLEVBRWMsVUFBUzRELEtBQVQsRUFBZ0I7QUFDakMsWUFBT0EsTUFBTUMsTUFBTixDQUFhLENBQWIsRUFBZ0JDLFdBQWhCLEtBQWdDRixNQUFNTixLQUFOLENBQVksQ0FBWixDQUF2QztBQUNELElBSkksQ0FBUDtBQU1ELEVBUEQsQzs7Ozs7Ozs7OztBQ0FBLEtBQU16SCxRQUFRLG1CQUFBVixDQUFRLENBQVIsQ0FBZDtBQUNBLEtBQU00SSxVQUFVLG1CQUFBNUksQ0FBUSxFQUFSLENBQWhCO0tBQ1FjLE0sR0FBV0osTUFBTUUsUyxDQUFqQkUsTTtLQUNBRixTLEdBQWNGLEssQ0FBZEUsUzs7O0FBRVJSLFFBQU9DLE9BQVAsR0FBaUJLLE1BQU1PLFdBQU4sQ0FBa0I7QUFDakNDLGdCQUFhLDBCQURvQjs7QUFHakNDLGNBQVc7QUFDVFksbUJBQWNqQixNQURMO0FBRVRPLHFCQUFnQlQsVUFBVUcsS0FBVixDQUFnQjtBQUM5QjhILGtCQUFXakksVUFBVWtJO0FBRFMsTUFBaEI7QUFGUCxJQUhzQjs7QUFVakN0SCxTQVZpQyxvQkFVeEI7QUFDUCxTQUFJLENBQUMsS0FBS0MsS0FBTCxDQUFXTSxZQUFaLElBQTRCLENBQUMsS0FBS04sS0FBTCxDQUFXTSxZQUFYLENBQXdCcUIsVUFBekQsRUFBcUU7QUFDbkUsY0FBTyxJQUFQO0FBQ0Q7O0FBRUQsWUFDRSxvQkFBQyxPQUFELGVBQWEsS0FBSzNCLEtBQWxCLEVBQTZCLEtBQUtBLEtBQUwsQ0FBV0osY0FBeEMsRUFERjtBQUdEO0FBbEJnQyxFQUFsQixDQUFqQixDOzs7Ozs7OztBQ0xBLEtBQU1YLFFBQVEsbUJBQUFWLENBQVEsQ0FBUixDQUFkO0FBQ0EsS0FBTStJLGtCQUFrQixtQkFBQS9JLENBQVEsRUFBUixDQUF4QjtBQUNBLEtBQU1nSixTQUFTLG1CQUFBaEosQ0FBUSxFQUFSLENBQWY7O3dCQUVvRFUsTUFBTUUsUztLQUFsREcsSyxvQkFBQUEsSztLQUFPK0gsTSxvQkFBQUEsTTtLQUFRaEksTSxvQkFBQUEsTTtLQUFRbUksUyxvQkFBQUEsUztLQUFXakksSSxvQkFBQUEsSTs7O0FBRTFDLEtBQU00SCxVQUFVbEksTUFBTU8sV0FBTixDQUFrQjtBQUFBOztBQUNoQ2lJLGlCQUFjO0FBQ1pDLGVBQVVwSSxNQUFNLEVBQUVxSSxVQUFVTixNQUFaLEVBQU4sRUFBNEJPLFVBRDFCO0FBRVovRyxhQUFRdkIsTUFBTTtBQUNadUksZUFBUUwsVUFBVSxDQUFFakksSUFBRixFQUFRRixNQUFSLENBQVY7QUFESSxNQUFOLEVBRUx1STtBQUpTLElBRGtCOztBQVFoQ2xJLGNBQVc7QUFDVDBILGdCQUFXQyxNQURGO0FBRVQvRyxtQkFBY2hCLE1BQU07QUFDbEJ3SSxlQUFRVDtBQURVLE1BQU4sRUFFWE87QUFKTSxJQVJxQjs7QUFlaEM3SCxTQWZnQyxvQkFldkI7QUFDUCxTQUFNMkIsVUFBVSxLQUFLMUIsS0FBTCxDQUFXTSxZQUFYLENBQXdCcUIsVUFBeEM7O0FBRUEsWUFDRTtBQUFBO0FBQUEsU0FBSyxXQUFXLEtBQUszQixLQUFMLENBQVdvSCxTQUEzQjtBQUNFO0FBQUMsd0JBQUQ7QUFBQTtBQUFrQjFGLGlCQUFRb0c7QUFBMUIsUUFERjtBQUdHLFlBQUtDLE9BQUwsQ0FBYWxILE1BQWIsQ0FBb0JnSCxNQUFwQixJQUNDLG9CQUFDLE1BQUQ7QUFDRSxxQkFBWW5HLFFBQVFzRyxFQUR0QjtBQUVFLGdCQUFPdEcsUUFBUUQsS0FGakI7QUFHRSxtQkFBVSxLQUFLc0csT0FBTCxDQUFhTCxRQUFiLENBQXNCQyxRQUhsQztBQUlFLGlCQUFRLEtBQUtJLE9BQUwsQ0FBYWxILE1BQWIsQ0FBb0JnSDtBQUo5QjtBQUpKLE1BREY7QUFjRDtBQWhDK0IsRUFBbEIsQ0FBaEI7O0FBbUNBbEosUUFBT0MsT0FBUCxHQUFpQnVJLE9BQWpCLEM7Ozs7OztBQ3pDQSx1RTs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7QUNBQSxLQUFNbEksUUFBUSxtQkFBQVYsQ0FBUSxDQUFSLENBQWQ7QUFDQSxLQUFNNkIsYUFBYSxtQkFBQTdCLENBQVEsQ0FBUixDQUFuQjt3QkFDaUNVLE1BQU1FLFM7S0FBL0JFLE0sb0JBQUFBLE07S0FBUUUsSSxvQkFBQUEsSTtLQUFNRCxLLG9CQUFBQSxLOzs7QUFFdEJYLFFBQU9DLE9BQVAsR0FBaUJLLE1BQU1PLFdBQU4sQ0FBa0I7QUFDakNDLGdCQUFhLDZCQURvQjs7QUFHakNDLGNBQVc7QUFDVGEseUJBQW9CbEIsTUFEWDtBQUVUaUIsbUJBQWNqQixPQUFPdUksVUFGWjtBQUdUakksb0JBQWVOLE9BQU91SSxVQUhiO0FBSVRoSSxxQkFBZ0JOLE1BQU07QUFDcEIyRixnQkFBUzFGO0FBRFcsTUFBTjtBQUpQLElBSHNCOztBQVlqQ1EsU0FaaUMsb0JBWXhCO0FBQ1AsU0FBSSxDQUFDLEtBQUtDLEtBQUwsQ0FBV00sWUFBaEIsRUFBOEI7QUFDNUIsY0FBTyxJQUFQO0FBQ0Q7O0FBRUQsWUFDRSxvQkFBQyxVQUFELGFBQVksVUFBWixFQUFpQixTQUFTLEtBQUtOLEtBQUwsQ0FBV0osY0FBWCxDQUEwQnFGLE9BQXBELElBQWlFLEtBQUtqRixLQUF0RSxFQURGO0FBR0Q7QUFwQmdDLEVBQWxCLENBQWpCLEM7Ozs7Ozs7O0FDSkEsS0FBTWYsUUFBUSxtQkFBQVYsQ0FBUSxDQUFSLENBQWQ7d0JBQ2tDVSxNQUFNRSxTO0tBQWhDRyxLLG9CQUFBQSxLO0tBQU8rSCxNLG9CQUFBQSxNO0tBQVFZLE0sb0JBQUFBLE07O0FBQ3ZCLEtBQU1DLE1BQU0sR0FBWixDLENBQWlCOztBQUVqQnZKLFFBQU9DLE9BQVAsR0FBaUJLLE1BQU1PLFdBQU4sQ0FBa0I7QUFDakNDLGdCQUFhLDJCQURvQjs7QUFHakNDLGNBQVc7QUFDVFksbUJBQWNoQixNQUFNO0FBQ2xCcUMsbUJBQVlyQyxNQUFNO0FBQ2hCbUMsZ0JBQU80RixNQURTO0FBRWhCYyxvQkFBV0Y7QUFGSyxRQUFOO0FBRE0sTUFBTjtBQURMLElBSHNCOztBQVlqQ2xJLFNBWmlDLG9CQVl4QjtBQUNQLFNBQU1xSSxNQUFNLEtBQUtwSSxLQUFMLENBQVdNLFlBQVgsQ0FBd0JxQixVQUFwQztBQUNBLFNBQU0wRyxtQkFBbUJDLEtBQUtDLElBQUwsQ0FBVUgsSUFBSUQsU0FBSixHQUFnQkQsR0FBMUIsQ0FBekI7O0FBRUEsWUFDRTtBQUFBO0FBQUE7QUFDR0UsV0FBSTNHLEtBRFA7QUFBQTtBQUNjO0FBQUE7QUFBQTtBQUFBO0FBQVM0Ryx5QkFBVDtBQUFBO0FBQUE7QUFEZCxNQURGO0FBS0Q7QUFyQmdDLEVBQWxCLENBQWpCLEMiLCJmaWxlIjoibWVnYWRvYy1wbHVnaW4tbWFya2Rvd24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmZjAyM2ViZDY4M2IwOTdlZTYwZSIsImNvbnN0IEJyb3dzZXJPdXRsZXQgPSByZXF1aXJlKCcuL291dGxldHMvQnJvd3Nlck91dGxldCcpO1xuY29uc3QgRG9jdW1lbnRPdXRsZXQgPSByZXF1aXJlKCcuL291dGxldHMvRG9jdW1lbnRPdXRsZXQnKTtcbmNvbnN0IERvY3VtZW50VE9DT3V0bGV0ID0gcmVxdWlyZSgnLi9vdXRsZXRzL0RvY3VtZW50VE9DT3V0bGV0Jyk7XG5jb25zdCBJbnNwZWN0b3JPdXRsZXQgPSByZXF1aXJlKCcuL291dGxldHMvSW5zcGVjdG9yT3V0bGV0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBuYW1lOiAnbWVnYWRvYy1wbHVnaW4tbHVhJyxcbiAgb3V0bGV0czogW1xuICAgICdNYXJrZG93bjo6RG9jdW1lbnQnLFxuICAgICdNYXJrZG93bjo6RG9jdW1lbnRUT0MnLFxuICAgICdNYXJrZG93bjo6QnJvd3NlcicsXG4gIF0sXG5cbiAgb3V0bGV0T2NjdXBhbnRzOiBbXG4gICAgeyBuYW1lOiAnTWFya2Rvd246OkRvY3VtZW50JywgY29tcG9uZW50OiBEb2N1bWVudE91dGxldCwgfSxcbiAgICB7IG5hbWU6ICdNYXJrZG93bjo6RG9jdW1lbnRUT0MnLCBjb21wb25lbnQ6IERvY3VtZW50VE9DT3V0bGV0LCB9LFxuICAgIHsgbmFtZTogJ01hcmtkb3duOjpCcm93c2VyJywgY29tcG9uZW50OiBCcm93c2VyT3V0bGV0LCB9LFxuICAgIHsgbmFtZTogJ0NvcmU6Okluc3BlY3RvcicsIGNvbXBvbmVudDogSW5zcGVjdG9yT3V0bGV0LCB9LFxuICBdXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLW1hcmtkb3duL3VpL2luZGV4LmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgQnJvd3NlciA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvQnJvd3NlcicpXG5jb25zdCB7IGFycmF5LCBvYmplY3QsIHNoYXBlLCBib29sLCB9ID0gUmVhY3QuUHJvcFR5cGVzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdNYXJrZG93bjo6QnJvd3Nlck91dGxldCcsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgbmFtZXNwYWNlTm9kZTogb2JqZWN0LFxuICAgICRvdXRsZXRPcHRpb25zOiBzaGFwZSh7XG4gICAgICBmbGF0OiBib29sLFxuICAgICAgZmlsdGVyOiBhcnJheSxcbiAgICB9KVxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJyb3dzZXJcbiAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgIGZsYXQ9e3RoaXMucHJvcHMuJG91dGxldE9wdGlvbnMuZmxhdH1cbiAgICAgICAgZmlsdGVyPXt0aGlzLnByb3BzLiRvdXRsZXRPcHRpb25zLmZpbHRlcn1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tbWFya2Rvd24vdWkvb3V0bGV0cy9Ccm93c2VyT3V0bGV0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1wicmVhY3RcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJyZWFjdFxcXCJdXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBMaW5rID0gcmVxdWlyZSgnY29tcG9uZW50cy9MaW5rJyk7XG5jb25zdCBIb3RJdGVtSW5kaWNhdG9yID0gcmVxdWlyZSgnY29tcG9uZW50cy9Ib3RJdGVtSW5kaWNhdG9yJyk7XG5jb25zdCB7IFJPT1RfRk9MREVSX0lEIH0gPSByZXF1aXJlKCdjb25zdGFudHMnKTtcbmNvbnN0IEFydGljbGVUT0MgPSByZXF1aXJlKCcuL0FydGljbGVUT0MnKTtcbmNvbnN0IGZpbHRlckRvY3VtZW50cyA9IHJlcXVpcmUoJ3V0aWxzL2ZpbHRlckRvY3VtZW50cycpXG5jb25zdCB7IG9iamVjdCB9ID0gUmVhY3QuUHJvcFR5cGVzO1xuXG52YXIgQnJvd3NlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgbmFtZXNwYWNlTm9kZTogb2JqZWN0LFxuICAgIGRvY3VtZW50Tm9kZTogb2JqZWN0LFxuICAgIGRvY3VtZW50RW50aXR5Tm9kZTogb2JqZWN0LFxuICAgIGV4cGFuZGVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBmbGF0OiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBmaWx0ZXI6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdyb3VwQnlGb2xkZXI6IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBuYW1lc3BhY2VOb2RlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWVnYWRvYy1kb2N1bWVudC1icm93c2VyIG1hcmtkb3duLWJyb3dzZXJcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7QXJyYXkuaXNBcnJheShuYW1lc3BhY2VOb2RlLmNvbmZpZy5mb2xkZXJzKSAmJiBuYW1lc3BhY2VOb2RlLmNvbmZpZy5mb2xkZXJzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICBGb2xkZXJIaWVyYXJjaHkobmFtZXNwYWNlTm9kZSkubWFwKHRoaXMucmVuZGVyRm9sZGVyKVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICBuYW1lc3BhY2VOb2RlLmRvY3VtZW50c1xuICAgICAgICAgICAgICAuZmlsdGVyKGZpbHRlckRvY3VtZW50cyh0aGlzLnByb3BzLmZpbHRlcikpXG4gICAgICAgICAgICAgIC5tYXAodGhpcy5yZW5kZXJBcnRpY2xlKVxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJGb2xkZXJzKGZvbGRlcnMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge2ZvbGRlcnMubWFwKHRoaXMucmVuZGVyRm9sZGVyKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyRm9sZGVyKGZvbGRlcikge1xuICAgIGNvbnN0IHsgZG9jdW1lbnRzIH0gPSBmb2xkZXI7XG4gICAgY29uc3QgZmlsdGVyZWQgPSBmaWx0ZXJEb2N1bWVudHModGhpcy5wcm9wcy5maWx0ZXIpKGRvY3VtZW50cylcblxuICAgIGlmICghZmlsdGVyZWQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBrZXk9e2ZvbGRlci5wYXRofSBjbGFzc05hbWU9XCJjbGFzcy1icm93c2VyX19jYXRlZ29yeVwiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2xhc3MtYnJvd3Nlcl9fY2F0ZWdvcnktbmFtZVwiPlxuICAgICAgICAgIHtmb2xkZXIudGl0bGUgPT09ICcuJyA/ICcvJyA6IGZvbGRlci50aXRsZX1cbiAgICAgICAgPC9oMz5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtkb2N1bWVudHMubWFwKHRoaXMucmVuZGVyQXJ0aWNsZSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJBcnRpY2xlKGRvY3VtZW50Tm9kZSkge1xuICAgIGNvbnN0IGFydGljbGUgPSBkb2N1bWVudE5vZGUucHJvcGVydGllcztcbiAgICBjb25zdCBpc0FjdGl2ZSA9IHRoaXMucHJvcHMuZG9jdW1lbnROb2RlID09PSBkb2N1bWVudE5vZGUgfHwgdGhpcy5wcm9wcy5leHBhbmRlZDtcbiAgICBsZXQgdGl0bGUgPSBhcnRpY2xlLnRpdGxlIHx8ICcnO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuZ3JvdXBCeUZvbGRlciAmJlxuICAgICAgYXJ0aWNsZS5mb2xkZXJUaXRsZSAhPT0gUk9PVF9GT0xERVJfSUQgJiZcbiAgICAgIGFydGljbGUuZm9sZGVyVGl0bGUgIT09ICcuJykge1xuXG4gICAgICBpZiAodGl0bGUuaW5kZXhPZihhcnRpY2xlLmZvbGRlclRpdGxlICsgJy8nKSA9PT0gMCkge1xuICAgICAgICB0aXRsZSA9IHRpdGxlLnN1YnN0cihhcnRpY2xlLmZvbGRlclRpdGxlLmxlbmd0aCArIDEgLyogJy8nICovKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBrZXk9e2RvY3VtZW50Tm9kZS51aWR9PlxuICAgICAgICA8TGluayB0bz17ZG9jdW1lbnROb2RlfSBjbGFzc05hbWU9XCJjbGFzcy1icm93c2VyX19lbnRyeS1saW5rXCI+XG4gICAgICAgICAge2FydGljbGUucGxhaW5UaXRsZX1cblxuICAgICAgICAgIHtkb2N1bWVudE5vZGUubWV0YS5naXRTdGF0cyAmJiAoXG4gICAgICAgICAgICA8SG90SXRlbUluZGljYXRvciB0aW1lc3RhbXA9e2RvY3VtZW50Tm9kZS5tZXRhLmdpdFN0YXRzLmxhc3RDb21taXR0ZWRBdH0gLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICAge2lzQWN0aXZlICYmICF0aGlzLnByb3BzLmZsYXQgJiYgdGhpcy5yZW5kZXJUT0MoZG9jdW1lbnROb2RlKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyVE9DKGRvY3VtZW50Tm9kZSkge1xuICAgIHJldHVybiA8QXJ0aWNsZVRPQyBkb2N1bWVudE5vZGU9e2RvY3VtZW50Tm9kZX0gLz5cbiAgfSxcblxufSk7XG5cbmZ1bmN0aW9uIEZvbGRlckhpZXJhcmNoeShuYW1lc3BhY2VOb2RlKSB7XG4gIGNvbnN0IHsgYXNzaWduLCBmaW5kV2hlcmUsIHNvcnRCeSB9ID0gcmVxdWlyZSgnbG9kYXNoJyk7XG4gIGNvbnN0IHN0ckh1bWFuaXplID0gcmVxdWlyZSgnLi4vLi4vbGliL3V0aWxzL3N0ckh1bWFuaXplJyk7XG4gIGNvbnN0IHsgY29uZmlnLCBkb2N1bWVudHMgfSA9IG5hbWVzcGFjZU5vZGU7XG4gIGNvbnN0IGZvbGRlcnMgPSB7fTtcblxuICBzb3J0QnkoZG9jdW1lbnRzLCAndGl0bGUnKS5mb3JFYWNoKGRvY3VtZW50Tm9kZSA9PiB7XG4gICAgY29uc3QgZm9sZGVyUGF0aCA9IGRvY3VtZW50Tm9kZS5wcm9wZXJ0aWVzLmZvbGRlcjtcblxuICAgIGlmICghKGZvbGRlclBhdGggaW4gZm9sZGVycykpIHtcbiAgICAgIGZvbGRlcnNbZm9sZGVyUGF0aF0gPSBjcmVhdGVGb2xkZXJDb25maWcoZm9sZGVyUGF0aCk7XG4gICAgfVxuXG4gICAgZm9sZGVyc1tmb2xkZXJQYXRoXS5kb2N1bWVudHMucHVzaChkb2N1bWVudE5vZGUpO1xuICB9KTtcblxuICBmb3IgKGxldCBmb2xkZXJQYXRoIGluIGZvbGRlcnMpIHtcbiAgICBjb25zdCBmb2xkZXIgPSBmb2xkZXJzW2ZvbGRlclBhdGhdO1xuXG4gICAgaWYgKGZvbGRlci5zZXJpZXMpIHtcbiAgICAgIGZvbGRlci5kb2N1bWVudHMgPSBzb3J0QnkoZm9sZGVyLmRvY3VtZW50cywgJ3Byb3BlcnRpZXMuZmlsZU5hbWUnKTtcbiAgICB9XG5cbiAgICAvLyBSRUFETUUgYWx3YXlzIGNvbWVzIGZpcnN0XG4gICAgZm9sZGVyLmRvY3VtZW50cyA9IHNvcnRCeShmb2xkZXIuZG9jdW1lbnRzLCBmdW5jdGlvbihhKSB7XG4gICAgICBpZiAoYS5wcm9wZXJ0aWVzLmZpbGVOYW1lID09PSAnUkVBRE1FJykge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBUT0RPOiBjYW4gd2UgcGxlYXNlIGRvIHRoaXMgYXQgY29tcGlsZS10aW1lIGluc3RlYWQ/P1xuICAvL1xuICAvLyBubyB3ZSBjYW4ndCwgemlwIGl0XG4gIGZ1bmN0aW9uIGNyZWF0ZUZvbGRlckNvbmZpZyhmb2xkZXJQYXRoKSB7XG4gICAgY29uc3QgZm9sZGVyQ29uZmlnID0gZmluZFdoZXJlKGNvbmZpZy5mb2xkZXJzLCB7IHBhdGg6IGZvbGRlclBhdGggfSk7XG4gICAgY29uc3QgZm9sZGVyID0gYXNzaWduKHt9LCBmb2xkZXJDb25maWcsIHtcbiAgICAgIHBhdGg6IGZvbGRlclBhdGgsXG4gICAgICBkb2N1bWVudHM6IFtdXG4gICAgfSk7XG5cbiAgICAvLyBnZW5lcmF0ZSBhIHRpdGxlXG4gICAgaWYgKCFmb2xkZXIudGl0bGUpIHtcbiAgICAgIGlmIChjb25maWcuZnVsbEZvbGRlclRpdGxlcykge1xuICAgICAgICBmb2xkZXIudGl0bGUgPSBmb2xkZXJQYXRoXG4gICAgICAgICAgLnJlcGxhY2UoY29uZmlnLmNvbW1vblByZWZpeCwgJycpXG4gICAgICAgICAgLnNwbGl0KCcvJylcbiAgICAgICAgICAubWFwKHN0ckh1bWFuaXplKVxuICAgICAgICAgIC5qb2luKGNvbmZpZy5mdWxsRm9sZGVyVGl0bGVEZWxpbWl0ZXIpXG4gICAgICAgIDtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBmcmFnbWVudHMgPSBmb2xkZXJQYXRoLnNwbGl0KCcvJyk7XG4gICAgICAgIGZvbGRlci50aXRsZSA9IHN0ckh1bWFuaXplKGZyYWdtZW50c1tmcmFnbWVudHMubGVuZ3RoLTFdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZm9sZGVyO1xuICB9XG5cbiAgcmV0dXJuIHNvcnRCeShPYmplY3Qua2V5cyhmb2xkZXJzKS5tYXAoeCA9PiBmb2xkZXJzW3hdKSwgJ3RpdGxlJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQnJvd3NlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1tYXJrZG93bi91aS9jb21wb25lbnRzL0Jyb3dzZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IE1FR0FET0NfUFVCTElDX01PRFVMRVNbXCJjb21wb25lbnRzL0xpbmtcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJjb21wb25lbnRzL0xpbmtcXFwiXVwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcImNvbXBvbmVudHMvSG90SXRlbUluZGljYXRvclwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImNvbXBvbmVudHMvSG90SXRlbUluZGljYXRvclxcXCJdXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5TT1JUX0FTQyA9IFwiYXNjXCI7XG5leHBvcnRzLlNPUlRfREVTQyA9IFwiZGVzY1wiO1xuXG5leHBvcnRzLlFVRVJZX09OID0gXCIxXCI7XG5leHBvcnRzLlFVRVJZX09GRiA9IHVuZGVmaW5lZDtcblxuZXhwb3J0cy5LQ19SRVRVUk4gPSAxMztcbmV4cG9ydHMuS0NfSyA9IDc1O1xuZXhwb3J0cy5LQ19FU0NBUEUgPSAyNztcblxuZXhwb3J0cy5BVkFJTEFCTEVfU0NIRU1FUyA9IFtcbiAgJ3BsYWluJyxcbiAgJ3N0ZWVsJyxcbiAgJ3NvbGFyaXplZC0tbGlnaHQnLFxuICAnc29sYXJpemVkLS1kYXJrJ1xuXTtcblxuZXhwb3J0cy5BVkFJTEFCTEVfU0NIRU1FX05BTUVTID0gW1xuICAnTGlnaHQnLFxuICAnU3RlZWwnLFxuICAnU29sYXJpemVkIChsaWdodCknLFxuICAnU29sYXJpemVkIChkYXJrKSdcbl07XG5cbmV4cG9ydHMuQVZBSUxBQkxFX0xBWU9VVFMgPSBbXG4gICdzaW5nbGUtcGFnZScsXG4gICdtdWx0aS1wYWdlJyxcbl07XG5cbmV4cG9ydHMuREVGQVVMVF9TQ0hFTUUgPSAncGxhaW4nO1xuXG5leHBvcnRzLkNGR19DT0xPUl9TQ0hFTUUgPSAnY29sb3JTY2hlbWUnO1xuZXhwb3J0cy5DRkdfU1lOVEFYX0hJR0hMSUdIVElORyA9ICdoaWdobGlnaHRpbmdFbmFibGVkJztcbmV4cG9ydHMuQ0ZHX1NJREVCQVJfV0lEVEggPSAnc2lkZWJhcldpZHRoJztcbmV4cG9ydHMuTUlOX1NJREVCQVJfV0lEVEggPSAxNjA7XG5leHBvcnRzLklOSVRJQUxfU0lERUJBUl9XSURUSCA9IDI0MDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLWh0bWwtc2VyaWFsaXplci91aS9zaGFyZWQvY29uc3RhbnRzLmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBMaW5rID0gcmVxdWlyZSgnY29tcG9uZW50cy9MaW5rJyk7XG5jb25zdCBJY29uID0gcmVxdWlyZSgnY29tcG9uZW50cy9JY29uJyk7XG5jb25zdCBjbGFzc1NldCA9IHJlcXVpcmUoJ3V0aWxzL2NsYXNzU2V0Jyk7XG5jb25zdCBTZWN0aW9uVHJlZSA9IHJlcXVpcmUoJy4uL1NlY3Rpb25UcmVlJyk7XG5jb25zdCB7IGFzc2lnbiB9ID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cbmNvbnN0IEFydGljbGVUT0MgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHByb3BUeXBlczoge1xuICAgIGRvY3VtZW50Tm9kZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBkb2N1bWVudEVudGl0eU5vZGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgZmxhdDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgZ3JvdXBlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb2xsYXBzZWQ6IHt9XG4gICAgfTtcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZsYXQ6IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2VjdGlvbnMgPSBTZWN0aW9uVHJlZSh0aGlzLnByb3BzLmRvY3VtZW50Tm9kZSk7XG4gICAgY29uc3Qgcm9vdFNlY3Rpb25zID0gc2VjdGlvbnMuZmlsdGVyKHggPT4geC5yb290KTtcbiAgICBjb25zdCBoYXNDaGlsZHJlbiA9IHJvb3RTZWN0aW9ucy5zb21lKGJyYW5jaCA9PiBicmFuY2guY2hpbGRyZW4ubGVuZ3RoID4gMClcblxuICAgIGlmICghaGFzQ2hpbGRyZW4pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmdyb3VwZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJtYXJrZG93bi10b2MgbWFya2Rvd24tdG9jLS1mbGF0XCI+XG4gICAgICAgICAge3RoaXMucmVuZGVyTm9kZUluQnJhbmNoKHNlY3Rpb25zLCByb290U2VjdGlvbnNbMF0ubm9kZSl9XG4gICAgICAgIDwvdWw+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFya2Rvd24tdG9jXCI+XG4gICAgICAgIHtyb290U2VjdGlvbnMubWFwKHRoaXMucmVuZGVyVHJlZS5iaW5kKG51bGwsIHNlY3Rpb25zKSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlclRyZWUodHJlZSwgYnJhbmNoKSB7XG4gICAgaWYgKCFicmFuY2guY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHVsXG4gICAgICAgIGtleT17YnJhbmNoLm5vZGUudWlkfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzU2V0KFwibWFya2Rvd24tdG9jXCIsIHtcbiAgICAgICAgICBcIm1hcmtkb3duLXRvYy0tZmxhdFwiOiB0aGlzLnByb3BzLmZsYXQgJiYgYnJhbmNoLnJvb3RcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIHticmFuY2guY2hpbGRyZW4ubWFwKHRoaXMucmVuZGVyTm9kZUluQnJhbmNoLmJpbmQobnVsbCwgdHJlZSkpfVxuICAgICAgPC91bD5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlck5vZGVJbkJyYW5jaCh0cmVlLCBub2RlKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0cmVlLmZpbHRlcih4ID0+IHgubm9kZS51aWQgPT09IG5vZGUudWlkKVswXTtcbiAgICBjb25zdCBjb2xsYXBzZWQgPSB0aGlzLnN0YXRlLmNvbGxhcHNlZFtub2RlLnVpZF07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxpXG4gICAgICAgIGtleT17bm9kZS51aWR9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXQoe1xuICAgICAgICAgICdtYXJrZG93bi10b2NfX2VudHJ5JzogdHJ1ZSxcbiAgICAgICAgICAnbWFya2Rvd24tdG9jX19lbnRyeS0tY29sbGFwc2libGUnOiAhIWNoaWxkcmVuLFxuICAgICAgICAgICdtYXJrZG93bi10b2NfX2VudHJ5LS1jb2xsYXBzZWQnOiBjb2xsYXBzZWQsXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW4gJiYgKFxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzU2V0KHtcbiAgICAgICAgICAgICAgXCJpY29uLWFycm93LWRvd25cIjogY29sbGFwc2VkLFxuICAgICAgICAgICAgICBcImljb24tYXJyb3ctcmlnaHRcIjogIWNvbGxhcHNlZCxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5jb2xsYXBzZS5iaW5kKG51bGwsIG5vZGUudWlkKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIDxMaW5rIHRvPXtub2RlfSBjaGlsZHJlbj17bm9kZS5wcm9wZXJ0aWVzLnRleHR9IC8+XG5cbiAgICAgICAge2NoaWxkcmVuICYmICFjb2xsYXBzZWQgJiYgKHRoaXMucmVuZGVyVHJlZSh0cmVlLCBjaGlsZHJlbikpfVxuICAgICAgPC9saT5cbiAgICApXG4gIH0sXG5cbiAgY29sbGFwc2Uoa2V5KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb2xsYXBzZWQ6IGFzc2lnbih7fSwgdGhpcy5zdGF0ZS5jb2xsYXBzZWQsIHtcbiAgICAgICAgW2tleV06ICF0aGlzLnN0YXRlLmNvbGxhcHNlZFtrZXldXG4gICAgICB9KVxuICAgIH0pO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcnRpY2xlVE9DO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLW1hcmtkb3duL3VpL2NvbXBvbmVudHMvQXJ0aWNsZVRPQy5qcyIsIm1vZHVsZS5leHBvcnRzID0gTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcImNvbXBvbmVudHMvSWNvblwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImNvbXBvbmVudHMvSWNvblxcXCJdXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1widXRpbHMvY2xhc3NTZXRcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJ1dGlscy9jbGFzc1NldFxcXCJdXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9jdW1lbnROb2RlKSB7XG4gIGNvbnN0IHRyZWUgPSBkb2N1bWVudE5vZGUuZW50aXRpZXMucmVkdWNlKGZ1bmN0aW9uKG1hcCwgeCwgaSkge1xuICAgIGNvbnN0IG15TGV2ZWwgPSB4LnByb3BlcnRpZXMubGV2ZWw7XG4gICAgY29uc3QgcGFyZW50cyA9IGRvY3VtZW50Tm9kZS5lbnRpdGllcy5zbGljZSgwLCBpKS5maWx0ZXIoeSA9PiB5LnByb3BlcnRpZXMubGV2ZWwgPCBteUxldmVsKTtcbiAgICBsZXQgY2xvc2VzdFBhcmVudDtcblxuICAgIHBhcmVudHMuZm9yRWFjaChmdW5jdGlvbih5KSB7XG4gICAgICBpZiAoIWNsb3Nlc3RQYXJlbnQgfHwgeS5wcm9wZXJ0aWVzLmxldmVsID49IGNsb3Nlc3RQYXJlbnQucHJvcGVydGllcy5sZXZlbCkge1xuICAgICAgICBjbG9zZXN0UGFyZW50ID0geTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChjbG9zZXN0UGFyZW50KSB7XG4gICAgICBtYXBbY2xvc2VzdFBhcmVudC51aWRdID0gbWFwW2Nsb3Nlc3RQYXJlbnQudWlkXSB8fCB7XG4gICAgICAgIG5vZGU6IGNsb3Nlc3RQYXJlbnQsXG4gICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgfTtcblxuICAgICAgbWFwW2Nsb3Nlc3RQYXJlbnQudWlkXS5jaGlsZHJlbi5wdXNoKHgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG1hcFt4LnVpZF0gPSBtYXBbeC51aWRdIHx8IHsgcm9vdDogdHJ1ZSwgbm9kZTogeCwgY2hpbGRyZW46IFtdIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hcDtcbiAgfSwge30pO1xuXG4gIHJldHVybiBPYmplY3Qua2V5cyh0cmVlKS5tYXAoeCA9PiB0cmVlW3hdKS5zb3J0KGZ1bmN0aW9uKGEsYikge1xuICAgIGlmIChhLm5vZGUucHJvcGVydGllcy5sZXZlbCA+IGIubm9kZS5wcm9wZXJ0aWVzLmxldmVsKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLW1hcmtkb3duL3VpL1NlY3Rpb25UcmVlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1wibG9kYXNoXCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwibG9kYXNoXFxcIl1cIlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1widXRpbHMvZmlsdGVyRG9jdW1lbnRzXCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwidXRpbHMvZmlsdGVyRG9jdW1lbnRzXFxcIl1cIlxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0clxuICAgIC5yZXBsYWNlKC9bXy1dL2csICcgJylcbiAgICAucmVwbGFjZSgvKFxcdyspL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICByZXR1cm4gbWF0Y2guY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBtYXRjaC5zbGljZSgxKTtcbiAgICB9KVxuICA7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLW1hcmtkb3duL2xpYi91dGlscy9zdHJIdW1hbml6ZS5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IEFydGljbGUgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL0FydGljbGUnKVxuY29uc3QgeyBvYmplY3QgfSA9IFJlYWN0LlByb3BUeXBlcztcbmNvbnN0IHsgUHJvcFR5cGVzIH0gPSBSZWFjdDtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnTWFya2Rvd246OkRvY3VtZW50T3V0bGV0JyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBkb2N1bWVudE5vZGU6IG9iamVjdCxcbiAgICAkb3V0bGV0T3B0aW9uczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xuICAgIH0pLFxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZG9jdW1lbnROb2RlIHx8ICF0aGlzLnByb3BzLmRvY3VtZW50Tm9kZS5wcm9wZXJ0aWVzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEFydGljbGUgey4uLnRoaXMucHJvcHN9IHsuLi50aGlzLnByb3BzLiRvdXRsZXRPcHRpb25zfSAvPlxuICAgICk7XG4gIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tbWFya2Rvd24vdWkvb3V0bGV0cy9Eb2N1bWVudE91dGxldC5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgSGlnaGxpZ2h0ZWRUZXh0ID0gcmVxdWlyZSgnY29tcG9uZW50cy9IaWdobGlnaHRlZFRleHQnKTtcbmNvbnN0IERpc3F1cyA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvRGlzcXVzJyk7XG5cbmNvbnN0IHsgc2hhcGUsIHN0cmluZywgb2JqZWN0LCBvbmVPZlR5cGUsIGJvb2wsIH0gPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbmNvbnN0IEFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGNvbnRleHRUeXBlczoge1xuICAgIGxvY2F0aW9uOiBzaGFwZSh7IHBhdGhuYW1lOiBzdHJpbmcgfSkuaXNSZXF1aXJlZCxcbiAgICBjb25maWc6IHNoYXBlKHtcbiAgICAgIGRpc3F1czogb25lT2ZUeXBlKFsgYm9vbCwgb2JqZWN0IF0pLFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gIH0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgY2xhc3NOYW1lOiBzdHJpbmcsXG4gICAgZG9jdW1lbnROb2RlOiBzaGFwZSh7XG4gICAgICBzb3VyY2U6IHN0cmluZyxcbiAgICB9KS5pc1JlcXVpcmVkLFxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBhcnRpY2xlID0gdGhpcy5wcm9wcy5kb2N1bWVudE5vZGUucHJvcGVydGllcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuICAgICAgICA8SGlnaGxpZ2h0ZWRUZXh0PnthcnRpY2xlLnNvdXJjZX08L0hpZ2hsaWdodGVkVGV4dD5cblxuICAgICAgICB7dGhpcy5jb250ZXh0LmNvbmZpZy5kaXNxdXMgJiYgKFxuICAgICAgICAgIDxEaXNxdXNcbiAgICAgICAgICAgIGlkZW50aWZpZXI9e2FydGljbGUuaWR9XG4gICAgICAgICAgICB0aXRsZT17YXJ0aWNsZS50aXRsZX1cbiAgICAgICAgICAgIHBhdGhuYW1lPXt0aGlzLmNvbnRleHQubG9jYXRpb24ucGF0aG5hbWV9XG4gICAgICAgICAgICBjb25maWc9e3RoaXMuY29udGV4dC5jb25maWcuZGlzcXVzfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcnRpY2xlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLW1hcmtkb3duL3VpL2NvbXBvbmVudHMvQXJ0aWNsZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcImNvbXBvbmVudHMvSGlnaGxpZ2h0ZWRUZXh0XCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwiY29tcG9uZW50cy9IaWdobGlnaHRlZFRleHRcXFwiXVwiXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IE1FR0FET0NfUFVCTElDX01PRFVMRVNbXCJjb21wb25lbnRzL0Rpc3F1c1wiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImNvbXBvbmVudHMvRGlzcXVzXFxcIl1cIlxuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgQXJ0aWNsZVRPQyA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvQXJ0aWNsZVRPQycpXG5jb25zdCB7IG9iamVjdCwgYm9vbCwgc2hhcGUsIH0gPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ01hcmtkb3duOjpEb2N1bWVudFRPQ091dGxldCcsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgZG9jdW1lbnRFbnRpdHlOb2RlOiBvYmplY3QsXG4gICAgZG9jdW1lbnROb2RlOiBvYmplY3QuaXNSZXF1aXJlZCxcbiAgICBuYW1lc3BhY2VOb2RlOiBvYmplY3QuaXNSZXF1aXJlZCxcbiAgICAkb3V0bGV0T3B0aW9uczogc2hhcGUoe1xuICAgICAgZ3JvdXBlZDogYm9vbFxuICAgIH0pLFxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZG9jdW1lbnROb2RlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEFydGljbGVUT0MgZmxhdCBncm91cGVkPXt0aGlzLnByb3BzLiRvdXRsZXRPcHRpb25zLmdyb3VwZWR9IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICk7XG4gIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tbWFya2Rvd24vdWkvb3V0bGV0cy9Eb2N1bWVudFRPQ091dGxldC5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IHsgc2hhcGUsIHN0cmluZywgbnVtYmVyIH0gPSBSZWFjdC5Qcm9wVHlwZXM7XG5jb25zdCBXUE0gPSAyNzU7IC8vIGh0dHBzOi8vaGVscC5tZWRpdW0uY29tL2hjL2VuLXVzL2FydGljbGVzLzIxNDk5MTY2Ny1SZWFkLXRpbWVcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnTWFya2Rvd246Okluc3BlY3Rvck91dGxldCcsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgZG9jdW1lbnROb2RlOiBzaGFwZSh7XG4gICAgICBwcm9wZXJ0aWVzOiBzaGFwZSh7XG4gICAgICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgICAgIHdvcmRDb3VudDogbnVtYmVyLFxuICAgICAgfSlcbiAgICB9KSxcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZG9jID0gdGhpcy5wcm9wcy5kb2N1bWVudE5vZGUucHJvcGVydGllcztcbiAgICBjb25zdCBleHBlY3RlZFJlYWRUaW1lID0gTWF0aC5jZWlsKGRvYy53b3JkQ291bnQgLyBXUE0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxwPlxuICAgICAgICB7ZG9jLnRpdGxlfSA8c21hbGw+KHtleHBlY3RlZFJlYWRUaW1lfSBtaW4gcmVhZCk8L3NtYWxsPlxuICAgICAgPC9wPlxuICAgICk7XG4gIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tbWFya2Rvd24vdWkvb3V0bGV0cy9JbnNwZWN0b3JPdXRsZXQuanMiXSwic291cmNlUm9vdCI6IiJ9