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
	var DocumentOutlet = __webpack_require__(14);
	var DocumentTOCOutlet = __webpack_require__(18);
	var InspectorOutlet = __webpack_require__(19);
	
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
	    object = _React$PropTypes.object,
	    shape = _React$PropTypes.shape,
	    bool = _React$PropTypes.bool;
	
	
	module.exports = React.createClass({
	  displayName: 'Markdown::BrowserOutlet',
	
	  propTypes: {
	    namespaceNode: object,
	    $outletOptions: shape({
	      flat: bool
	    })
	  },
	
	  render: function render() {
	    return React.createElement(Browser, _extends({}, this.props, { flat: this.props.$outletOptions.flat }));
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
	var object = React.PropTypes.object;
	
	
	var Browser = React.createClass({
	  displayName: 'Browser',
	
	  propTypes: {
	    namespaceNode: object,
	    documentNode: object,
	    documentEntityNode: object,
	    expanded: React.PropTypes.bool,
	    flat: React.PropTypes.bool
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
	        Array.isArray(namespaceNode.config.folders) && namespaceNode.config.folders.length > 0 ? FolderHierarchy(namespaceNode).map(this.renderFolder) : namespaceNode.documents.map(this.renderArticle)
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
	
	  var strHumanize = __webpack_require__(13);
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

	'use strict';
	
	module.exports = function (str) {
	  return str.replace(/[_-]/g, ' ').replace(/(\w+)/g, function (match) {
	    return match.charAt(0).toUpperCase() + match.slice(1);
	  });
	};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(3);
	var Article = __webpack_require__(15);
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var HighlightedText = __webpack_require__(16);
	var Disqus = __webpack_require__(17);
	
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
/* 16 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["components/HighlightedText"];

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["components/Disqus"];

/***/ }),
/* 18 */
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
/* 19 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzQzYTc1YmM2YmJjZjRlZjZmMDMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tbWFya2Rvd24vdWkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tbWFya2Rvd24vdWkvb3V0bGV0cy9Ccm93c2VyT3V0bGV0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcInJlYWN0XFxcIl1cIiIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1tYXJrZG93bi91aS9jb21wb25lbnRzL0Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwiY29tcG9uZW50cy9MaW5rXFxcIl1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJjb21wb25lbnRzL0hvdEl0ZW1JbmRpY2F0b3JcXFwiXVwiIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtaHRtbC1zZXJpYWxpemVyL3VpL3NoYXJlZC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tbWFya2Rvd24vdWkvY29tcG9uZW50cy9BcnRpY2xlVE9DLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImNvbXBvbmVudHMvSWNvblxcXCJdXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwidXRpbHMvY2xhc3NTZXRcXFwiXVwiIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLW1hcmtkb3duL3VpL1NlY3Rpb25UcmVlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImxvZGFzaFxcXCJdXCIiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tbWFya2Rvd24vbGliL3V0aWxzL3N0ckh1bWFuaXplLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLW1hcmtkb3duL3VpL291dGxldHMvRG9jdW1lbnRPdXRsZXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tbWFya2Rvd24vdWkvY29tcG9uZW50cy9BcnRpY2xlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImNvbXBvbmVudHMvSGlnaGxpZ2h0ZWRUZXh0XFxcIl1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJjb21wb25lbnRzL0Rpc3F1c1xcXCJdXCIiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tbWFya2Rvd24vdWkvb3V0bGV0cy9Eb2N1bWVudFRPQ091dGxldC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1tYXJrZG93bi91aS9vdXRsZXRzL0luc3BlY3Rvck91dGxldC5qcyJdLCJuYW1lcyI6WyJCcm93c2VyT3V0bGV0IiwicmVxdWlyZSIsIkRvY3VtZW50T3V0bGV0IiwiRG9jdW1lbnRUT0NPdXRsZXQiLCJJbnNwZWN0b3JPdXRsZXQiLCJtb2R1bGUiLCJleHBvcnRzIiwibmFtZSIsIm91dGxldHMiLCJvdXRsZXRPY2N1cGFudHMiLCJjb21wb25lbnQiLCJSZWFjdCIsIkJyb3dzZXIiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJzaGFwZSIsImJvb2wiLCJjcmVhdGVDbGFzcyIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwibmFtZXNwYWNlTm9kZSIsIiRvdXRsZXRPcHRpb25zIiwiZmxhdCIsInJlbmRlciIsInByb3BzIiwiTGluayIsIkhvdEl0ZW1JbmRpY2F0b3IiLCJST09UX0ZPTERFUl9JRCIsIkFydGljbGVUT0MiLCJkb2N1bWVudE5vZGUiLCJkb2N1bWVudEVudGl0eU5vZGUiLCJleHBhbmRlZCIsImdldEluaXRpYWxTdGF0ZSIsImdyb3VwQnlGb2xkZXIiLCJBcnJheSIsImlzQXJyYXkiLCJjb25maWciLCJmb2xkZXJzIiwibGVuZ3RoIiwiRm9sZGVySGllcmFyY2h5IiwibWFwIiwicmVuZGVyRm9sZGVyIiwiZG9jdW1lbnRzIiwicmVuZGVyQXJ0aWNsZSIsInJlbmRlckZvbGRlcnMiLCJmb2xkZXIiLCJwYXRoIiwidGl0bGUiLCJhcnRpY2xlIiwicHJvcGVydGllcyIsImlzQWN0aXZlIiwic3RhdGUiLCJmb2xkZXJUaXRsZSIsImluZGV4T2YiLCJzdWJzdHIiLCJ1aWQiLCJwbGFpblRpdGxlIiwibWV0YSIsImdpdFN0YXRzIiwibGFzdENvbW1pdHRlZEF0IiwicmVuZGVyVE9DIiwiYXNzaWduIiwiZmluZFdoZXJlIiwic29ydEJ5Iiwic3RySHVtYW5pemUiLCJmb3JFYWNoIiwiZm9sZGVyUGF0aCIsImNyZWF0ZUZvbGRlckNvbmZpZyIsInB1c2giLCJzZXJpZXMiLCJhIiwiZmlsZU5hbWUiLCJmb2xkZXJDb25maWciLCJmdWxsRm9sZGVyVGl0bGVzIiwicmVwbGFjZSIsImNvbW1vblByZWZpeCIsInNwbGl0Iiwiam9pbiIsImZ1bGxGb2xkZXJUaXRsZURlbGltaXRlciIsImZyYWdtZW50cyIsIk9iamVjdCIsImtleXMiLCJ4IiwiU09SVF9BU0MiLCJTT1JUX0RFU0MiLCJRVUVSWV9PTiIsIlFVRVJZX09GRiIsInVuZGVmaW5lZCIsIktDX1JFVFVSTiIsIktDX0siLCJLQ19FU0NBUEUiLCJBVkFJTEFCTEVfU0NIRU1FUyIsIkFWQUlMQUJMRV9TQ0hFTUVfTkFNRVMiLCJBVkFJTEFCTEVfTEFZT1VUUyIsIkRFRkFVTFRfU0NIRU1FIiwiQ0ZHX0NPTE9SX1NDSEVNRSIsIkNGR19TWU5UQVhfSElHSExJR0hUSU5HIiwiQ0ZHX1NJREVCQVJfV0lEVEgiLCJNSU5fU0lERUJBUl9XSURUSCIsIklOSVRJQUxfU0lERUJBUl9XSURUSCIsIkljb24iLCJjbGFzc1NldCIsIlNlY3Rpb25UcmVlIiwiZ3JvdXBlZCIsImNvbGxhcHNlZCIsImdldERlZmF1bHRQcm9wcyIsInNlY3Rpb25zIiwicm9vdFNlY3Rpb25zIiwiZmlsdGVyIiwicm9vdCIsImhhc0NoaWxkcmVuIiwic29tZSIsImJyYW5jaCIsImNoaWxkcmVuIiwicmVuZGVyTm9kZUluQnJhbmNoIiwibm9kZSIsInJlbmRlclRyZWUiLCJiaW5kIiwidHJlZSIsImNvbGxhcHNlIiwidGV4dCIsImtleSIsInNldFN0YXRlIiwiZW50aXRpZXMiLCJyZWR1Y2UiLCJpIiwibXlMZXZlbCIsImxldmVsIiwicGFyZW50cyIsInNsaWNlIiwieSIsImNsb3Nlc3RQYXJlbnQiLCJzb3J0IiwiYiIsInN0ciIsIm1hdGNoIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJBcnRpY2xlIiwiY2xhc3NOYW1lIiwic3RyaW5nIiwiSGlnaGxpZ2h0ZWRUZXh0IiwiRGlzcXVzIiwib25lT2ZUeXBlIiwiY29udGV4dFR5cGVzIiwibG9jYXRpb24iLCJwYXRobmFtZSIsImlzUmVxdWlyZWQiLCJkaXNxdXMiLCJzb3VyY2UiLCJjb250ZXh0IiwiaWQiLCJudW1iZXIiLCJXUE0iLCJ3b3JkQ291bnQiLCJkb2MiLCJleHBlY3RlZFJlYWRUaW1lIiwiTWF0aCIsImNlaWwiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQSxLQUFNQSxnQkFBZ0IsbUJBQUFDLENBQVEsQ0FBUixDQUF0QjtBQUNBLEtBQU1DLGlCQUFpQixtQkFBQUQsQ0FBUSxF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TUUsUztLQUFoQ0UsSyxvQkFBQUEsSztLQUFPNkgsTSxvQkFBQUEsTTtLQUFRWSxNLG9CQUFBQSxNOztBQUN2QixLQUFNQyxNQUFNLEdBQVosQyxDQUFpQjs7QUFFakJwSixRQUFPQyxPQUFQLEdBQWlCSyxNQUFNTSxXQUFOLENBQWtCO0FBQ2pDQyxnQkFBYSwyQkFEb0I7O0FBR2pDQyxjQUFXO0FBQ1RVLG1CQUFjZCxNQUFNO0FBQ2xCa0MsbUJBQVlsQyxNQUFNO0FBQ2hCZ0MsZ0JBQU82RixNQURTO0FBRWhCYyxvQkFBV0Y7QUFGSyxRQUFOO0FBRE0sTUFBTjtBQURMLElBSHNCOztBQVlqQ2pJLFNBWmlDLG9CQVl4QjtBQUNQLFNBQU1vSSxNQUFNLEtBQUtuSSxLQUFMLENBQVdLLFlBQVgsQ0FBd0JvQixVQUFwQztBQUNBLFNBQU0yRyxtQkFBbUJDLEtBQUtDLElBQUwsQ0FBVUgsSUFBSUQsU0FBSixHQUFnQkQsR0FBMUIsQ0FBekI7O0FBRUEsWUFDRTtBQUFBO0FBQUE7QUFDR0UsV0FBSTVHLEtBRFA7QUFBQTtBQUNjO0FBQUE7QUFBQTtBQUFBO0FBQVM2Ryx5QkFBVDtBQUFBO0FBQUE7QUFEZCxNQURGO0FBS0Q7QUFyQmdDLEVBQWxCLENBQWpCLEMiLCJmaWxlIjoibWVnYWRvYy1wbHVnaW4tbWFya2Rvd24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3NDNhNzViYzZiYmNmNGVmNmYwMyIsImNvbnN0IEJyb3dzZXJPdXRsZXQgPSByZXF1aXJlKCcuL291dGxldHMvQnJvd3Nlck91dGxldCcpO1xuY29uc3QgRG9jdW1lbnRPdXRsZXQgPSByZXF1aXJlKCcuL291dGxldHMvRG9jdW1lbnRPdXRsZXQnKTtcbmNvbnN0IERvY3VtZW50VE9DT3V0bGV0ID0gcmVxdWlyZSgnLi9vdXRsZXRzL0RvY3VtZW50VE9DT3V0bGV0Jyk7XG5jb25zdCBJbnNwZWN0b3JPdXRsZXQgPSByZXF1aXJlKCcuL291dGxldHMvSW5zcGVjdG9yT3V0bGV0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBuYW1lOiAnbWVnYWRvYy1wbHVnaW4tbHVhJyxcbiAgb3V0bGV0czogW1xuICAgICdNYXJrZG93bjo6RG9jdW1lbnQnLFxuICAgICdNYXJrZG93bjo6RG9jdW1lbnRUT0MnLFxuICAgICdNYXJrZG93bjo6QnJvd3NlcicsXG4gIF0sXG5cbiAgb3V0bGV0T2NjdXBhbnRzOiBbXG4gICAgeyBuYW1lOiAnTWFya2Rvd246OkRvY3VtZW50JywgY29tcG9uZW50OiBEb2N1bWVudE91dGxldCwgfSxcbiAgICB7IG5hbWU6ICdNYXJrZG93bjo6RG9jdW1lbnRUT0MnLCBjb21wb25lbnQ6IERvY3VtZW50VE9DT3V0bGV0LCB9LFxuICAgIHsgbmFtZTogJ01hcmtkb3duOjpCcm93c2VyJywgY29tcG9uZW50OiBCcm93c2VyT3V0bGV0LCB9LFxuICAgIHsgbmFtZTogJ0NvcmU6Okluc3BlY3RvcicsIGNvbXBvbmVudDogSW5zcGVjdG9yT3V0bGV0LCB9LFxuICBdXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLW1hcmtkb3duL3VpL2luZGV4LmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgQnJvd3NlciA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvQnJvd3NlcicpXG5jb25zdCB7IG9iamVjdCwgc2hhcGUsIGJvb2wsIH0gPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ01hcmtkb3duOjpCcm93c2VyT3V0bGV0JyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBuYW1lc3BhY2VOb2RlOiBvYmplY3QsXG4gICAgJG91dGxldE9wdGlvbnM6IHNoYXBlKHtcbiAgICAgIGZsYXQ6IGJvb2wsXG4gICAgfSlcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCcm93c2VyIHsuLi50aGlzLnByb3BzfSBmbGF0PXt0aGlzLnByb3BzLiRvdXRsZXRPcHRpb25zLmZsYXR9IC8+XG4gICAgKTtcbiAgfVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tbWFya2Rvd24vdWkvb3V0bGV0cy9Ccm93c2VyT3V0bGV0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1wicmVhY3RcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJyZWFjdFxcXCJdXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBMaW5rID0gcmVxdWlyZSgnY29tcG9uZW50cy9MaW5rJyk7XG5jb25zdCBIb3RJdGVtSW5kaWNhdG9yID0gcmVxdWlyZSgnY29tcG9uZW50cy9Ib3RJdGVtSW5kaWNhdG9yJyk7XG5jb25zdCB7IFJPT1RfRk9MREVSX0lEIH0gPSByZXF1aXJlKCdjb25zdGFudHMnKTtcbmNvbnN0IEFydGljbGVUT0MgPSByZXF1aXJlKCcuL0FydGljbGVUT0MnKTtcbmNvbnN0IHsgb2JqZWN0IH0gPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbnZhciBCcm93c2VyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBwcm9wVHlwZXM6IHtcbiAgICBuYW1lc3BhY2VOb2RlOiBvYmplY3QsXG4gICAgZG9jdW1lbnROb2RlOiBvYmplY3QsXG4gICAgZG9jdW1lbnRFbnRpdHlOb2RlOiBvYmplY3QsXG4gICAgZXhwYW5kZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGZsYXQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ3JvdXBCeUZvbGRlcjogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hbWVzcGFjZU5vZGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJtZWdhZG9jLWRvY3VtZW50LWJyb3dzZXIgbWFya2Rvd24tYnJvd3NlclwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtBcnJheS5pc0FycmF5KG5hbWVzcGFjZU5vZGUuY29uZmlnLmZvbGRlcnMpICYmIG5hbWVzcGFjZU5vZGUuY29uZmlnLmZvbGRlcnMubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICBGb2xkZXJIaWVyYXJjaHkobmFtZXNwYWNlTm9kZSkubWFwKHRoaXMucmVuZGVyRm9sZGVyKSA6XG4gICAgICAgICAgICBuYW1lc3BhY2VOb2RlLmRvY3VtZW50cy5tYXAodGhpcy5yZW5kZXJBcnRpY2xlKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlckZvbGRlcnMoZm9sZGVycykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7Zm9sZGVycy5tYXAodGhpcy5yZW5kZXJGb2xkZXIpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJGb2xkZXIoZm9sZGVyKSB7XG4gICAgY29uc3QgeyBkb2N1bWVudHMgfSA9IGZvbGRlcjtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGtleT17Zm9sZGVyLnBhdGh9IGNsYXNzTmFtZT1cImNsYXNzLWJyb3dzZXJfX2NhdGVnb3J5XCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJjbGFzcy1icm93c2VyX19jYXRlZ29yeS1uYW1lXCI+XG4gICAgICAgICAge2ZvbGRlci50aXRsZSA9PT0gJy4nID8gJy8nIDogZm9sZGVyLnRpdGxlfVxuICAgICAgICA8L2gzPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge2RvY3VtZW50cy5tYXAodGhpcy5yZW5kZXJBcnRpY2xlKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlckFydGljbGUoZG9jdW1lbnROb2RlKSB7XG4gICAgY29uc3QgYXJ0aWNsZSA9IGRvY3VtZW50Tm9kZS5wcm9wZXJ0aWVzO1xuICAgIGNvbnN0IGlzQWN0aXZlID0gdGhpcy5wcm9wcy5kb2N1bWVudE5vZGUgPT09IGRvY3VtZW50Tm9kZSB8fCB0aGlzLnByb3BzLmV4cGFuZGVkO1xuICAgIGxldCB0aXRsZSA9IGFydGljbGUudGl0bGUgfHwgJyc7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5ncm91cEJ5Rm9sZGVyICYmXG4gICAgICBhcnRpY2xlLmZvbGRlclRpdGxlICE9PSBST09UX0ZPTERFUl9JRCAmJlxuICAgICAgYXJ0aWNsZS5mb2xkZXJUaXRsZSAhPT0gJy4nKSB7XG5cbiAgICAgIGlmICh0aXRsZS5pbmRleE9mKGFydGljbGUuZm9sZGVyVGl0bGUgKyAnLycpID09PSAwKSB7XG4gICAgICAgIHRpdGxlID0gdGl0bGUuc3Vic3RyKGFydGljbGUuZm9sZGVyVGl0bGUubGVuZ3RoICsgMSAvKiAnLycgKi8pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGtleT17ZG9jdW1lbnROb2RlLnVpZH0+XG4gICAgICAgIDxMaW5rIHRvPXtkb2N1bWVudE5vZGV9IGNsYXNzTmFtZT1cImNsYXNzLWJyb3dzZXJfX2VudHJ5LWxpbmtcIj5cbiAgICAgICAgICB7YXJ0aWNsZS5wbGFpblRpdGxlfVxuXG4gICAgICAgICAge2RvY3VtZW50Tm9kZS5tZXRhLmdpdFN0YXRzICYmIChcbiAgICAgICAgICAgIDxIb3RJdGVtSW5kaWNhdG9yIHRpbWVzdGFtcD17ZG9jdW1lbnROb2RlLm1ldGEuZ2l0U3RhdHMubGFzdENvbW1pdHRlZEF0fSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvTGluaz5cblxuICAgICAgICB7aXNBY3RpdmUgJiYgIXRoaXMucHJvcHMuZmxhdCAmJiB0aGlzLnJlbmRlclRPQyhkb2N1bWVudE5vZGUpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJUT0MoZG9jdW1lbnROb2RlKSB7XG4gICAgcmV0dXJuIDxBcnRpY2xlVE9DIGRvY3VtZW50Tm9kZT17ZG9jdW1lbnROb2RlfSAvPlxuICB9LFxuXG59KTtcblxuZnVuY3Rpb24gRm9sZGVySGllcmFyY2h5KG5hbWVzcGFjZU5vZGUpIHtcbiAgY29uc3QgeyBhc3NpZ24sIGZpbmRXaGVyZSwgc29ydEJ5IH0gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbiAgY29uc3Qgc3RySHVtYW5pemUgPSByZXF1aXJlKCcuLi8uLi9saWIvdXRpbHMvc3RySHVtYW5pemUnKTtcbiAgY29uc3QgeyBjb25maWcsIGRvY3VtZW50cyB9ID0gbmFtZXNwYWNlTm9kZTtcbiAgY29uc3QgZm9sZGVycyA9IHt9O1xuXG4gIHNvcnRCeShkb2N1bWVudHMsICd0aXRsZScpLmZvckVhY2goZG9jdW1lbnROb2RlID0+IHtcbiAgICBjb25zdCBmb2xkZXJQYXRoID0gZG9jdW1lbnROb2RlLnByb3BlcnRpZXMuZm9sZGVyO1xuXG4gICAgaWYgKCEoZm9sZGVyUGF0aCBpbiBmb2xkZXJzKSkge1xuICAgICAgZm9sZGVyc1tmb2xkZXJQYXRoXSA9IGNyZWF0ZUZvbGRlckNvbmZpZyhmb2xkZXJQYXRoKTtcbiAgICB9XG5cbiAgICBmb2xkZXJzW2ZvbGRlclBhdGhdLmRvY3VtZW50cy5wdXNoKGRvY3VtZW50Tm9kZSk7XG4gIH0pO1xuXG4gIGZvciAobGV0IGZvbGRlclBhdGggaW4gZm9sZGVycykge1xuICAgIGNvbnN0IGZvbGRlciA9IGZvbGRlcnNbZm9sZGVyUGF0aF07XG5cbiAgICBpZiAoZm9sZGVyLnNlcmllcykge1xuICAgICAgZm9sZGVyLmRvY3VtZW50cyA9IHNvcnRCeShmb2xkZXIuZG9jdW1lbnRzLCAncHJvcGVydGllcy5maWxlTmFtZScpO1xuICAgIH1cblxuICAgIC8vIFJFQURNRSBhbHdheXMgY29tZXMgZmlyc3RcbiAgICBmb2xkZXIuZG9jdW1lbnRzID0gc29ydEJ5KGZvbGRlci5kb2N1bWVudHMsIGZ1bmN0aW9uKGEpIHtcbiAgICAgIGlmIChhLnByb3BlcnRpZXMuZmlsZU5hbWUgPT09ICdSRUFETUUnKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIFRPRE86IGNhbiB3ZSBwbGVhc2UgZG8gdGhpcyBhdCBjb21waWxlLXRpbWUgaW5zdGVhZD8/XG4gIC8vXG4gIC8vIG5vIHdlIGNhbid0LCB6aXAgaXRcbiAgZnVuY3Rpb24gY3JlYXRlRm9sZGVyQ29uZmlnKGZvbGRlclBhdGgpIHtcbiAgICBjb25zdCBmb2xkZXJDb25maWcgPSBmaW5kV2hlcmUoY29uZmlnLmZvbGRlcnMsIHsgcGF0aDogZm9sZGVyUGF0aCB9KTtcbiAgICBjb25zdCBmb2xkZXIgPSBhc3NpZ24oe30sIGZvbGRlckNvbmZpZywge1xuICAgICAgcGF0aDogZm9sZGVyUGF0aCxcbiAgICAgIGRvY3VtZW50czogW11cbiAgICB9KTtcblxuICAgIC8vIGdlbmVyYXRlIGEgdGl0bGVcbiAgICBpZiAoIWZvbGRlci50aXRsZSkge1xuICAgICAgaWYgKGNvbmZpZy5mdWxsRm9sZGVyVGl0bGVzKSB7XG4gICAgICAgIGZvbGRlci50aXRsZSA9IGZvbGRlclBhdGhcbiAgICAgICAgICAucmVwbGFjZShjb25maWcuY29tbW9uUHJlZml4LCAnJylcbiAgICAgICAgICAuc3BsaXQoJy8nKVxuICAgICAgICAgIC5tYXAoc3RySHVtYW5pemUpXG4gICAgICAgICAgLmpvaW4oY29uZmlnLmZ1bGxGb2xkZXJUaXRsZURlbGltaXRlcilcbiAgICAgICAgO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGZyYWdtZW50cyA9IGZvbGRlclBhdGguc3BsaXQoJy8nKTtcbiAgICAgICAgZm9sZGVyLnRpdGxlID0gc3RySHVtYW5pemUoZnJhZ21lbnRzW2ZyYWdtZW50cy5sZW5ndGgtMV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmb2xkZXI7XG4gIH1cblxuICByZXR1cm4gc29ydEJ5KE9iamVjdC5rZXlzKGZvbGRlcnMpLm1hcCh4ID0+IGZvbGRlcnNbeF0pLCAndGl0bGUnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCcm93c2VyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLW1hcmtkb3duL3VpL2NvbXBvbmVudHMvQnJvd3Nlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcImNvbXBvbmVudHMvTGlua1wiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImNvbXBvbmVudHMvTGlua1xcXCJdXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1wiY29tcG9uZW50cy9Ib3RJdGVtSW5kaWNhdG9yXCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwiY29tcG9uZW50cy9Ib3RJdGVtSW5kaWNhdG9yXFxcIl1cIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLlNPUlRfQVNDID0gXCJhc2NcIjtcbmV4cG9ydHMuU09SVF9ERVNDID0gXCJkZXNjXCI7XG5cbmV4cG9ydHMuUVVFUllfT04gPSBcIjFcIjtcbmV4cG9ydHMuUVVFUllfT0ZGID0gdW5kZWZpbmVkO1xuXG5leHBvcnRzLktDX1JFVFVSTiA9IDEzO1xuZXhwb3J0cy5LQ19LID0gNzU7XG5leHBvcnRzLktDX0VTQ0FQRSA9IDI3O1xuXG5leHBvcnRzLkFWQUlMQUJMRV9TQ0hFTUVTID0gW1xuICAncGxhaW4nLFxuICAnc3RlZWwnLFxuICAnc29sYXJpemVkLS1saWdodCcsXG4gICdzb2xhcml6ZWQtLWRhcmsnXG5dO1xuXG5leHBvcnRzLkFWQUlMQUJMRV9TQ0hFTUVfTkFNRVMgPSBbXG4gICdMaWdodCcsXG4gICdTdGVlbCcsXG4gICdTb2xhcml6ZWQgKGxpZ2h0KScsXG4gICdTb2xhcml6ZWQgKGRhcmspJ1xuXTtcblxuZXhwb3J0cy5BVkFJTEFCTEVfTEFZT1VUUyA9IFtcbiAgJ3NpbmdsZS1wYWdlJyxcbiAgJ211bHRpLXBhZ2UnLFxuXTtcblxuZXhwb3J0cy5ERUZBVUxUX1NDSEVNRSA9ICdwbGFpbic7XG5cbmV4cG9ydHMuQ0ZHX0NPTE9SX1NDSEVNRSA9ICdjb2xvclNjaGVtZSc7XG5leHBvcnRzLkNGR19TWU5UQVhfSElHSExJR0hUSU5HID0gJ2hpZ2hsaWdodGluZ0VuYWJsZWQnO1xuZXhwb3J0cy5DRkdfU0lERUJBUl9XSURUSCA9ICdzaWRlYmFyV2lkdGgnO1xuZXhwb3J0cy5NSU5fU0lERUJBUl9XSURUSCA9IDE2MDtcbmV4cG9ydHMuSU5JVElBTF9TSURFQkFSX1dJRFRIID0gMjQwO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtaHRtbC1zZXJpYWxpemVyL3VpL3NoYXJlZC9jb25zdGFudHMuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IExpbmsgPSByZXF1aXJlKCdjb21wb25lbnRzL0xpbmsnKTtcbmNvbnN0IEljb24gPSByZXF1aXJlKCdjb21wb25lbnRzL0ljb24nKTtcbmNvbnN0IGNsYXNzU2V0ID0gcmVxdWlyZSgndXRpbHMvY2xhc3NTZXQnKTtcbmNvbnN0IFNlY3Rpb25UcmVlID0gcmVxdWlyZSgnLi4vU2VjdGlvblRyZWUnKTtcbmNvbnN0IHsgYXNzaWduIH0gPSByZXF1aXJlKCdsb2Rhc2gnKTtcblxuY29uc3QgQXJ0aWNsZVRPQyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgZG9jdW1lbnROb2RlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIGRvY3VtZW50RW50aXR5Tm9kZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBmbGF0OiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBncm91cGVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbGxhcHNlZDoge31cbiAgICB9O1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmxhdDogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzZWN0aW9ucyA9IFNlY3Rpb25UcmVlKHRoaXMucHJvcHMuZG9jdW1lbnROb2RlKTtcbiAgICBjb25zdCByb290U2VjdGlvbnMgPSBzZWN0aW9ucy5maWx0ZXIoeCA9PiB4LnJvb3QpO1xuICAgIGNvbnN0IGhhc0NoaWxkcmVuID0gcm9vdFNlY3Rpb25zLnNvbWUoYnJhbmNoID0+IGJyYW5jaC5jaGlsZHJlbi5sZW5ndGggPiAwKVxuXG4gICAgaWYgKCFoYXNDaGlsZHJlbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuZ3JvdXBlZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1hcmtkb3duLXRvYyBtYXJrZG93bi10b2MtLWZsYXRcIj5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJOb2RlSW5CcmFuY2goc2VjdGlvbnMsIHJvb3RTZWN0aW9uc1swXS5ub2RlKX1cbiAgICAgICAgPC91bD5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJrZG93bi10b2NcIj5cbiAgICAgICAge3Jvb3RTZWN0aW9ucy5tYXAodGhpcy5yZW5kZXJUcmVlLmJpbmQobnVsbCwgc2VjdGlvbnMpKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyVHJlZSh0cmVlLCBicmFuY2gpIHtcbiAgICBpZiAoIWJyYW5jaC5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8dWxcbiAgICAgICAga2V5PXticmFuY2gubm9kZS51aWR9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXQoXCJtYXJrZG93bi10b2NcIiwge1xuICAgICAgICAgIFwibWFya2Rvd24tdG9jLS1mbGF0XCI6IHRoaXMucHJvcHMuZmxhdCAmJiBicmFuY2gucm9vdFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAge2JyYW5jaC5jaGlsZHJlbi5tYXAodGhpcy5yZW5kZXJOb2RlSW5CcmFuY2guYmluZChudWxsLCB0cmVlKSl9XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyTm9kZUluQnJhbmNoKHRyZWUsIG5vZGUpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRyZWUuZmlsdGVyKHggPT4geC5ub2RlLnVpZCA9PT0gbm9kZS51aWQpWzBdO1xuICAgIGNvbnN0IGNvbGxhcHNlZCA9IHRoaXMuc3RhdGUuY29sbGFwc2VkW25vZGUudWlkXTtcblxuICAgIHJldHVybiAoXG4gICAgICA8bGlcbiAgICAgICAga2V5PXtub2RlLnVpZH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1NldCh7XG4gICAgICAgICAgJ21hcmtkb3duLXRvY19fZW50cnknOiB0cnVlLFxuICAgICAgICAgICdtYXJrZG93bi10b2NfX2VudHJ5LS1jb2xsYXBzaWJsZSc6ICEhY2hpbGRyZW4sXG4gICAgICAgICAgJ21hcmtkb3duLXRvY19fZW50cnktLWNvbGxhcHNlZCc6IGNvbGxhcHNlZCxcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbiAmJiAoXG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXQoe1xuICAgICAgICAgICAgICBcImljb24tYXJyb3ctZG93blwiOiBjb2xsYXBzZWQsXG4gICAgICAgICAgICAgIFwiaWNvbi1hcnJvdy1yaWdodFwiOiAhY29sbGFwc2VkLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNvbGxhcHNlLmJpbmQobnVsbCwgbm9kZS51aWQpfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgPExpbmsgdG89e25vZGV9IGNoaWxkcmVuPXtub2RlLnByb3BlcnRpZXMudGV4dH0gLz5cblxuICAgICAgICB7Y2hpbGRyZW4gJiYgIWNvbGxhcHNlZCAmJiAodGhpcy5yZW5kZXJUcmVlKHRyZWUsIGNoaWxkcmVuKSl9XG4gICAgICA8L2xpPlxuICAgIClcbiAgfSxcblxuICBjb2xsYXBzZShrZXkpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbGxhcHNlZDogYXNzaWduKHt9LCB0aGlzLnN0YXRlLmNvbGxhcHNlZCwge1xuICAgICAgICBba2V5XTogIXRoaXMuc3RhdGUuY29sbGFwc2VkW2tleV1cbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFydGljbGVUT0M7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tbWFya2Rvd24vdWkvY29tcG9uZW50cy9BcnRpY2xlVE9DLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1wiY29tcG9uZW50cy9JY29uXCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwiY29tcG9uZW50cy9JY29uXFxcIl1cIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IE1FR0FET0NfUFVCTElDX01PRFVMRVNbXCJ1dGlscy9jbGFzc1NldFwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcInV0aWxzL2NsYXNzU2V0XFxcIl1cIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb2N1bWVudE5vZGUpIHtcbiAgY29uc3QgdHJlZSA9IGRvY3VtZW50Tm9kZS5lbnRpdGllcy5yZWR1Y2UoZnVuY3Rpb24obWFwLCB4LCBpKSB7XG4gICAgY29uc3QgbXlMZXZlbCA9IHgucHJvcGVydGllcy5sZXZlbDtcbiAgICBjb25zdCBwYXJlbnRzID0gZG9jdW1lbnROb2RlLmVudGl0aWVzLnNsaWNlKDAsIGkpLmZpbHRlcih5ID0+IHkucHJvcGVydGllcy5sZXZlbCA8IG15TGV2ZWwpO1xuICAgIGxldCBjbG9zZXN0UGFyZW50O1xuXG4gICAgcGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uKHkpIHtcbiAgICAgIGlmICghY2xvc2VzdFBhcmVudCB8fCB5LnByb3BlcnRpZXMubGV2ZWwgPj0gY2xvc2VzdFBhcmVudC5wcm9wZXJ0aWVzLmxldmVsKSB7XG4gICAgICAgIGNsb3Nlc3RQYXJlbnQgPSB5O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGNsb3Nlc3RQYXJlbnQpIHtcbiAgICAgIG1hcFtjbG9zZXN0UGFyZW50LnVpZF0gPSBtYXBbY2xvc2VzdFBhcmVudC51aWRdIHx8IHtcbiAgICAgICAgbm9kZTogY2xvc2VzdFBhcmVudCxcbiAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICB9O1xuXG4gICAgICBtYXBbY2xvc2VzdFBhcmVudC51aWRdLmNoaWxkcmVuLnB1c2goeCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbWFwW3gudWlkXSA9IG1hcFt4LnVpZF0gfHwgeyByb290OiB0cnVlLCBub2RlOiB4LCBjaGlsZHJlbjogW10gfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWFwO1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKHRyZWUpLm1hcCh4ID0+IHRyZWVbeF0pLnNvcnQoZnVuY3Rpb24oYSxiKSB7XG4gICAgaWYgKGEubm9kZS5wcm9wZXJ0aWVzLmxldmVsID4gYi5ub2RlLnByb3BlcnRpZXMubGV2ZWwpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tbWFya2Rvd24vdWkvU2VjdGlvblRyZWUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IE1FR0FET0NfUFVCTElDX01PRFVMRVNbXCJsb2Rhc2hcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJsb2Rhc2hcXFwiXVwiXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHN0cikge1xuICByZXR1cm4gc3RyXG4gICAgLnJlcGxhY2UoL1tfLV0vZywgJyAnKVxuICAgIC5yZXBsYWNlKC8oXFx3KykvZywgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgIHJldHVybiBtYXRjaC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG1hdGNoLnNsaWNlKDEpO1xuICAgIH0pXG4gIDtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tbWFya2Rvd24vbGliL3V0aWxzL3N0ckh1bWFuaXplLmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgQXJ0aWNsZSA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvQXJ0aWNsZScpXG5jb25zdCB7IG9iamVjdCB9ID0gUmVhY3QuUHJvcFR5cGVzO1xuY29uc3QgeyBQcm9wVHlwZXMgfSA9IFJlYWN0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdNYXJrZG93bjo6RG9jdW1lbnRPdXRsZXQnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGRvY3VtZW50Tm9kZTogb2JqZWN0LFxuICAgICRvdXRsZXRPcHRpb25zOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG4gICAgfSksXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5kb2N1bWVudE5vZGUgfHwgIXRoaXMucHJvcHMuZG9jdW1lbnROb2RlLnByb3BlcnRpZXMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8QXJ0aWNsZSB7Li4udGhpcy5wcm9wc30gey4uLnRoaXMucHJvcHMuJG91dGxldE9wdGlvbnN9IC8+XG4gICAgKTtcbiAgfVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1tYXJrZG93bi91aS9vdXRsZXRzL0RvY3VtZW50T3V0bGV0LmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBIaWdobGlnaHRlZFRleHQgPSByZXF1aXJlKCdjb21wb25lbnRzL0hpZ2hsaWdodGVkVGV4dCcpO1xuY29uc3QgRGlzcXVzID0gcmVxdWlyZSgnY29tcG9uZW50cy9EaXNxdXMnKTtcblxuY29uc3QgeyBzaGFwZSwgc3RyaW5nLCBvYmplY3QsIG9uZU9mVHlwZSwgYm9vbCwgfSA9IFJlYWN0LlByb3BUeXBlcztcblxuY29uc3QgQXJ0aWNsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgY29udGV4dFR5cGVzOiB7XG4gICAgbG9jYXRpb246IHNoYXBlKHsgcGF0aG5hbWU6IHN0cmluZyB9KS5pc1JlcXVpcmVkLFxuICAgIGNvbmZpZzogc2hhcGUoe1xuICAgICAgZGlzcXVzOiBvbmVPZlR5cGUoWyBib29sLCBvYmplY3QgXSksXG4gICAgfSkuaXNSZXF1aXJlZCxcbiAgfSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBjbGFzc05hbWU6IHN0cmluZyxcbiAgICBkb2N1bWVudE5vZGU6IHNoYXBlKHtcbiAgICAgIHNvdXJjZTogc3RyaW5nLFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGFydGljbGUgPSB0aGlzLnByb3BzLmRvY3VtZW50Tm9kZS5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG4gICAgICAgIDxIaWdobGlnaHRlZFRleHQ+e2FydGljbGUuc291cmNlfTwvSGlnaGxpZ2h0ZWRUZXh0PlxuXG4gICAgICAgIHt0aGlzLmNvbnRleHQuY29uZmlnLmRpc3F1cyAmJiAoXG4gICAgICAgICAgPERpc3F1c1xuICAgICAgICAgICAgaWRlbnRpZmllcj17YXJ0aWNsZS5pZH1cbiAgICAgICAgICAgIHRpdGxlPXthcnRpY2xlLnRpdGxlfVxuICAgICAgICAgICAgcGF0aG5hbWU9e3RoaXMuY29udGV4dC5sb2NhdGlvbi5wYXRobmFtZX1cbiAgICAgICAgICAgIGNvbmZpZz17dGhpcy5jb250ZXh0LmNvbmZpZy5kaXNxdXN9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFydGljbGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tbWFya2Rvd24vdWkvY29tcG9uZW50cy9BcnRpY2xlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1wiY29tcG9uZW50cy9IaWdobGlnaHRlZFRleHRcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJjb21wb25lbnRzL0hpZ2hsaWdodGVkVGV4dFxcXCJdXCJcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcImNvbXBvbmVudHMvRGlzcXVzXCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwiY29tcG9uZW50cy9EaXNxdXNcXFwiXVwiXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBBcnRpY2xlVE9DID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9BcnRpY2xlVE9DJylcbmNvbnN0IHsgb2JqZWN0LCBib29sLCBzaGFwZSwgfSA9IFJlYWN0LlByb3BUeXBlcztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnTWFya2Rvd246OkRvY3VtZW50VE9DT3V0bGV0JyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBkb2N1bWVudEVudGl0eU5vZGU6IG9iamVjdCxcbiAgICBkb2N1bWVudE5vZGU6IG9iamVjdC5pc1JlcXVpcmVkLFxuICAgIG5hbWVzcGFjZU5vZGU6IG9iamVjdC5pc1JlcXVpcmVkLFxuICAgICRvdXRsZXRPcHRpb25zOiBzaGFwZSh7XG4gICAgICBncm91cGVkOiBib29sXG4gICAgfSksXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5kb2N1bWVudE5vZGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8QXJ0aWNsZVRPQyBmbGF0IGdyb3VwZWQ9e3RoaXMucHJvcHMuJG91dGxldE9wdGlvbnMuZ3JvdXBlZH0gey4uLnRoaXMucHJvcHN9IC8+XG4gICAgKTtcbiAgfVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1tYXJrZG93bi91aS9vdXRsZXRzL0RvY3VtZW50VE9DT3V0bGV0LmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgeyBzaGFwZSwgc3RyaW5nLCBudW1iZXIgfSA9IFJlYWN0LlByb3BUeXBlcztcbmNvbnN0IFdQTSA9IDI3NTsgLy8gaHR0cHM6Ly9oZWxwLm1lZGl1bS5jb20vaGMvZW4tdXMvYXJ0aWNsZXMvMjE0OTkxNjY3LVJlYWQtdGltZVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdNYXJrZG93bjo6SW5zcGVjdG9yT3V0bGV0JyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBkb2N1bWVudE5vZGU6IHNoYXBlKHtcbiAgICAgIHByb3BlcnRpZXM6IHNoYXBlKHtcbiAgICAgICAgdGl0bGU6IHN0cmluZyxcbiAgICAgICAgd29yZENvdW50OiBudW1iZXIsXG4gICAgICB9KVxuICAgIH0pLFxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkb2MgPSB0aGlzLnByb3BzLmRvY3VtZW50Tm9kZS5wcm9wZXJ0aWVzO1xuICAgIGNvbnN0IGV4cGVjdGVkUmVhZFRpbWUgPSBNYXRoLmNlaWwoZG9jLndvcmRDb3VudCAvIFdQTSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHA+XG4gICAgICAgIHtkb2MudGl0bGV9IDxzbWFsbD4oe2V4cGVjdGVkUmVhZFRpbWV9IG1pbiByZWFkKTwvc21hbGw+XG4gICAgICA8L3A+XG4gICAgKTtcbiAgfVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1tYXJrZG93bi91aS9vdXRsZXRzL0luc3BlY3Rvck91dGxldC5qcyJdLCJzb3VyY2VSb290IjoiIn0=