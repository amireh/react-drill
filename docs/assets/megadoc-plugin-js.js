exports["megadoc-plugin-js"] =
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
	
	var InspectorOutlet = __webpack_require__(2);
	var ModuleOutlet = __webpack_require__(6);
	var ModuleEntitiesOutlet = __webpack_require__(15);
	var ModuleHeaderOutlet = __webpack_require__(21);
	var ModuleIndexOutlet = __webpack_require__(22);
	var ModuleBodyOutlet = __webpack_require__(28);
	var BrowserOutlet = __webpack_require__(50);
	var NamespaceOutlet = __webpack_require__(57);
	
	exports.outlets = ['JS::Browser', 'JS::Module', 'JS::ModuleEntities', 'JS::ModuleHeader', 'JS::ModuleHeader::Type', 'JS::ModuleIndex', 'JS::ModuleBody', 'JS::Namespace', 'JS::Tag', 'JS::ExampleTags', 'JS::ExampleTag'];
	
	exports.name = 'megadoc-plugin-js';
	exports.outletOccupants = [{ name: 'Core::Inspector', component: InspectorOutlet }, { name: 'JS::Module', component: ModuleOutlet }, { name: 'JS::ModuleEntities', component: ModuleEntitiesOutlet }, { name: 'JS::ModuleHeader', component: ModuleHeaderOutlet }, { name: 'JS::ModuleIndex', component: ModuleIndexOutlet }, { name: 'JS::ModuleBody', component: ModuleBodyOutlet }, { name: 'JS::Browser', component: BrowserOutlet }, { name: 'JS::Namespace', component: NamespaceOutlet }];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var K = __webpack_require__(4);
	var _React$PropTypes = React.PropTypes,
	    shape = _React$PropTypes.shape,
	    string = _React$PropTypes.string;
	
	
	module.exports = React.createClass({
	  displayName: 'JS::InspectorOutlet',
	  propTypes: {
	    documentNode: shape({
	      properties: shape({
	        summary: string
	      })
	    }),
	
	    namespaceNode: shape({
	      title: string
	    })
	  },
	
	  render: function render() {
	    var _props = this.props,
	        documentNode = _props.documentNode,
	        namespaceNode = _props.namespaceNode;
	
	    var doc = documentNode.properties;
	
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'div',
	        { className: 'tooltip__title' },
	        doc.id,
	        ' (',
	        doc.type !== K.TYPE_UNKNOWN && React.createElement(
	          'strong',
	          null,
	          doc.type,
	          ' '
	        ),
	        'in ',
	        namespaceNode.title,
	        ')'
	      ),
	      React.createElement('p', { children: documentNode.summary })
	    );
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
	
	module.exports = __webpack_require__(5);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.NAMESPACE_SEP = '.';
	
	exports.SCOPE_UNSCOPED = undefined;
	exports.SCOPE_INSTANCE = 'instance';
	exports.SCOPE_PROTOTYPE = 'prototype';
	exports.SCOPE_FACTORY_EXPORTS = 'factory_exports';
	
	exports.TYPE_OBJECT = 'Object';
	exports.TYPE_OBJECT_PROPERTY = 'ObjectProperty';
	exports.TYPE_DEFAULT_EXPORTS = 'exports';
	exports.TYPE_FACTORY = 'Factory';
	exports.TYPE_FUNCTION = 'Function';
	exports.TYPE_CLASS = 'Class';
	exports.TYPE_ARRAY = 'Array';
	exports.TYPE_UNKNOWN = 'Unknown';
	exports.TYPE_LITERAL = 'Literal';
	exports.TYPE_ALL_LITERAL = 'AllLiteral';
	exports.TYPE_UNKNOWN_LITERAL = 'UnknownLiteral';
	exports.TYPE_UNION = 'Union';
	
	exports.VISIBILITY_PROTECTED = 'protected';
	exports.VISIBILITY_PRIVATE = 'private';
	
	exports.DEFAULT_FACTORY_EXPORTS_ID = 'default_exports';
	exports.TYPE_OVERRIDING_TAGS = {
	  'method': true,
	  'property': true,
	  'type': true,
	  'class': true,
	  'export': true
	};
	
	exports.TAGS_WITH_STRINGS = {
	  'deprecated': true,
	  'example': true
	};
	
	exports.NO_DESCRIPTION_TAGS = {
	  'alias': true,
	  'class': true,
	  'constructor': true,
	  'extends': true,
	  'inheritdoc': true,
	  'memberOf': true,
	  'method': true,
	  'mixin': true,
	  'mixes': true,
	  'module': true,
	  'namespace': true,
	  'preserveOrder': true,
	  'private': true,
	  'public': true,
	  'type': true,
	  'typedef': true
	};
	
	exports.KNOWN_TAGS = ['alias', 'async', 'callback', 'class', 'constructor', 'deprecated', 'example', 'export', 'extends', 'interface', 'lends', 'memberOf', 'method', 'mixes', 'module', 'name', 'namespace', 'param', 'preserveOrder', 'private', 'public', 'property', 'protected', 'return', 'see', 'static', 'throws', 'type', 'typedef'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var Module = __webpack_require__(7);
	
	var _require = __webpack_require__(14),
	    isNamespaceDocument = _require.isNamespaceDocument;
	
	var object = React.PropTypes.object;
	
	
	module.exports = React.createClass({
	  displayName: 'JS::Module',
	  propTypes: {
	    documentNode: object,
	    namespaceNode: object
	  },
	
	  render: function render() {
	    if (!this.props.documentNode || isNamespaceDocument(this.props.documentNode.properties)) {
	      return null;
	    }
	
	    return React.createElement(Module, this.props);
	  }
	});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var HasTitle = __webpack_require__(8);
	var ModuleHeader = __webpack_require__(9);
	var Outlet = __webpack_require__(10);
	
	var Module = React.createClass({
	  displayName: 'Module',
	
	  mixins: [HasTitle(function () {
	    return this.props.documentNode.properties.name;
	  })],
	
	  propTypes: {
	    namespaceNode: React.PropTypes.object.isRequired,
	    documentNode: React.PropTypes.object.isRequired,
	    documentEntityNode: React.PropTypes.object
	  },
	
	  childContextTypes: {
	    config: React.PropTypes.object
	  },
	
	  getChildContext: function getChildContext() {
	    return {
	      config: this.props.namespaceNode.config
	    };
	  },
	  render: function render() {
	    var _props = this.props,
	        documentNode = _props.documentNode,
	        namespaceNode = _props.namespaceNode;
	    var config = namespaceNode.config;
	
	    var moduleNode = documentNode.type === 'DocumentEntity' ? documentNode.parentNode : documentNode;
	
	    var legacyParams = {
	      moduleId: moduleNode.id,
	      entity: documentNode.type === 'DocumentEntity' ? documentNode.id : undefined
	    };
	
	    return React.createElement(
	      'div',
	      { className: 'class-view' },
	      React.createElement(ModuleHeader, {
	        documentNode: moduleNode,
	        showSourcePaths: config.showSourcePaths,
	        showNamespace: config.showNamespaceInModuleHeader,
	        generateAnchor: false
	      }),
	      React.createElement(Outlet, {
	        name: 'JS::ModuleBody',
	        elementProps: {
	          params: legacyParams,
	          query: {},
	          documentNode: documentNode,
	          documentEntityNode: this.props.documentEntityNode,
	          namespaceNode: namespaceNode
	        }
	      })
	    );
	  }
	});
	
	module.exports = Module;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["mixins/HasTitle"];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var Outlet = __webpack_require__(10);
	var Heading = __webpack_require__(11);
	var HeadingAnchor = __webpack_require__(12);
	var HighlightedText = __webpack_require__(13);
	var K = __webpack_require__(4);
	var DocClassifier = __webpack_require__(14);
	var PropTypes = React.PropTypes;
	
	
	var ModuleHeader = React.createClass({
	  displayName: 'ModuleHeader',
	
	  propTypes: {
	    documentNode: PropTypes.object,
	    showSourcePaths: PropTypes.bool,
	    headerLevel: PropTypes.string,
	    generateAnchor: PropTypes.bool,
	    showNamespace: PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      headerLevel: '1',
	      generateAnchor: true
	    };
	  },
	
	
	  // shouldComponentUpdate(prevProps) {
	  //   return prevProps.documentNode !== this.props.documentNode;
	  // },
	
	  render: function render() {
	    var anchor = void 0;
	
	    var documentNode = this.props.documentNode;
	
	    var doc = documentNode.properties || {
	      name: documentNode.title,
	      type: K.TYPE_UNKNOWN
	    };
	
	    if (this.props.generateAnchor) {
	      anchor = documentNode.meta.anchor;
	    }
	
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        Heading,
	        {
	          level: '1',
	          parentLevel: this.props.headerLevel,
	          className: 'class-view__header anchorable-heading',
	          title: this.props.showSourcePaths ? doc.filePath : undefined,
	          id: anchor
	        },
	        anchor && React.createElement(HeadingAnchor.Anchor, { href: anchor }),
	        anchor && React.createElement(HeadingAnchor.Link, { href: anchor }),
	        React.createElement(
	          HeadingAnchor.Text,
	          { className: 'class-view__header-name' },
	          React.createElement(
	            'span',
	            null,
	            doc.name
	          )
	        ),
	        ' ',
	        this.props.showNamespace && doc.namespace && React.createElement(
	          'span',
	          { className: 'class-view__header-namespace' },
	          '{',
	          doc.namespace,
	          '}'
	        ),
	        ' ',
	        React.createElement(
	          'span',
	          { className: 'class-view__header-type' },
	          React.createElement(
	            Outlet,
	            {
	              name: 'JS::ModuleHeader::Type',
	              tagName: 'span',
	              firstMatchingElement: true,
	              elementProps: this.props
	            },
	            React.createElement(
	              'span',
	              null,
	              DocClassifier.getDisplayType(documentNode)
	            )
	          ),
	          hasMixinTargets(documentNode) && documentNode.properties.mixinTargets.map(function (x) {
	            return React.createElement(
	              'span',
	              { key: x.name },
	              ', ',
	              React.createElement('span', { dangerouslySetInnerHTML: { __html: x.html || x.name } })
	            );
	          }),
	          hasSuperClasses(documentNode) && documentNode.properties.superClasses.map(function (x) {
	            return React.createElement(
	              'span',
	              { key: x.name },
	              ', ',
	              React.createElement('span', { dangerouslySetInnerHTML: { __html: x.html || x.name } })
	            );
	          })
	        )
	      ),
	      this.props.showSourcePaths && documentNode.filePath && React.createElement(
	        'p',
	        { className: 'class-view__module-filepath' },
	        'Defined in: ',
	        React.createElement(
	          'code',
	          null,
	          documentNode.filePath
	        )
	      ),
	      React.createElement(
	        HighlightedText,
	        { key: 'description' },
	        doc.description
	      )
	    );
	  }
	});
	
	function hasMixinTargets(node) {
	  return Boolean(node.properties && node.properties.mixinTargets && node.properties.mixinTargets.length > 0);
	}
	
	function hasSuperClasses(node) {
	  return Boolean(node.properties && node.properties.superClasses && node.properties.superClasses.length > 0);
	}
	
	module.exports = ModuleHeader;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["components/Outlet"];

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["components/Heading"];

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["components/HeadingAnchor"];

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["components/HighlightedText"];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var K = __webpack_require__(4);
	
	function isMethod(doc) {
	  var ctx = doc.nodeInfo;
	
	  return doc.type === K.TYPE_FUNCTION && (ctx.scope === K.SCOPE_FACTORY_EXPORTS || ctx.scope === K.SCOPE_INSTANCE || ctx.scope === K.SCOPE_PROTOTYPE);
	}
	
	function isCallback(doc) {
	  return doc.type === K.TYPE_FUNCTION && doc.tags.some(function (x) {
	    return x.type === 'callback';
	  });
	}
	
	function isTypeDef(doc) {
	  return !doc.isModule && doc.tags.some(function (x) {
	    return x.type === 'typedef';
	  });
	}
	
	function isFactoryExports(doc) {
	  return doc.nodeInfo.scope === K.SCOPE_FACTORY_EXPORTS;
	}
	
	function isClassEntity(doc) {
	  return doc.nodeInfo.scope === K.SCOPE_INSTANCE || doc.nodeInfo.scope === K.SCOPE_PROTOTYPE;
	}
	
	function isStaticMethod(doc) {
	  return doc.type === K.TYPE_FUNCTION && !isMethod(doc) && !isCallback(doc);
	}
	
	function isExportedSymbol(doc) {
	  return !!doc.isExportedSymbol;
	}
	
	exports.isMethod = isMethod;
	exports.isCallback = isCallback;
	exports.isStaticMethod = isStaticMethod;
	exports.isFactoryExports = isFactoryExports;
	exports.isClassEntity = isClassEntity;
	exports.isTypeDef = isTypeDef;
	exports.isExportedSymbol = isExportedSymbol;
	
	exports.getDisplayType = function (documentNode) {
	  if (documentNode.type === 'Namespace') {
	    return 'Library';
	  }
	
	  if (documentNode.properties.isNamespace) {
	    return 'Namespace';
	  } else if (documentNode.entities.some(function (n) {
	    return isClassEntity(n.properties);
	  })) {
	    return 'Class';
	  } else if (documentNode.entities.some(function (n) {
	    return isFactoryExports(n.properties);
	  })) {
	    return 'Factory';
	  } else if (documentNode.properties.type === K.TYPE_FUNCTION) {
	    return 'Function';
	  } else {
	    return 'Object';
	  }
	};
	
	exports.isProperty = function (doc) {
	  return doc && doc.tags && doc.tags.some(function (x) {
	    return x.type === 'property';
	  });
	};
	
	exports.isStaticProperty = function (doc) {
	  return exports.isProperty(doc) && [K.SCOPE_PROTOTYPE, K.SCOPE_INSTANCE].indexOf(doc.nodeInfo.scope) === -1;
	};
	
	exports.isMemberProperty = function (doc) {
	  return exports.isProperty(doc) && !exports.isStaticProperty(doc);
	};
	
	exports.isPrivate = function (doc) {
	  return doc && doc.tags && doc.tags.some(function (x) {
	    return x.type === 'private';
	  });
	};
	
	exports.isProtected = function (doc) {
	  return doc && doc.tags && doc.tags.some(function (x) {
	    return x.type === 'protected';
	  });
	};
	
	exports.isPublic = function (doc) {
	  return !exports.isPrivate(doc) && !exports.isProtected(doc);
	};
	
	exports.isNamespaceDocument = function (doc) {
	  return doc && doc.isNamespace;
	};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var ClassEntityBrowser = __webpack_require__(16);
	var object = React.PropTypes.object;
	
	
	module.exports = React.createClass({
	  displayName: 'JS::ModuleEntities',
	
	  propTypes: {
	    documentNode: object,
	    documentEntityNode: object
	  },
	
	  render: function render() {
	    if (!this.props.documentNode) {
	      return null;
	    }
	
	    return React.createElement(ClassEntityBrowser, {
	      standalone: true,
	      documentNode: this.props.documentNode,
	      documentEntityNode: this.props.documentEntityNode
	    });
	  }
	});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var Link = __webpack_require__(17);
	var orderAwareSort = __webpack_require__(18);
	var classSet = __webpack_require__(20);
	var _React$PropTypes = React.PropTypes,
	    object = _React$PropTypes.object,
	    bool = _React$PropTypes.bool;
	
	
	var ClassEntityBrowser = React.createClass({
	  displayName: 'ClassEntityBrowser',
	
	  propTypes: {
	    standalone: bool,
	    documentNode: object,
	    documentEntityNode: object
	  },
	
	  render: function render() {
	    var documentNode = this.props.documentNode;
	
	
	    if (!documentNode.entities || !documentNode.entities.length) {
	      return null;
	    }
	
	    var entityDocuments = orderAwareSort.asNodes(documentNode, documentNode.entities, 'id');
	
	    return React.createElement(
	      'ul',
	      {
	        className: classSet("class-browser__methods", {
	          'class-browser__methods--standalone': this.props.standalone
	        }) },
	      entityDocuments.map(this.renderEntity)
	    );
	  },
	  renderEntity: function renderEntity(node) {
	    return React.createElement(
	      'li',
	      { key: node.uid, className: 'class-browser__methods-entity' },
	      React.createElement(Link, {
	        to: node,
	        children: (node.properties.symbol || '') + node.properties.name,
	        title: node.title
	      })
	    );
	  }
	});
	
	module.exports = ClassEntityBrowser;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["components/Link"];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _require = __webpack_require__(19),
	    sortBy = _require.sortBy;
	
	module.exports = function (doc, array, key) {
	  var preserveOrder = (doc.tags || []).some(function (tag) {
	    return tag.type === 'preserveOrder';
	  });
	
	  if (preserveOrder) {
	    return sortBy(array, 'line');
	  } else {
	    return sortBy(array, key);
	  }
	};
	
	module.exports.asNodes = function (documentNode, array, key) {
	  var preserveOrder = (documentNode.properties.tags || []).some(function (tag) {
	    return tag.type === 'preserveOrder';
	  });
	
	  if (preserveOrder) {
	    return sortBy(array, 'properties.line');
	  } else {
	    return sortBy(array, key);
	  }
	};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["lodash"];

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["classnames"];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var ModuleHeader = __webpack_require__(9);
	var _React$PropTypes = React.PropTypes,
	    object = _React$PropTypes.object,
	    shape = _React$PropTypes.shape,
	    bool = _React$PropTypes.bool;
	
	
	module.exports = React.createClass({
	  displayName: 'JS::ModuleHeader',
	
	  propTypes: {
	    documentNode: object,
	    namespaceNode: object,
	    $outletOptions: shape({
	      showFilePath: bool
	    })
	  },
	
	  render: function render() {
	    var config = this.props.namespaceNode.config;
	
	    var options = this.props.$outletOptions;
	
	    return React.createElement(
	      'div',
	      { className: 'js-module-header-outlet' },
	      React.createElement(ModuleHeader, {
	        documentNode: this.props.documentNode || this.props.namespaceNode,
	        showSourcePaths: options.showFilePath !== false && config.showSourcePaths !== false,
	        showNamespace: options.showNamespace !== false && config.showNamespaceInModuleHeader !== false,
	        generateAnchor: false
	      })
	    );
	  }
	});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(3);
	var _React$PropTypes = React.PropTypes,
	    object = _React$PropTypes.object,
	    shape = _React$PropTypes.shape,
	    bool = _React$PropTypes.bool;
	
	var NamespaceIndex = __webpack_require__(23);
	var ModuleIndex = __webpack_require__(24);
	
	module.exports = React.createClass({
	  displayName: 'JS::ModuleIndex',
	  propTypes: {
	    documentNode: object,
	    namespaceNode: object,
	    $outletOptions: shape({
	      showFunctions: bool,
	      showProperties: bool,
	      showStaticMembers: bool
	    })
	  },
	
	  render: function render() {
	    if (!this.props.documentNode) {
	      return null;
	    }
	
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(NamespaceIndex, _extends({}, this.props.$outletOptions, {
	        documentNode: this.props.documentNode
	      })),
	      React.createElement(ModuleIndex, _extends({}, this.props.$outletOptions, {
	        documentNode: this.props.documentNode
	      }))
	    );
	  }
	});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var Link = __webpack_require__(17);
	var DocClassifier = __webpack_require__(14);
	var object = React.PropTypes.object;
	
	
	var NamespaceIndex = React.createClass({
	  displayName: 'NamespaceIndex',
	
	  propTypes: {
	    documentNode: object
	  },
	
	  render: function render() {
	    var documentNode = this.props.documentNode;
	
	    var classes = getByDisplayType(documentNode, ['Class', 'Factory']);
	    var functions = getByDisplayType(documentNode, ['Function']);
	    var namespaces = getByDisplayType(documentNode, ['Namespace']);
	    var others = getRemainingDocuments(documentNode, [classes, functions, namespaces]);
	
	    return React.createElement(
	      'div',
	      { className: 'js-document-index' },
	      namespaces.length > 0 && this.renderGroupByContextType('Namespaces', namespaces),
	      classes.length > 0 && this.renderGroupByContextType('Classes', classes),
	      functions.length > 0 && this.renderGroupByContextType('Functions', functions),
	      others.length > 0 && this.renderGroupByContextType('Other', others)
	    );
	  },
	  renderGroupByContextType: function renderGroupByContextType(title, documents) {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h2',
	        { className: 'doc-group__header' },
	        title
	      ),
	      this.renderGroup(documents)
	    );
	  },
	  renderGroup: function renderGroup(documents) {
	    return React.createElement(
	      'table',
	      null,
	      React.createElement(
	        'tbody',
	        null,
	        documents.map(this.renderModuleSummaryRecord)
	      )
	    );
	  },
	  renderModuleSummaryRecord: function renderModuleSummaryRecord(node) {
	    return React.createElement(
	      'tr',
	      { key: node.uid },
	      React.createElement(
	        'td',
	        null,
	        React.createElement(
	          Link,
	          { to: node },
	          node.properties && node.properties.name || node.title
	        )
	      ),
	      React.createElement(
	        'td',
	        null,
	        node.summary || React.createElement(
	          'em',
	          { className: 'type-mute' },
	          'No summary provided.'
	        )
	      )
	    );
	  }
	});
	
	function getByDisplayType(documentNode, typeNames) {
	  return documentNode.documents.filter(function (x) {
	    return typeNames.indexOf(DocClassifier.getDisplayType(x)) > -1;
	  });
	}
	
	function getRemainingDocuments(documentNode, lists) {
	  var usedUIDs = lists.reduce(function (map, list) {
	    list.forEach(function (x) {
	      map[x.uid] = true;
	    });
	    return map;
	  }, {});
	
	  return documentNode.documents.filter(function (x) {
	    return !(x.uid in usedUIDs);
	  });
	}
	
	module.exports = NamespaceIndex;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var React = __webpack_require__(3);
	var Link = __webpack_require__(17);
	var TypeNames = __webpack_require__(25);
	var FunctionSignature = __webpack_require__(27);
	var DocClassifier = __webpack_require__(14);
	var _React$PropTypes = React.PropTypes,
	    bool = _React$PropTypes.bool,
	    object = _React$PropTypes.object;
	
	
	var ModuleIndex = React.createClass({
	  displayName: 'ModuleIndex',
	
	  propTypes: {
	    documentNode: object,
	    showFunctions: bool,
	    showProperties: bool,
	    showStaticMembers: bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      showFunctions: true,
	      showProperties: true,
	      showStaticMembers: true
	    };
	  },
	  render: function render() {
	    var documentNode = this.props.documentNode;
	
	    var memberFuctions = getByClassification(documentNode, [DocClassifier.isMethod]);
	    var memberProperties = getByClassification(documentNode, [DocClassifier.isMemberProperty]);
	    var exportedSymbols = getByClassification(documentNode, [DocClassifier.isExportedSymbol]);
	    var staticMembers = getByClassification(documentNode, [DocClassifier.isStaticMethod, DocClassifier.isStaticProperty]);
	
	    var publicStaticMembers = staticMembers.filter(function (x) {
	      return DocClassifier.isPublic(x.properties);
	    });
	
	    var privateStaticMembers = staticMembers.filter(function (x) {
	      return !DocClassifier.isPublic(x.properties);
	    });
	
	    var others = getRemainingDocuments(documentNode, [staticMembers, memberFuctions, memberProperties, exportedSymbols]);
	
	    return React.createElement(
	      'div',
	      { className: 'js-document-index' },
	      exportedSymbols.length > 0 && this.renderExportedSymbols('Exported Symbols', exportedSymbols),
	      memberFuctions.length > 0 && this.renderMethodGroup('Public Functions', memberFuctions),
	      memberProperties.length > 0 && this.renderPropertyGroup('Public Properties', memberProperties),
	      publicStaticMembers.length > 0 && this.renderMethodGroup('Public Static Members', publicStaticMembers),
	      privateStaticMembers.length > 0 && this.renderMethodGroup('Private Static Members', privateStaticMembers),
	      others.length > 0 && this.renderGroupByContextType('Other', others)
	    );
	  },
	  renderGroupByContextType: function renderGroupByContextType(title, documents) {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h2',
	        { className: 'doc-group__header' },
	        title
	      ),
	      this.renderGroup(documents)
	    );
	  },
	  renderGroup: function renderGroup(documents) {
	    return React.createElement(
	      'table',
	      null,
	      React.createElement(
	        'tbody',
	        null,
	        documents.map(this.renderModuleSummaryRecord)
	      )
	    );
	  },
	  renderModuleSummaryRecord: function renderModuleSummaryRecord(node) {
	    return React.createElement(
	      'tr',
	      { key: node.uid },
	      React.createElement(
	        'td',
	        null,
	        React.createElement(
	          Link,
	          { to: node },
	          node.properties ? node.properties.name : node.title
	        )
	      ),
	      React.createElement(
	        'td',
	        null,
	        node.summary || React.createElement(
	          'em',
	          { className: 'type-mute' },
	          'No summary provided.'
	        )
	      )
	    );
	  },
	  renderMethodGroup: function renderMethodGroup(title, documents) {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h2',
	        { className: 'doc-group__header' },
	        title
	      ),
	      React.createElement(
	        'table',
	        null,
	        React.createElement(
	          'tbody',
	          null,
	          documents.map(this.renderMethodSummaryRow)
	        )
	      )
	    );
	  },
	  renderMethodSummaryRow: function renderMethodSummaryRow(documentNode) {
	    if (DocClassifier.isProperty(documentNode.properties)) {
	      return this.renderPropertySummaryRow(documentNode);
	    }
	
	    var returnValue = documentNode.properties.tags.reduce(function (v, x) {
	      if (x.type === 'return') {
	        return x.typeInfo.type;
	      } else {
	        return v;
	      }
	    }, { name: 'void' });
	
	    return React.createElement(
	      'tr',
	      { key: documentNode.uid },
	      React.createElement(
	        'td',
	        null,
	        React.createElement(
	          'span',
	          { className: 'doc-entity__function-signature' },
	          returnValue && React.createElement(TypeNames, { type: returnValue })
	        )
	      ),
	      React.createElement(
	        'td',
	        null,
	        React.createElement(
	          Link,
	          { to: documentNode, className: 'js-document-index__entity-name' },
	          documentNode.properties.name
	        ),
	        React.createElement(FunctionSignature, {
	          doc: documentNode.properties,
	          withNames: false,
	          withBraces: true
	        })
	      )
	    );
	  },
	  renderPropertyGroup: function renderPropertyGroup(title, documents) {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h2',
	        { className: 'doc-group__header' },
	        title
	      ),
	      React.createElement(
	        'table',
	        null,
	        React.createElement(
	          'tbody',
	          null,
	          documents.map(this.renderPropertySummaryRow)
	        )
	      )
	    );
	  },
	  renderPropertySummaryRow: function renderPropertySummaryRow(documentNode) {
	    var propertyTag = documentNode.properties.tags.filter(function (x) {
	      return x.type === 'property';
	    })[0];
	
	    return React.createElement(
	      'tr',
	      { key: documentNode.uid },
	      React.createElement(
	        'td',
	        null,
	        React.createElement(
	          'span',
	          { className: 'doc-entity__function-signature' },
	          React.createElement(TypeNames, { type: propertyTag.typeInfo.type })
	        )
	      ),
	      React.createElement(
	        'td',
	        null,
	        React.createElement(
	          Link,
	          { to: documentNode, className: 'js-document-index__entity-name' },
	          documentNode.properties.name
	        )
	      )
	    );
	  },
	  renderExportedSymbols: function renderExportedSymbols(title, documents) {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h2',
	        { className: 'doc-group__header' },
	        title
	      ),
	      React.createElement(
	        'table',
	        null,
	        React.createElement(
	          'thead',
	          null,
	          React.createElement(
	            'tr',
	            null,
	            React.createElement(
	              'th',
	              null,
	              'Symbol'
	            ),
	            React.createElement(
	              'th',
	              null,
	              'Definition'
	            )
	          )
	        ),
	        React.createElement(
	          'tbody',
	          null,
	          documents.map(function (node) {
	            var _node$properties$tags = node.properties.tags.filter(function (x) {
	              return x.type === 'export';
	            }).map(function (x) {
	              return x.typeInfo;
	            }),
	                _node$properties$tags2 = _slicedToArray(_node$properties$tags, 1),
	                typeInfo = _node$properties$tags2[0];
	
	            return React.createElement(
	              'tr',
	              { key: node.id },
	              React.createElement(
	                'td',
	                null,
	                typeInfo.name || node.properties.name
	              ),
	              React.createElement(
	                'td',
	                null,
	                React.createElement(TypeNames, { type: typeInfo.type })
	              )
	            );
	          })
	        )
	      )
	    );
	  }
	});
	
	function getByClassification(documentNode, klassifiers) {
	  return documentNode.entities.filter(function (x) {
	    return klassifiers.some(function (fn) {
	      return fn(x.properties);
	    });
	  });
	}
	
	function getRemainingDocuments(documentNode, lists) {
	  var usedUIDs = lists.reduce(function (map, list) {
	    list.forEach(function (x) {
	      map[x.uid] = true;
	    });
	
	    return map;
	  }, {});
	
	  return documentNode.entities.filter(function (x) {
	    return !(x.uid in usedUIDs);
	  });
	}
	
	module.exports = ModuleIndex;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var describeType = __webpack_require__(26);
	
	var TypeNames = React.createClass({
	  displayName: 'TypeNames',
	
	  contextTypes: {
	    config: React.PropTypes.object.isRequired
	  },
	
	  propTypes: {
	    type: React.PropTypes.object.isRequired
	  },
	
	  render: function render() {
	    return React.createElement('span', {
	      className: 'js-type-names',
	      dangerouslySetInnerHTML: {
	        __html: describeType({
	          html: true,
	          expandFunctionSignatures: this.context.config.expandReturnedFunctionSignatures
	        })(this.props.type)
	      }
	    });
	  }
	});
	
	module.exports = TypeNames;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var K = __webpack_require__(4);
	var APPL_SEP = ' | ';
	var APPL_START = '.&lt;';
	var APPL_END = '&gt;';
	
	module.exports = function (_ref) {
	  var html = _ref.html,
	      expandFunctionSignatures = _ref.expandFunctionSignatures;
	  return function renderType(type) {
	    if (!type) {
	      return '';
	    }
	
	    var displayNameOf = function displayNameOf(x) {
	      return html && x.html || x.name;
	    };
	    var displayName = displayNameOf(type);
	    var renderFunctionParam = function renderFunctionParam(param) {
	      return displayNameOf(param);
	    };
	
	    if (type.name === K.TYPE_UNION) {
	      return type.elements.map(renderType).join(APPL_SEP);
	    } else if (type.name === K.TYPE_ARRAY && type.elements) {
	      return 'Array' + APPL_START + type.elements.map(renderType).join(APPL_SEP) + APPL_END;
	    } else if (type.name && type.elements) {
	      return '' + displayName + APPL_START + type.elements.map(renderType).join(APPL_SEP) + APPL_END;
	    }
	    // function with params and return type
	    else if (expandFunctionSignatures && type.name === K.TYPE_FUNCTION && type.params && type.returnType) {
	        return '(' + type.params.map(renderFunctionParam).join(', ') + ') -> ' + displayNameOf(type.returnType);
	      }
	      // function with return type only
	      else if (expandFunctionSignatures && type.name === K.TYPE_FUNCTION && type.returnType) {
	          return '() -> ' + displayNameOf(type.returnType);
	        }
	        // function with params only
	        else if (expandFunctionSignatures & type.name === K.TYPE_FUNCTION && type.params) {
	            return '(' + type.params.map(renderFunctionParam).join(', ') + ') -> ?';
	          } else if (type.name === K.TYPE_ALL_LITERAL) {
	            return '*';
	          }
	
	    var buffer = displayName;
	
	    if (type.nullable === false) {
	      buffer += '!';
	    }
	
	    if (type.nullable === true) {
	      buffer += '?';
	    }
	
	    if (type.optional) {
	      buffer += '=';
	    }
	
	    return buffer;
	  };
	};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var _React$PropTypes = React.PropTypes,
	    bool = _React$PropTypes.bool,
	    object = _React$PropTypes.object;
	
	var describeType = __webpack_require__(26);
	
	var FunctionSignature = React.createClass({
	  displayName: 'FunctionSignature',
	
	  contextTypes: {
	    config: React.PropTypes.object.isRequired
	  },
	
	  propTypes: {
	    doc: object,
	    withNames: bool,
	    withBraces: bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      withNames: true,
	      withBraces: true
	    };
	  },
	  render: function render() {
	    var withNames = this.props.withNames;
	
	    var describeTypeHTML = describeType({
	      expandFunctionSignatures: this.context.config.expandReturnedFunctionSignatures,
	      html: true
	    });
	    var describeTypeText = describeType({
	      expandFunctionSignatures: this.context.config.expandReturnedFunctionSignatures,
	      html: false
	    });
	
	    var paramTags = this.props.doc.tags.filter(function (tag) {
	      return tag.type === 'param' && (tag.typeInfo.name || '?').indexOf('.') === -1;
	    });
	
	    var paramLines = paramTags.map(function (param) {
	      if (withNames && param.typeInfo.name) {
	        return '<em>' + (param.typeInfo.name || '?') + '</em>: ' + describeTypeHTML(param.typeInfo.type);
	      } else {
	        return describeTypeHTML(param.typeInfo.type);
	      }
	    });
	
	    // it's 3:42 AM and i can't sleep
	    var paramTagTotalLength = paramTags.map(function (tag) {
	      if (withNames && tag.typeInfo.name) {
	        return tag.typeInfo.name + ': ' + describeTypeText(tag.typeInfo.type);
	      } else {
	        return describeTypeText(tag.typeInfo.type);
	      }
	    }).join(', ').length;
	
	    var needsBreak = paramTagTotalLength >= 40;
	    var html = paramLines.map(function (line) {
	      return needsBreak ? '<br />&nbsp;&nbsp;' + line : line;
	    }).join(', ') + (needsBreak ? '<br />' : '');
	
	    return React.createElement('span', {
	      className: 'doc-entity__function-signature',
	      dangerouslySetInnerHTML: {
	        __html: this.props.withBraces ? '(' + html + ')' : html
	      }
	    });
	  }
	});
	
	module.exports = FunctionSignature;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var ModuleBody = __webpack_require__(29);
	var object = React.PropTypes.object;
	
	
	module.exports = React.createClass({
	  displayName: 'JS::ModuleBody',
	
	  propTypes: {
	    documentNode: object,
	    namespaceNode: object
	  },
	
	  render: function render() {
	    if (!this.props.documentNode) {
	      return null;
	    }
	
	    return React.createElement(ModuleBody, this.props);
	  }
	});

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(3);
	
	var _require = __webpack_require__(19),
	    findWhere = _require.findWhere,
	    where = _require.where;
	
	var Outlet = __webpack_require__(10);
	var Doc = __webpack_require__(30);
	var ObjectSynopsis = __webpack_require__(46);
	var SeeTag = __webpack_require__(39);
	var DocGroup = __webpack_require__(49);
	var PropertyTag = __webpack_require__(47);
	var ExampleTag = __webpack_require__(36);
	var orderAwareSort = __webpack_require__(18);
	var DocClassifier = __webpack_require__(14);
	var K = __webpack_require__(4);
	var _React$PropTypes = React.PropTypes,
	    string = _React$PropTypes.string,
	    object = _React$PropTypes.object,
	    arrayOf = _React$PropTypes.arrayOf;
	
	
	var ModuleBody = React.createClass({
	  displayName: 'ModuleBody',
	
	  propTypes: {
	    documentNode: object,
	    namespaceNode: object,
	    doc: object,
	    moduleDocs: arrayOf(object),
	    focusedEntity: string
	  },
	
	  render: function render() {
	    var documentNode = this.props.documentNode;
	
	    var doc = documentNode.properties;
	    var moduleDocs = documentNode.entities.map(function (x) {
	      return x.properties;
	    });
	    var renderableType = DocClassifier.getDisplayType(documentNode);
	    var withoutTypeDefs = moduleDocs.filter(function (x) {
	      return !DocClassifier.isTypeDef(x);
	    });
	    var typedefs = documentNode.entities.filter(function (x) {
	      return DocClassifier.isTypeDef(x.properties);
	    });
	
	    return React.createElement(
	      'div',
	      null,
	      renderableType === 'Factory' && this.renderConstructor(doc, "Instance Constructor"),
	      renderableType === 'Class' && this.renderConstructor(doc, "Constructor"),
	      renderableType === 'Function' && this.renderConstructor(doc, "Signature"),
	      this.renderExamples(doc),
	      this.renderStaticMethods(doc, withoutTypeDefs),
	      this.renderCallbacks(doc, withoutTypeDefs),
	      this.renderTypeDefs(doc, typedefs),
	      this.renderProperties(doc, withoutTypeDefs, function (scope) {
	        return !isStaticProperty(scope);
	      }, "Instance Properties"),
	      this.renderProperties(doc, withoutTypeDefs, isStaticProperty, "Static Properties"),
	      this.renderMethods(doc, withoutTypeDefs),
	      this.renderAdditionalResources(doc)
	    );
	  },
	  renderConstructor: function renderConstructor(doc, title) {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h2',
	        { className: 'doc-group__header' },
	        title
	      ),
	      React.createElement(Doc, {
	        withDescription: false,
	        withExamples: false,
	        withAdditionalResources: false,
	        collapsible: false,
	        doc: doc,
	        config: this.props.namespaceNode.config,
	        headingTag: 'h3'
	      })
	    );
	  },
	  renderExamples: function renderExamples(doc) {
	    var tags = where(doc.tags, { type: 'example' });
	
	    return React.createElement(
	      Outlet,
	      { name: 'JS::ExampleTags', elementProps: { tags: tags } },
	      tags.length === 1 && this.renderExampleTag(tags[0]),
	      tags.length > 1 && React.createElement(
	        DocGroup,
	        { label: 'Examples', alwaysGroup: false },
	        tags.map(this.renderExampleTag)
	      )
	    );
	  },
	  renderExampleTag: function renderExampleTag(tag) {
	    return React.createElement(
	      Outlet,
	      {
	        key: tag.string,
	        name: 'JS::ExampleTag',
	        elementProps: {
	          tag: tag,
	          documentNode: this.props.documentNode
	        },
	        firstMatchingElement: true
	      },
	      React.createElement(ExampleTag, { string: tag.string, typeInfo: tag.typeInfo })
	    );
	  },
	  renderAdditionalResources: function renderAdditionalResources(doc) {
	    var tags = where(doc.tags, { type: 'see' });
	
	    if (!tags.length) {
	      return null;
	    }
	
	    return React.createElement(
	      DocGroup,
	      { label: 'Additional resources', className: 'class-view__sees', tagName: 'ul' },
	      tags.map(this.renderSeeTag)
	    );
	  },
	  renderSeeTag: function renderSeeTag(tag) {
	    return React.createElement(SeeTag, _extends({ key: tag.typeInfo.name }, tag));
	  },
	  renderProperties: function renderProperties(doc, moduleDocs) {
	    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	    var title = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'Properties';
	
	    var propertyDocs = orderAwareSort(doc, moduleDocs.filter(function (entityDoc) {
	
	      return (scope ? scope(entityDoc.nodeInfo.scope) : true) && (entityDoc.nodeInfo.type === K.TYPE_LITERAL || entityDoc.tags.some(function (x) {
	        return x.type === 'property';
	      })) && entityDoc.symbol !== '~';
	    }), 'id');
	
	    if (!propertyDocs.length) {
	      return null;
	    }
	
	    return React.createElement(
	      DocGroup,
	      { label: title, tagName: 'div', className: 'js-doc-entity__property-tags' },
	      propertyDocs.map(this.renderProperty)
	    );
	  },
	  renderProperty: function renderProperty(doc) {
	    var tag = findWhere(doc.tags, { type: 'property' }) || findWhere(doc.tags, { type: 'type' }) || {
	      typeInfo: {
	        name: doc.name,
	        type: { name: doc.type }
	      }
	    };
	
	    if (doc.type && doc.type === K.TYPE_OBJECT && !!tag.typeInfo.name) {
	      return React.createElement(ObjectSynopsis, {
	        key: doc.id,
	        doc: doc,
	        anchor: this.getEntityAnchor(doc)
	      });
	    }
	
	    return React.createElement(
	      PropertyTag,
	      {
	        key: doc.id,
	        typeInfo: tag.typeInfo,
	        anchor: this.getEntityAnchor(doc),
	        doc: doc
	      },
	      doc.type && doc.type === K.TYPE_FUNCTION && React.createElement(Doc, {
	        withTitle: false,
	        collapsible: false,
	        doc: doc,
	        config: this.props.namespaceNode.config
	      })
	    );
	  },
	  renderStaticMethods: function renderStaticMethods(doc, moduleDocs) {
	    var staticMethodDocs = orderAwareSort(doc, moduleDocs.filter(DocClassifier.isStaticMethod), 'id');
	
	    if (!staticMethodDocs.length) {
	      return null;
	    }
	
	    return React.createElement(
	      DocGroup,
	      { label: 'Static Methods', tagName: 'ul', className: 'class-view__method-list' },
	      staticMethodDocs.map(this.renderStaticMethod)
	    );
	  },
	  renderCallbacks: function renderCallbacks(doc, moduleDocs) {
	    var callbackDocs = orderAwareSort(doc, moduleDocs.filter(DocClassifier.isCallback), 'id');
	
	    if (!callbackDocs.length) {
	      return null;
	    }
	
	    return React.createElement(
	      DocGroup,
	      { label: 'Callback Definitions', tagName: 'ul', className: 'class-view__method-list' },
	      callbackDocs.map(this.renderStaticMethod)
	    );
	  },
	  renderTypeDefs: function renderTypeDefs(doc, typedefNodes) {
	    var _this = this;
	
	    if (!typedefNodes.length) {
	      return null;
	    }
	
	    var orderedNodes = orderAwareSort.asNodes({ properties: doc }, typedefNodes, 'id');
	
	    return React.createElement(
	      DocGroup,
	      { label: 'Type Definitions', tagName: 'ul', className: 'class-view__type-def-list' },
	      orderedNodes.map(function (typedefNode) {
	        var typedefDoc = typedefNode.properties;
	        var propertyTags = typedefDoc.tags.filter(function (x) {
	          return x.type === 'property';
	        });
	        var memberPropertyTags = (typedefNode.entities || []).reduce(function (list, entity) {
	          return list.concat(entity.properties.tags.filter(function (x) {
	            return x.type === 'property';
	          }).map(function (propertyTag) {
	            return Object.assign({}, propertyTag, { anchor: entity.meta.anchor });
	          }));
	        }, []);
	
	        var allPropertyTags = propertyTags.concat(memberPropertyTags);
	
	        return React.createElement(
	          Doc,
	          {
	            key: typedefDoc.id,
	            doc: typedefDoc,
	            anchor: _this.getEntityAnchor(typedefDoc),
	            config: _this.props.namespaceNode.config,
	            headingTag: 'h3'
	          },
	          allPropertyTags.length > 0 && React.createElement(
	            'h4',
	            { className: 'tag-group__header' },
	            "Properties"
	          ),
	          allPropertyTags.map(function (tag, i) {
	            return React.createElement(PropertyTag, {
	              key: i,
	              typeInfo: tag.typeInfo,
	              anchor: tag.anchor
	            });
	          })
	        );
	      })
	    );
	  },
	  renderStaticMethod: function renderStaticMethod(doc) {
	    return React.createElement(Doc, {
	      key: doc.id,
	      doc: doc,
	      anchor: this.getEntityAnchor(doc),
	      config: this.props.namespaceNode.config,
	      headingTag: 'h3'
	    });
	  },
	  renderMethods: function renderMethods(doc, moduleDocs) {
	    var methodDocs = orderAwareSort(doc, moduleDocs.filter(DocClassifier.isMethod), 'id');
	
	    if (!methodDocs.length) {
	      return null;
	    }
	
	    return React.createElement(
	      DocGroup,
	      { label: 'Instance Methods', tagName: 'ul', className: 'class-view__method-list' },
	      methodDocs.map(this.renderMethod)
	    );
	  },
	  renderMethod: function renderMethod(doc) {
	    return React.createElement(Doc, {
	      key: doc.id,
	      doc: doc,
	      anchor: this.getEntityAnchor(doc),
	      config: this.props.namespaceNode.config,
	      headingTag: 'h3'
	    });
	  },
	  getEntityAnchor: function getEntityAnchor(doc) {
	    return this.props.documentNode.entities.filter(function (x) {
	      return x.properties === doc;
	    })[0].meta.anchor;
	  }
	});
	
	function isStaticProperty(scope) {
	  return [K.SCOPE_PROTOTYPE, K.SCOPE_INSTANCE].indexOf(scope) === -1;
	}
	
	module.exports = ModuleBody;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var React = __webpack_require__(3);
	var classSet = __webpack_require__(31);
	var HighlightedText = __webpack_require__(13);
	var DocTags = __webpack_require__(32);
	var FunctionSignature = __webpack_require__(27);
	var TypeNames = __webpack_require__(25);
	var DeprecatedTag = __webpack_require__(45);
	var K = __webpack_require__(4);
	var DocClassifier = __webpack_require__(14);
	var Collapsible = __webpack_require__(34);
	var _React$PropTypes = React.PropTypes,
	    object = _React$PropTypes.object,
	    bool = _React$PropTypes.bool,
	    string = _React$PropTypes.string;
	
	var HeadingAnchor = __webpack_require__(12);
	
	var Doc = React.createClass({
	  displayName: 'Doc',
	
	  mixins: [Collapsible],
	
	  propTypes: {
	    anchor: string,
	    children: React.PropTypes.node,
	    doc: object.isRequired,
	    config: object.isRequired,
	    collapsible: bool,
	    expanded: bool,
	    headingTag: string,
	    withExamples: bool,
	    withTitle: bool,
	    withDescription: bool,
	    withAdditionalResources: bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      headingTag: 'h4',
	      withTitle: true,
	      withDescription: true,
	      withExamples: true
	    };
	  },
	
	  // shouldComponentUpdate: function(nextProps, nextState) {
	  //   return (
	  //     nextProps.doc !== this.props.doc ||
	  //     nextState.collapsed !== this.state.collapsed ||
	  //     nextProps.expanded !== this.props.expanded
	  //   );
	  // },
	
	  render: function render() {
	    var isCollapsed = this.isCollapsed();
	    var className = classSet({
	      'doc-entity': true,
	      'collapsible': !!this.props.collapsible,
	      'collapsible--expanded': !isCollapsed,
	      'collapsible--collapsed': isCollapsed
	    });
	
	    var _props = this.props,
	        doc = _props.doc,
	        anchor = _props.anchor;
	
	    var description = doc.description;
	    var deprecatedTag = doc.tags.filter(function (t) {
	      return t.type === 'deprecated';
	    })[0];
	    var isPrivate = DocClassifier.isPrivate(doc);
	    var HeadingTag = this.props.headingTag || 'h4';
	
	    if (isPrivate && this.props.config.hidePrivateSymbols) {
	      return null;
	    }
	
	    return React.createElement(
	      'div',
	      { className: className },
	      this.props.withTitle && React.createElement(
	        HeadingTag,
	        {
	          className: classSet({
	            "doc-entity__header": true,
	            "collapsible-header": true,
	            "anchorable-heading": !!anchor
	          }),
	          onClick: this.toggleCollapsed,
	          title: doc.name
	        },
	        this.renderCollapser(),
	        anchor && React.createElement(HeadingAnchor.Anchor, { href: anchor }),
	        anchor && React.createElement(HeadingAnchor.Link, { href: anchor }),
	        React.createElement(
	          HeadingAnchor.Text,
	          { className: 'doc-entity__name' },
	          React.createElement(
	            'span',
	            { className: 'doc-entity__name-fragment' },
	            doc.name
	          ),
	          isFunction(doc) && React.createElement(FunctionSignature, { doc: doc }),
	          this.renderReturnType(),
	          doc.isConstructor && React.createElement(
	            'span',
	            { className: 'doc-entity__modifier' },
	            'CONSTRUCTOR'
	          ),
	          DocClassifier.isProtected(doc) && React.createElement(
	            'span',
	            { className: 'doc-entity__modifier doc-entity__protected' },
	            'PROTECTED'
	          ),
	          isPrivate && React.createElement(
	            'span',
	            { className: 'doc-entity__modifier doc-entity__private' },
	            'PRIVATE'
	          ),
	          doc.tags.some(function (t) {
	            return t.type === 'async';
	          }) && React.createElement(
	            'span',
	            { className: 'doc-entity__modifier doc-entity__async' },
	            'ASYNC'
	          ),
	          deprecatedTag && React.createElement(
	            'span',
	            { className: 'doc-entity__modifier doc-entity__async' },
	            'DEPRECATED'
	          )
	        )
	      ),
	      React.createElement(
	        'div',
	        { className: 'doc-entity__description' },
	        deprecatedTag && deprecatedTag.string.length > 0 && React.createElement(DeprecatedTag, { string: deprecatedTag.string }),
	        this.props.withDescription && description && description.length > 0 && !isCollapsed && React.createElement(
	          HighlightedText,
	          null,
	          description
	        )
	      ),
	      !isCollapsed && doc.tags.length > 0 && React.createElement(DocTags, {
	        tags: doc.tags,
	        doc: doc,
	        config: this.props.config,
	        withExamples: this.props.withExamples,
	        withAdditionalResources: this.props.withAdditionalResources
	      }),
	      !isCollapsed && this.props.children
	    );
	  },
	  renderReturnType: function renderReturnType() {
	    var _props$doc$tags$filte = this.props.doc.tags.filter(function (t) {
	      return t.type === 'return';
	    }),
	        _props$doc$tags$filte2 = _slicedToArray(_props$doc$tags$filte, 1),
	        tag = _props$doc$tags$filte2[0];
	
	    if (!tag) {
	      return null;
	    }
	
	    return React.createElement(
	      'span',
	      { className: 'doc-entity__method-params' },
	      ' -> ',
	      React.createElement(TypeNames, { type: tag.typeInfo.type })
	    );
	  }
	});
	
	function isFunction(doc) {
	  return doc.type === K.TYPE_FUNCTION;
	}
	
	module.exports = Doc;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["utils/classSet"];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var TagGroup = __webpack_require__(33);
	var TypeDefTagGroup = __webpack_require__(35);
	var ExampleTag = __webpack_require__(36);
	var ParamTag = __webpack_require__(37);
	var SeeTag = __webpack_require__(39);
	var ThrowsTag = __webpack_require__(41);
	var ReturnTag = __webpack_require__(42);
	var CallbackTag = __webpack_require__(43);
	var TabularTagGroup = __webpack_require__(44);
	
	var _require = __webpack_require__(19),
	    where = _require.where;
	
	var HANDLED_TAGS = ['alias', 'async', 'callback', 'class', 'constructor', 'deprecated', 'example', 'extends', 'memberOf', 'method', 'module', 'name', 'namespace', 'param', 'preserveOrder', 'private', 'property', 'protected', 'return', 'see', 'static', 'throws', 'type', 'typedef'];
	
	var DocTags = React.createClass({
	  displayName: 'DocTags',
	
	  propTypes: {
	    config: React.PropTypes.object.isRequired,
	    tags: React.PropTypes.array,
	    callbacks: React.PropTypes.array,
	    withExamples: React.PropTypes.bool,
	    withAdditionalResources: React.PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      tags: [],
	      callbacks: [],
	      withExamples: true,
	      withAdditionalResources: true
	    };
	  },
	
	
	  // shouldComponentUpdate: function(nextProps) {
	  //   return this.props.tags !== nextProps.tags;
	  // },
	
	  render: function render() {
	    var paramTags = where(this.props.tags, { type: 'param' });
	    var returnTags = where(this.props.tags, { type: 'return' });
	    var unhandledTags = this.props.tags.filter(function (tag) {
	      return HANDLED_TAGS.indexOf(tag.type) === -1;
	    });
	    var config = this.props.config;
	
	
	    return React.createElement(
	      'div',
	      { className: 'doc-entity__tags' },
	      React.createElement(
	        TabularTagGroup,
	        {
	          alwaysGroup: true,
	          tagName: 'div',
	          tags: paramTags,
	          renderer: ParamTag,
	          hideIfEmpty: config.hideBlankParameters
	        },
	        'Parameters (',
	        paramTags.length,
	        ')'
	      ),
	      React.createElement(
	        TabularTagGroup,
	        {
	          alwaysGroup: true,
	          tagName: 'div',
	          tags: returnTags,
	          tagType: 'return',
	          renderer: ReturnTag,
	          hideIfEmpty: config.hideBlankReturns
	        },
	        returnTags.length > 1 ? 'Return Values' : 'Return Value'
	      ),
	      this.props.withExamples && React.createElement(
	        TagGroup,
	        { alwaysGroup: true, tags: this.props.tags, tagType: 'example', renderer: ExampleTag, tagName: 'ul' },
	        'Examples'
	      ),
	      React.createElement(
	        TagGroup,
	        { alwaysGroup: true, tagName: 'ul', tags: this.props.tags, tagType: 'throws', renderer: ThrowsTag },
	        React.createElement(
	          'span',
	          { className: 'type-attention' },
	          'Exceptions'
	        )
	      ),
	      React.createElement(
	        TypeDefTagGroup,
	        { alwaysGroup: true, tagName: 'ul', documents: this.props.callbacks, renderer: CallbackTag },
	        'Callback Definitions'
	      ),
	      this.props.withAdditionalResources && React.createElement(
	        TagGroup,
	        { alwaysGroup: true, tags: this.props.tags, tagType: 'see', renderer: SeeTag, tagName: 'ul' },
	        'Suggested Reading'
	      ),
	      unhandledTags.length > 0 && unhandledTags.map(this.renderTagString)
	    );
	  },
	  renderTagString: function renderTagString(tag) {
	    return React.createElement(
	      'div',
	      { key: tag.string, className: 'type-attention' },
	      React.createElement(
	        'pre',
	        null,
	        "Unknown tag:\n" + JSON.stringify(tag, null, 2)
	      )
	    );
	  }
	});
	
	module.exports = DocTags;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(3);
	
	var _require = __webpack_require__(19),
	    where = _require.where;
	
	var Collapsible = __webpack_require__(34);
	var classSet = __webpack_require__(31);
	
	var TagGroup = React.createClass({
	  displayName: 'TagGroup',
	
	  mixins: [Collapsible],
	
	  propTypes: {
	    tagName: React.PropTypes.string,
	    tagType: React.PropTypes.string,
	    alwaysGroup: React.PropTypes.bool,
	    tags: React.PropTypes.array,
	
	    renderer: React.PropTypes.func,
	    className: React.PropTypes.string,
	    children: React.PropTypes.any
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      tagName: 'div',
	      alwaysGroup: false
	    };
	  },
	
	  render: function render() {
	    var DOMTag = this.props.tagName;
	    var tags = this.props.tagType ? where(this.props.tags, { type: this.props.tagType }) : this.props.tags;
	    var Renderer = this.props.renderer;
	    var isCollapsed = this.isCollapsed();
	    var className;
	
	    if (tags.length === 0) {
	      return null;
	    } else if (tags.length === 1 && !this.props.alwaysGroup) {
	      return React.createElement(Renderer, _extends({ withTitle: true }, tags[0]));
	    } else {
	      className = classSet({
	        'tag-group': true,
	        'tag-group--collapsed': isCollapsed,
	        'collapsible': this.isCollapsible(),
	        'collapsible--collapsed': isCollapsed,
	        'tag-group--single-child': tags.length === 1
	      });
	
	      return React.createElement(
	        DOMTag,
	        { className: className + ' ' + (this.props.className || '') },
	        this.props.children && React.createElement(
	          'h4',
	          { className: 'tag-group__header collapsible-header', onClick: this.toggleCollapsed },
	          this.renderCollapser(),
	          this.props.children
	        ),
	        !isCollapsed && tags.map(function (tag, i) {
	          return React.createElement(Renderer, _extends({ key: i, withTitle: false }, tag));
	        })
	      );
	    }
	  }
	});
	
	module.exports = TagGroup;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["mixins/Collapsible"];

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var Collapsible = __webpack_require__(34);
	var classSet = __webpack_require__(31);
	
	var TypeDefTagGroup = React.createClass({
	  displayName: 'TypeDefTagGroup',
	
	  mixins: [Collapsible],
	
	  propTypes: {
	    tagName: React.PropTypes.string,
	    alwaysGroup: React.PropTypes.bool,
	    documents: React.PropTypes.array,
	
	    renderer: React.PropTypes.func,
	    className: React.PropTypes.string,
	    children: React.PropTypes.any
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      tagName: 'div',
	      alwaysGroup: false
	    };
	  },
	
	  render: function render() {
	    var DOMTag = this.props.tagName;
	    var documents = this.props.documents;
	    var Renderer = this.props.renderer;
	    var isCollapsed = this.isCollapsed();
	    var className;
	
	    if (documents.length === 0) {
	      return null;
	    } else if (documents.length === 1 && !this.props.alwaysGroup) {
	      return React.createElement(Renderer, { withTitle: true, document: documents[0] });
	    } else {
	      className = classSet({
	        'tag-group': true,
	        'tag-group--collapsed': isCollapsed,
	        'collapsible': this.isCollapsible(),
	        'collapsible--collapsed': isCollapsed,
	        'tag-group--single-child': documents.length === 1
	      });
	
	      return React.createElement(
	        DOMTag,
	        { className: className + ' ' + (this.props.className || '') },
	        this.props.children && React.createElement(
	          'h4',
	          { className: 'tag-group__header collapsible-header', onClick: this.toggleCollapsed },
	          this.renderCollapser(),
	          this.props.children
	        ),
	        !isCollapsed && documents.map(function (tag, i) {
	          return React.createElement(Renderer, { key: i, withTitle: false, document: tag });
	        })
	      );
	    }
	  }
	});
	
	module.exports = TypeDefTagGroup;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(3);
	var HighlightedText = __webpack_require__(13);
	
	var _React$PropTypes = React.PropTypes,
	    shape = _React$PropTypes.shape,
	    string = _React$PropTypes.string;
	
	
	var ExampleTag = React.createClass({
	  displayName: "ExampleTag",
	
	  propTypes: {
	    string: string,
	    typeInfo: shape({
	      name: string,
	      description: string
	    })
	  },
	
	  render: function render() {
	    var _props$typeInfo = this.props.typeInfo,
	        name = _props$typeInfo.name,
	        description = _props$typeInfo.description;
	
	
	    return React.createElement(
	      "div",
	      { className: "example-tag" },
	      name && React.createElement(
	        "p",
	        null,
	        React.createElement("span", { dangerouslySetInnerHTML: { __html: name } })
	      ),
	      React.createElement(
	        HighlightedText,
	        { className: "example-tag__code" },
	        description
	      )
	    );
	  }
	});
	
	module.exports = ExampleTag;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var HighlightedText = __webpack_require__(13);
	var TypeNames = __webpack_require__(25);
	var DefaultValue = __webpack_require__(38);
	
	var ParamTag = React.createClass({
	  displayName: "ParamTag",
	
	  propTypes: {
	    withTitle: React.PropTypes.bool,
	    typeInfo: React.PropTypes.shape({
	      type: React.PropTypes.object,
	      name: React.PropTypes.string,
	      defaultValue: React.PropTypes.string,
	      description: React.PropTypes.string
	    })
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      withTitle: false
	    };
	  },
	
	  render: function render() {
	    var typeInfo = this.props.typeInfo;
	
	
	    return React.createElement(
	      'li',
	      { className: 'param-tag' },
	      React.createElement(
	        'header',
	        { className: 'param-tag__header' },
	        this.props.withTitle && React.createElement(
	          'strong',
	          null,
	          'Parameter',
	          ' '
	        ),
	        React.createElement(
	          'code',
	          { className: 'param-tag__name' },
	          typeInfo.name
	        ),
	        typeInfo.type && React.createElement(
	          'code',
	          { className: 'param-tag__types' },
	          ': ',
	          React.createElement(TypeNames, { type: typeInfo.type })
	        )
	      ),
	      typeInfo.description && React.createElement(
	        HighlightedText,
	        { className: 'param-tag__description' },
	        typeInfo.description.replace(/[ ]{4,}/g, '')
	      ),
	      React.createElement(DefaultValue, { defaultValue: typeInfo.defaultValue })
	    );
	  }
	});
	
	module.exports = ParamTag;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(3);
	var DefaultValue = React.createClass({
	  displayName: "DefaultValue",
	
	  propTypes: {
	    defaultValue: React.PropTypes.string
	  },
	
	  render: function render() {
	    var defaultValue = this.props.defaultValue;
	
	
	    if (!defaultValue) {
	      return null;
	    }
	
	    return React.createElement(
	      "p",
	      { className: "property-tag__default-value" },
	      "Defaults to: ",
	      React.createElement(
	        "code",
	        null,
	        defaultValue
	      )
	    );
	  }
	});
	
	module.exports = DefaultValue;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(3);
	var MarkdownText = __webpack_require__(40);
	var _React$PropTypes = React.PropTypes,
	    shape = _React$PropTypes.shape,
	    string = _React$PropTypes.string;
	
	
	var SeeTag = React.createClass({
	  displayName: "SeeTag",
	
	  propTypes: {
	    typeInfo: shape({
	      name: string.isRequired
	    })
	  },
	
	  render: function render() {
	    return React.createElement(
	      "li",
	      { className: "see-tag" },
	      React.createElement(
	        MarkdownText,
	        { tagName: "span" },
	        this.props.typeInfo.name
	      )
	    );
	  }
	});
	
	module.exports = SeeTag;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["components/MarkdownText"];

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var HighlightedText = __webpack_require__(13);
	var TypeNames = __webpack_require__(25);
	
	var _React$PropTypes = React.PropTypes,
	    shape = _React$PropTypes.shape,
	    string = _React$PropTypes.string,
	    object = _React$PropTypes.object;
	
	
	var ThrowsTag = React.createClass({
	  displayName: 'ThrowsTag',
	
	  propTypes: {
	    typeInfo: shape({
	      type: object,
	      description: string
	    })
	  },
	
	  render: function render() {
	    return React.createElement(
	      'li',
	      { className: 'throws-tag' },
	      React.createElement(
	        'p',
	        { className: 'inline-block' },
	        React.createElement(TypeNames, { type: this.props.typeInfo.type })
	      ),
	      ' - ',
	      React.createElement(HighlightedText, {
	        className: 'inline-block',
	        children: this.props.typeInfo.description
	      })
	    );
	  }
	});
	
	module.exports = ThrowsTag;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var HighlightedText = __webpack_require__(13);
	var TypeNames = __webpack_require__(25);
	
	var ReturnTag = React.createClass({
	  displayName: "ReturnTag",
	
	  propTypes: {
	    withTitle: React.PropTypes.bool,
	    typeInfo: React.PropTypes.shape({
	      type: React.PropTypes.object,
	      name: React.PropTypes.string,
	      defaultValue: React.PropTypes.string,
	      description: React.PropTypes.string
	    })
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      withTitle: false
	    };
	  },
	
	  render: function render() {
	    var typeInfo = this.props.typeInfo;
	
	    var hasName = Boolean(typeInfo.name);
	
	    return React.createElement(
	      'li',
	      { className: 'return-tag' },
	      React.createElement(
	        'header',
	        { className: 'return-tag__header' },
	        this.props.withTitle && React.createElement(
	          'strong',
	          null,
	          'Returns'
	        ),
	        hasName && React.createElement(
	          'code',
	          { className: 'return-tag__name' },
	          typeInfo.name
	        ),
	        typeInfo.type && React.createElement(
	          'code',
	          { className: 'return-tag__types' },
	          hasName && ': ',
	          React.createElement(TypeNames, { type: typeInfo.type }),
	          typeInfo.defaultValue && React.createElement(
	            'span',
	            { className: 'param-tag__default-value' },
	            ' (',
	            'defaults to: ',
	            React.createElement(
	              'code',
	              null,
	              typeInfo.defaultValue
	            ),
	            ')'
	          )
	        )
	      ),
	      typeInfo.description && React.createElement(
	        HighlightedText,
	        { className: 'return-tag__description' },
	        typeInfo.description.replace(/[ ]{5,8}/g, '')
	      )
	    );
	  }
	});
	
	module.exports = ReturnTag;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(3);
	var Doc = __webpack_require__(30);
	
	var _React$PropTypes = React.PropTypes,
	    shape = _React$PropTypes.shape,
	    string = _React$PropTypes.string,
	    object = _React$PropTypes.object;
	
	
	var CallbackTag = React.createClass({
	  displayName: "CallbackTag",
	
	  propTypes: {
	    string: string,
	    typeInfo: shape({
	      name: string,
	      description: string
	    }),
	    document: object.isRequired
	  },
	
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "callback-tag" },
	      React.createElement(Doc, { doc: this.props.document })
	    );
	  }
	});
	
	module.exports = CallbackTag;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(3);
	
	var _require = __webpack_require__(19),
	    where = _require.where;
	
	var Collapsible = __webpack_require__(34);
	var classSet = __webpack_require__(31);
	var TypeNames = __webpack_require__(25);
	var DefaultValue = __webpack_require__(38);
	var HighlightedText = __webpack_require__(13);
	
	var TabularTagGroup = React.createClass({
	  displayName: 'TabularTagGroup',
	
	  mixins: [Collapsible],
	
	  propTypes: {
	    tagName: React.PropTypes.string,
	    tagType: React.PropTypes.string,
	    alwaysGroup: React.PropTypes.bool,
	    tags: React.PropTypes.array,
	    hideIfEmpty: React.PropTypes.bool,
	
	    renderer: React.PropTypes.func,
	    className: React.PropTypes.string,
	    children: React.PropTypes.any
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      tagName: 'div',
	      alwaysGroup: false
	    };
	  },
	
	  render: function render() {
	    var DOMTag = this.props.tagName;
	    var tags = this.props.tagType ? where(this.props.tags, { type: this.props.tagType }) : this.props.tags;
	    var Renderer = this.props.renderer;
	    var isCollapsed = this.isCollapsed();
	    var className;
	
	    if (tags.length === 0) {
	      return null;
	    } else if (this.props.hideIfEmpty && tags.every(tagIsBlank)) {
	      return null;
	    } else if (tags.length === 1 && !this.props.alwaysGroup) {
	      return React.createElement(Renderer, _extends({ withTitle: true }, tags[0]));
	    } else {
	      className = classSet(this.props.className, {
	        'tag-group': true,
	        'tag-group--tabular': true,
	        'tag-group--collapsed': isCollapsed,
	        'collapsible': this.isCollapsible(),
	        'collapsible--collapsed': isCollapsed,
	        'tag-group--single-child': tags.length === 1
	      });
	
	      return React.createElement(
	        DOMTag,
	        { className: className },
	        this.props.children && React.createElement(
	          'h4',
	          { className: 'tag-group__header collapsible-header', onClick: this.toggleCollapsed },
	          this.renderCollapser(),
	          this.props.children
	        ),
	        !isCollapsed && React.createElement(
	          'table',
	          null,
	          React.createElement(
	            'tbody',
	            null,
	            tags.map(this.renderTag)
	          )
	        )
	      );
	    }
	  },
	  renderTag: function renderTag(tag, i) {
	    var typeInfo = tag.typeInfo;
	
	    var hasName = Boolean(typeInfo.name && typeInfo.name.length > 0);
	
	    return React.createElement(
	      'tr',
	      { key: i, className: 'param-tag' },
	      React.createElement(
	        'td',
	        { className: 'tag-group__primary-column' },
	        hasName && React.createElement(
	          'header',
	          { className: 'param-tag__header' },
	          React.createElement(
	            'code',
	            { className: 'param-tag__name' },
	            typeInfo.name
	          )
	        )
	      ),
	      React.createElement(
	        'td',
	        null,
	        typeInfo.type && React.createElement(
	          'code',
	          { className: 'param-tag__types' },
	          React.createElement(TypeNames, { type: typeInfo.type })
	        ),
	        typeInfo.description && React.createElement(
	          HighlightedText,
	          { className: 'param-tag__description' },
	          typeInfo.description.replace(/[ ]{4,}/g, '')
	        ),
	        React.createElement(DefaultValue, { defaultValue: typeInfo.defaultValue })
	      )
	    );
	  }
	});
	
	function tagIsBlank(_ref) {
	  var string = _ref.string;
	
	  return !string || !string.length === 0;
	}
	
	module.exports = TabularTagGroup;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(3);
	var DeprecatedTag = React.createClass({
	  displayName: "DeprecatedTag",
	
	  propTypes: {
	    string: React.PropTypes.string.isRequired
	  },
	
	  render: function render() {
	    return React.createElement(
	      "blockquote",
	      { className: "blockquote--warning" },
	      React.createElement(
	        "p",
	        null,
	        React.createElement(
	          "strong",
	          null,
	          "Deprecated"
	        )
	      ),
	      React.createElement("div", { dangerouslySetInnerHTML: { __html: this.props.string } })
	    );
	  }
	});
	
	module.exports = DeprecatedTag;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var PropertyTag = __webpack_require__(47);
	
	var _require = __webpack_require__(19),
	    assign = _require.assign;
	
	var PropTypes = React.PropTypes;
	
	
	var ObjectSynopsis = React.createClass({
	  displayName: 'ObjectSynopsis',
	
	
	  propTypes: {
	    doc: PropTypes.object,
	    anchor: PropTypes.string
	  },
	
	  render: function render() {
	    var _props = this.props,
	        anchor = _props.anchor,
	        doc = _props.doc;
	
	    var tags = this.props.doc.tags.filter(function (tag) {
	      return tag.type === 'property';
	    });
	
	    var tree = tags.reduce(function (map, tag) {
	      var fragments = tag.typeInfo.name.split('.');
	      var parentKey = fragments.slice(0, -1).join('.');
	
	      if (!map[parentKey]) {
	        map[parentKey] = [];
	      }
	
	      map[parentKey].push(tag);
	
	      return map;
	    }, {});
	
	    var render = function render(key) {
	      var childTags = tree[key];
	
	      if (!childTags || !childTags.length) {
	        return null;
	      }
	
	      return childTags.map(function (tag, index) {
	        var children = render(tag.typeInfo.name);
	        var isRoot = tag.typeInfo.name === doc.name;
	
	        return React.createElement(
	          'div',
	          { key: key + '__' + index },
	          React.createElement(
	            PropertyTag,
	            {
	              anchor: isRoot && anchor || null,
	              collapsible: isRoot,
	              typeInfo: assign({}, tag.typeInfo, {
	                name: tag.typeInfo.name.split('.').slice(-1).join('.')
	              })
	            },
	            children
	          )
	        );
	      });
	    };
	
	    return React.createElement(
	      'div',
	      { className: 'js-object-synopsis' },
	      render('')
	    );
	  }
	});
	
	module.exports = ObjectSynopsis;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var HighlightedText = __webpack_require__(13);
	var HeadingAnchor = __webpack_require__(12);
	var TypeNames = __webpack_require__(25);
	var DefaultValue = __webpack_require__(38);
	var describeNode = __webpack_require__(48);
	var DocClassifier = __webpack_require__(14);
	var Collapsible = __webpack_require__(34);
	var classSet = __webpack_require__(20);
	var _React$PropTypes = React.PropTypes,
	    shape = _React$PropTypes.shape,
	    string = _React$PropTypes.string,
	    object = _React$PropTypes.object,
	    node = _React$PropTypes.node;
	
	
	var PropertyTag = React.createClass({
	  mixins: [Collapsible],
	
	  displayName: "PropertyTag",
	
	  propTypes: {
	    children: node,
	    anchor: string,
	    typeInfo: shape({
	      type: object,
	      name: string,
	      defaultValue: string,
	      description: string
	    }),
	
	    doc: object
	  },
	
	  render: function render() {
	    var _props = this.props,
	        anchor = _props.anchor,
	        typeInfo = _props.typeInfo,
	        doc = _props.doc;
	
	    var description = typeInfo.description || doc && doc.description;
	    var defaultValue = typeInfo.defaultValue || doc && describeNode(doc.nodeInfo);
	    var collapsed = this.isCollapsed();
	    var collapsible = this.isCollapsible() && description && description.length;
	
	    return React.createElement(
	      'div',
	      { className: classSet("property-tag", {
	          'collapsible': collapsible,
	          'collapsible--collapsed': this.isCollapsed()
	        }) },
	      React.createElement(
	        'header',
	        {
	          className: classSet("property-tag__header anchorable-heading", {
	            "collapsible-header": collapsible
	          }),
	          onClick: this.toggleCollapsed
	        },
	        collapsible && this.renderCollapser(),
	        anchor && React.createElement(HeadingAnchor.Anchor, { href: this.props.anchor }),
	        anchor && React.createElement(HeadingAnchor.Link, { href: this.props.anchor }),
	        React.createElement(
	          'span',
	          { className: 'property-tag__name' },
	          typeInfo.name || doc && doc.name
	        ),
	        ': ',
	        React.createElement(
	          'code',
	          null,
	          React.createElement(TypeNames, { type: typeInfo.type })
	        ),
	        doc && DocClassifier.isPrivate(doc) && React.createElement(
	          'span',
	          { className: 'doc-entity__modifier doc-entity__private' },
	          'PRIVATE'
	        )
	      ),
	      !collapsed && description && React.createElement(
	        HighlightedText,
	        { className: 'property-tag__description' },
	        description
	      ),
	      !collapsed && defaultValue && React.createElement(DefaultValue, { defaultValue: defaultValue }),
	      !collapsed && this.props.children
	    );
	  }
	});
	
	module.exports = PropertyTag;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var K = __webpack_require__(4);
	
	module.exports = function (nodeInfo) {
	  return describeNode(nodeInfo, true);
	};
	
	function describeNode(nodeInfo, stringify) {
	  var print = stringify ? prettyJSON : Identity;
	
	  if (!nodeInfo.type) {
	    return null;
	  }
	
	  if (nodeInfo.type === K.TYPE_LITERAL && nodeInfo.regexp) {
	    return nodeInfo.hasOwnProperty('value') ? nodeInfo.value : null;
	  } else if (nodeInfo.type === K.TYPE_LITERAL) {
	    return print(nodeInfo.hasOwnProperty('value') ? nodeInfo.value : null);
	  } else if (nodeInfo.type === K.TYPE_ARRAY) {
	    return print(nodeInfo.elements.map(function (x) {
	      return describeNode(x, false);
	    }));
	  } else if (nodeInfo.type === K.TYPE_OBJECT) {
	    return print(nodeInfo.properties.reduce(function (map, x) {
	      if (x) {
	        map[x.key] = describeNode(x.value, false);
	      }
	
	      return map;
	    }, {}));
	  }
	
	  return null;
	}
	
	function prettyJSON(x) {
	  return JSON.stringify(x, null, 2);
	}
	
	function Identity(x) {
	  return x;
	}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var _React$PropTypes = React.PropTypes,
	    string = _React$PropTypes.string,
	    any = _React$PropTypes.any;
	
	
	var DocGroup = React.createClass({
	  displayName: 'DocGroup',
	
	  propTypes: {
	    tagName: string,
	    label: string,
	    className: string,
	    children: any
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      tagName: 'div'
	    };
	  },
	
	  // shouldComponentUpdate: function(nextProps) {
	  //   return this.props.children !== nextProps.children;
	  // },
	
	  render: function render() {
	    var DOMTag = this.props.tagName;
	
	    return React.createElement(
	      'div',
	      { className: 'doc-group' },
	      React.createElement('h2', { className: 'doc-group__header', children: this.props.label }),
	      React.createElement(
	        DOMTag,
	        { className: this.props.className },
	        this.props.children
	      )
	    );
	  }
	});
	
	module.exports = DocGroup;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var ClassBrowser = __webpack_require__(51);
	var _React$PropTypes = React.PropTypes,
	    array = _React$PropTypes.array,
	    object = _React$PropTypes.object,
	    shape = _React$PropTypes.shape,
	    bool = _React$PropTypes.bool;
	
	
	module.exports = React.createClass({
	  displayName: 'JS::BrowserOutlet',
	  propTypes: {
	    documentNode: object,
	    namespaceNode: object,
	    documentEntityNode: object,
	    $outletOptions: shape({
	      flat: bool,
	      linkNamespaces: bool,
	      filter: array
	    })
	  },
	
	  render: function render() {
	    return React.createElement(ClassBrowser, {
	      namespaceNode: this.props.namespaceNode,
	      documentNode: this.props.documentNode,
	      documentEntityNode: this.props.documentEntityNode,
	      withControls: this.props.namespaceNode.enableSidebarControls !== false,
	      flat: this.props.$outletOptions.flat,
	      linkToNamespaces: this.props.$outletOptions.linkNamespaces,
	      filter: this.props.$outletOptions.filter
	    });
	  }
	});

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(3);
	var console = __webpack_require__(52);
	var Link = __webpack_require__(17);
	var classSet = __webpack_require__(31);
	var Checkbox = __webpack_require__(53);
	var Icon = __webpack_require__(54);
	var HotItemIndicator = __webpack_require__(55);
	
	var _require = __webpack_require__(19),
	    sortBy = _require.sortBy;
	
	var orderAwareSort = __webpack_require__(18);
	var DocClassifier = __webpack_require__(14);
	var filterDocuments = __webpack_require__(56);
	var _React$PropTypes = React.PropTypes,
	    array = _React$PropTypes.array,
	    object = _React$PropTypes.object,
	    bool = _React$PropTypes.bool;
	
	
	var ClassBrowser = React.createClass({
	  displayName: "ClassBrowser",
	
	  propTypes: {
	    withControls: bool,
	    documentNode: object,
	    documentEntityNode: object,
	    namespaceNode: object,
	    flat: bool,
	    linkNamespaces: bool,
	    showTypeDefs: bool,
	    filter: array
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      showPrivateModules: false
	    };
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      showTypeDefs: false,
	      withControls: true
	    };
	  },
	
	
	  // shouldComponentUpdate: function(nextProps) {
	  //   return (
	  //     nextProps.documentEntityNode !== this.props.documentEntityNode ||
	  //     nextProps.documentNode !== this.props.documentNode ||
	  //     nextProps.namespaceNode !== this.props.namespaceNode
	  //   );
	  // },
	
	  render: function render() {
	    var rootDocuments = this.props.namespaceNode.documents;
	    var genericNamespace = {
	      id: '__general__',
	      title: '[General]',
	      documents: [],
	      meta: {}
	    };
	
	    var hasPrivateModules = rootDocuments.some(function (x) {
	      return x.documents.some(function (y) {
	        return DocClassifier.isPrivate(y.properties);
	      });
	    });
	
	    var namespaces = rootDocuments.reduce(function (list, node) {
	      if (node.documents.length) {
	        list.push(node);
	      } else {
	        list[0].documents.push(node);
	      }
	
	      return list;
	    }, [genericNamespace]).sort(function (a, b) {
	      if (a.id === '__general__') {
	        return 1;
	      } else {
	        return a.id > b.id ? 1 : -1;
	      }
	    });
	
	    var shouldDisplayName = namespaces.length > 1;
	
	    return React.createElement(
	      "nav",
	      { className: "megadoc-document-browser class-browser__listing" },
	      namespaces.map(this.renderNamespace.bind(null, shouldDisplayName)),
	      this.props.withControls && hasPrivateModules && React.createElement(
	        "div",
	        { className: "class-browser__controls" },
	        React.createElement(Checkbox, {
	          checked: this.state.showPrivateModules,
	          onChange: this.togglePrivateVisibility,
	          children: "Show private"
	        })
	      )
	    );
	  },
	  renderNamespace: function renderNamespace(shouldDisplayName, ns) {
	    var documents = ns.documents;
	
	    var config = this.props.namespaceNode.config;
	
	    var shouldHidePrivateModules = config.hidePrivateSymbols || !this.state.showPrivateModules;
	
	    var showTypeDefs = this.props.showTypeDefs || config.showTypeDefsInBrowser;
	
	    if (shouldHidePrivateModules) {
	      documents = ns.documents.filter(function (x) {
	        return !DocClassifier.isPrivate(x.properties);
	      });
	    }
	
	    if (!showTypeDefs) {
	      documents = documents.filter(function (x) {
	        return !DocClassifier.isTypeDef(x.properties);
	      });
	    }
	
	    if (documents.length === 0) {
	      return null;
	    }
	
	    var hasSelfDocument = ns.id !== '__general__' && (ns.properties || config.linkToNamespacesInBrowser || this.props.linkNamespaces);
	
	    return React.createElement(
	      "div",
	      { key: ns.id, className: "class-browser__category" },
	      shouldDisplayName && React.createElement(
	        "h3",
	        { className: "class-browser__category-name" },
	        hasSelfDocument ? React.createElement(Link, { to: ns, children: ns.title }) : ns.title
	      ),
	      hasSelfDocument && this.props.documentNode === ns && this.renderModuleEntities(ns.entities),
	      sortBy(documents, 'id').filter(filterDocuments(this.props.filter)).map(this.renderModule)
	    );
	  },
	  renderModule: function renderModule(docNode) {
	    var doc = docNode.properties;
	    var id = doc.id;
	
	    var isPrivate = DocClassifier.isPrivate(doc);
	    var isActive = this.props.documentNode === docNode;
	    var className = classSet({
	      'class-browser__entry': true,
	      'class-browser__entry--active': isActive
	    });
	
	    return React.createElement(
	      "div",
	      { key: docNode.uid, className: className },
	      React.createElement(
	        Link,
	        { ref: id, to: docNode, className: "class-browser__entry-link" },
	        doc.name,
	        isPrivate && this.props.namespaceNode.config.markPrivateModules !== false && React.createElement(
	          "span",
	          {
	            className: "class-browser__entry-link--private",
	            title: "This module is private" },
	          " ",
	          React.createElement(Icon, { className: "icon-cube" })
	        ),
	        doc.git && React.createElement(HotItemIndicator, { timestamp: doc.git.lastCommittedAt })
	      ),
	      isActive && !this.props.flat && this.renderModuleEntities(docNode)
	    );
	  },
	  renderModuleEntities: function renderModuleEntities(documentNode) {
	    if (!documentNode.entities || !documentNode.entities.length) {
	      return null;
	    }
	
	    if (!documentNode.properties.tags) {
	      console.log('weird docNode:', documentNode);
	    }
	
	    var hidePrivateSymbols = this.props.namespaceNode.config.hidePrivateSymbols;
	
	    var visible = function visible(entityNode) {
	      return !hidePrivateSymbols || !DocClassifier.isPrivate(entityNode.properties);
	    };
	
	    var entityDocuments = orderAwareSort.asNodes(documentNode, documentNode.entities.filter(visible), 'id');
	
	    return React.createElement(
	      "ul",
	      { className: "class-browser__methods" },
	      entityDocuments.map(this.renderEntity)
	    );
	  },
	  renderEntity: function renderEntity(node) {
	    var shouldDisplayTypeDefProperties = this.props.showTypeDefProperties || this.props.namespaceNode.config.showTypeDefPropertiesInBrowser;
	
	    return React.createElement(
	      "li",
	      { key: node.uid, className: "class-browser__methods-entity" },
	      React.createElement(Link, {
	        to: node,
	        children: (node.properties.symbol || '') + node.properties.name,
	        title: node.title
	      }),
	      shouldDisplayTypeDefProperties && DocClassifier.isTypeDef(node.properties) && this.renderModuleEntities(node)
	    );
	  },
	  togglePrivateVisibility: function togglePrivateVisibility() {
	    this.setState({
	      showPrivateModules: !this.state.showPrivateModules
	    });
	  }
	});
	
	module.exports = ClassBrowser;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	module.exports = typeof console !== 'undefined' ? console : window.console || global.console;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 53 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["components/Checkbox"];

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["components/Icon"];

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["components/HotItemIndicator"];

/***/ }),
/* 56 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["utils/filterDocuments"];

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var object = React.PropTypes.object;
	
	var NamespaceIndex = __webpack_require__(23);
	
	module.exports = React.createClass({
	  displayName: 'JS::NamespaceIndex',
	  propTypes: {
	    documentNode: object,
	    namespaceNode: object
	  },
	
	  render: function render() {
	    return React.createElement(NamespaceIndex, {
	      documentNode: this.props.documentNode || this.props.namespaceNode
	    });
	  }
	});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDk2MzZhNzkzNzhkYzE4OTViZTAiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvb3V0bGV0cy9JbnNwZWN0b3JPdXRsZXQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwicmVhY3RcXFwiXVwiIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9qc2RvYy1wYXJzZXItZXh0ZW5kZWQvbGliL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9vdXRsZXRzL01vZHVsZU91dGxldC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL01vZHVsZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJtaXhpbnMvSGFzVGl0bGVcXFwiXVwiIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvTW9kdWxlSGVhZGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImNvbXBvbmVudHMvT3V0bGV0XFxcIl1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJjb21wb25lbnRzL0hlYWRpbmdcXFwiXVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImNvbXBvbmVudHMvSGVhZGluZ0FuY2hvclxcXCJdXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwiY29tcG9uZW50cy9IaWdobGlnaHRlZFRleHRcXFwiXVwiIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL3V0aWxzL0RvY0NsYXNzaWZpZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvb3V0bGV0cy9Nb2R1bGVFbnRpdGllc091dGxldC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL0NsYXNzRW50aXR5QnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJjb21wb25lbnRzL0xpbmtcXFwiXVwiIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL3V0aWxzL29yZGVyQXdhcmVTb3J0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImxvZGFzaFxcXCJdXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwiY2xhc3NuYW1lc1xcXCJdXCIiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvb3V0bGV0cy9Nb2R1bGVIZWFkZXJPdXRsZXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvb3V0bGV0cy9Nb2R1bGVJbmRleE91dGxldC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL05hbWVzcGFjZUluZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvTW9kdWxlSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9UYWdzL1R5cGVOYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS91dGlscy9kZXNjcmliZVR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9GdW5jdGlvblNpZ25hdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9vdXRsZXRzL01vZHVsZUJvZHlPdXRsZXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9Nb2R1bGVCb2R5LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvRG9jLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcInV0aWxzL2NsYXNzU2V0XFxcIl1cIiIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL0RvY1RhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9UYWdzL1RhZ0dyb3VwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcIm1peGlucy9Db2xsYXBzaWJsZVxcXCJdXCIiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9UYWdzL1R5cGVEZWZUYWdHcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL1RhZ3MvRXhhbXBsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL1RhZ3MvUGFyYW1UYWcuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9UYWdzL0RlZmF1bHRWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL1RhZ3MvU2VlVGFnLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImNvbXBvbmVudHMvTWFya2Rvd25UZXh0XFxcIl1cIiIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL1RhZ3MvVGhyb3dzVGFnLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvVGFncy9SZXR1cm5UYWcuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9UYWdzL0NhbGxiYWNrVGFnLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvVGFidWxhclRhZ0dyb3VwLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvVGFncy9EZXByZWNhdGVkVGFnLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvT2JqZWN0U3lub3BzaXMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9UYWdzL1Byb3BlcnR5VGFnLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL3V0aWxzL2Rlc2NyaWJlTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL0RvY0dyb3VwLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL291dGxldHMvQnJvd3Nlck91dGxldC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL0NsYXNzQnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLWh0bWwtc2VyaWFsaXplci91aS9zaGFyZWQvY29uc29sZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJjb21wb25lbnRzL0NoZWNrYm94XFxcIl1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJjb21wb25lbnRzL0ljb25cXFwiXVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImNvbXBvbmVudHMvSG90SXRlbUluZGljYXRvclxcXCJdXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwidXRpbHMvZmlsdGVyRG9jdW1lbnRzXFxcIl1cIiIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9vdXRsZXRzL05hbWVzcGFjZU91dGxldC5qcyJdLCJuYW1lcyI6WyJJbnNwZWN0b3JPdXRsZXQiLCJyZXF1aXJlIiwiTW9kdWxlT3V0bGV0IiwiTW9kdWxlRW50aXRpZXNPdXRsZXQiLCJNb2R1bGVIZWFkZXJPdXRsZXQiLCJNb2R1bGVJbmRleE91dGxldCIsIk1vZHVsZUJvZHlPdXRsZXQiLCJCcm93c2VyT3V0bGV0IiwiTmFtZXNwYWNlT3V0bGV0IiwiZXhwb3J0cyIsIm91dGxldHMiLCJuYW1lIiwib3V0bGV0T2NjdXBhbnRzIiwiY29tcG9uZW50IiwiUmVhY3QiLCJLIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJzdHJpbmciLCJtb2R1bGUiLCJjcmVhdGVDbGFzcyIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiZG9jdW1lbnROb2RlIiwicHJvcGVydGllcyIsInN1bW1hcnkiLCJuYW1lc3BhY2VOb2RlIiwidGl0bGUiLCJyZW5kZXIiLCJwcm9wcyIsImRvYyIsImlkIiwidHlwZSIsIlRZUEVfVU5LTk9XTiIsIk5BTUVTUEFDRV9TRVAiLCJTQ09QRV9VTlNDT1BFRCIsInVuZGVmaW5lZCIsIlNDT1BFX0lOU1RBTkNFIiwiU0NPUEVfUFJPVE9UWVBFIiwiU0NPUEVfRkFDVE9SWV9FWFBPUlRTIiwiVFlQRV9PQkpFQ1QiLCJUWVBFX09CSkVDVF9QUk9QRVJUWSIsIlRZUEVfREVGQVVMVF9FWFBPUlRTIiwiVFlQRV9GQUNUT1JZIiwiVFlQRV9GVU5DVElPTiIsIlRZUEVfQ0xBU1MiLCJUWVBFX0FSUkFZIiwiVFlQRV9MSVRFUkFMIiwiVFlQRV9BTExfTElURVJBTCIsIlRZUEVfVU5LTk9XTl9MSVRFUkFMIiwiVFlQRV9VTklPTiIsIlZJU0lCSUxJVFlfUFJPVEVDVEVEIiwiVklTSUJJTElUWV9QUklWQVRFIiwiREVGQVVMVF9GQUNUT1JZX0VYUE9SVFNfSUQiLCJUWVBFX09WRVJSSURJTkdfVEFHUyIsIlRBR1NfV0lUSF9TVFJJTkdTIiwiTk9fREVTQ1JJUFRJT05fVEFHUyIsIktOT1dOX1RBR1MiLCJNb2R1bGUiLCJpc05hbWVzcGFjZURvY3VtZW50Iiwib2JqZWN0IiwiSGFzVGl0bGUiLCJNb2R1bGVIZWFkZXIiLCJPdXRsZXQiLCJtaXhpbnMiLCJpc1JlcXVpcmVkIiwiZG9jdW1lbnRFbnRpdHlOb2RlIiwiY2hpbGRDb250ZXh0VHlwZXMiLCJjb25maWciLCJnZXRDaGlsZENvbnRleHQiLCJtb2R1bGVOb2RlIiwicGFyZW50Tm9kZSIsImxlZ2FjeVBhcmFtcyIsIm1vZHVsZUlkIiwiZW50aXR5Iiwic2hvd1NvdXJjZVBhdGhzIiwic2hvd05hbWVzcGFjZUluTW9kdWxlSGVhZGVyIiwicGFyYW1zIiwicXVlcnkiLCJIZWFkaW5nIiwiSGVhZGluZ0FuY2hvciIsIkhpZ2hsaWdodGVkVGV4dCIsIkRvY0NsYXNzaWZpZXIiLCJib29sIiwiaGVhZGVyTGV2ZWwiLCJnZW5lcmF0ZUFuY2hvciIsInNob3dOYW1lc3BhY2UiLCJnZXREZWZhdWx0UHJvcHMiLCJhbmNob3IiLCJtZXRhIiwiZmlsZVBhdGgiLCJuYW1lc3BhY2UiLCJnZXREaXNwbGF5VHlwZSIsImhhc01peGluVGFyZ2V0cyIsIm1peGluVGFyZ2V0cyIsIm1hcCIsIngiLCJfX2h0bWwiLCJodG1sIiwiaGFzU3VwZXJDbGFzc2VzIiwic3VwZXJDbGFzc2VzIiwiZGVzY3JpcHRpb24iLCJub2RlIiwiQm9vbGVhbiIsImxlbmd0aCIsImlzTWV0aG9kIiwiY3R4Iiwibm9kZUluZm8iLCJzY29wZSIsImlzQ2FsbGJhY2siLCJ0YWdzIiwic29tZSIsImlzVHlwZURlZiIsImlzTW9kdWxlIiwiaXNGYWN0b3J5RXhwb3J0cyIsImlzQ2xhc3NFbnRpdHkiLCJpc1N0YXRpY01ldGhvZCIsImlzRXhwb3J0ZWRTeW1ib2wiLCJpc05hbWVzcGFjZSIsImVudGl0aWVzIiwibiIsImlzUHJvcGVydHkiLCJpc1N0YXRpY1Byb3BlcnR5IiwiaW5kZXhPZiIsImlzTWVtYmVyUHJvcGVydHkiLCJpc1ByaXZhdGUiLCJpc1Byb3RlY3RlZCIsImlzUHVibGljIiwiQ2xhc3NFbnRpdHlCcm93c2VyIiwiTGluayIsIm9yZGVyQXdhcmVTb3J0IiwiY2xhc3NTZXQiLCJzdGFuZGFsb25lIiwiZW50aXR5RG9jdW1lbnRzIiwiYXNOb2RlcyIsInJlbmRlckVudGl0eSIsInVpZCIsInN5bWJvbCIsInNvcnRCeSIsImFycmF5Iiwia2V5IiwicHJlc2VydmVPcmRlciIsInRhZyIsIiRvdXRsZXRPcHRpb25zIiwic2hvd0ZpbGVQYXRoIiwib3B0aW9ucyIsIk5hbWVzcGFjZUluZGV4IiwiTW9kdWxlSW5kZXgiLCJzaG93RnVuY3Rpb25zIiwic2hvd1Byb3BlcnRpZXMiLCJzaG93U3RhdGljTWVtYmVycyIsImNsYXNzZXMiLCJnZXRCeURpc3BsYXlUeXBlIiwiZnVuY3Rpb25zIiwibmFtZXNwYWNlcyIsIm90aGVycyIsImdldFJlbWFpbmluZ0RvY3VtZW50cyIsInJlbmRlckdyb3VwQnlDb250ZXh0VHlwZSIsImRvY3VtZW50cyIsInJlbmRlckdyb3VwIiwicmVuZGVyTW9kdWxlU3VtbWFyeVJlY29yZCIsInR5cGVOYW1lcyIsImZpbHRlciIsImxpc3RzIiwidXNlZFVJRHMiLCJyZWR1Y2UiLCJsaXN0IiwiZm9yRWFjaCIsIlR5cGVOYW1lcyIsIkZ1bmN0aW9uU2lnbmF0dXJlIiwibWVtYmVyRnVjdGlvbnMiLCJnZXRCeUNsYXNzaWZpY2F0aW9uIiwibWVtYmVyUHJvcGVydGllcyIsImV4cG9ydGVkU3ltYm9scyIsInN0YXRpY01lbWJlcnMiLCJwdWJsaWNTdGF0aWNNZW1iZXJzIiwicHJpdmF0ZVN0YXRpY01lbWJlcnMiLCJyZW5kZXJFeHBvcnRlZFN5bWJvbHMiLCJyZW5kZXJNZXRob2RHcm91cCIsInJlbmRlclByb3BlcnR5R3JvdXAiLCJyZW5kZXJNZXRob2RTdW1tYXJ5Um93IiwicmVuZGVyUHJvcGVydHlTdW1tYXJ5Um93IiwicmV0dXJuVmFsdWUiLCJ2IiwidHlwZUluZm8iLCJwcm9wZXJ0eVRhZyIsImtsYXNzaWZpZXJzIiwiZm4iLCJkZXNjcmliZVR5cGUiLCJjb250ZXh0VHlwZXMiLCJleHBhbmRGdW5jdGlvblNpZ25hdHVyZXMiLCJjb250ZXh0IiwiZXhwYW5kUmV0dXJuZWRGdW5jdGlvblNpZ25hdHVyZXMiLCJBUFBMX1NFUCIsIkFQUExfU1RBUlQiLCJBUFBMX0VORCIsInJlbmRlclR5cGUiLCJkaXNwbGF5TmFtZU9mIiwicmVuZGVyRnVuY3Rpb25QYXJhbSIsInBhcmFtIiwiZWxlbWVudHMiLCJqb2luIiwicmV0dXJuVHlwZSIsImJ1ZmZlciIsIm51bGxhYmxlIiwib3B0aW9uYWwiLCJ3aXRoTmFtZXMiLCJ3aXRoQnJhY2VzIiwiZGVzY3JpYmVUeXBlSFRNTCIsImRlc2NyaWJlVHlwZVRleHQiLCJwYXJhbVRhZ3MiLCJwYXJhbUxpbmVzIiwicGFyYW1UYWdUb3RhbExlbmd0aCIsIm5lZWRzQnJlYWsiLCJsaW5lIiwiTW9kdWxlQm9keSIsImZpbmRXaGVyZSIsIndoZXJlIiwiRG9jIiwiT2JqZWN0U3lub3BzaXMiLCJTZWVUYWciLCJEb2NHcm91cCIsIlByb3BlcnR5VGFnIiwiRXhhbXBsZVRhZyIsImFycmF5T2YiLCJtb2R1bGVEb2NzIiwiZm9jdXNlZEVudGl0eSIsInJlbmRlcmFibGVUeXBlIiwid2l0aG91dFR5cGVEZWZzIiwidHlwZWRlZnMiLCJyZW5kZXJDb25zdHJ1Y3RvciIsInJlbmRlckV4YW1wbGVzIiwicmVuZGVyU3RhdGljTWV0aG9kcyIsInJlbmRlckNhbGxiYWNrcyIsInJlbmRlclR5cGVEZWZzIiwicmVuZGVyUHJvcGVydGllcyIsInJlbmRlck1ldGhvZHMiLCJyZW5kZXJBZGRpdGlvbmFsUmVzb3VyY2VzIiwicmVuZGVyRXhhbXBsZVRhZyIsInJlbmRlclNlZVRhZyIsInByb3BlcnR5RG9jcyIsImVudGl0eURvYyIsInJlbmRlclByb3BlcnR5IiwiZ2V0RW50aXR5QW5jaG9yIiwic3RhdGljTWV0aG9kRG9jcyIsInJlbmRlclN0YXRpY01ldGhvZCIsImNhbGxiYWNrRG9jcyIsInR5cGVkZWZOb2RlcyIsIm9yZGVyZWROb2RlcyIsInR5cGVkZWZEb2MiLCJ0eXBlZGVmTm9kZSIsInByb3BlcnR5VGFncyIsIm1lbWJlclByb3BlcnR5VGFncyIsImNvbmNhdCIsIk9iamVjdCIsImFzc2lnbiIsImFsbFByb3BlcnR5VGFncyIsImkiLCJtZXRob2REb2NzIiwicmVuZGVyTWV0aG9kIiwiRG9jVGFncyIsIkRlcHJlY2F0ZWRUYWciLCJDb2xsYXBzaWJsZSIsImNoaWxkcmVuIiwiY29sbGFwc2libGUiLCJleHBhbmRlZCIsImhlYWRpbmdUYWciLCJ3aXRoRXhhbXBsZXMiLCJ3aXRoVGl0bGUiLCJ3aXRoRGVzY3JpcHRpb24iLCJ3aXRoQWRkaXRpb25hbFJlc291cmNlcyIsImlzQ29sbGFwc2VkIiwiY2xhc3NOYW1lIiwiZGVwcmVjYXRlZFRhZyIsInQiLCJIZWFkaW5nVGFnIiwiaGlkZVByaXZhdGVTeW1ib2xzIiwidG9nZ2xlQ29sbGFwc2VkIiwicmVuZGVyQ29sbGFwc2VyIiwiaXNGdW5jdGlvbiIsInJlbmRlclJldHVyblR5cGUiLCJpc0NvbnN0cnVjdG9yIiwiVGFnR3JvdXAiLCJUeXBlRGVmVGFnR3JvdXAiLCJQYXJhbVRhZyIsIlRocm93c1RhZyIsIlJldHVyblRhZyIsIkNhbGxiYWNrVGFnIiwiVGFidWxhclRhZ0dyb3VwIiwiSEFORExFRF9UQUdTIiwiY2FsbGJhY2tzIiwicmV0dXJuVGFncyIsInVuaGFuZGxlZFRhZ3MiLCJoaWRlQmxhbmtQYXJhbWV0ZXJzIiwiaGlkZUJsYW5rUmV0dXJucyIsInJlbmRlclRhZ1N0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0YWdOYW1lIiwidGFnVHlwZSIsImFsd2F5c0dyb3VwIiwicmVuZGVyZXIiLCJmdW5jIiwiYW55IiwiRE9NVGFnIiwiUmVuZGVyZXIiLCJpc0NvbGxhcHNpYmxlIiwiRGVmYXVsdFZhbHVlIiwiZGVmYXVsdFZhbHVlIiwicmVwbGFjZSIsIk1hcmtkb3duVGV4dCIsImhhc05hbWUiLCJkb2N1bWVudCIsImhpZGVJZkVtcHR5IiwiZXZlcnkiLCJ0YWdJc0JsYW5rIiwicmVuZGVyVGFnIiwidHJlZSIsImZyYWdtZW50cyIsInNwbGl0IiwicGFyZW50S2V5Iiwic2xpY2UiLCJwdXNoIiwiY2hpbGRUYWdzIiwiaW5kZXgiLCJpc1Jvb3QiLCJkZXNjcmliZU5vZGUiLCJjb2xsYXBzZWQiLCJwcmludCIsInByZXR0eUpTT04iLCJJZGVudGl0eSIsInJlZ2V4cCIsImhhc093blByb3BlcnR5IiwidmFsdWUiLCJsYWJlbCIsIkNsYXNzQnJvd3NlciIsImZsYXQiLCJsaW5rTmFtZXNwYWNlcyIsImVuYWJsZVNpZGViYXJDb250cm9scyIsImNvbnNvbGUiLCJDaGVja2JveCIsIkljb24iLCJIb3RJdGVtSW5kaWNhdG9yIiwiZmlsdGVyRG9jdW1lbnRzIiwid2l0aENvbnRyb2xzIiwic2hvd1R5cGVEZWZzIiwiZ2V0SW5pdGlhbFN0YXRlIiwic2hvd1ByaXZhdGVNb2R1bGVzIiwicm9vdERvY3VtZW50cyIsImdlbmVyaWNOYW1lc3BhY2UiLCJoYXNQcml2YXRlTW9kdWxlcyIsInkiLCJzb3J0IiwiYSIsImIiLCJzaG91bGREaXNwbGF5TmFtZSIsInJlbmRlck5hbWVzcGFjZSIsImJpbmQiLCJzdGF0ZSIsInRvZ2dsZVByaXZhdGVWaXNpYmlsaXR5IiwibnMiLCJzaG91bGRIaWRlUHJpdmF0ZU1vZHVsZXMiLCJzaG93VHlwZURlZnNJbkJyb3dzZXIiLCJoYXNTZWxmRG9jdW1lbnQiLCJsaW5rVG9OYW1lc3BhY2VzSW5Ccm93c2VyIiwicmVuZGVyTW9kdWxlRW50aXRpZXMiLCJyZW5kZXJNb2R1bGUiLCJkb2NOb2RlIiwiaXNBY3RpdmUiLCJtYXJrUHJpdmF0ZU1vZHVsZXMiLCJnaXQiLCJsYXN0Q29tbWl0dGVkQXQiLCJsb2ciLCJ2aXNpYmxlIiwiZW50aXR5Tm9kZSIsInNob3VsZERpc3BsYXlUeXBlRGVmUHJvcGVydGllcyIsInNob3dUeXBlRGVmUHJvcGVydGllcyIsInNob3dUeXBlRGVmUHJvcGVydGllc0luQnJvd3NlciIsInNldFN0YXRlIiwid2luZG93IiwiZ2xvYmFsIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0EsS0FBTUEsa0JBQWtCLG1CQUFBQyxDQUFRLENBQVIsQ0FBeEI7QUFDQSxLQUFNQyxlQUFlLG1CQUFBRCxDQUFRLENBQVIsQ0FBckI7QUFDQSxLQUFNRSx1QkFBdUIsbUJBQUFGLENBQVEsRUFBUixDQUE3QjtBQUNBLEtBQU1HLHFC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QyxLQUFLcVYsb0JBQUwsQ0FBMEJ2USxJQUExQjtBQVJKLE1BREY7QUFhRCxJQXhOa0M7QUEwTm5DaVEsMEJBMU5tQyxxQ0EwTlQ7QUFDeEIsVUFBS21CLFFBQUwsQ0FBYztBQUNaL0IsMkJBQW9CLENBQUMsS0FBS1csS0FBTCxDQUFXWDtBQURwQixNQUFkO0FBR0Q7QUE5TmtDLEVBQWxCLENBQW5COztBQWlPQXhVLFFBQU9WLE9BQVAsR0FBaUJzVSxZQUFqQixDOzs7Ozs7OztBQzlPQTVULFFBQU9WLE9BQVAsR0FBaUIsT0FBTzBVLE9BQVAsS0FBbUIsV0FBbkIsR0FBaUNBLE9BQWpDLEdBQTRDd0MsT0FBT3hDLE9BQVAsSUFBa0J5QyxPQUFPekMsT0FBdEYsQzs7Ozs7OztBQ0FBLGdFOzs7Ozs7QUNBQSw0RDs7Ozs7O0FDQUEsd0U7Ozs7OztBQ0FBLGtFOzs7Ozs7OztBQ0FBLEtBQU1yVSxRQUFRLG1CQUFBYixDQUFRLENBQVIsQ0FBZDtLQUNRMkQsTSxHQUFZOUMsTUFBTUUsUyxDQUFsQjRDLE07O0FBQ1IsS0FBTXNGLGlCQUFpQixtQkFBQWpKLENBQVEsRUFBUixDQUF2Qjs7QUFFQWtCLFFBQU9WLE9BQVAsR0FBaUJLLE1BQU1NLFdBQU4sQ0FBa0I7QUFDakNDLGdCQUFhLG9CQURvQjtBQUVqQ0MsY0FBVztBQUNUQyxtQkFBY3FDLE1BREw7QUFFVGxDLG9CQUFla0M7QUFGTixJQUZzQjs7QUFPakNoQyxTQVBpQyxvQkFPeEI7QUFDUCxZQUNFLG9CQUFDLGNBQUQ7QUFDRSxxQkFBYyxLQUFLQyxLQUFMLENBQVdOLFlBQVgsSUFBMkIsS0FBS00sS0FBTCxDQUFXSDtBQUR0RCxPQURGO0FBS0Q7QUFiZ0MsRUFBbEIsQ0FBakIsQyIsImZpbGUiOiJtZWdhZG9jLXBsdWdpbi1qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQ5NjM2YTc5Mzc4ZGMxODk1YmUwIiwiY29uc3QgSW5zcGVjdG9yT3V0bGV0ID0gcmVxdWlyZSgnLi9vdXRsZXRzL0luc3BlY3Rvck91dGxldCcpO1xuY29uc3QgTW9kdWxlT3V0bGV0ID0gcmVxdWlyZSgnLi9vdXRsZXRzL01vZHVsZU91dGxldCcpO1xuY29uc3QgTW9kdWxlRW50aXRpZXNPdXRsZXQgPSByZXF1aXJlKCcuL291dGxldHMvTW9kdWxlRW50aXRpZXNPdXRsZXQnKTtcbmNvbnN0IE1vZHVsZUhlYWRlck91dGxldCA9IHJlcXVpcmUoJy4vb3V0bGV0cy9Nb2R1bGVIZWFkZXJPdXRsZXQnKTtcbmNvbnN0IE1vZHVsZUluZGV4T3V0bGV0ID0gcmVxdWlyZSgnLi9vdXRsZXRzL01vZHVsZUluZGV4T3V0bGV0Jyk7XG5jb25zdCBNb2R1bGVCb2R5T3V0bGV0ID0gcmVxdWlyZSgnLi9vdXRsZXRzL01vZHVsZUJvZHlPdXRsZXQnKTtcbmNvbnN0IEJyb3dzZXJPdXRsZXQgPSByZXF1aXJlKCcuL291dGxldHMvQnJvd3Nlck91dGxldCcpO1xuY29uc3QgTmFtZXNwYWNlT3V0bGV0ID0gcmVxdWlyZSgnLi9vdXRsZXRzL05hbWVzcGFjZU91dGxldCcpO1xuXG5leHBvcnRzLm91dGxldHMgPSBbXG4gICdKUzo6QnJvd3NlcicsXG4gICdKUzo6TW9kdWxlJyxcbiAgJ0pTOjpNb2R1bGVFbnRpdGllcycsXG4gICdKUzo6TW9kdWxlSGVhZGVyJyxcbiAgJ0pTOjpNb2R1bGVIZWFkZXI6OlR5cGUnLFxuICAnSlM6Ok1vZHVsZUluZGV4JyxcbiAgJ0pTOjpNb2R1bGVCb2R5JyxcbiAgJ0pTOjpOYW1lc3BhY2UnLFxuICAnSlM6OlRhZycsXG4gICdKUzo6RXhhbXBsZVRhZ3MnLFxuICAnSlM6OkV4YW1wbGVUYWcnLFxuXTtcblxuZXhwb3J0cy5uYW1lID0gJ21lZ2Fkb2MtcGx1Z2luLWpzJztcbmV4cG9ydHMub3V0bGV0T2NjdXBhbnRzID0gW1xuICB7IG5hbWU6ICdDb3JlOjpJbnNwZWN0b3InLCBjb21wb25lbnQ6IEluc3BlY3Rvck91dGxldCwgfSxcbiAgeyBuYW1lOiAnSlM6Ok1vZHVsZScsIGNvbXBvbmVudDogTW9kdWxlT3V0bGV0LCB9LFxuICB7IG5hbWU6ICdKUzo6TW9kdWxlRW50aXRpZXMnLCBjb21wb25lbnQ6IE1vZHVsZUVudGl0aWVzT3V0bGV0LCB9LFxuICB7IG5hbWU6ICdKUzo6TW9kdWxlSGVhZGVyJywgY29tcG9uZW50OiBNb2R1bGVIZWFkZXJPdXRsZXQsIH0sXG4gIHsgbmFtZTogJ0pTOjpNb2R1bGVJbmRleCcsIGNvbXBvbmVudDogTW9kdWxlSW5kZXhPdXRsZXQsIH0sXG4gIHsgbmFtZTogJ0pTOjpNb2R1bGVCb2R5JywgY29tcG9uZW50OiBNb2R1bGVCb2R5T3V0bGV0LCB9LFxuICB7IG5hbWU6ICdKUzo6QnJvd3NlcicsIGNvbXBvbmVudDogQnJvd3Nlck91dGxldCwgfSxcbiAgeyBuYW1lOiAnSlM6Ok5hbWVzcGFjZScsIGNvbXBvbmVudDogTmFtZXNwYWNlT3V0bGV0LCB9LFxuXVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2luZGV4LmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgSyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuY29uc3QgeyBzaGFwZSwgc3RyaW5nIH0gPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0pTOjpJbnNwZWN0b3JPdXRsZXQnLFxuICBwcm9wVHlwZXM6IHtcbiAgICBkb2N1bWVudE5vZGU6IHNoYXBlKHtcbiAgICAgIHByb3BlcnRpZXM6IHNoYXBlKHtcbiAgICAgICAgc3VtbWFyeTogc3RyaW5nXG4gICAgICB9KVxuICAgIH0pLFxuXG4gICAgbmFtZXNwYWNlTm9kZTogc2hhcGUoe1xuICAgICAgdGl0bGU6IHN0cmluZ1xuICAgIH0pLFxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRvY3VtZW50Tm9kZSwgbmFtZXNwYWNlTm9kZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkb2MgPSBkb2N1bWVudE5vZGUucHJvcGVydGllcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2x0aXBfX3RpdGxlXCI+XG4gICAgICAgICAge2RvYy5pZH0gKHtkb2MudHlwZSAhPT0gSy5UWVBFX1VOS05PV04gJiYgKFxuICAgICAgICAgICAgPHN0cm9uZz57ZG9jLnR5cGV9IDwvc3Ryb25nPlxuICAgICAgICAgICl9aW4ge25hbWVzcGFjZU5vZGUudGl0bGV9KVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8cCBjaGlsZHJlbj17ZG9jdW1lbnROb2RlLnN1bW1hcnl9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL291dGxldHMvSW5zcGVjdG9yT3V0bGV0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1wicmVhY3RcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJyZWFjdFxcXCJdXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9qc2RvYy1wYXJzZXItZXh0ZW5kZWQvbGliL2NvbnN0YW50cycpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbnN0YW50cy5qcyIsImV4cG9ydHMuTkFNRVNQQUNFX1NFUCA9ICcuJztcblxuZXhwb3J0cy5TQ09QRV9VTlNDT1BFRCA9IHVuZGVmaW5lZDtcbmV4cG9ydHMuU0NPUEVfSU5TVEFOQ0UgPSAnaW5zdGFuY2UnO1xuZXhwb3J0cy5TQ09QRV9QUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbmV4cG9ydHMuU0NPUEVfRkFDVE9SWV9FWFBPUlRTID0gJ2ZhY3RvcnlfZXhwb3J0cyc7XG5cbmV4cG9ydHMuVFlQRV9PQkpFQ1QgPSAnT2JqZWN0JztcbmV4cG9ydHMuVFlQRV9PQkpFQ1RfUFJPUEVSVFkgPSAnT2JqZWN0UHJvcGVydHknO1xuZXhwb3J0cy5UWVBFX0RFRkFVTFRfRVhQT1JUUyA9ICdleHBvcnRzJztcbmV4cG9ydHMuVFlQRV9GQUNUT1JZID0gJ0ZhY3RvcnknO1xuZXhwb3J0cy5UWVBFX0ZVTkNUSU9OID0gJ0Z1bmN0aW9uJztcbmV4cG9ydHMuVFlQRV9DTEFTUyA9ICdDbGFzcyc7XG5leHBvcnRzLlRZUEVfQVJSQVkgPSAnQXJyYXknO1xuZXhwb3J0cy5UWVBFX1VOS05PV04gPSAnVW5rbm93bic7XG5leHBvcnRzLlRZUEVfTElURVJBTCA9ICdMaXRlcmFsJztcbmV4cG9ydHMuVFlQRV9BTExfTElURVJBTCA9ICdBbGxMaXRlcmFsJztcbmV4cG9ydHMuVFlQRV9VTktOT1dOX0xJVEVSQUwgPSAnVW5rbm93bkxpdGVyYWwnO1xuZXhwb3J0cy5UWVBFX1VOSU9OID0gJ1VuaW9uJztcblxuZXhwb3J0cy5WSVNJQklMSVRZX1BST1RFQ1RFRCA9ICdwcm90ZWN0ZWQnO1xuZXhwb3J0cy5WSVNJQklMSVRZX1BSSVZBVEUgPSAncHJpdmF0ZSc7XG5cbmV4cG9ydHMuREVGQVVMVF9GQUNUT1JZX0VYUE9SVFNfSUQgPSAnZGVmYXVsdF9leHBvcnRzJztcbmV4cG9ydHMuVFlQRV9PVkVSUklESU5HX1RBR1MgPSB7XG4gICdtZXRob2QnOiB0cnVlLFxuICAncHJvcGVydHknOiB0cnVlLFxuICAndHlwZSc6IHRydWUsXG4gICdjbGFzcyc6IHRydWUsXG4gICdleHBvcnQnOiB0cnVlLFxufTtcblxuZXhwb3J0cy5UQUdTX1dJVEhfU1RSSU5HUyA9IHtcbiAgJ2RlcHJlY2F0ZWQnOiB0cnVlLFxuICAnZXhhbXBsZSc6IHRydWUsXG59O1xuXG5leHBvcnRzLk5PX0RFU0NSSVBUSU9OX1RBR1MgPSB7XG4gICdhbGlhcyc6IHRydWUsXG4gICdjbGFzcyc6IHRydWUsXG4gICdjb25zdHJ1Y3Rvcic6IHRydWUsXG4gICdleHRlbmRzJzogdHJ1ZSxcbiAgJ2luaGVyaXRkb2MnOiB0cnVlLFxuICAnbWVtYmVyT2YnOiB0cnVlLFxuICAnbWV0aG9kJzogdHJ1ZSxcbiAgJ21peGluJzogdHJ1ZSxcbiAgJ21peGVzJzogdHJ1ZSxcbiAgJ21vZHVsZSc6IHRydWUsXG4gICduYW1lc3BhY2UnOiB0cnVlLFxuICAncHJlc2VydmVPcmRlcic6IHRydWUsXG4gICdwcml2YXRlJzogdHJ1ZSxcbiAgJ3B1YmxpYyc6IHRydWUsXG4gICd0eXBlJzogdHJ1ZSxcbiAgJ3R5cGVkZWYnOiB0cnVlLFxufTtcblxuZXhwb3J0cy5LTk9XTl9UQUdTID0gW1xuICAnYWxpYXMnLFxuICAnYXN5bmMnLFxuICAnY2FsbGJhY2snLFxuICAnY2xhc3MnLFxuICAnY29uc3RydWN0b3InLFxuICAnZGVwcmVjYXRlZCcsXG4gICdleGFtcGxlJyxcbiAgJ2V4cG9ydCcsXG4gICdleHRlbmRzJyxcbiAgJ2ludGVyZmFjZScsXG4gICdsZW5kcycsXG4gICdtZW1iZXJPZicsXG4gICdtZXRob2QnLFxuICAnbWl4ZXMnLFxuICAnbW9kdWxlJyxcbiAgJ25hbWUnLFxuICAnbmFtZXNwYWNlJyxcbiAgJ3BhcmFtJyxcbiAgJ3ByZXNlcnZlT3JkZXInLFxuICAncHJpdmF0ZScsXG4gICdwdWJsaWMnLFxuICAncHJvcGVydHknLFxuICAncHJvdGVjdGVkJyxcbiAgJ3JldHVybicsXG4gICdzZWUnLFxuICAnc3RhdGljJyxcbiAgJ3Rocm93cycsXG4gICd0eXBlJyxcbiAgJ3R5cGVkZWYnXG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvanNkb2MtcGFyc2VyLWV4dGVuZGVkL2xpYi9jb25zdGFudHMuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBNb2R1bGUgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL01vZHVsZScpO1xuY29uc3QgeyBpc05hbWVzcGFjZURvY3VtZW50IH0gPSByZXF1aXJlKCcuLi91dGlscy9Eb2NDbGFzc2lmaWVyJyk7XG5jb25zdCB7IG9iamVjdCwgfSA9IFJlYWN0LlByb3BUeXBlcztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnSlM6Ok1vZHVsZScsXG4gIHByb3BUeXBlczoge1xuICAgIGRvY3VtZW50Tm9kZTogb2JqZWN0LFxuICAgIG5hbWVzcGFjZU5vZGU6IG9iamVjdCxcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmRvY3VtZW50Tm9kZSB8fCBpc05hbWVzcGFjZURvY3VtZW50KHRoaXMucHJvcHMuZG9jdW1lbnROb2RlLnByb3BlcnRpZXMpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPE1vZHVsZSB7Li4udGhpcy5wcm9wc30gLz5cbiAgICApO1xuICB9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL291dGxldHMvTW9kdWxlT3V0bGV0LmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgSGFzVGl0bGUgPSByZXF1aXJlKCdtaXhpbnMvSGFzVGl0bGUnKTtcbmNvbnN0IE1vZHVsZUhlYWRlciA9IHJlcXVpcmUoJy4vTW9kdWxlSGVhZGVyJyk7XG5jb25zdCBPdXRsZXQgPSByZXF1aXJlKCdjb21wb25lbnRzL091dGxldCcpO1xuXG5jb25zdCBNb2R1bGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIG1peGluczogW1xuICAgIEhhc1RpdGxlKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZG9jdW1lbnROb2RlLnByb3BlcnRpZXMubmFtZTtcbiAgICB9KVxuICBdLFxuXG4gIHByb3BUeXBlczoge1xuICAgIG5hbWVzcGFjZU5vZGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBkb2N1bWVudE5vZGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBkb2N1bWVudEVudGl0eU5vZGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gIH0sXG5cbiAgY2hpbGRDb250ZXh0VHlwZXM6IHtcbiAgICBjb25maWc6IFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgfSxcblxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5uYW1lc3BhY2VOb2RlLmNvbmZpZ1xuICAgIH1cbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkb2N1bWVudE5vZGUsIG5hbWVzcGFjZU5vZGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjb25maWcgfSA9IG5hbWVzcGFjZU5vZGU7XG4gICAgY29uc3QgbW9kdWxlTm9kZSA9IGRvY3VtZW50Tm9kZS50eXBlID09PSAnRG9jdW1lbnRFbnRpdHknID9cbiAgICAgIGRvY3VtZW50Tm9kZS5wYXJlbnROb2RlIDpcbiAgICAgIGRvY3VtZW50Tm9kZVxuICAgIDtcblxuICAgIGNvbnN0IGxlZ2FjeVBhcmFtcyA9IHtcbiAgICAgIG1vZHVsZUlkOiBtb2R1bGVOb2RlLmlkLFxuICAgICAgZW50aXR5OiBkb2N1bWVudE5vZGUudHlwZSA9PT0gJ0RvY3VtZW50RW50aXR5JyA/IGRvY3VtZW50Tm9kZS5pZCA6IHVuZGVmaW5lZCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xhc3Mtdmlld1wiPlxuICAgICAgICA8TW9kdWxlSGVhZGVyXG4gICAgICAgICAgZG9jdW1lbnROb2RlPXttb2R1bGVOb2RlfVxuICAgICAgICAgIHNob3dTb3VyY2VQYXRocz17Y29uZmlnLnNob3dTb3VyY2VQYXRoc31cbiAgICAgICAgICBzaG93TmFtZXNwYWNlPXtjb25maWcuc2hvd05hbWVzcGFjZUluTW9kdWxlSGVhZGVyfVxuICAgICAgICAgIGdlbmVyYXRlQW5jaG9yPXtmYWxzZX1cbiAgICAgICAgLz5cblxuICAgICAgICA8T3V0bGV0XG4gICAgICAgICAgbmFtZT1cIkpTOjpNb2R1bGVCb2R5XCJcbiAgICAgICAgICBlbGVtZW50UHJvcHM9e3tcbiAgICAgICAgICAgIHBhcmFtczogbGVnYWN5UGFyYW1zLFxuICAgICAgICAgICAgcXVlcnk6IHt9LFxuICAgICAgICAgICAgZG9jdW1lbnROb2RlLFxuICAgICAgICAgICAgZG9jdW1lbnRFbnRpdHlOb2RlOiB0aGlzLnByb3BzLmRvY3VtZW50RW50aXR5Tm9kZSxcbiAgICAgICAgICAgIG5hbWVzcGFjZU5vZGUsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZHVsZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL01vZHVsZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcIm1peGlucy9IYXNUaXRsZVwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcIm1peGlucy9IYXNUaXRsZVxcXCJdXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBPdXRsZXQgPSByZXF1aXJlKCdjb21wb25lbnRzL091dGxldCcpO1xuY29uc3QgSGVhZGluZyA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvSGVhZGluZycpO1xuY29uc3QgSGVhZGluZ0FuY2hvciA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvSGVhZGluZ0FuY2hvcicpO1xuY29uc3QgSGlnaGxpZ2h0ZWRUZXh0ID0gcmVxdWlyZSgnY29tcG9uZW50cy9IaWdobGlnaHRlZFRleHQnKTtcbmNvbnN0IEsgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcbmNvbnN0IERvY0NsYXNzaWZpZXIgPSByZXF1aXJlKCcuLi91dGlscy9Eb2NDbGFzc2lmaWVyJyk7XG5jb25zdCB7IFByb3BUeXBlcyB9ID0gUmVhY3Q7XG5cbmNvbnN0IE1vZHVsZUhlYWRlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgZG9jdW1lbnROb2RlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHNob3dTb3VyY2VQYXRoczogUHJvcFR5cGVzLmJvb2wsXG4gICAgaGVhZGVyTGV2ZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZ2VuZXJhdGVBbmNob3I6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dOYW1lc3BhY2U6IFByb3BUeXBlcy5ib29sLFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGVhZGVyTGV2ZWw6ICcxJyxcbiAgICAgIGdlbmVyYXRlQW5jaG9yOiB0cnVlLFxuICAgIH07XG4gIH0sXG5cbiAgLy8gc2hvdWxkQ29tcG9uZW50VXBkYXRlKHByZXZQcm9wcykge1xuICAvLyAgIHJldHVybiBwcmV2UHJvcHMuZG9jdW1lbnROb2RlICE9PSB0aGlzLnByb3BzLmRvY3VtZW50Tm9kZTtcbiAgLy8gfSxcblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGFuY2hvcjtcblxuICAgIGNvbnN0IHsgZG9jdW1lbnROb2RlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRvYyA9IGRvY3VtZW50Tm9kZS5wcm9wZXJ0aWVzIHx8IHtcbiAgICAgIG5hbWU6IGRvY3VtZW50Tm9kZS50aXRsZSxcbiAgICAgIHR5cGU6IEsuVFlQRV9VTktOT1dOXG4gICAgfTtcblxuICAgIGlmICh0aGlzLnByb3BzLmdlbmVyYXRlQW5jaG9yKSB7XG4gICAgICBhbmNob3IgPSBkb2N1bWVudE5vZGUubWV0YS5hbmNob3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkaW5nXG4gICAgICAgICAgbGV2ZWw9XCIxXCJcbiAgICAgICAgICBwYXJlbnRMZXZlbD17dGhpcy5wcm9wcy5oZWFkZXJMZXZlbH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJjbGFzcy12aWV3X19oZWFkZXIgYW5jaG9yYWJsZS1oZWFkaW5nXCJcbiAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy5zaG93U291cmNlUGF0aHMgPyBkb2MuZmlsZVBhdGggOiB1bmRlZmluZWR9XG4gICAgICAgICAgaWQ9e2FuY2hvcn1cbiAgICAgICAgPlxuICAgICAgICAgIHthbmNob3IgJiYgPEhlYWRpbmdBbmNob3IuQW5jaG9yIGhyZWY9e2FuY2hvcn0gLz59XG4gICAgICAgICAge2FuY2hvciAmJiA8SGVhZGluZ0FuY2hvci5MaW5rIGhyZWY9e2FuY2hvcn0gLz59XG5cbiAgICAgICAgICA8SGVhZGluZ0FuY2hvci5UZXh0IGNsYXNzTmFtZT1cImNsYXNzLXZpZXdfX2hlYWRlci1uYW1lXCI+XG4gICAgICAgICAgICA8c3Bhbj57ZG9jLm5hbWV9PC9zcGFuPlxuICAgICAgICAgIDwvSGVhZGluZ0FuY2hvci5UZXh0PlxuXG4gICAgICAgICAgeycgJ31cblxuICAgICAgICAgIHt0aGlzLnByb3BzLnNob3dOYW1lc3BhY2UgJiYgZG9jLm5hbWVzcGFjZSAmJiAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjbGFzcy12aWV3X19oZWFkZXItbmFtZXNwYWNlXCI+XG4gICAgICAgICAgICAgIHsneyd9e2RvYy5uYW1lc3BhY2V9eyd9J31cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgeycgJ31cblxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNsYXNzLXZpZXdfX2hlYWRlci10eXBlXCI+XG4gICAgICAgICAgICA8T3V0bGV0XG4gICAgICAgICAgICAgIG5hbWU9XCJKUzo6TW9kdWxlSGVhZGVyOjpUeXBlXCJcbiAgICAgICAgICAgICAgdGFnTmFtZT1cInNwYW5cIlxuICAgICAgICAgICAgICBmaXJzdE1hdGNoaW5nRWxlbWVudFxuICAgICAgICAgICAgICBlbGVtZW50UHJvcHM9e3RoaXMucHJvcHN9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuPntEb2NDbGFzc2lmaWVyLmdldERpc3BsYXlUeXBlKGRvY3VtZW50Tm9kZSl9PC9zcGFuPlxuICAgICAgICAgICAgPC9PdXRsZXQ+XG5cbiAgICAgICAgICAgIHtoYXNNaXhpblRhcmdldHMoZG9jdW1lbnROb2RlKSAmJiAoXG4gICAgICAgICAgICAgIGRvY3VtZW50Tm9kZS5wcm9wZXJ0aWVzLm1peGluVGFyZ2V0c1xuICAgICAgICAgICAgICAgIC5tYXAoeCA9PiAoXG4gICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e3gubmFtZX0+LCA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogeC5odG1sIHx8IHgubmFtZX19IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7aGFzU3VwZXJDbGFzc2VzKGRvY3VtZW50Tm9kZSkgJiYgKFxuICAgICAgICAgICAgICBkb2N1bWVudE5vZGUucHJvcGVydGllcy5zdXBlckNsYXNzZXNcbiAgICAgICAgICAgICAgICAubWFwKHggPT4gKFxuICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXt4Lm5hbWV9PiwgPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHguaHRtbCB8fCB4Lm5hbWV9fSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvSGVhZGluZz5cblxuICAgICAgICB7dGhpcy5wcm9wcy5zaG93U291cmNlUGF0aHMgJiYgZG9jdW1lbnROb2RlLmZpbGVQYXRoICYmIChcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjbGFzcy12aWV3X19tb2R1bGUtZmlsZXBhdGhcIj5cbiAgICAgICAgICAgIERlZmluZWQgaW46IDxjb2RlPntkb2N1bWVudE5vZGUuZmlsZVBhdGh9PC9jb2RlPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKX1cblxuICAgICAgICA8SGlnaGxpZ2h0ZWRUZXh0IGtleT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAge2RvYy5kZXNjcmlwdGlvbn1cbiAgICAgICAgPC9IaWdobGlnaHRlZFRleHQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxuZnVuY3Rpb24gaGFzTWl4aW5UYXJnZXRzKG5vZGUpIHtcbiAgcmV0dXJuIEJvb2xlYW4oXG4gICAgbm9kZS5wcm9wZXJ0aWVzICYmXG4gICAgbm9kZS5wcm9wZXJ0aWVzLm1peGluVGFyZ2V0cyAmJlxuICAgIG5vZGUucHJvcGVydGllcy5taXhpblRhcmdldHMubGVuZ3RoID4gMFxuICApO1xufVxuXG5mdW5jdGlvbiBoYXNTdXBlckNsYXNzZXMobm9kZSkge1xuICByZXR1cm4gQm9vbGVhbihcbiAgICBub2RlLnByb3BlcnRpZXMgJiZcbiAgICBub2RlLnByb3BlcnRpZXMuc3VwZXJDbGFzc2VzICYmXG4gICAgbm9kZS5wcm9wZXJ0aWVzLnN1cGVyQ2xhc3Nlcy5sZW5ndGggPiAwXG4gICk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTW9kdWxlSGVhZGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvTW9kdWxlSGVhZGVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1wiY29tcG9uZW50cy9PdXRsZXRcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJjb21wb25lbnRzL091dGxldFxcXCJdXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcImNvbXBvbmVudHMvSGVhZGluZ1wiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImNvbXBvbmVudHMvSGVhZGluZ1xcXCJdXCJcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcImNvbXBvbmVudHMvSGVhZGluZ0FuY2hvclwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImNvbXBvbmVudHMvSGVhZGluZ0FuY2hvclxcXCJdXCJcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcImNvbXBvbmVudHMvSGlnaGxpZ2h0ZWRUZXh0XCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwiY29tcG9uZW50cy9IaWdobGlnaHRlZFRleHRcXFwiXVwiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgSyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5mdW5jdGlvbiBpc01ldGhvZChkb2MpIHtcbiAgdmFyIGN0eCA9IGRvYy5ub2RlSW5mbztcblxuICByZXR1cm4gZG9jLnR5cGUgPT09IEsuVFlQRV9GVU5DVElPTiAmJiAoXG4gICAgY3R4LnNjb3BlID09PSBLLlNDT1BFX0ZBQ1RPUllfRVhQT1JUUyB8fFxuICAgIGN0eC5zY29wZSA9PT0gSy5TQ09QRV9JTlNUQU5DRSB8fFxuICAgIGN0eC5zY29wZSA9PT0gSy5TQ09QRV9QUk9UT1RZUEVcbiAgKTtcbn1cblxuZnVuY3Rpb24gaXNDYWxsYmFjayhkb2MpIHtcbiAgcmV0dXJuIGRvYy50eXBlID09PSBLLlRZUEVfRlVOQ1RJT04gJiYgZG9jLnRhZ3Muc29tZSh4ID0+IHgudHlwZSA9PT0gJ2NhbGxiYWNrJyk7XG59XG5cbmZ1bmN0aW9uIGlzVHlwZURlZihkb2MpIHtcbiAgcmV0dXJuICFkb2MuaXNNb2R1bGUgJiYgZG9jLnRhZ3Muc29tZSh4ID0+IHgudHlwZSA9PT0gJ3R5cGVkZWYnKTtcbn1cblxuZnVuY3Rpb24gaXNGYWN0b3J5RXhwb3J0cyhkb2MpIHtcbiAgcmV0dXJuIGRvYy5ub2RlSW5mby5zY29wZSA9PT0gSy5TQ09QRV9GQUNUT1JZX0VYUE9SVFM7XG59XG5cbmZ1bmN0aW9uIGlzQ2xhc3NFbnRpdHkoZG9jKSB7XG4gIHJldHVybiAoXG4gICAgZG9jLm5vZGVJbmZvLnNjb3BlID09PSBLLlNDT1BFX0lOU1RBTkNFIHx8XG4gICAgZG9jLm5vZGVJbmZvLnNjb3BlID09PSBLLlNDT1BFX1BST1RPVFlQRVxuICApO1xufVxuXG5mdW5jdGlvbiBpc1N0YXRpY01ldGhvZChkb2MpIHtcbiAgcmV0dXJuIGRvYy50eXBlID09PSBLLlRZUEVfRlVOQ1RJT04gJiYgIWlzTWV0aG9kKGRvYykgJiYgIWlzQ2FsbGJhY2soZG9jKTtcbn1cblxuZnVuY3Rpb24gaXNFeHBvcnRlZFN5bWJvbChkb2MpIHtcbiAgcmV0dXJuICEhZG9jLmlzRXhwb3J0ZWRTeW1ib2w7XG59XG5cbmV4cG9ydHMuaXNNZXRob2QgPSBpc01ldGhvZDtcbmV4cG9ydHMuaXNDYWxsYmFjayA9IGlzQ2FsbGJhY2s7XG5leHBvcnRzLmlzU3RhdGljTWV0aG9kID0gaXNTdGF0aWNNZXRob2Q7XG5leHBvcnRzLmlzRmFjdG9yeUV4cG9ydHMgPSBpc0ZhY3RvcnlFeHBvcnRzO1xuZXhwb3J0cy5pc0NsYXNzRW50aXR5ID0gaXNDbGFzc0VudGl0eTtcbmV4cG9ydHMuaXNUeXBlRGVmID0gaXNUeXBlRGVmO1xuZXhwb3J0cy5pc0V4cG9ydGVkU3ltYm9sID0gaXNFeHBvcnRlZFN5bWJvbDtcblxuZXhwb3J0cy5nZXREaXNwbGF5VHlwZSA9IGZ1bmN0aW9uKGRvY3VtZW50Tm9kZSkge1xuICBpZiAoZG9jdW1lbnROb2RlLnR5cGUgPT09ICdOYW1lc3BhY2UnKSB7XG4gICAgcmV0dXJuICdMaWJyYXJ5JztcbiAgfVxuXG4gIGlmIChkb2N1bWVudE5vZGUucHJvcGVydGllcy5pc05hbWVzcGFjZSkge1xuICAgIHJldHVybiAnTmFtZXNwYWNlJztcbiAgfVxuICBlbHNlIGlmIChkb2N1bWVudE5vZGUuZW50aXRpZXMuc29tZShuID0+IGlzQ2xhc3NFbnRpdHkobi5wcm9wZXJ0aWVzKSkpIHtcbiAgICByZXR1cm4gJ0NsYXNzJztcbiAgfVxuICBlbHNlIGlmIChkb2N1bWVudE5vZGUuZW50aXRpZXMuc29tZShuID0+IGlzRmFjdG9yeUV4cG9ydHMobi5wcm9wZXJ0aWVzKSkpIHtcbiAgICByZXR1cm4gJ0ZhY3RvcnknO1xuICB9XG4gIGVsc2UgaWYgKGRvY3VtZW50Tm9kZS5wcm9wZXJ0aWVzLnR5cGUgPT09IEsuVFlQRV9GVU5DVElPTikge1xuICAgIHJldHVybiAnRnVuY3Rpb24nO1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiAnT2JqZWN0JztcbiAgfVxufTtcblxuZXhwb3J0cy5pc1Byb3BlcnR5ID0gZnVuY3Rpb24oZG9jKSB7XG4gIHJldHVybiBkb2MgJiYgZG9jLnRhZ3MgJiYgZG9jLnRhZ3Muc29tZSh4ID0+IHgudHlwZSA9PT0gJ3Byb3BlcnR5Jyk7XG59O1xuXG5leHBvcnRzLmlzU3RhdGljUHJvcGVydHkgPSBmdW5jdGlvbihkb2MpIHtcbiAgcmV0dXJuIGV4cG9ydHMuaXNQcm9wZXJ0eShkb2MpICYmIFtcbiAgICBLLlNDT1BFX1BST1RPVFlQRSxcbiAgICBLLlNDT1BFX0lOU1RBTkNFXG4gIF0uaW5kZXhPZihkb2Mubm9kZUluZm8uc2NvcGUpID09PSAtMTtcbn07XG5cbmV4cG9ydHMuaXNNZW1iZXJQcm9wZXJ0eSA9IGZ1bmN0aW9uKGRvYykge1xuICByZXR1cm4gZXhwb3J0cy5pc1Byb3BlcnR5KGRvYykgJiYgIWV4cG9ydHMuaXNTdGF0aWNQcm9wZXJ0eShkb2MpO1xufTtcblxuZXhwb3J0cy5pc1ByaXZhdGUgPSBmdW5jdGlvbihkb2MpIHtcbiAgcmV0dXJuIGRvYyAmJiBkb2MudGFncyAmJiBkb2MudGFncy5zb21lKHggPT4geC50eXBlID09PSAncHJpdmF0ZScpO1xufTtcblxuZXhwb3J0cy5pc1Byb3RlY3RlZCA9IGZ1bmN0aW9uKGRvYykge1xuICByZXR1cm4gZG9jICYmIGRvYy50YWdzICYmIGRvYy50YWdzLnNvbWUoeCA9PiB4LnR5cGUgPT09ICdwcm90ZWN0ZWQnKTtcbn07XG5cbmV4cG9ydHMuaXNQdWJsaWMgPSBmdW5jdGlvbihkb2MpIHtcbiAgcmV0dXJuIChcbiAgICAhZXhwb3J0cy5pc1ByaXZhdGUoZG9jKSAmJlxuICAgICFleHBvcnRzLmlzUHJvdGVjdGVkKGRvYylcbiAgKTtcbn07XG5cbmV4cG9ydHMuaXNOYW1lc3BhY2VEb2N1bWVudCA9IGZ1bmN0aW9uKGRvYykge1xuICByZXR1cm4gZG9jICYmIGRvYy5pc05hbWVzcGFjZTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS91dGlscy9Eb2NDbGFzc2lmaWVyLmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgQ2xhc3NFbnRpdHlCcm93c2VyID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9DbGFzc0VudGl0eUJyb3dzZXInKTtcbmNvbnN0IHsgb2JqZWN0LCB9ID0gUmVhY3QuUHJvcFR5cGVzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdKUzo6TW9kdWxlRW50aXRpZXMnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGRvY3VtZW50Tm9kZTogb2JqZWN0LFxuICAgIGRvY3VtZW50RW50aXR5Tm9kZTogb2JqZWN0LFxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZG9jdW1lbnROb2RlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENsYXNzRW50aXR5QnJvd3NlclxuICAgICAgICBzdGFuZGFsb25lXG4gICAgICAgIGRvY3VtZW50Tm9kZT17dGhpcy5wcm9wcy5kb2N1bWVudE5vZGV9XG4gICAgICAgIGRvY3VtZW50RW50aXR5Tm9kZT17dGhpcy5wcm9wcy5kb2N1bWVudEVudGl0eU5vZGV9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL291dGxldHMvTW9kdWxlRW50aXRpZXNPdXRsZXQuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IExpbmsgPSByZXF1aXJlKCdjb21wb25lbnRzL0xpbmsnKTtcbmNvbnN0IG9yZGVyQXdhcmVTb3J0ID0gcmVxdWlyZSgnLi4vdXRpbHMvb3JkZXJBd2FyZVNvcnQnKTtcbmNvbnN0IGNsYXNzU2V0ID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuY29uc3QgeyBvYmplY3QsIGJvb2wsIH0gPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbnZhciBDbGFzc0VudGl0eUJyb3dzZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHByb3BUeXBlczoge1xuICAgIHN0YW5kYWxvbmU6IGJvb2wsXG4gICAgZG9jdW1lbnROb2RlOiBvYmplY3QsXG4gICAgZG9jdW1lbnRFbnRpdHlOb2RlOiBvYmplY3QsXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZG9jdW1lbnROb2RlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFkb2N1bWVudE5vZGUuZW50aXRpZXMgfHwgIWRvY3VtZW50Tm9kZS5lbnRpdGllcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGVudGl0eURvY3VtZW50cyA9IG9yZGVyQXdhcmVTb3J0LmFzTm9kZXMoZG9jdW1lbnROb2RlLCBkb2N1bWVudE5vZGUuZW50aXRpZXMsICdpZCcpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDx1bFxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgIGNsYXNzU2V0KFwiY2xhc3MtYnJvd3Nlcl9fbWV0aG9kc1wiLCB7XG4gICAgICAgICAgICAnY2xhc3MtYnJvd3Nlcl9fbWV0aG9kcy0tc3RhbmRhbG9uZSc6IHRoaXMucHJvcHMuc3RhbmRhbG9uZVxuICAgICAgICAgIH0pXG4gICAgICB9PlxuICAgICAgICB7ZW50aXR5RG9jdW1lbnRzLm1hcCh0aGlzLnJlbmRlckVudGl0eSl9XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyRW50aXR5KG5vZGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGtleT17bm9kZS51aWR9IGNsYXNzTmFtZT1cImNsYXNzLWJyb3dzZXJfX21ldGhvZHMtZW50aXR5XCI+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgdG89e25vZGV9XG4gICAgICAgICAgY2hpbGRyZW49eyhub2RlLnByb3BlcnRpZXMuc3ltYm9sIHx8ICcnKSArIG5vZGUucHJvcGVydGllcy5uYW1lfVxuICAgICAgICAgIHRpdGxlPXtub2RlLnRpdGxlfVxuICAgICAgICAvPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9LFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2xhc3NFbnRpdHlCcm93c2VyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvQ2xhc3NFbnRpdHlCcm93c2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1wiY29tcG9uZW50cy9MaW5rXCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwiY29tcG9uZW50cy9MaW5rXFxcIl1cIlxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgeyBzb3J0QnkgfSA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvYywgYXJyYXksIGtleSkge1xuICB2YXIgcHJlc2VydmVPcmRlciA9IChkb2MudGFncyB8fCBbXSkuc29tZShmdW5jdGlvbih0YWcpIHtcbiAgICByZXR1cm4gdGFnLnR5cGUgPT09ICdwcmVzZXJ2ZU9yZGVyJztcbiAgfSk7XG5cbiAgaWYgKHByZXNlcnZlT3JkZXIpIHtcbiAgICByZXR1cm4gc29ydEJ5KGFycmF5LCAnbGluZScpO1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBzb3J0QnkoYXJyYXksIGtleSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmFzTm9kZXMgPSBmdW5jdGlvbihkb2N1bWVudE5vZGUsIGFycmF5LCBrZXkpIHtcbiAgdmFyIHByZXNlcnZlT3JkZXIgPSAoZG9jdW1lbnROb2RlLnByb3BlcnRpZXMudGFncyB8fCBbXSkuc29tZShmdW5jdGlvbih0YWcpIHtcbiAgICByZXR1cm4gdGFnLnR5cGUgPT09ICdwcmVzZXJ2ZU9yZGVyJztcbiAgfSk7XG5cbiAgaWYgKHByZXNlcnZlT3JkZXIpIHtcbiAgICByZXR1cm4gc29ydEJ5KGFycmF5LCAncHJvcGVydGllcy5saW5lJyk7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIHNvcnRCeShhcnJheSwga2V5KTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS91dGlscy9vcmRlckF3YXJlU29ydC5qcyIsIm1vZHVsZS5leHBvcnRzID0gTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcImxvZGFzaFwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImxvZGFzaFxcXCJdXCJcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcImNsYXNzbmFtZXNcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJjbGFzc25hbWVzXFxcIl1cIlxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgTW9kdWxlSGVhZGVyID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9Nb2R1bGVIZWFkZXInKTtcbmNvbnN0IHsgb2JqZWN0LCBzaGFwZSwgYm9vbCwgfSA9IFJlYWN0LlByb3BUeXBlcztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnSlM6Ok1vZHVsZUhlYWRlcicsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgZG9jdW1lbnROb2RlOiBvYmplY3QsXG4gICAgbmFtZXNwYWNlTm9kZTogb2JqZWN0LFxuICAgICRvdXRsZXRPcHRpb25zOiBzaGFwZSh7XG4gICAgICBzaG93RmlsZVBhdGg6IGJvb2wsXG4gICAgfSlcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb25maWcgfSA9IHRoaXMucHJvcHMubmFtZXNwYWNlTm9kZTtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5wcm9wcy4kb3V0bGV0T3B0aW9ucztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImpzLW1vZHVsZS1oZWFkZXItb3V0bGV0XCI+XG4gICAgICAgIDxNb2R1bGVIZWFkZXJcbiAgICAgICAgICBkb2N1bWVudE5vZGU9e3RoaXMucHJvcHMuZG9jdW1lbnROb2RlIHx8IHRoaXMucHJvcHMubmFtZXNwYWNlTm9kZX1cbiAgICAgICAgICBzaG93U291cmNlUGF0aHM9e1xuICAgICAgICAgICAgb3B0aW9ucy5zaG93RmlsZVBhdGggIT09IGZhbHNlICYmXG4gICAgICAgICAgICBjb25maWcuc2hvd1NvdXJjZVBhdGhzICE9PSBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgICBzaG93TmFtZXNwYWNlPXtcbiAgICAgICAgICAgIG9wdGlvbnMuc2hvd05hbWVzcGFjZSAhPT0gZmFsc2UgJiZcbiAgICAgICAgICAgIGNvbmZpZy5zaG93TmFtZXNwYWNlSW5Nb2R1bGVIZWFkZXIgIT09IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICAgIGdlbmVyYXRlQW5jaG9yPXtmYWxzZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvb3V0bGV0cy9Nb2R1bGVIZWFkZXJPdXRsZXQuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCB7IG9iamVjdCwgc2hhcGUsIGJvb2wsIH0gPSBSZWFjdC5Qcm9wVHlwZXM7XG5jb25zdCBOYW1lc3BhY2VJbmRleCA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvTmFtZXNwYWNlSW5kZXgnKTtcbmNvbnN0IE1vZHVsZUluZGV4ID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9Nb2R1bGVJbmRleCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdKUzo6TW9kdWxlSW5kZXgnLFxuICBwcm9wVHlwZXM6IHtcbiAgICBkb2N1bWVudE5vZGU6IG9iamVjdCxcbiAgICBuYW1lc3BhY2VOb2RlOiBvYmplY3QsXG4gICAgJG91dGxldE9wdGlvbnM6IHNoYXBlKHtcbiAgICAgIHNob3dGdW5jdGlvbnM6IGJvb2wsXG4gICAgICBzaG93UHJvcGVydGllczogYm9vbCxcbiAgICAgIHNob3dTdGF0aWNNZW1iZXJzOiBib29sLFxuICAgIH0pLFxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZG9jdW1lbnROb2RlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE5hbWVzcGFjZUluZGV4XG4gICAgICAgICAgey4uLnRoaXMucHJvcHMuJG91dGxldE9wdGlvbnN9XG4gICAgICAgICAgZG9jdW1lbnROb2RlPXt0aGlzLnByb3BzLmRvY3VtZW50Tm9kZX1cbiAgICAgICAgLz5cblxuICAgICAgICA8TW9kdWxlSW5kZXhcbiAgICAgICAgICB7Li4udGhpcy5wcm9wcy4kb3V0bGV0T3B0aW9uc31cbiAgICAgICAgICBkb2N1bWVudE5vZGU9e3RoaXMucHJvcHMuZG9jdW1lbnROb2RlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9vdXRsZXRzL01vZHVsZUluZGV4T3V0bGV0LmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgTGluayA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvTGluaycpO1xuY29uc3QgRG9jQ2xhc3NpZmllciA9IHJlcXVpcmUoJy4uL3V0aWxzL0RvY0NsYXNzaWZpZXInKTtcbmNvbnN0IHsgb2JqZWN0IH0gPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbmNvbnN0IE5hbWVzcGFjZUluZGV4ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBwcm9wVHlwZXM6IHtcbiAgICBkb2N1bWVudE5vZGU6IG9iamVjdCxcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkb2N1bWVudE5vZGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY2xhc3NlcyA9IGdldEJ5RGlzcGxheVR5cGUoZG9jdW1lbnROb2RlLCBbICdDbGFzcycsICdGYWN0b3J5JyBdKTtcbiAgICBjb25zdCBmdW5jdGlvbnMgPSBnZXRCeURpc3BsYXlUeXBlKGRvY3VtZW50Tm9kZSwgWyAnRnVuY3Rpb24nIF0pO1xuICAgIGNvbnN0IG5hbWVzcGFjZXMgPSBnZXRCeURpc3BsYXlUeXBlKGRvY3VtZW50Tm9kZSwgWyAnTmFtZXNwYWNlJyBdKTtcbiAgICBjb25zdCBvdGhlcnMgPSBnZXRSZW1haW5pbmdEb2N1bWVudHMoZG9jdW1lbnROb2RlLCBbXG4gICAgICBjbGFzc2VzLFxuICAgICAgZnVuY3Rpb25zLFxuICAgICAgbmFtZXNwYWNlc1xuICAgIF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwianMtZG9jdW1lbnQtaW5kZXhcIj5cbiAgICAgICAge25hbWVzcGFjZXMubGVuZ3RoID4gMCAmJiB0aGlzLnJlbmRlckdyb3VwQnlDb250ZXh0VHlwZSgnTmFtZXNwYWNlcycsIG5hbWVzcGFjZXMpfVxuICAgICAgICB7Y2xhc3Nlcy5sZW5ndGggPiAwICYmIHRoaXMucmVuZGVyR3JvdXBCeUNvbnRleHRUeXBlKCdDbGFzc2VzJywgY2xhc3Nlcyl9XG4gICAgICAgIHtmdW5jdGlvbnMubGVuZ3RoID4gMCAmJiB0aGlzLnJlbmRlckdyb3VwQnlDb250ZXh0VHlwZSgnRnVuY3Rpb25zJywgZnVuY3Rpb25zKX1cbiAgICAgICAge290aGVycy5sZW5ndGggPiAwICYmIHRoaXMucmVuZGVyR3JvdXBCeUNvbnRleHRUeXBlKCdPdGhlcicsIG90aGVycyl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlckdyb3VwQnlDb250ZXh0VHlwZSh0aXRsZSwgZG9jdW1lbnRzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJkb2MtZ3JvdXBfX2hlYWRlclwiPlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9oMj5cblxuICAgICAgICB7dGhpcy5yZW5kZXJHcm91cChkb2N1bWVudHMpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9LFxuXG4gIHJlbmRlckdyb3VwKGRvY3VtZW50cykge1xuICAgIHJldHVybiAoXG4gICAgICA8dGFibGU+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7ZG9jdW1lbnRzLm1hcCh0aGlzLnJlbmRlck1vZHVsZVN1bW1hcnlSZWNvcmQpfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlck1vZHVsZVN1bW1hcnlSZWNvcmQobm9kZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8dHIga2V5PXtub2RlLnVpZH0+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8TGluayB0bz17bm9kZX0+e25vZGUucHJvcGVydGllcyAmJiBub2RlLnByb3BlcnRpZXMubmFtZSB8fCBub2RlLnRpdGxlfTwvTGluaz5cbiAgICAgICAgPC90ZD5cblxuICAgICAgICA8dGQ+XG4gICAgICAgICAge25vZGUuc3VtbWFyeSB8fCA8ZW0gY2xhc3NOYW1lPVwidHlwZS1tdXRlXCI+Tm8gc3VtbWFyeSBwcm92aWRlZC48L2VtPn1cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgKTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGdldEJ5RGlzcGxheVR5cGUoZG9jdW1lbnROb2RlLCB0eXBlTmFtZXMpIHtcbiAgcmV0dXJuIGRvY3VtZW50Tm9kZS5kb2N1bWVudHMuZmlsdGVyKHggPT4ge1xuICAgIHJldHVybiB0eXBlTmFtZXMuaW5kZXhPZihEb2NDbGFzc2lmaWVyLmdldERpc3BsYXlUeXBlKHgpKSA+IC0xO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0UmVtYWluaW5nRG9jdW1lbnRzKGRvY3VtZW50Tm9kZSwgbGlzdHMpIHtcbiAgY29uc3QgdXNlZFVJRHMgPSBsaXN0cy5yZWR1Y2UoZnVuY3Rpb24obWFwLCBsaXN0KSB7XG4gICAgbGlzdC5mb3JFYWNoKHggPT4geyBtYXBbeC51aWRdID0gdHJ1ZSB9KTtcbiAgICByZXR1cm4gbWFwO1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIGRvY3VtZW50Tm9kZS5kb2N1bWVudHMuZmlsdGVyKHggPT4gISh4LnVpZCBpbiB1c2VkVUlEcykpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5hbWVzcGFjZUluZGV4O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9OYW1lc3BhY2VJbmRleC5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IExpbmsgPSByZXF1aXJlKCdjb21wb25lbnRzL0xpbmsnKTtcbmNvbnN0IFR5cGVOYW1lcyA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvVGFncy9UeXBlTmFtZXMnKTtcbmNvbnN0IEZ1bmN0aW9uU2lnbmF0dXJlID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9GdW5jdGlvblNpZ25hdHVyZScpO1xuY29uc3QgRG9jQ2xhc3NpZmllciA9IHJlcXVpcmUoJy4uL3V0aWxzL0RvY0NsYXNzaWZpZXInKTtcbmNvbnN0IHsgYm9vbCwgb2JqZWN0LCB9ID0gUmVhY3QuUHJvcFR5cGVzO1xuXG5jb25zdCBNb2R1bGVJbmRleCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgZG9jdW1lbnROb2RlOiBvYmplY3QsXG4gICAgc2hvd0Z1bmN0aW9uczogYm9vbCxcbiAgICBzaG93UHJvcGVydGllczogYm9vbCxcbiAgICBzaG93U3RhdGljTWVtYmVyczogYm9vbCxcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNob3dGdW5jdGlvbnM6IHRydWUsXG4gICAgICBzaG93UHJvcGVydGllczogdHJ1ZSxcbiAgICAgIHNob3dTdGF0aWNNZW1iZXJzOiB0cnVlLFxuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZG9jdW1lbnROb2RlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG1lbWJlckZ1Y3Rpb25zID0gZ2V0QnlDbGFzc2lmaWNhdGlvbihkb2N1bWVudE5vZGUsIFsgRG9jQ2xhc3NpZmllci5pc01ldGhvZCBdKTtcbiAgICBjb25zdCBtZW1iZXJQcm9wZXJ0aWVzID0gZ2V0QnlDbGFzc2lmaWNhdGlvbihkb2N1bWVudE5vZGUsIFsgRG9jQ2xhc3NpZmllci5pc01lbWJlclByb3BlcnR5IF0pO1xuICAgIGNvbnN0IGV4cG9ydGVkU3ltYm9scyA9IGdldEJ5Q2xhc3NpZmljYXRpb24oZG9jdW1lbnROb2RlLCBbIERvY0NsYXNzaWZpZXIuaXNFeHBvcnRlZFN5bWJvbCBdKTtcbiAgICBjb25zdCBzdGF0aWNNZW1iZXJzID0gZ2V0QnlDbGFzc2lmaWNhdGlvbihkb2N1bWVudE5vZGUsIFtcbiAgICAgIERvY0NsYXNzaWZpZXIuaXNTdGF0aWNNZXRob2QsXG4gICAgICBEb2NDbGFzc2lmaWVyLmlzU3RhdGljUHJvcGVydHksXG4gICAgXSlcblxuICAgIGNvbnN0IHB1YmxpY1N0YXRpY01lbWJlcnMgPSBzdGF0aWNNZW1iZXJzXG4gICAgICAuZmlsdGVyKHggPT4gRG9jQ2xhc3NpZmllci5pc1B1YmxpYyh4LnByb3BlcnRpZXMpKVxuICAgIDtcblxuICAgIGNvbnN0IHByaXZhdGVTdGF0aWNNZW1iZXJzID0gc3RhdGljTWVtYmVyc1xuICAgICAgLmZpbHRlcih4ID0+ICFEb2NDbGFzc2lmaWVyLmlzUHVibGljKHgucHJvcGVydGllcykpXG4gICAgO1xuXG4gICAgY29uc3Qgb3RoZXJzID0gZ2V0UmVtYWluaW5nRG9jdW1lbnRzKGRvY3VtZW50Tm9kZSwgW1xuICAgICAgc3RhdGljTWVtYmVycyxcbiAgICAgIG1lbWJlckZ1Y3Rpb25zLFxuICAgICAgbWVtYmVyUHJvcGVydGllcyxcbiAgICAgIGV4cG9ydGVkU3ltYm9sc1xuICAgIF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwianMtZG9jdW1lbnQtaW5kZXhcIj5cbiAgICAgICAge2V4cG9ydGVkU3ltYm9scy5sZW5ndGggPiAwICYmIHRoaXMucmVuZGVyRXhwb3J0ZWRTeW1ib2xzKCdFeHBvcnRlZCBTeW1ib2xzJywgZXhwb3J0ZWRTeW1ib2xzKX1cbiAgICAgICAge21lbWJlckZ1Y3Rpb25zLmxlbmd0aCA+IDAgJiYgdGhpcy5yZW5kZXJNZXRob2RHcm91cCgnUHVibGljIEZ1bmN0aW9ucycsIG1lbWJlckZ1Y3Rpb25zKX1cbiAgICAgICAge21lbWJlclByb3BlcnRpZXMubGVuZ3RoID4gMCAmJiB0aGlzLnJlbmRlclByb3BlcnR5R3JvdXAoJ1B1YmxpYyBQcm9wZXJ0aWVzJywgbWVtYmVyUHJvcGVydGllcyl9XG4gICAgICAgIHtwdWJsaWNTdGF0aWNNZW1iZXJzLmxlbmd0aCA+IDAgJiYgdGhpcy5yZW5kZXJNZXRob2RHcm91cCgnUHVibGljIFN0YXRpYyBNZW1iZXJzJywgcHVibGljU3RhdGljTWVtYmVycyl9XG4gICAgICAgIHtwcml2YXRlU3RhdGljTWVtYmVycy5sZW5ndGggPiAwICYmIHRoaXMucmVuZGVyTWV0aG9kR3JvdXAoJ1ByaXZhdGUgU3RhdGljIE1lbWJlcnMnLCBwcml2YXRlU3RhdGljTWVtYmVycyl9XG4gICAgICAgIHtvdGhlcnMubGVuZ3RoID4gMCAmJiB0aGlzLnJlbmRlckdyb3VwQnlDb250ZXh0VHlwZSgnT3RoZXInLCBvdGhlcnMpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJHcm91cEJ5Q29udGV4dFR5cGUodGl0bGUsIGRvY3VtZW50cykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZG9jLWdyb3VwX19oZWFkZXJcIj5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvaDI+XG5cbiAgICAgICAge3RoaXMucmVuZGVyR3JvdXAoZG9jdW1lbnRzKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfSxcblxuICByZW5kZXJHcm91cChkb2N1bWVudHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRhYmxlPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge2RvY3VtZW50cy5tYXAodGhpcy5yZW5kZXJNb2R1bGVTdW1tYXJ5UmVjb3JkKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJNb2R1bGVTdW1tYXJ5UmVjb3JkKG5vZGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRyIGtleT17bm9kZS51aWR9PlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPExpbmsgdG89e25vZGV9Pntub2RlLnByb3BlcnRpZXMgPyBub2RlLnByb3BlcnRpZXMubmFtZSA6IG5vZGUudGl0bGV9PC9MaW5rPlxuICAgICAgICA8L3RkPlxuXG4gICAgICAgIDx0ZD5cbiAgICAgICAgICB7bm9kZS5zdW1tYXJ5IHx8IDxlbSBjbGFzc05hbWU9XCJ0eXBlLW11dGVcIj5ObyBzdW1tYXJ5IHByb3ZpZGVkLjwvZW0+fVxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlck1ldGhvZEdyb3VwKHRpdGxlLCBkb2N1bWVudHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImRvYy1ncm91cF9faGVhZGVyXCI+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L2gyPlxuXG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7ZG9jdW1lbnRzLm1hcCh0aGlzLnJlbmRlck1ldGhvZFN1bW1hcnlSb3cpfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH0sXG5cbiAgcmVuZGVyTWV0aG9kU3VtbWFyeVJvdyhkb2N1bWVudE5vZGUpIHtcbiAgICBpZiAoRG9jQ2xhc3NpZmllci5pc1Byb3BlcnR5KGRvY3VtZW50Tm9kZS5wcm9wZXJ0aWVzKSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyUHJvcGVydHlTdW1tYXJ5Um93KGRvY3VtZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmV0dXJuVmFsdWUgPSBkb2N1bWVudE5vZGUucHJvcGVydGllcy50YWdzLnJlZHVjZSgodiwgeCkgPT4ge1xuICAgICAgaWYgKHgudHlwZSA9PT0gJ3JldHVybicpIHtcbiAgICAgICAgcmV0dXJuIHgudHlwZUluZm8udHlwZTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdjtcbiAgICAgIH1cbiAgICB9LCB7IG5hbWU6ICd2b2lkJyB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8dHIga2V5PXtkb2N1bWVudE5vZGUudWlkfT5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1lbnRpdHlfX2Z1bmN0aW9uLXNpZ25hdHVyZVwiPlxuICAgICAgICAgICAge3JldHVyblZhbHVlICYmIDxUeXBlTmFtZXMgdHlwZT17cmV0dXJuVmFsdWV9IC8+fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC90ZD5cblxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPExpbmsgdG89e2RvY3VtZW50Tm9kZX0gY2xhc3NOYW1lPVwianMtZG9jdW1lbnQtaW5kZXhfX2VudGl0eS1uYW1lXCI+XG4gICAgICAgICAgICB7ZG9jdW1lbnROb2RlLnByb3BlcnRpZXMubmFtZX1cbiAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICA8RnVuY3Rpb25TaWduYXR1cmVcbiAgICAgICAgICAgIGRvYz17ZG9jdW1lbnROb2RlLnByb3BlcnRpZXN9XG4gICAgICAgICAgICB3aXRoTmFtZXM9e2ZhbHNlfVxuICAgICAgICAgICAgd2l0aEJyYWNlc1xuICAgICAgICAgIC8+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgIClcbiAgfSxcblxuICByZW5kZXJQcm9wZXJ0eUdyb3VwKHRpdGxlLCBkb2N1bWVudHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImRvYy1ncm91cF9faGVhZGVyXCI+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L2gyPlxuXG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7ZG9jdW1lbnRzLm1hcCh0aGlzLnJlbmRlclByb3BlcnR5U3VtbWFyeVJvdyl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfSxcblxuICByZW5kZXJQcm9wZXJ0eVN1bW1hcnlSb3coZG9jdW1lbnROb2RlKSB7XG4gICAgY29uc3QgcHJvcGVydHlUYWcgPSBkb2N1bWVudE5vZGUucHJvcGVydGllcy50YWdzLmZpbHRlcih4ID0+IHgudHlwZSA9PT0gJ3Byb3BlcnR5JylbMF07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRyIGtleT17ZG9jdW1lbnROb2RlLnVpZH0+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb2MtZW50aXR5X19mdW5jdGlvbi1zaWduYXR1cmVcIj5cbiAgICAgICAgICAgIDxUeXBlTmFtZXMgdHlwZT17cHJvcGVydHlUYWcudHlwZUluZm8udHlwZX0gLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvdGQ+XG5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxMaW5rIHRvPXtkb2N1bWVudE5vZGV9IGNsYXNzTmFtZT1cImpzLWRvY3VtZW50LWluZGV4X19lbnRpdHktbmFtZVwiPlxuICAgICAgICAgICAge2RvY3VtZW50Tm9kZS5wcm9wZXJ0aWVzLm5hbWV9XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICApXG4gIH0sXG5cbiAgcmVuZGVyRXhwb3J0ZWRTeW1ib2xzKHRpdGxlLCBkb2N1bWVudHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImRvYy1ncm91cF9faGVhZGVyXCI+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L2gyPlxuXG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD5TeW1ib2w8L3RoPlxuICAgICAgICAgICAgICA8dGg+RGVmaW5pdGlvbjwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7ZG9jdW1lbnRzLm1hcChub2RlID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgWyB0eXBlSW5mbyBdID0gbm9kZS5wcm9wZXJ0aWVzLnRhZ3MuZmlsdGVyKHggPT4geC50eXBlID09PSAnZXhwb3J0JykubWFwKHggPT4geC50eXBlSW5mbyk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtub2RlLmlkfT5cbiAgICAgICAgICAgICAgICAgIDx0ZD57dHlwZUluZm8ubmFtZSB8fCBub2RlLnByb3BlcnRpZXMubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPjxUeXBlTmFtZXMgdHlwZT17dHlwZUluZm8udHlwZX0gLz48L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBnZXRCeUNsYXNzaWZpY2F0aW9uKGRvY3VtZW50Tm9kZSwga2xhc3NpZmllcnMpIHtcbiAgcmV0dXJuIGRvY3VtZW50Tm9kZS5lbnRpdGllcy5maWx0ZXIoeCA9PiB7XG4gICAgcmV0dXJuIGtsYXNzaWZpZXJzLnNvbWUoZm4gPT4gZm4oeC5wcm9wZXJ0aWVzKSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRSZW1haW5pbmdEb2N1bWVudHMoZG9jdW1lbnROb2RlLCBsaXN0cykge1xuICBjb25zdCB1c2VkVUlEcyA9IGxpc3RzLnJlZHVjZShmdW5jdGlvbihtYXAsIGxpc3QpIHtcbiAgICBsaXN0LmZvckVhY2goeCA9PiB7XG4gICAgICBtYXBbeC51aWRdID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtYXA7XG4gIH0sIHt9KTtcblxuICByZXR1cm4gZG9jdW1lbnROb2RlLmVudGl0aWVzLmZpbHRlcih4ID0+ICEoeC51aWQgaW4gdXNlZFVJRHMpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNb2R1bGVJbmRleDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvTW9kdWxlSW5kZXguanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBkZXNjcmliZVR5cGUgPSByZXF1aXJlKCcuLi8uLi91dGlscy9kZXNjcmliZVR5cGUnKTtcblxuY29uc3QgVHlwZU5hbWVzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBjb250ZXh0VHlwZXM6IHtcbiAgICBjb25maWc6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgfSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICB0eXBlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuXG4gICAgICAgIGNsYXNzTmFtZT1cImpzLXR5cGUtbmFtZXNcIlxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgIF9faHRtbDogZGVzY3JpYmVUeXBlKHtcbiAgICAgICAgICAgIGh0bWw6IHRydWUsXG4gICAgICAgICAgICBleHBhbmRGdW5jdGlvblNpZ25hdHVyZXM6IHRoaXMuY29udGV4dC5jb25maWcuZXhwYW5kUmV0dXJuZWRGdW5jdGlvblNpZ25hdHVyZXNcbiAgICAgICAgICB9KSh0aGlzLnByb3BzLnR5cGUpXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICk7XG4gIH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUeXBlTmFtZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL1RhZ3MvVHlwZU5hbWVzLmpzIiwiY29uc3QgSyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuY29uc3QgQVBQTF9TRVAgPSAnIHwgJ1xuY29uc3QgQVBQTF9TVEFSVCA9ICcuJmx0OydcbmNvbnN0IEFQUExfRU5EICAgPSAnJmd0OydcblxubW9kdWxlLmV4cG9ydHMgPSAoeyBodG1sLCBleHBhbmRGdW5jdGlvblNpZ25hdHVyZXMgfSkgPT4gZnVuY3Rpb24gcmVuZGVyVHlwZSh0eXBlKSB7XG4gIGlmICghdHlwZSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGNvbnN0IGRpc3BsYXlOYW1lT2YgPSB4ID0+IGh0bWwgJiYgeC5odG1sIHx8IHgubmFtZTtcbiAgY29uc3QgZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZU9mKHR5cGUpO1xuICBjb25zdCByZW5kZXJGdW5jdGlvblBhcmFtID0gcGFyYW0gPT4gKFxuICAgIGRpc3BsYXlOYW1lT2YocGFyYW0pXG4gIClcblxuICBpZiAodHlwZS5uYW1lID09PSBLLlRZUEVfVU5JT04pIHtcbiAgICByZXR1cm4gdHlwZS5lbGVtZW50cy5tYXAocmVuZGVyVHlwZSkuam9pbihBUFBMX1NFUCk7XG4gIH1cbiAgZWxzZSBpZiAodHlwZS5uYW1lID09PSBLLlRZUEVfQVJSQVkgJiYgdHlwZS5lbGVtZW50cykge1xuICAgIHJldHVybiBgQXJyYXkke0FQUExfU1RBUlR9YCArIHR5cGUuZWxlbWVudHMubWFwKHJlbmRlclR5cGUpLmpvaW4oQVBQTF9TRVApICsgQVBQTF9FTkQ7XG4gIH1cbiAgZWxzZSBpZiAodHlwZS5uYW1lICYmIHR5cGUuZWxlbWVudHMpIHtcbiAgICByZXR1cm4gYCR7ZGlzcGxheU5hbWV9JHtBUFBMX1NUQVJUfSR7dHlwZS5lbGVtZW50cy5tYXAocmVuZGVyVHlwZSkuam9pbihBUFBMX1NFUCl9JHtBUFBMX0VORH1gO1xuICB9XG4gIC8vIGZ1bmN0aW9uIHdpdGggcGFyYW1zIGFuZCByZXR1cm4gdHlwZVxuICBlbHNlIGlmIChleHBhbmRGdW5jdGlvblNpZ25hdHVyZXMgJiYgdHlwZS5uYW1lID09PSBLLlRZUEVfRlVOQ1RJT04gJiYgdHlwZS5wYXJhbXMgJiYgdHlwZS5yZXR1cm5UeXBlKSB7XG4gICAgcmV0dXJuIGAoJHt0eXBlLnBhcmFtcy5tYXAocmVuZGVyRnVuY3Rpb25QYXJhbSkuam9pbignLCAnKX0pIC0+ICR7ZGlzcGxheU5hbWVPZih0eXBlLnJldHVyblR5cGUpfWBcbiAgfVxuICAvLyBmdW5jdGlvbiB3aXRoIHJldHVybiB0eXBlIG9ubHlcbiAgZWxzZSBpZiAoZXhwYW5kRnVuY3Rpb25TaWduYXR1cmVzICYmIHR5cGUubmFtZSA9PT0gSy5UWVBFX0ZVTkNUSU9OICYmIHR5cGUucmV0dXJuVHlwZSkge1xuICAgIHJldHVybiBgKCkgLT4gJHtkaXNwbGF5TmFtZU9mKHR5cGUucmV0dXJuVHlwZSl9YFxuICB9XG4gIC8vIGZ1bmN0aW9uIHdpdGggcGFyYW1zIG9ubHlcbiAgZWxzZSBpZiAoZXhwYW5kRnVuY3Rpb25TaWduYXR1cmVzICYgdHlwZS5uYW1lID09PSBLLlRZUEVfRlVOQ1RJT04gJiYgdHlwZS5wYXJhbXMpIHtcbiAgICByZXR1cm4gYCgke3R5cGUucGFyYW1zLm1hcChyZW5kZXJGdW5jdGlvblBhcmFtKS5qb2luKCcsICcpfSkgLT4gP2BcbiAgfVxuICBlbHNlIGlmICh0eXBlLm5hbWUgPT09IEsuVFlQRV9BTExfTElURVJBTCkge1xuICAgIHJldHVybiAnKic7XG4gIH1cblxuICB2YXIgYnVmZmVyID0gZGlzcGxheU5hbWU7XG5cbiAgaWYgKHR5cGUubnVsbGFibGUgPT09IGZhbHNlKSB7XG4gICAgYnVmZmVyICs9ICchJztcbiAgfVxuXG4gIGlmICh0eXBlLm51bGxhYmxlID09PSB0cnVlKSB7XG4gICAgYnVmZmVyICs9ICc/JztcbiAgfVxuXG4gIGlmICh0eXBlLm9wdGlvbmFsKSB7XG4gICAgYnVmZmVyICs9ICc9JztcbiAgfVxuXG4gIHJldHVybiBidWZmZXI7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvdXRpbHMvZGVzY3JpYmVUeXBlLmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgeyBib29sLCBvYmplY3QsIH0gPSBSZWFjdC5Qcm9wVHlwZXM7XG5jb25zdCBkZXNjcmliZVR5cGUgPSByZXF1aXJlKCcuLi91dGlscy9kZXNjcmliZVR5cGUnKTtcblxuY29uc3QgRnVuY3Rpb25TaWduYXR1cmUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGNvbnRleHRUeXBlczoge1xuICAgIGNvbmZpZzogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB9LFxuXG4gIHByb3BUeXBlczoge1xuICAgIGRvYzogb2JqZWN0LFxuICAgIHdpdGhOYW1lczogYm9vbCxcbiAgICB3aXRoQnJhY2VzOiBib29sLFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd2l0aE5hbWVzOiB0cnVlLFxuICAgICAgd2l0aEJyYWNlczogdHJ1ZVxuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgd2l0aE5hbWVzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRlc2NyaWJlVHlwZUhUTUwgPSBkZXNjcmliZVR5cGUoe1xuICAgICAgZXhwYW5kRnVuY3Rpb25TaWduYXR1cmVzOiB0aGlzLmNvbnRleHQuY29uZmlnLmV4cGFuZFJldHVybmVkRnVuY3Rpb25TaWduYXR1cmVzLFxuICAgICAgaHRtbDogdHJ1ZSxcbiAgICB9KVxuICAgIGNvbnN0IGRlc2NyaWJlVHlwZVRleHQgPSBkZXNjcmliZVR5cGUoe1xuICAgICAgZXhwYW5kRnVuY3Rpb25TaWduYXR1cmVzOiB0aGlzLmNvbnRleHQuY29uZmlnLmV4cGFuZFJldHVybmVkRnVuY3Rpb25TaWduYXR1cmVzLFxuICAgICAgaHRtbDogZmFsc2UsXG4gICAgfSlcblxuICAgIGNvbnN0IHBhcmFtVGFncyA9IHRoaXMucHJvcHMuZG9jLnRhZ3MuZmlsdGVyKGZ1bmN0aW9uKHRhZykge1xuICAgICAgcmV0dXJuIHRhZy50eXBlID09PSAncGFyYW0nICYmICh0YWcudHlwZUluZm8ubmFtZSB8fCAnPycpLmluZGV4T2YoJy4nKSA9PT0gLTE7XG4gICAgfSlcblxuICAgIGNvbnN0IHBhcmFtTGluZXMgPSBwYXJhbVRhZ3MubWFwKGZ1bmN0aW9uKHBhcmFtKSB7XG4gICAgICBpZiAod2l0aE5hbWVzICYmIHBhcmFtLnR5cGVJbmZvLm5hbWUpIHtcbiAgICAgICAgcmV0dXJuICc8ZW0+JyArIChwYXJhbS50eXBlSW5mby5uYW1lIHx8ICc/JykgKyAnPC9lbT46ICcgKyBkZXNjcmliZVR5cGVIVE1MKHBhcmFtLnR5cGVJbmZvLnR5cGUpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBkZXNjcmliZVR5cGVIVE1MKHBhcmFtLnR5cGVJbmZvLnR5cGUpO1xuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBpdCdzIDM6NDIgQU0gYW5kIGkgY2FuJ3Qgc2xlZXBcbiAgICBjb25zdCBwYXJhbVRhZ1RvdGFsTGVuZ3RoID0gcGFyYW1UYWdzLm1hcCh0YWcgPT4ge1xuICAgICAgaWYgKHdpdGhOYW1lcyAmJiB0YWcudHlwZUluZm8ubmFtZSkge1xuICAgICAgICByZXR1cm4gdGFnLnR5cGVJbmZvLm5hbWUgKyAnOiAnICsgZGVzY3JpYmVUeXBlVGV4dCh0YWcudHlwZUluZm8udHlwZSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVHlwZVRleHQodGFnLnR5cGVJbmZvLnR5cGUpO1xuICAgICAgfVxuICAgIH0pLmpvaW4oJywgJykubGVuZ3RoXG5cbiAgICBjb25zdCBuZWVkc0JyZWFrID0gcGFyYW1UYWdUb3RhbExlbmd0aCA+PSA0MFxuICAgIGNvbnN0IGh0bWwgPSBwYXJhbUxpbmVzXG4gICAgICAubWFwKGxpbmUgPT4ge1xuICAgICAgICByZXR1cm4gbmVlZHNCcmVhayA/IGA8YnIgLz4mbmJzcDsmbmJzcDske2xpbmV9YCA6IGxpbmVcbiAgICAgIH0pXG4gICAgICAuam9pbignLCAnKSArIChuZWVkc0JyZWFrID8gJzxiciAvPicgOiAnJylcbiAgICA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW5cbiAgICAgICAgY2xhc3NOYW1lPVwiZG9jLWVudGl0eV9fZnVuY3Rpb24tc2lnbmF0dXJlXCJcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICBfX2h0bWw6IHRoaXMucHJvcHMud2l0aEJyYWNlcyA/IGAoJHtodG1sfSlgIDogaHRtbFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGdW5jdGlvblNpZ25hdHVyZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvRnVuY3Rpb25TaWduYXR1cmUuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBNb2R1bGVCb2R5ID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9Nb2R1bGVCb2R5Jyk7XG5jb25zdCB7IG9iamVjdCwgfSA9IFJlYWN0LlByb3BUeXBlcztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnSlM6Ok1vZHVsZUJvZHknLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGRvY3VtZW50Tm9kZTogb2JqZWN0LFxuICAgIG5hbWVzcGFjZU5vZGU6IG9iamVjdCxcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmRvY3VtZW50Tm9kZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIDxNb2R1bGVCb2R5IHsuLi50aGlzLnByb3BzfSAvPjtcbiAgfVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9vdXRsZXRzL01vZHVsZUJvZHlPdXRsZXQuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCB7IGZpbmRXaGVyZSwgd2hlcmUgfSA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5jb25zdCBPdXRsZXQgPSByZXF1aXJlKCdjb21wb25lbnRzL091dGxldCcpO1xuY29uc3QgRG9jID0gcmVxdWlyZSgnLi9Eb2MnKTtcbmNvbnN0IE9iamVjdFN5bm9wc2lzID0gcmVxdWlyZSgnLi9PYmplY3RTeW5vcHNpcycpO1xuY29uc3QgU2VlVGFnID0gcmVxdWlyZSgnLi9UYWdzL1NlZVRhZycpO1xuY29uc3QgRG9jR3JvdXAgPSByZXF1aXJlKCcuL0RvY0dyb3VwJyk7XG5jb25zdCBQcm9wZXJ0eVRhZyA9IHJlcXVpcmUoJy4vVGFncy9Qcm9wZXJ0eVRhZycpO1xuY29uc3QgRXhhbXBsZVRhZyA9IHJlcXVpcmUoJy4vVGFncy9FeGFtcGxlVGFnJyk7XG5jb25zdCBvcmRlckF3YXJlU29ydCA9IHJlcXVpcmUoJy4uL3V0aWxzL29yZGVyQXdhcmVTb3J0Jyk7XG5jb25zdCBEb2NDbGFzc2lmaWVyID0gcmVxdWlyZSgnLi4vdXRpbHMvRG9jQ2xhc3NpZmllcicpO1xuY29uc3QgSyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuY29uc3QgeyBzdHJpbmcsIG9iamVjdCwgYXJyYXlPZiB9ID0gUmVhY3QuUHJvcFR5cGVzO1xuXG5jb25zdCBNb2R1bGVCb2R5ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBwcm9wVHlwZXM6IHtcbiAgICBkb2N1bWVudE5vZGU6IG9iamVjdCxcbiAgICBuYW1lc3BhY2VOb2RlOiBvYmplY3QsXG4gICAgZG9jOiBvYmplY3QsXG4gICAgbW9kdWxlRG9jczogYXJyYXlPZihvYmplY3QpLFxuICAgIGZvY3VzZWRFbnRpdHk6IHN0cmluZyxcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkb2N1bWVudE5vZGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZG9jID0gZG9jdW1lbnROb2RlLnByb3BlcnRpZXM7XG4gICAgY29uc3QgbW9kdWxlRG9jcyA9IGRvY3VtZW50Tm9kZS5lbnRpdGllcy5tYXAoeCA9PiB4LnByb3BlcnRpZXMpO1xuICAgIGNvbnN0IHJlbmRlcmFibGVUeXBlID0gRG9jQ2xhc3NpZmllci5nZXREaXNwbGF5VHlwZShkb2N1bWVudE5vZGUpO1xuICAgIGNvbnN0IHdpdGhvdXRUeXBlRGVmcyA9IG1vZHVsZURvY3MuZmlsdGVyKHggPT4gIURvY0NsYXNzaWZpZXIuaXNUeXBlRGVmKHgpKVxuICAgIGNvbnN0IHR5cGVkZWZzID0gZG9jdW1lbnROb2RlLmVudGl0aWVzLmZpbHRlcih4ID0+IERvY0NsYXNzaWZpZXIuaXNUeXBlRGVmKHgucHJvcGVydGllcykpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3JlbmRlcmFibGVUeXBlID09PSAnRmFjdG9yeScgJiYgKFxuICAgICAgICAgIHRoaXMucmVuZGVyQ29uc3RydWN0b3IoZG9jLCBcIkluc3RhbmNlIENvbnN0cnVjdG9yXCIpXG4gICAgICAgICl9XG5cbiAgICAgICAge3JlbmRlcmFibGVUeXBlID09PSAnQ2xhc3MnICYmIChcbiAgICAgICAgICB0aGlzLnJlbmRlckNvbnN0cnVjdG9yKGRvYywgXCJDb25zdHJ1Y3RvclwiKVxuICAgICAgICApfVxuXG4gICAgICAgIHtyZW5kZXJhYmxlVHlwZSA9PT0gJ0Z1bmN0aW9uJyAmJiAoXG4gICAgICAgICAgdGhpcy5yZW5kZXJDb25zdHJ1Y3Rvcihkb2MsIFwiU2lnbmF0dXJlXCIpXG4gICAgICAgICl9XG5cbiAgICAgICAge3RoaXMucmVuZGVyRXhhbXBsZXMoZG9jKX1cbiAgICAgICAge3RoaXMucmVuZGVyU3RhdGljTWV0aG9kcyhkb2MsIHdpdGhvdXRUeXBlRGVmcyl9XG4gICAgICAgIHt0aGlzLnJlbmRlckNhbGxiYWNrcyhkb2MsIHdpdGhvdXRUeXBlRGVmcyl9XG4gICAgICAgIHt0aGlzLnJlbmRlclR5cGVEZWZzKGRvYywgdHlwZWRlZnMpfVxuICAgICAgICB7dGhpcy5yZW5kZXJQcm9wZXJ0aWVzKFxuICAgICAgICAgIGRvYyxcbiAgICAgICAgICB3aXRob3V0VHlwZURlZnMsXG4gICAgICAgICAgKHNjb3BlKSA9PiAhaXNTdGF0aWNQcm9wZXJ0eShzY29wZSksXG4gICAgICAgICAgXCJJbnN0YW5jZSBQcm9wZXJ0aWVzXCJcbiAgICAgICAgKX1cblxuICAgICAgICB7dGhpcy5yZW5kZXJQcm9wZXJ0aWVzKFxuICAgICAgICAgIGRvYyxcbiAgICAgICAgICB3aXRob3V0VHlwZURlZnMsXG4gICAgICAgICAgaXNTdGF0aWNQcm9wZXJ0eSxcbiAgICAgICAgICBcIlN0YXRpYyBQcm9wZXJ0aWVzXCJcbiAgICAgICAgKX1cblxuICAgICAgICB7dGhpcy5yZW5kZXJNZXRob2RzKGRvYywgd2l0aG91dFR5cGVEZWZzKX1cbiAgICAgICAge3RoaXMucmVuZGVyQWRkaXRpb25hbFJlc291cmNlcyhkb2MpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJDb25zdHJ1Y3Rvcihkb2MsIHRpdGxlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJkb2MtZ3JvdXBfX2hlYWRlclwiPnt0aXRsZX08L2gyPlxuXG4gICAgICAgIDxEb2NcbiAgICAgICAgICB3aXRoRGVzY3JpcHRpb249e2ZhbHNlfVxuICAgICAgICAgIHdpdGhFeGFtcGxlcz17ZmFsc2V9XG4gICAgICAgICAgd2l0aEFkZGl0aW9uYWxSZXNvdXJjZXM9e2ZhbHNlfVxuICAgICAgICAgIGNvbGxhcHNpYmxlPXtmYWxzZX1cbiAgICAgICAgICBkb2M9e2RvY31cbiAgICAgICAgICBjb25maWc9e3RoaXMucHJvcHMubmFtZXNwYWNlTm9kZS5jb25maWd9XG4gICAgICAgICAgaGVhZGluZ1RhZz1cImgzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyRXhhbXBsZXMoZG9jKSB7XG4gICAgY29uc3QgdGFncyA9IHdoZXJlKGRvYy50YWdzLCB7IHR5cGU6ICdleGFtcGxlJyB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8T3V0bGV0IG5hbWU9XCJKUzo6RXhhbXBsZVRhZ3NcIiBlbGVtZW50UHJvcHM9e3t0YWdzfX0+XG4gICAgICAgIHt0YWdzLmxlbmd0aCA9PT0gMSAmJiAodGhpcy5yZW5kZXJFeGFtcGxlVGFnKHRhZ3NbMF0pKX1cblxuICAgICAgICB7dGFncy5sZW5ndGggPiAxICYmIChcbiAgICAgICAgICA8RG9jR3JvdXAgbGFiZWw9XCJFeGFtcGxlc1wiIGFsd2F5c0dyb3VwPXtmYWxzZX0+XG4gICAgICAgICAgICB7dGFncy5tYXAodGhpcy5yZW5kZXJFeGFtcGxlVGFnKX1cbiAgICAgICAgICA8L0RvY0dyb3VwPlxuICAgICAgICApfVxuICAgICAgPC9PdXRsZXQ+XG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJFeGFtcGxlVGFnKHRhZykge1xuICAgIHJldHVybiAoXG4gICAgICA8T3V0bGV0XG4gICAgICAgIGtleT17dGFnLnN0cmluZ31cbiAgICAgICAgbmFtZT1cIkpTOjpFeGFtcGxlVGFnXCJcbiAgICAgICAgZWxlbWVudFByb3BzPXt7XG4gICAgICAgICAgdGFnLFxuICAgICAgICAgIGRvY3VtZW50Tm9kZTogdGhpcy5wcm9wcy5kb2N1bWVudE5vZGVcbiAgICAgICAgfX1cbiAgICAgICAgZmlyc3RNYXRjaGluZ0VsZW1lbnRcbiAgICAgID5cbiAgICAgICAgPEV4YW1wbGVUYWcgc3RyaW5nPXt0YWcuc3RyaW5nfSB0eXBlSW5mbz17dGFnLnR5cGVJbmZvfSAvPlxuICAgICAgPC9PdXRsZXQ+XG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJBZGRpdGlvbmFsUmVzb3VyY2VzKGRvYykge1xuICAgIGNvbnN0IHRhZ3MgPSB3aGVyZShkb2MudGFncywgeyB0eXBlOiAnc2VlJyB9KTtcblxuICAgIGlmICghdGFncy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8RG9jR3JvdXAgbGFiZWw9XCJBZGRpdGlvbmFsIHJlc291cmNlc1wiIGNsYXNzTmFtZT1cImNsYXNzLXZpZXdfX3NlZXNcIiB0YWdOYW1lPVwidWxcIj5cbiAgICAgICAge3RhZ3MubWFwKHRoaXMucmVuZGVyU2VlVGFnKX1cbiAgICAgIDwvRG9jR3JvdXA+XG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJTZWVUYWcodGFnKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWVUYWcga2V5PXt0YWcudHlwZUluZm8ubmFtZX0gey4uLnRhZ30gLz5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlclByb3BlcnRpZXMoZG9jLCBtb2R1bGVEb2NzLCBzY29wZSA9IG51bGwsIHRpdGxlID0gJ1Byb3BlcnRpZXMnKSB7XG4gICAgY29uc3QgcHJvcGVydHlEb2NzID0gb3JkZXJBd2FyZVNvcnQoXG4gICAgICBkb2MsXG4gICAgICBtb2R1bGVEb2NzLmZpbHRlcihmdW5jdGlvbihlbnRpdHlEb2MpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIChzY29wZSA/IHNjb3BlKGVudGl0eURvYy5ub2RlSW5mby5zY29wZSkgOiB0cnVlKSAmJlxuICAgICAgICAgIChcbiAgICAgICAgICAgIGVudGl0eURvYy5ub2RlSW5mby50eXBlID09PSBLLlRZUEVfTElURVJBTCB8fFxuICAgICAgICAgICAgZW50aXR5RG9jLnRhZ3Muc29tZSh4ID0+IHgudHlwZSA9PT0gJ3Byb3BlcnR5JylcbiAgICAgICAgICApICYmIGVudGl0eURvYy5zeW1ib2wgIT09ICd+J1xuICAgICAgICApO1xuICAgICAgfSksXG4gICAgICAnaWQnXG4gICAgKTtcblxuICAgIGlmICghcHJvcGVydHlEb2NzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEb2NHcm91cCBsYWJlbD17dGl0bGV9IHRhZ05hbWU9XCJkaXZcIiBjbGFzc05hbWU9XCJqcy1kb2MtZW50aXR5X19wcm9wZXJ0eS10YWdzXCI+XG4gICAgICAgIHtwcm9wZXJ0eURvY3MubWFwKHRoaXMucmVuZGVyUHJvcGVydHkpfVxuICAgICAgPC9Eb2NHcm91cD5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlclByb3BlcnR5KGRvYykge1xuICAgIGNvbnN0IHRhZyA9IChcbiAgICAgIGZpbmRXaGVyZShkb2MudGFncywgeyB0eXBlOiAncHJvcGVydHknIH0pIHx8XG4gICAgICBmaW5kV2hlcmUoZG9jLnRhZ3MsIHsgdHlwZTogJ3R5cGUnIH0pIHx8IHtcbiAgICAgICAgdHlwZUluZm86IHtcbiAgICAgICAgICBuYW1lOiBkb2MubmFtZSxcbiAgICAgICAgICB0eXBlOiB7IG5hbWU6IGRvYy50eXBlIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG5cbiAgICBpZiAoZG9jLnR5cGUgJiYgZG9jLnR5cGUgPT09IEsuVFlQRV9PQkpFQ1QgJiYgISF0YWcudHlwZUluZm8ubmFtZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPE9iamVjdFN5bm9wc2lzXG4gICAgICAgICAga2V5PXtkb2MuaWR9XG4gICAgICAgICAgZG9jPXtkb2N9XG4gICAgICAgICAgYW5jaG9yPXt0aGlzLmdldEVudGl0eUFuY2hvcihkb2MpfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFByb3BlcnR5VGFnXG4gICAgICAgIGtleT17ZG9jLmlkfVxuICAgICAgICB0eXBlSW5mbz17dGFnLnR5cGVJbmZvfVxuICAgICAgICBhbmNob3I9e3RoaXMuZ2V0RW50aXR5QW5jaG9yKGRvYyl9XG4gICAgICAgIGRvYz17ZG9jfVxuICAgICAgPlxuICAgICAgICB7ZG9jLnR5cGUgJiYgZG9jLnR5cGUgPT09IEsuVFlQRV9GVU5DVElPTiAmJiAoXG4gICAgICAgICAgPERvY1xuICAgICAgICAgICAgd2l0aFRpdGxlPXtmYWxzZX1cbiAgICAgICAgICAgIGNvbGxhcHNpYmxlPXtmYWxzZX1cbiAgICAgICAgICAgIGRvYz17ZG9jfVxuICAgICAgICAgICAgY29uZmlnPXt0aGlzLnByb3BzLm5hbWVzcGFjZU5vZGUuY29uZmlnfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L1Byb3BlcnR5VGFnPlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyU3RhdGljTWV0aG9kcyhkb2MsIG1vZHVsZURvY3MpIHtcbiAgICBjb25zdCBzdGF0aWNNZXRob2REb2NzID0gb3JkZXJBd2FyZVNvcnQoXG4gICAgICBkb2MsXG4gICAgICBtb2R1bGVEb2NzLmZpbHRlcihEb2NDbGFzc2lmaWVyLmlzU3RhdGljTWV0aG9kKSxcbiAgICAgICdpZCdcbiAgICApO1xuXG4gICAgaWYgKCFzdGF0aWNNZXRob2REb2NzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEb2NHcm91cCBsYWJlbD1cIlN0YXRpYyBNZXRob2RzXCIgdGFnTmFtZT1cInVsXCIgY2xhc3NOYW1lPVwiY2xhc3Mtdmlld19fbWV0aG9kLWxpc3RcIj5cbiAgICAgICAge3N0YXRpY01ldGhvZERvY3MubWFwKHRoaXMucmVuZGVyU3RhdGljTWV0aG9kKX1cbiAgICAgIDwvRG9jR3JvdXA+XG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJDYWxsYmFja3MoZG9jLCBtb2R1bGVEb2NzKSB7XG4gICAgY29uc3QgY2FsbGJhY2tEb2NzID0gb3JkZXJBd2FyZVNvcnQoXG4gICAgICBkb2MsXG4gICAgICBtb2R1bGVEb2NzLmZpbHRlcihEb2NDbGFzc2lmaWVyLmlzQ2FsbGJhY2spLFxuICAgICAgJ2lkJ1xuICAgICk7XG5cbiAgICBpZiAoIWNhbGxiYWNrRG9jcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8RG9jR3JvdXAgbGFiZWw9XCJDYWxsYmFjayBEZWZpbml0aW9uc1wiIHRhZ05hbWU9XCJ1bFwiIGNsYXNzTmFtZT1cImNsYXNzLXZpZXdfX21ldGhvZC1saXN0XCI+XG4gICAgICAgIHtjYWxsYmFja0RvY3MubWFwKHRoaXMucmVuZGVyU3RhdGljTWV0aG9kKX1cbiAgICAgIDwvRG9jR3JvdXA+XG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJUeXBlRGVmcyhkb2MsIHR5cGVkZWZOb2Rlcykge1xuICAgIGlmICghdHlwZWRlZk5vZGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgb3JkZXJlZE5vZGVzID0gb3JkZXJBd2FyZVNvcnQuYXNOb2Rlcyh7IHByb3BlcnRpZXM6IGRvYyB9LCB0eXBlZGVmTm9kZXMsICdpZCcpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEb2NHcm91cCBsYWJlbD1cIlR5cGUgRGVmaW5pdGlvbnNcIiB0YWdOYW1lPVwidWxcIiBjbGFzc05hbWU9XCJjbGFzcy12aWV3X190eXBlLWRlZi1saXN0XCI+XG4gICAgICAgIHtvcmRlcmVkTm9kZXMubWFwKHR5cGVkZWZOb2RlID0+IHtcbiAgICAgICAgICBjb25zdCB0eXBlZGVmRG9jID0gdHlwZWRlZk5vZGUucHJvcGVydGllc1xuICAgICAgICAgIGNvbnN0IHByb3BlcnR5VGFncyA9IHR5cGVkZWZEb2MudGFncy5maWx0ZXIoeCA9PiB4LnR5cGUgPT09ICdwcm9wZXJ0eScpXG4gICAgICAgICAgY29uc3QgbWVtYmVyUHJvcGVydHlUYWdzID0gKHR5cGVkZWZOb2RlLmVudGl0aWVzIHx8IFtdKS5yZWR1Y2UoKGxpc3QsIGVudGl0eSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGxpc3QuY29uY2F0KFxuICAgICAgICAgICAgICBlbnRpdHkucHJvcGVydGllcy50YWdzLmZpbHRlcih4ID0+IHgudHlwZSA9PT0gJ3Byb3BlcnR5JykubWFwKHByb3BlcnR5VGFnID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJvcGVydHlUYWcsIHsgYW5jaG9yOiBlbnRpdHkubWV0YS5hbmNob3IgfSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9LCBbXSlcblxuICAgICAgICAgIGNvbnN0IGFsbFByb3BlcnR5VGFncyA9IHByb3BlcnR5VGFncy5jb25jYXQobWVtYmVyUHJvcGVydHlUYWdzKVxuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxEb2NcbiAgICAgICAgICAgICAga2V5PXt0eXBlZGVmRG9jLmlkfVxuICAgICAgICAgICAgICBkb2M9e3R5cGVkZWZEb2N9XG4gICAgICAgICAgICAgIGFuY2hvcj17dGhpcy5nZXRFbnRpdHlBbmNob3IodHlwZWRlZkRvYyl9XG4gICAgICAgICAgICAgIGNvbmZpZz17dGhpcy5wcm9wcy5uYW1lc3BhY2VOb2RlLmNvbmZpZ31cbiAgICAgICAgICAgICAgaGVhZGluZ1RhZz1cImgzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2FsbFByb3BlcnR5VGFncy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGFnLWdyb3VwX19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgIHtcIlByb3BlcnRpZXNcIn1cbiAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgIHthbGxQcm9wZXJ0eVRhZ3MubWFwKCh0YWcsIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPFByb3BlcnR5VGFnXG4gICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZUluZm89e3RhZy50eXBlSW5mb31cbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yPXt0YWcuYW5jaG9yfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9Eb2M+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvRG9jR3JvdXA+XG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJTdGF0aWNNZXRob2QoZG9jKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEb2NcbiAgICAgICAga2V5PXtkb2MuaWR9XG4gICAgICAgIGRvYz17ZG9jfVxuICAgICAgICBhbmNob3I9e3RoaXMuZ2V0RW50aXR5QW5jaG9yKGRvYyl9XG4gICAgICAgIGNvbmZpZz17dGhpcy5wcm9wcy5uYW1lc3BhY2VOb2RlLmNvbmZpZ31cbiAgICAgICAgaGVhZGluZ1RhZz1cImgzXCJcbiAgICAgIC8+XG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJNZXRob2RzKGRvYywgbW9kdWxlRG9jcykge1xuICAgIGNvbnN0IG1ldGhvZERvY3MgPSBvcmRlckF3YXJlU29ydChcbiAgICAgIGRvYyxcbiAgICAgIG1vZHVsZURvY3MuZmlsdGVyKERvY0NsYXNzaWZpZXIuaXNNZXRob2QpLFxuICAgICAgJ2lkJ1xuICAgICk7XG5cbiAgICBpZiAoIW1ldGhvZERvY3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPERvY0dyb3VwIGxhYmVsPVwiSW5zdGFuY2UgTWV0aG9kc1wiIHRhZ05hbWU9XCJ1bFwiIGNsYXNzTmFtZT1cImNsYXNzLXZpZXdfX21ldGhvZC1saXN0XCI+XG4gICAgICAgIHttZXRob2REb2NzLm1hcCh0aGlzLnJlbmRlck1ldGhvZCl9XG4gICAgICA8L0RvY0dyb3VwPlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyTWV0aG9kKGRvYykge1xuICAgIHJldHVybiAoXG4gICAgICA8RG9jXG4gICAgICAgIGtleT17ZG9jLmlkfVxuICAgICAgICBkb2M9e2RvY31cbiAgICAgICAgYW5jaG9yPXt0aGlzLmdldEVudGl0eUFuY2hvcihkb2MpfVxuICAgICAgICBjb25maWc9e3RoaXMucHJvcHMubmFtZXNwYWNlTm9kZS5jb25maWd9XG4gICAgICAgIGhlYWRpbmdUYWc9XCJoM1wiXG4gICAgICAvPlxuICAgICk7XG4gIH0sXG5cbiAgZ2V0RW50aXR5QW5jaG9yKGRvYykge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmRvY3VtZW50Tm9kZS5lbnRpdGllcy5maWx0ZXIoeCA9PiB4LnByb3BlcnRpZXMgPT09IGRvYylbMF0ubWV0YS5hbmNob3I7XG4gIH0sXG59KTtcblxuZnVuY3Rpb24gaXNTdGF0aWNQcm9wZXJ0eShzY29wZSkge1xuICByZXR1cm4gW1xuICAgIEsuU0NPUEVfUFJPVE9UWVBFLFxuICAgIEsuU0NPUEVfSU5TVEFOQ0VcbiAgXS5pbmRleE9mKHNjb3BlKSA9PT0gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTW9kdWxlQm9keTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL01vZHVsZUJvZHkuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBjbGFzc1NldCA9IHJlcXVpcmUoJ3V0aWxzL2NsYXNzU2V0Jyk7XG5jb25zdCBIaWdobGlnaHRlZFRleHQgPSByZXF1aXJlKCdjb21wb25lbnRzL0hpZ2hsaWdodGVkVGV4dCcpO1xuY29uc3QgRG9jVGFncyA9IHJlcXVpcmUoJy4vRG9jVGFncycpO1xuY29uc3QgRnVuY3Rpb25TaWduYXR1cmUgPSByZXF1aXJlKCcuL0Z1bmN0aW9uU2lnbmF0dXJlJyk7XG5jb25zdCBUeXBlTmFtZXMgPSByZXF1aXJlKCcuL1RhZ3MvVHlwZU5hbWVzJyk7XG5jb25zdCBEZXByZWNhdGVkVGFnID0gcmVxdWlyZSgnLi9UYWdzL0RlcHJlY2F0ZWRUYWcnKTtcbmNvbnN0IEsgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcbmNvbnN0IERvY0NsYXNzaWZpZXIgPSByZXF1aXJlKCcuLi91dGlscy9Eb2NDbGFzc2lmaWVyJyk7XG5jb25zdCBDb2xsYXBzaWJsZSA9IHJlcXVpcmUoJ21peGlucy9Db2xsYXBzaWJsZScpO1xuY29uc3QgeyBvYmplY3QsIGJvb2wsIHN0cmluZyB9ID0gUmVhY3QuUHJvcFR5cGVzO1xuY29uc3QgSGVhZGluZ0FuY2hvciA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvSGVhZGluZ0FuY2hvcicpO1xuXG5jb25zdCBEb2MgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIG1peGluczogWyBDb2xsYXBzaWJsZSBdLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGFuY2hvcjogc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBSZWFjdC5Qcm9wVHlwZXMubm9kZSxcbiAgICBkb2M6IG9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGNvbmZpZzogb2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgY29sbGFwc2libGU6IGJvb2wsXG4gICAgZXhwYW5kZWQ6IGJvb2wsXG4gICAgaGVhZGluZ1RhZzogc3RyaW5nLFxuICAgIHdpdGhFeGFtcGxlczogYm9vbCxcbiAgICB3aXRoVGl0bGU6IGJvb2wsXG4gICAgd2l0aERlc2NyaXB0aW9uOiBib29sLFxuICAgIHdpdGhBZGRpdGlvbmFsUmVzb3VyY2VzOiBib29sLFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhlYWRpbmdUYWc6ICdoNCcsXG4gICAgICB3aXRoVGl0bGU6IHRydWUsXG4gICAgICB3aXRoRGVzY3JpcHRpb246IHRydWUsXG4gICAgICB3aXRoRXhhbXBsZXM6IHRydWVcbiAgICB9O1xuICB9LFxuXG4gIC8vIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24obmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgLy8gICByZXR1cm4gKFxuICAvLyAgICAgbmV4dFByb3BzLmRvYyAhPT0gdGhpcy5wcm9wcy5kb2MgfHxcbiAgLy8gICAgIG5leHRTdGF0ZS5jb2xsYXBzZWQgIT09IHRoaXMuc3RhdGUuY29sbGFwc2VkIHx8XG4gIC8vICAgICBuZXh0UHJvcHMuZXhwYW5kZWQgIT09IHRoaXMucHJvcHMuZXhwYW5kZWRcbiAgLy8gICApO1xuICAvLyB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgaXNDb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCk7XG4gICAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzU2V0KHtcbiAgICAgICdkb2MtZW50aXR5JzogdHJ1ZSxcbiAgICAgICdjb2xsYXBzaWJsZSc6ICEhdGhpcy5wcm9wcy5jb2xsYXBzaWJsZSxcbiAgICAgICdjb2xsYXBzaWJsZS0tZXhwYW5kZWQnOiAhaXNDb2xsYXBzZWQsXG4gICAgICAnY29sbGFwc2libGUtLWNvbGxhcHNlZCc6IGlzQ29sbGFwc2VkLFxuICAgIH0pO1xuXG4gICAgY29uc3QgeyBkb2MsIGFuY2hvciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvYy5kZXNjcmlwdGlvbjtcbiAgICBjb25zdCBkZXByZWNhdGVkVGFnID0gZG9jLnRhZ3MuZmlsdGVyKCh0KSA9PiB0LnR5cGUgPT09ICdkZXByZWNhdGVkJylbMF07XG4gICAgY29uc3QgaXNQcml2YXRlID0gRG9jQ2xhc3NpZmllci5pc1ByaXZhdGUoZG9jKVxuICAgIGNvbnN0IEhlYWRpbmdUYWcgPSB0aGlzLnByb3BzLmhlYWRpbmdUYWcgfHwgJ2g0J1xuXG4gICAgaWYgKGlzUHJpdmF0ZSAmJiB0aGlzLnByb3BzLmNvbmZpZy5oaWRlUHJpdmF0ZVN5bWJvbHMpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICB7dGhpcy5wcm9wcy53aXRoVGl0bGUgJiYgKFxuICAgICAgICAgIDxIZWFkaW5nVGFnXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBjbGFzc1NldCh7XG4gICAgICAgICAgICAgICAgXCJkb2MtZW50aXR5X19oZWFkZXJcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImNvbGxhcHNpYmxlLWhlYWRlclwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiYW5jaG9yYWJsZS1oZWFkaW5nXCI6ICEhYW5jaG9yXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZUNvbGxhcHNlZH1cbiAgICAgICAgICAgIHRpdGxlPXtkb2MubmFtZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJDb2xsYXBzZXIoKX1cbiAgICAgICAgICAgIHthbmNob3IgJiYgPEhlYWRpbmdBbmNob3IuQW5jaG9yIGhyZWY9e2FuY2hvcn0gLz59XG4gICAgICAgICAgICB7YW5jaG9yICYmIDxIZWFkaW5nQW5jaG9yLkxpbmsgaHJlZj17YW5jaG9yfSAvPn1cblxuICAgICAgICAgICAgPEhlYWRpbmdBbmNob3IuVGV4dCBjbGFzc05hbWU9XCJkb2MtZW50aXR5X19uYW1lXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1lbnRpdHlfX25hbWUtZnJhZ21lbnRcIj5cbiAgICAgICAgICAgICAgICB7ZG9jLm5hbWV9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICB7aXNGdW5jdGlvbihkb2MpICYmIChcbiAgICAgICAgICAgICAgICA8RnVuY3Rpb25TaWduYXR1cmUgZG9jPXtkb2N9IC8+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAge3RoaXMucmVuZGVyUmV0dXJuVHlwZSgpfVxuXG4gICAgICAgICAgICAgIHtkb2MuaXNDb25zdHJ1Y3RvciAmJiAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWVudGl0eV9fbW9kaWZpZXJcIj5DT05TVFJVQ1RPUjwvc3Bhbj5cbiAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICB7RG9jQ2xhc3NpZmllci5pc1Byb3RlY3RlZChkb2MpICYmIChcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb2MtZW50aXR5X19tb2RpZmllciBkb2MtZW50aXR5X19wcm90ZWN0ZWRcIj5QUk9URUNURUQ8L3NwYW4+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAge2lzUHJpdmF0ZSAmJiAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWVudGl0eV9fbW9kaWZpZXIgZG9jLWVudGl0eV9fcHJpdmF0ZVwiPlBSSVZBVEU8L3NwYW4+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAge2RvYy50YWdzLnNvbWUoKHQpID0+IHQudHlwZSA9PT0gJ2FzeW5jJykgJiYgKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1lbnRpdHlfX21vZGlmaWVyIGRvYy1lbnRpdHlfX2FzeW5jXCI+QVNZTkM8L3NwYW4+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAge2RlcHJlY2F0ZWRUYWcgJiYgKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1lbnRpdHlfX21vZGlmaWVyIGRvYy1lbnRpdHlfX2FzeW5jXCI+REVQUkVDQVRFRDwvc3Bhbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvSGVhZGluZ0FuY2hvci5UZXh0PlxuICAgICAgICAgIDwvSGVhZGluZ1RhZz5cbiAgICAgICAgKX1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvYy1lbnRpdHlfX2Rlc2NyaXB0aW9uXCI+XG4gICAgICAgICAge2RlcHJlY2F0ZWRUYWcgJiYgZGVwcmVjYXRlZFRhZy5zdHJpbmcubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICA8RGVwcmVjYXRlZFRhZyBzdHJpbmc9e2RlcHJlY2F0ZWRUYWcuc3RyaW5nfSAvPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7dGhpcy5wcm9wcy53aXRoRGVzY3JpcHRpb24gJiYgZGVzY3JpcHRpb24gJiYgZGVzY3JpcHRpb24ubGVuZ3RoID4gMCAmJiAhaXNDb2xsYXBzZWQgJiYgKFxuICAgICAgICAgICAgPEhpZ2hsaWdodGVkVGV4dD5cbiAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPC9IaWdobGlnaHRlZFRleHQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgeyFpc0NvbGxhcHNlZCAmJiBkb2MudGFncy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8RG9jVGFnc1xuICAgICAgICAgICAgdGFncz17ZG9jLnRhZ3N9XG4gICAgICAgICAgICBkb2M9e2RvY31cbiAgICAgICAgICAgIGNvbmZpZz17dGhpcy5wcm9wcy5jb25maWd9XG4gICAgICAgICAgICB3aXRoRXhhbXBsZXM9e3RoaXMucHJvcHMud2l0aEV4YW1wbGVzfVxuICAgICAgICAgICAgd2l0aEFkZGl0aW9uYWxSZXNvdXJjZXM9e3RoaXMucHJvcHMud2l0aEFkZGl0aW9uYWxSZXNvdXJjZXN9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cblxuICAgICAgICB7IWlzQ29sbGFwc2VkICYmIHRoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlclJldHVyblR5cGUoKSB7XG4gICAgY29uc3QgWyB0YWcgXSA9IHRoaXMucHJvcHMuZG9jLnRhZ3MuZmlsdGVyKHQgPT4gdC50eXBlID09PSAncmV0dXJuJyk7XG5cbiAgICBpZiAoIXRhZykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1lbnRpdHlfX21ldGhvZC1wYXJhbXNcIj5cbiAgICAgICAgeycgLT4gJ31cbiAgICAgICAgPFR5cGVOYW1lcyB0eXBlPXt0YWcudHlwZUluZm8udHlwZX0gLz5cbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuICB9XG59KTtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihkb2MpIHtcbiAgcmV0dXJuIGRvYy50eXBlID09PSBLLlRZUEVfRlVOQ1RJT047XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRG9jO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvRG9jLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1widXRpbHMvY2xhc3NTZXRcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJ1dGlscy9jbGFzc1NldFxcXCJdXCJcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgVGFnR3JvdXAgPSByZXF1aXJlKCcuL1RhZ3MvVGFnR3JvdXAnKTtcbnZhciBUeXBlRGVmVGFnR3JvdXAgPSByZXF1aXJlKCcuL1RhZ3MvVHlwZURlZlRhZ0dyb3VwJyk7XG52YXIgRXhhbXBsZVRhZyA9IHJlcXVpcmUoJy4vVGFncy9FeGFtcGxlVGFnJyk7XG52YXIgUGFyYW1UYWcgPSByZXF1aXJlKCcuL1RhZ3MvUGFyYW1UYWcnKTtcbnZhciBTZWVUYWcgPSByZXF1aXJlKCcuL1RhZ3MvU2VlVGFnJyk7XG52YXIgVGhyb3dzVGFnID0gcmVxdWlyZSgnLi9UYWdzL1Rocm93c1RhZycpO1xudmFyIFJldHVyblRhZyA9IHJlcXVpcmUoJy4vVGFncy9SZXR1cm5UYWcnKTtcbnZhciBDYWxsYmFja1RhZyA9IHJlcXVpcmUoJy4vVGFncy9DYWxsYmFja1RhZycpO1xudmFyIFRhYnVsYXJUYWdHcm91cCA9IHJlcXVpcmUoJy4vVGFidWxhclRhZ0dyb3VwJyk7XG52YXIgeyB3aGVyZSB9ID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cbmNvbnN0IEhBTkRMRURfVEFHUyA9IFtcbiAgJ2FsaWFzJyxcbiAgJ2FzeW5jJyxcbiAgJ2NhbGxiYWNrJyxcbiAgJ2NsYXNzJyxcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2RlcHJlY2F0ZWQnLFxuICAnZXhhbXBsZScsXG4gICdleHRlbmRzJyxcbiAgJ21lbWJlck9mJyxcbiAgJ21ldGhvZCcsXG4gICdtb2R1bGUnLFxuICAnbmFtZScsXG4gICduYW1lc3BhY2UnLFxuICAncGFyYW0nLFxuICAncHJlc2VydmVPcmRlcicsXG4gICdwcml2YXRlJyxcbiAgJ3Byb3BlcnR5JyxcbiAgJ3Byb3RlY3RlZCcsXG4gICdyZXR1cm4nLFxuICAnc2VlJyxcbiAgJ3N0YXRpYycsXG4gICd0aHJvd3MnLFxuICAndHlwZScsXG4gICd0eXBlZGVmJ1xuXTtcblxudmFyIERvY1RhZ3MgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnRG9jVGFncycsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgY29uZmlnOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgdGFnczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICAgIGNhbGxiYWNrczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICAgIHdpdGhFeGFtcGxlczogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgd2l0aEFkZGl0aW9uYWxSZXNvdXJjZXM6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGFnczogW10sXG4gICAgICBjYWxsYmFja3M6IFtdLFxuICAgICAgd2l0aEV4YW1wbGVzOiB0cnVlLFxuICAgICAgd2l0aEFkZGl0aW9uYWxSZXNvdXJjZXM6IHRydWVcbiAgICB9O1xuICB9LFxuXG4gIC8vIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24obmV4dFByb3BzKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMucHJvcHMudGFncyAhPT0gbmV4dFByb3BzLnRhZ3M7XG4gIC8vIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBwYXJhbVRhZ3MgPSB3aGVyZSh0aGlzLnByb3BzLnRhZ3MsIHsgdHlwZTogJ3BhcmFtJyB9KTtcbiAgICB2YXIgcmV0dXJuVGFncyA9IHdoZXJlKHRoaXMucHJvcHMudGFncywgeyB0eXBlOiAncmV0dXJuJyB9KTtcbiAgICB2YXIgdW5oYW5kbGVkVGFncyA9IHRoaXMucHJvcHMudGFncy5maWx0ZXIoZnVuY3Rpb24odGFnKSB7XG4gICAgICByZXR1cm4gSEFORExFRF9UQUdTLmluZGV4T2YodGFnLnR5cGUpID09PSAtMTtcbiAgICB9KTtcbiAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvYy1lbnRpdHlfX3RhZ3NcIj5cbiAgICAgICAgPFRhYnVsYXJUYWdHcm91cFxuICAgICAgICAgIGFsd2F5c0dyb3VwXG4gICAgICAgICAgdGFnTmFtZT1cImRpdlwiXG4gICAgICAgICAgdGFncz17cGFyYW1UYWdzfVxuICAgICAgICAgIHJlbmRlcmVyPXtQYXJhbVRhZ31cbiAgICAgICAgICBoaWRlSWZFbXB0eT17Y29uZmlnLmhpZGVCbGFua1BhcmFtZXRlcnN9XG4gICAgICAgID5cbiAgICAgICAgICBQYXJhbWV0ZXJzICh7cGFyYW1UYWdzLmxlbmd0aH0pXG4gICAgICAgIDwvVGFidWxhclRhZ0dyb3VwPlxuXG4gICAgICAgIDxUYWJ1bGFyVGFnR3JvdXBcbiAgICAgICAgICBhbHdheXNHcm91cFxuICAgICAgICAgIHRhZ05hbWU9XCJkaXZcIlxuICAgICAgICAgIHRhZ3M9e3JldHVyblRhZ3N9XG4gICAgICAgICAgdGFnVHlwZT1cInJldHVyblwiXG4gICAgICAgICAgcmVuZGVyZXI9e1JldHVyblRhZ31cbiAgICAgICAgICBoaWRlSWZFbXB0eT17Y29uZmlnLmhpZGVCbGFua1JldHVybnN9XG4gICAgICAgID5cbiAgICAgICAgICB7cmV0dXJuVGFncy5sZW5ndGggPiAxID8gJ1JldHVybiBWYWx1ZXMnIDogJ1JldHVybiBWYWx1ZSd9XG4gICAgICAgIDwvVGFidWxhclRhZ0dyb3VwPlxuXG4gICAgICAgIHt0aGlzLnByb3BzLndpdGhFeGFtcGxlcyAmJiAoXG4gICAgICAgICAgPFRhZ0dyb3VwIGFsd2F5c0dyb3VwIHRhZ3M9e3RoaXMucHJvcHMudGFnc30gdGFnVHlwZT1cImV4YW1wbGVcIiByZW5kZXJlcj17RXhhbXBsZVRhZ30gdGFnTmFtZT1cInVsXCI+XG4gICAgICAgICAgICBFeGFtcGxlc1xuICAgICAgICAgIDwvVGFnR3JvdXA+XG4gICAgICAgICl9XG5cbiAgICAgICAgPFRhZ0dyb3VwIGFsd2F5c0dyb3VwIHRhZ05hbWU9XCJ1bFwiIHRhZ3M9e3RoaXMucHJvcHMudGFnc30gdGFnVHlwZT1cInRocm93c1wiIHJlbmRlcmVyPXtUaHJvd3NUYWd9PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR5cGUtYXR0ZW50aW9uXCI+RXhjZXB0aW9uczwvc3Bhbj5cbiAgICAgICAgPC9UYWdHcm91cD5cblxuICAgICAgICA8VHlwZURlZlRhZ0dyb3VwIGFsd2F5c0dyb3VwIHRhZ05hbWU9XCJ1bFwiIGRvY3VtZW50cz17dGhpcy5wcm9wcy5jYWxsYmFja3N9IHJlbmRlcmVyPXtDYWxsYmFja1RhZ30+XG4gICAgICAgICAgQ2FsbGJhY2sgRGVmaW5pdGlvbnNcbiAgICAgICAgPC9UeXBlRGVmVGFnR3JvdXA+XG5cbiAgICAgICAge3RoaXMucHJvcHMud2l0aEFkZGl0aW9uYWxSZXNvdXJjZXMgJiYgKFxuICAgICAgICAgIDxUYWdHcm91cCBhbHdheXNHcm91cCB0YWdzPXt0aGlzLnByb3BzLnRhZ3N9IHRhZ1R5cGU9XCJzZWVcIiByZW5kZXJlcj17U2VlVGFnfSB0YWdOYW1lPVwidWxcIj5cbiAgICAgICAgICAgIFN1Z2dlc3RlZCBSZWFkaW5nXG4gICAgICAgICAgPC9UYWdHcm91cD5cbiAgICAgICAgKX1cblxuICAgICAgICB7dW5oYW5kbGVkVGFncy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICB1bmhhbmRsZWRUYWdzLm1hcCh0aGlzLnJlbmRlclRhZ1N0cmluZylcbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyVGFnU3RyaW5nKHRhZykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGtleT17dGFnLnN0cmluZ30gY2xhc3NOYW1lPVwidHlwZS1hdHRlbnRpb25cIj5cbiAgICAgICAgPHByZT57XCJVbmtub3duIHRhZzpcXG5cIiArIEpTT04uc3RyaW5naWZ5KHRhZywgbnVsbCwgMil9PC9wcmU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBEb2NUYWdzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvRG9jVGFncy5qcyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgeyB3aGVyZSB9ID0gcmVxdWlyZSgnbG9kYXNoJyk7XG52YXIgQ29sbGFwc2libGUgPSByZXF1aXJlKCdtaXhpbnMvQ29sbGFwc2libGUnKTtcbnZhciBjbGFzc1NldCA9IHJlcXVpcmUoJ3V0aWxzL2NsYXNzU2V0Jyk7XG5cbnZhciBUYWdHcm91cCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgbWl4aW5zOiBbIENvbGxhcHNpYmxlIF0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgdGFnTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0YWdUeXBlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFsd2F5c0dyb3VwOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICB0YWdzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG5cbiAgICByZW5kZXJlcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2xhc3NOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBSZWFjdC5Qcm9wVHlwZXMuYW55LFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgICAgYWx3YXlzR3JvdXA6IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgdmFyIERPTVRhZyA9IHRoaXMucHJvcHMudGFnTmFtZTtcbiAgICB2YXIgdGFncyA9IHRoaXMucHJvcHMudGFnVHlwZSA/XG4gICAgICB3aGVyZSh0aGlzLnByb3BzLnRhZ3MsIHsgdHlwZTogdGhpcy5wcm9wcy50YWdUeXBlIH0pIDpcbiAgICAgIHRoaXMucHJvcHMudGFnc1xuICAgIDtcbiAgICB2YXIgUmVuZGVyZXIgPSB0aGlzLnByb3BzLnJlbmRlcmVyO1xuICAgIHZhciBpc0NvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQoKTtcbiAgICB2YXIgY2xhc3NOYW1lO1xuXG4gICAgaWYgKHRhZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZWxzZSBpZiAodGFncy5sZW5ndGggPT09IDEgJiYgIXRoaXMucHJvcHMuYWx3YXlzR3JvdXApIHtcbiAgICAgIHJldHVybiA8UmVuZGVyZXIgd2l0aFRpdGxlIHsuLi50YWdzWzBdfSAvPjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjbGFzc05hbWUgPSBjbGFzc1NldCh7XG4gICAgICAgICd0YWctZ3JvdXAnOiB0cnVlLFxuICAgICAgICAndGFnLWdyb3VwLS1jb2xsYXBzZWQnOiBpc0NvbGxhcHNlZCxcbiAgICAgICAgJ2NvbGxhcHNpYmxlJzogdGhpcy5pc0NvbGxhcHNpYmxlKCksXG4gICAgICAgICdjb2xsYXBzaWJsZS0tY29sbGFwc2VkJzogaXNDb2xsYXBzZWQsXG4gICAgICAgICd0YWctZ3JvdXAtLXNpbmdsZS1jaGlsZCc6IHRhZ3MubGVuZ3RoID09PSAxXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPERPTVRhZyBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gJHt0aGlzLnByb3BzLmNsYXNzTmFtZXx8Jyd9YH0+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW4gJiYgKFxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRhZy1ncm91cF9faGVhZGVyIGNvbGxhcHNpYmxlLWhlYWRlclwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQ29sbGFwc2VkfT5cbiAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ29sbGFwc2VyKCl9XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgeyFpc0NvbGxhcHNlZCAmJiB0YWdzLm1hcChmdW5jdGlvbih0YWcsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiA8UmVuZGVyZXIga2V5PXtpfSB3aXRoVGl0bGU9e2ZhbHNlfSB7Li4udGFnfSAvPjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9ET01UYWc+XG4gICAgICApO1xuICAgIH1cbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVGFnR3JvdXA7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9UYWdzL1RhZ0dyb3VwLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1wibWl4aW5zL0NvbGxhcHNpYmxlXCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwibWl4aW5zL0NvbGxhcHNpYmxlXFxcIl1cIlxuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBDb2xsYXBzaWJsZSA9IHJlcXVpcmUoJ21peGlucy9Db2xsYXBzaWJsZScpO1xudmFyIGNsYXNzU2V0ID0gcmVxdWlyZSgndXRpbHMvY2xhc3NTZXQnKTtcblxudmFyIFR5cGVEZWZUYWdHcm91cCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgbWl4aW5zOiBbIENvbGxhcHNpYmxlIF0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgdGFnTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhbHdheXNHcm91cDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgZG9jdW1lbnRzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG5cbiAgICByZW5kZXJlcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2xhc3NOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBSZWFjdC5Qcm9wVHlwZXMuYW55LFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgICAgYWx3YXlzR3JvdXA6IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgdmFyIERPTVRhZyA9IHRoaXMucHJvcHMudGFnTmFtZTtcbiAgICB2YXIgZG9jdW1lbnRzID0gdGhpcy5wcm9wcy5kb2N1bWVudHM7XG4gICAgdmFyIFJlbmRlcmVyID0gdGhpcy5wcm9wcy5yZW5kZXJlcjtcbiAgICB2YXIgaXNDb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCk7XG4gICAgdmFyIGNsYXNzTmFtZTtcblxuICAgIGlmIChkb2N1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZWxzZSBpZiAoZG9jdW1lbnRzLmxlbmd0aCA9PT0gMSAmJiAhdGhpcy5wcm9wcy5hbHdheXNHcm91cCkge1xuICAgICAgcmV0dXJuIDxSZW5kZXJlciB3aXRoVGl0bGUgZG9jdW1lbnQ9e2RvY3VtZW50c1swXX0gLz47XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY2xhc3NOYW1lID0gY2xhc3NTZXQoe1xuICAgICAgICAndGFnLWdyb3VwJzogdHJ1ZSxcbiAgICAgICAgJ3RhZy1ncm91cC0tY29sbGFwc2VkJzogaXNDb2xsYXBzZWQsXG4gICAgICAgICdjb2xsYXBzaWJsZSc6IHRoaXMuaXNDb2xsYXBzaWJsZSgpLFxuICAgICAgICAnY29sbGFwc2libGUtLWNvbGxhcHNlZCc6IGlzQ29sbGFwc2VkLFxuICAgICAgICAndGFnLWdyb3VwLS1zaW5nbGUtY2hpbGQnOiBkb2N1bWVudHMubGVuZ3RoID09PSAxXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPERPTVRhZyBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gJHt0aGlzLnByb3BzLmNsYXNzTmFtZXx8Jyd9YH0+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW4gJiYgKFxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRhZy1ncm91cF9faGVhZGVyIGNvbGxhcHNpYmxlLWhlYWRlclwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQ29sbGFwc2VkfT5cbiAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ29sbGFwc2VyKCl9XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgeyFpc0NvbGxhcHNlZCAmJiBkb2N1bWVudHMubWFwKGZ1bmN0aW9uKHRhZywgaSkge1xuICAgICAgICAgICAgcmV0dXJuIDxSZW5kZXJlciBrZXk9e2l9IHdpdGhUaXRsZT17ZmFsc2V9IGRvY3VtZW50PXt0YWd9IC8+O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L0RPTVRhZz5cbiAgICAgICk7XG4gICAgfVxuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUeXBlRGVmVGFnR3JvdXA7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9UYWdzL1R5cGVEZWZUYWdHcm91cC5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgSGlnaGxpZ2h0ZWRUZXh0ID0gcmVxdWlyZSgnY29tcG9uZW50cy9IaWdobGlnaHRlZFRleHQnKTtcblxuY29uc3QgeyBzaGFwZSwgc3RyaW5nIH0gPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbmNvbnN0IEV4YW1wbGVUYWcgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiBcIkV4YW1wbGVUYWdcIixcblxuICBwcm9wVHlwZXM6IHtcbiAgICBzdHJpbmc6IHN0cmluZyxcbiAgICB0eXBlSW5mbzogc2hhcGUoe1xuICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgZGVzY3JpcHRpb246IHN0cmluZyxcbiAgICB9KVxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hbWUsIGRlc2NyaXB0aW9uLCB9ID0gdGhpcy5wcm9wcy50eXBlSW5mbztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGUtdGFnXCI+XG4gICAgICAgIHtuYW1lICYmIChcbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbmFtZSB9fSAvPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKX1cblxuICAgICAgICA8SGlnaGxpZ2h0ZWRUZXh0IGNsYXNzTmFtZT1cImV4YW1wbGUtdGFnX19jb2RlXCI+XG4gICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICA8L0hpZ2hsaWdodGVkVGV4dD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV4YW1wbGVUYWc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9UYWdzL0V4YW1wbGVUYWcuanMiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgSGlnaGxpZ2h0ZWRUZXh0ID0gcmVxdWlyZSgnY29tcG9uZW50cy9IaWdobGlnaHRlZFRleHQnKTtcbnZhciBUeXBlTmFtZXMgPSByZXF1aXJlKCcuL1R5cGVOYW1lcycpO1xudmFyIERlZmF1bHRWYWx1ZSA9IHJlcXVpcmUoJy4vRGVmYXVsdFZhbHVlJyk7XG5cbnZhciBQYXJhbVRhZyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6IFwiUGFyYW1UYWdcIixcblxuICBwcm9wVHlwZXM6IHtcbiAgICB3aXRoVGl0bGU6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIHR5cGVJbmZvOiBSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgdHlwZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIG5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBkZWZhdWx0VmFsdWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBkZXNjcmlwdGlvbjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xuICAgIH0pXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd2l0aFRpdGxlOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdHlwZUluZm8gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGNsYXNzTmFtZT1cInBhcmFtLXRhZ1wiPlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInBhcmFtLXRhZ19faGVhZGVyXCI+XG4gICAgICAgICAge3RoaXMucHJvcHMud2l0aFRpdGxlICYmIDxzdHJvbmc+UGFyYW1ldGVyeycgJ308L3N0cm9uZz59XG5cbiAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJwYXJhbS10YWdfX25hbWVcIj57dHlwZUluZm8ubmFtZX08L2NvZGU+XG5cbiAgICAgICAgICB7dHlwZUluZm8udHlwZSAmJiAoXG4gICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJwYXJhbS10YWdfX3R5cGVzXCI+XG4gICAgICAgICAgICAgIHsnOiAnfVxuXG4gICAgICAgICAgICAgIDxUeXBlTmFtZXMgdHlwZT17dHlwZUluZm8udHlwZX0gLz5cbiAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICApfVxuICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICB7dHlwZUluZm8uZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgIDxIaWdobGlnaHRlZFRleHQgY2xhc3NOYW1lPVwicGFyYW0tdGFnX19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAge3R5cGVJbmZvLmRlc2NyaXB0aW9uLnJlcGxhY2UoL1sgXXs0LH0vZywgJycpfVxuICAgICAgICAgIDwvSGlnaGxpZ2h0ZWRUZXh0PlxuICAgICAgICApfVxuXG4gICAgICAgIDxEZWZhdWx0VmFsdWUgZGVmYXVsdFZhbHVlPXt0eXBlSW5mby5kZWZhdWx0VmFsdWV9IC8+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcmFtVGFnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvVGFncy9QYXJhbVRhZy5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IERlZmF1bHRWYWx1ZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgZGVmYXVsdFZhbHVlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRlZmF1bHRWYWx1ZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghZGVmYXVsdFZhbHVlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHAgY2xhc3NOYW1lPVwicHJvcGVydHktdGFnX19kZWZhdWx0LXZhbHVlXCI+XG4gICAgICAgIERlZmF1bHRzIHRvOiA8Y29kZT57ZGVmYXVsdFZhbHVlfTwvY29kZT5cbiAgICAgIDwvcD5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBEZWZhdWx0VmFsdWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL1RhZ3MvRGVmYXVsdFZhbHVlLmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBNYXJrZG93blRleHQgPSByZXF1aXJlKCdjb21wb25lbnRzL01hcmtkb3duVGV4dCcpO1xuY29uc3QgeyBzaGFwZSwgc3RyaW5nIH0gPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbmNvbnN0IFNlZVRhZyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgdHlwZUluZm86IHNoYXBlKHtcbiAgICAgIG5hbWU6IHN0cmluZy5pc1JlcXVpcmVkXG4gICAgfSlcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJzZWUtdGFnXCI+XG4gICAgICAgIDxNYXJrZG93blRleHQgdGFnTmFtZT1cInNwYW5cIj57dGhpcy5wcm9wcy50eXBlSW5mby5uYW1lfTwvTWFya2Rvd25UZXh0PlxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZWVUYWc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9UYWdzL1NlZVRhZy5qcyIsIm1vZHVsZS5leHBvcnRzID0gTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcImNvbXBvbmVudHMvTWFya2Rvd25UZXh0XCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwiY29tcG9uZW50cy9NYXJrZG93blRleHRcXFwiXVwiXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IEhpZ2hsaWdodGVkVGV4dCA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvSGlnaGxpZ2h0ZWRUZXh0Jyk7XG5jb25zdCBUeXBlTmFtZXMgPSByZXF1aXJlKCcuL1R5cGVOYW1lcycpO1xuXG5jb25zdCB7IHNoYXBlLCBzdHJpbmcsIG9iamVjdCB9ID0gUmVhY3QuUHJvcFR5cGVzO1xuXG5jb25zdCBUaHJvd3NUYWcgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHByb3BUeXBlczoge1xuICAgIHR5cGVJbmZvOiBzaGFwZSh7XG4gICAgICB0eXBlOiBvYmplY3QsXG4gICAgICBkZXNjcmlwdGlvbjogc3RyaW5nLFxuICAgIH0pLFxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGNsYXNzTmFtZT1cInRocm93cy10YWdcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgPFR5cGVOYW1lcyB0eXBlPXt0aGlzLnByb3BzLnR5cGVJbmZvLnR5cGV9IC8+XG4gICAgICAgIDwvcD5cblxuICAgICAgICB7JyAtICd9XG5cbiAgICAgICAgPEhpZ2hsaWdodGVkVGV4dFxuICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiXG4gICAgICAgICAgY2hpbGRyZW49e3RoaXMucHJvcHMudHlwZUluZm8uZGVzY3JpcHRpb259XG4gICAgICAgIC8+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRocm93c1RhZztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL1RhZ3MvVGhyb3dzVGFnLmpzIiwidmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIEhpZ2hsaWdodGVkVGV4dCA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvSGlnaGxpZ2h0ZWRUZXh0Jyk7XG52YXIgVHlwZU5hbWVzID0gcmVxdWlyZSgnLi9UeXBlTmFtZXMnKTtcblxudmFyIFJldHVyblRhZyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6IFwiUmV0dXJuVGFnXCIsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgd2l0aFRpdGxlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICB0eXBlSW5mbzogUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHR5cGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgICBuYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgZGVmYXVsdFZhbHVlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgZGVzY3JpcHRpb246IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbiAgICB9KVxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpdGhUaXRsZTogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHR5cGVJbmZvIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGhhc05hbWUgPSBCb29sZWFuKHR5cGVJbmZvLm5hbWUpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJyZXR1cm4tdGFnXCI+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicmV0dXJuLXRhZ19faGVhZGVyXCI+XG4gICAgICAgICAge3RoaXMucHJvcHMud2l0aFRpdGxlICYmIChcbiAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgIFJldHVybnNcbiAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7aGFzTmFtZSAmJiA8Y29kZSBjbGFzc05hbWU9XCJyZXR1cm4tdGFnX19uYW1lXCI+e3R5cGVJbmZvLm5hbWV9PC9jb2RlPn1cblxuICAgICAgICAgIHt0eXBlSW5mby50eXBlICYmIChcbiAgICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT1cInJldHVybi10YWdfX3R5cGVzXCI+XG4gICAgICAgICAgICAgIHtoYXNOYW1lICYmICc6ICd9XG5cbiAgICAgICAgICAgICAgPFR5cGVOYW1lcyB0eXBlPXt0eXBlSW5mby50eXBlfSAvPlxuXG4gICAgICAgICAgICAgIHt0eXBlSW5mby5kZWZhdWx0VmFsdWUgJiYgKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBhcmFtLXRhZ19fZGVmYXVsdC12YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgeycgKCd9ZGVmYXVsdHMgdG86IDxjb2RlPnt0eXBlSW5mby5kZWZhdWx0VmFsdWV9PC9jb2RlPilcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2NvZGU+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAge3R5cGVJbmZvLmRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICA8SGlnaGxpZ2h0ZWRUZXh0IGNsYXNzTmFtZT1cInJldHVybi10YWdfX2Rlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICB7dHlwZUluZm8uZGVzY3JpcHRpb24ucmVwbGFjZSgvWyBdezUsOH0vZywgJycpfVxuICAgICAgICAgIDwvSGlnaGxpZ2h0ZWRUZXh0PlxuICAgICAgICApfVxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZXR1cm5UYWc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9UYWdzL1JldHVyblRhZy5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgRG9jID0gcmVxdWlyZSgnLi4vRG9jJyk7XG5cbmNvbnN0IHsgc2hhcGUsIHN0cmluZywgb2JqZWN0IH0gPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbmNvbnN0IENhbGxiYWNrVGFnID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBwcm9wVHlwZXM6IHtcbiAgICBzdHJpbmc6IHN0cmluZyxcbiAgICB0eXBlSW5mbzogc2hhcGUoe1xuICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgZGVzY3JpcHRpb246IHN0cmluZyxcbiAgICB9KSxcbiAgICBkb2N1bWVudDogb2JqZWN0LmlzUmVxdWlyZWQsXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGxiYWNrLXRhZ1wiPlxuICAgICAgICA8RG9jIGRvYz17dGhpcy5wcm9wcy5kb2N1bWVudH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbGxiYWNrVGFnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvVGFncy9DYWxsYmFja1RhZy5qcyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgeyB3aGVyZSB9ID0gcmVxdWlyZSgnbG9kYXNoJyk7XG52YXIgQ29sbGFwc2libGUgPSByZXF1aXJlKCdtaXhpbnMvQ29sbGFwc2libGUnKTtcbnZhciBjbGFzc1NldCA9IHJlcXVpcmUoJ3V0aWxzL2NsYXNzU2V0Jyk7XG52YXIgVHlwZU5hbWVzID0gcmVxdWlyZSgnLi9UYWdzL1R5cGVOYW1lcycpO1xudmFyIERlZmF1bHRWYWx1ZSA9IHJlcXVpcmUoJy4vVGFncy9EZWZhdWx0VmFsdWUnKTtcbnZhciBIaWdobGlnaHRlZFRleHQgPSByZXF1aXJlKCdjb21wb25lbnRzL0hpZ2hsaWdodGVkVGV4dCcpO1xuXG52YXIgVGFidWxhclRhZ0dyb3VwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBtaXhpbnM6IFsgQ29sbGFwc2libGUgXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICB0YWdOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRhZ1R5cGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWx3YXlzR3JvdXA6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIHRhZ3M6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcbiAgICBoaWRlSWZFbXB0eTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG5cbiAgICByZW5kZXJlcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2xhc3NOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBSZWFjdC5Qcm9wVHlwZXMuYW55LFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgICAgYWx3YXlzR3JvdXA6IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgdmFyIERPTVRhZyA9IHRoaXMucHJvcHMudGFnTmFtZTtcbiAgICB2YXIgdGFncyA9IHRoaXMucHJvcHMudGFnVHlwZSA/XG4gICAgICB3aGVyZSh0aGlzLnByb3BzLnRhZ3MsIHsgdHlwZTogdGhpcy5wcm9wcy50YWdUeXBlIH0pIDpcbiAgICAgIHRoaXMucHJvcHMudGFnc1xuICAgIDtcbiAgICB2YXIgUmVuZGVyZXIgPSB0aGlzLnByb3BzLnJlbmRlcmVyO1xuICAgIHZhciBpc0NvbGxhcHNlZCA9IHRoaXMuaXNDb2xsYXBzZWQoKTtcbiAgICB2YXIgY2xhc3NOYW1lO1xuXG4gICAgaWYgKHRhZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5wcm9wcy5oaWRlSWZFbXB0eSAmJiB0YWdzLmV2ZXJ5KHRhZ0lzQmxhbmspKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZWxzZSBpZiAodGFncy5sZW5ndGggPT09IDEgJiYgIXRoaXMucHJvcHMuYWx3YXlzR3JvdXApIHtcbiAgICAgIHJldHVybiA8UmVuZGVyZXIgd2l0aFRpdGxlIHsuLi50YWdzWzBdfSAvPjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjbGFzc05hbWUgPSBjbGFzc1NldCh0aGlzLnByb3BzLmNsYXNzTmFtZSwge1xuICAgICAgICAndGFnLWdyb3VwJzogdHJ1ZSxcbiAgICAgICAgJ3RhZy1ncm91cC0tdGFidWxhcic6IHRydWUsXG4gICAgICAgICd0YWctZ3JvdXAtLWNvbGxhcHNlZCc6IGlzQ29sbGFwc2VkLFxuICAgICAgICAnY29sbGFwc2libGUnOiB0aGlzLmlzQ29sbGFwc2libGUoKSxcbiAgICAgICAgJ2NvbGxhcHNpYmxlLS1jb2xsYXBzZWQnOiBpc0NvbGxhcHNlZCxcbiAgICAgICAgJ3RhZy1ncm91cC0tc2luZ2xlLWNoaWxkJzogdGFncy5sZW5ndGggPT09IDFcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RE9NVGFnIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbiAmJiAoXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGFnLWdyb3VwX19oZWFkZXIgY29sbGFwc2libGUtaGVhZGVyXCIgb25DbGljaz17dGhpcy50b2dnbGVDb2xsYXBzZWR9PlxuICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDb2xsYXBzZXIoKX1cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7IWlzQ29sbGFwc2VkICYmIChcbiAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIHt0YWdzLm1hcCh0aGlzLnJlbmRlclRhZyl9XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRE9NVGFnPlxuICAgICAgKTtcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyVGFnKHRhZywgaSkge1xuICAgIGNvbnN0IHsgdHlwZUluZm8gfSA9IHRhZztcbiAgICBjb25zdCBoYXNOYW1lID0gQm9vbGVhbih0eXBlSW5mby5uYW1lICYmIHR5cGVJbmZvLm5hbWUubGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRyIGtleT17aX0gY2xhc3NOYW1lPVwicGFyYW0tdGFnXCI+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWctZ3JvdXBfX3ByaW1hcnktY29sdW1uXCI+XG4gICAgICAgICAge2hhc05hbWUgJiYgKFxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJwYXJhbS10YWdfX2hlYWRlclwiPlxuICAgICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJwYXJhbS10YWdfX25hbWVcIj57dHlwZUluZm8ubmFtZX08L2NvZGU+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICApfVxuICAgICAgICA8L3RkPlxuXG4gICAgICAgIDx0ZD5cbiAgICAgICAgICB7dHlwZUluZm8udHlwZSAmJiAoXG4gICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJwYXJhbS10YWdfX3R5cGVzXCI+XG4gICAgICAgICAgICAgIDxUeXBlTmFtZXMgdHlwZT17dHlwZUluZm8udHlwZX0gLz5cbiAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge3R5cGVJbmZvLmRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgIDxIaWdobGlnaHRlZFRleHQgY2xhc3NOYW1lPVwicGFyYW0tdGFnX19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICB7dHlwZUluZm8uZGVzY3JpcHRpb24ucmVwbGFjZSgvWyBdezQsfS9nLCAnJyl9XG4gICAgICAgICAgICA8L0hpZ2hsaWdodGVkVGV4dD5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPERlZmF1bHRWYWx1ZSBkZWZhdWx0VmFsdWU9e3R5cGVJbmZvLmRlZmF1bHRWYWx1ZX0gLz5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgKTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHRhZ0lzQmxhbmsoeyBzdHJpbmcgfSkge1xuICByZXR1cm4gIXN0cmluZyB8fCAhc3RyaW5nLmxlbmd0aCA9PT0gMFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRhYnVsYXJUYWdHcm91cDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL1RhYnVsYXJUYWdHcm91cC5qcyIsInZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBEZXByZWNhdGVkVGFnID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBwcm9wVHlwZXM6IHtcbiAgICBzdHJpbmc6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGJsb2NrcXVvdGUgY2xhc3NOYW1lPVwiYmxvY2txdW90ZS0td2FybmluZ1wiPlxuICAgICAgICA8cD48c3Ryb25nPkRlcHJlY2F0ZWQ8L3N0cm9uZz48L3A+XG5cbiAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRoaXMucHJvcHMuc3RyaW5nIH19IC8+XG4gICAgICA8L2Jsb2NrcXVvdGU+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGVwcmVjYXRlZFRhZztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL1RhZ3MvRGVwcmVjYXRlZFRhZy5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFByb3BlcnR5VGFnID0gcmVxdWlyZSgnLi9UYWdzL1Byb3BlcnR5VGFnJyk7XG5jb25zdCB7IGFzc2lnbiB9ID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCB7IFByb3BUeXBlcywgfSA9IFJlYWN0O1xuXG5jb25zdCBPYmplY3RTeW5vcHNpcyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICBwcm9wVHlwZXM6IHtcbiAgICBkb2M6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgYW5jaG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFuY2hvciwgZG9jIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRhZ3MgPSB0aGlzLnByb3BzLmRvYy50YWdzLmZpbHRlcih0YWcgPT4gdGFnLnR5cGUgPT09ICdwcm9wZXJ0eScpO1xuXG4gICAgY29uc3QgdHJlZSA9IHRhZ3NcbiAgICAgIC5yZWR1Y2UoKG1hcCwgdGFnKSA9PiB7XG4gICAgICAgIGNvbnN0IGZyYWdtZW50cyA9IHRhZy50eXBlSW5mby5uYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgIGNvbnN0IHBhcmVudEtleSA9IGZyYWdtZW50cy5zbGljZSgwLCAtMSkuam9pbignLicpO1xuXG4gICAgICAgIGlmICghbWFwW3BhcmVudEtleV0pIHtcbiAgICAgICAgICBtYXBbcGFyZW50S2V5XSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFwW3BhcmVudEtleV0ucHVzaCh0YWcpXG5cbiAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgIH0sIHt9KVxuICAgIDtcblxuICAgIGNvbnN0IHJlbmRlciA9IGtleSA9PiB7XG4gICAgICBjb25zdCBjaGlsZFRhZ3MgPSB0cmVlW2tleV07XG5cbiAgICAgIGlmICghY2hpbGRUYWdzIHx8ICFjaGlsZFRhZ3MubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICBjaGlsZFRhZ3MubWFwKCh0YWcsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSByZW5kZXIodGFnLnR5cGVJbmZvLm5hbWUpXG4gICAgICAgICAgY29uc3QgaXNSb290ID0gdGFnLnR5cGVJbmZvLm5hbWUgPT09IGRvYy5uYW1lO1xuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtgJHtrZXl9X18ke2luZGV4fWB9PlxuICAgICAgICAgICAgICA8UHJvcGVydHlUYWdcbiAgICAgICAgICAgICAgICBhbmNob3I9e2lzUm9vdCAmJiBhbmNob3IgfHwgbnVsbH1cbiAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZT17aXNSb290fVxuICAgICAgICAgICAgICAgIHR5cGVJbmZvPXthc3NpZ24oe30sIHRhZy50eXBlSW5mbywge1xuICAgICAgICAgICAgICAgICAgbmFtZTogdGFnLnR5cGVJbmZvLm5hbWUuc3BsaXQoJy4nKS5zbGljZSgtMSkuam9pbignLicpXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgIDwvUHJvcGVydHlUYWc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwianMtb2JqZWN0LXN5bm9wc2lzXCI+XG4gICAgICAgIHtyZW5kZXIoJycpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0U3lub3BzaXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL09iamVjdFN5bm9wc2lzLmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBIaWdobGlnaHRlZFRleHQgPSByZXF1aXJlKCdjb21wb25lbnRzL0hpZ2hsaWdodGVkVGV4dCcpO1xuY29uc3QgSGVhZGluZ0FuY2hvciA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvSGVhZGluZ0FuY2hvcicpO1xuY29uc3QgVHlwZU5hbWVzID0gcmVxdWlyZSgnLi9UeXBlTmFtZXMnKTtcbmNvbnN0IERlZmF1bHRWYWx1ZSA9IHJlcXVpcmUoJy4vRGVmYXVsdFZhbHVlJyk7XG5jb25zdCBkZXNjcmliZU5vZGUgPSByZXF1aXJlKCcuLi8uLi91dGlscy9kZXNjcmliZU5vZGUnKTtcbmNvbnN0IERvY0NsYXNzaWZpZXIgPSByZXF1aXJlKCcuLi8uLi91dGlscy9Eb2NDbGFzc2lmaWVyJyk7XG5jb25zdCBDb2xsYXBzaWJsZSA9IHJlcXVpcmUoJ21peGlucy9Db2xsYXBzaWJsZScpO1xuY29uc3QgY2xhc3NTZXQgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5jb25zdCB7IHNoYXBlLCBzdHJpbmcsIG9iamVjdCwgbm9kZSB9ID0gUmVhY3QuUHJvcFR5cGVzO1xuXG5jb25zdCBQcm9wZXJ0eVRhZyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgbWl4aW5zOiBbIENvbGxhcHNpYmxlIF0sXG5cbiAgZGlzcGxheU5hbWU6IFwiUHJvcGVydHlUYWdcIixcblxuICBwcm9wVHlwZXM6IHtcbiAgICBjaGlsZHJlbjogbm9kZSxcbiAgICBhbmNob3I6IHN0cmluZyxcbiAgICB0eXBlSW5mbzogc2hhcGUoe1xuICAgICAgdHlwZTogb2JqZWN0LFxuICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgZGVmYXVsdFZhbHVlOiBzdHJpbmcsXG4gICAgICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gICAgfSksXG5cbiAgICBkb2M6IG9iamVjdCxcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhbmNob3IsIHR5cGVJbmZvLCBkb2MgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0eXBlSW5mby5kZXNjcmlwdGlvbiB8fCBkb2MgJiYgZG9jLmRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IHR5cGVJbmZvLmRlZmF1bHRWYWx1ZSB8fCBkb2MgJiYgZGVzY3JpYmVOb2RlKGRvYy5ub2RlSW5mbyk7XG4gICAgY29uc3QgY29sbGFwc2VkID0gdGhpcy5pc0NvbGxhcHNlZCgpO1xuICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gdGhpcy5pc0NvbGxhcHNpYmxlKCkgJiYgKGRlc2NyaXB0aW9uICYmIGRlc2NyaXB0aW9uLmxlbmd0aClcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NTZXQoXCJwcm9wZXJ0eS10YWdcIiwge1xuICAgICAgICAnY29sbGFwc2libGUnOiBjb2xsYXBzaWJsZSxcbiAgICAgICAgJ2NvbGxhcHNpYmxlLS1jb2xsYXBzZWQnOiB0aGlzLmlzQ29sbGFwc2VkKCksXG4gICAgICB9KX0+XG4gICAgICAgIDxoZWFkZXJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzU2V0KFwicHJvcGVydHktdGFnX19oZWFkZXIgYW5jaG9yYWJsZS1oZWFkaW5nXCIsIHtcbiAgICAgICAgICAgIFwiY29sbGFwc2libGUtaGVhZGVyXCI6IGNvbGxhcHNpYmxlXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVDb2xsYXBzZWR9XG4gICAgICAgID5cbiAgICAgICAgICB7Y29sbGFwc2libGUgJiYgdGhpcy5yZW5kZXJDb2xsYXBzZXIoKX1cbiAgICAgICAgICB7YW5jaG9yICYmIDxIZWFkaW5nQW5jaG9yLkFuY2hvciBocmVmPXt0aGlzLnByb3BzLmFuY2hvcn0gLz59XG4gICAgICAgICAge2FuY2hvciAmJiA8SGVhZGluZ0FuY2hvci5MaW5rIGhyZWY9e3RoaXMucHJvcHMuYW5jaG9yfSAvPn1cblxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb3BlcnR5LXRhZ19fbmFtZVwiPlxuICAgICAgICAgICAge3R5cGVJbmZvLm5hbWUgfHwgZG9jICYmIGRvYy5uYW1lfVxuXG4gICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgeyc6ICd9XG5cbiAgICAgICAgICA8Y29kZT48VHlwZU5hbWVzIHR5cGU9e3R5cGVJbmZvLnR5cGV9IC8+PC9jb2RlPlxuXG4gICAgICAgICAge2RvYyAmJiBEb2NDbGFzc2lmaWVyLmlzUHJpdmF0ZShkb2MpICYmIChcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1lbnRpdHlfX21vZGlmaWVyIGRvYy1lbnRpdHlfX3ByaXZhdGVcIj5QUklWQVRFPC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgIHshY29sbGFwc2VkICYmIGRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICA8SGlnaGxpZ2h0ZWRUZXh0IGNsYXNzTmFtZT1cInByb3BlcnR5LXRhZ19fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICA8L0hpZ2hsaWdodGVkVGV4dD5cbiAgICAgICAgKX1cblxuICAgICAgICB7IWNvbGxhcHNlZCAmJiBkZWZhdWx0VmFsdWUgJiYgKFxuICAgICAgICAgIDxEZWZhdWx0VmFsdWUgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9IC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgeyFjb2xsYXBzZWQgJiYgdGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb3BlcnR5VGFnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvVGFncy9Qcm9wZXJ0eVRhZy5qcyIsImNvbnN0IEsgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihub2RlSW5mbykge1xuICByZXR1cm4gZGVzY3JpYmVOb2RlKG5vZGVJbmZvLCB0cnVlKTtcbn07XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTm9kZShub2RlSW5mbywgc3RyaW5naWZ5KSB7XG4gIGNvbnN0IHByaW50ID0gc3RyaW5naWZ5ID8gcHJldHR5SlNPTiA6IElkZW50aXR5O1xuXG4gIGlmICghbm9kZUluZm8udHlwZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBpZiAobm9kZUluZm8udHlwZSA9PT0gSy5UWVBFX0xJVEVSQUwgJiYgbm9kZUluZm8ucmVnZXhwKSB7XG4gICAgcmV0dXJuIG5vZGVJbmZvLmhhc093blByb3BlcnR5KCd2YWx1ZScpID8gbm9kZUluZm8udmFsdWUgOiBudWxsO1xuICB9XG4gIGVsc2UgaWYgKG5vZGVJbmZvLnR5cGUgPT09IEsuVFlQRV9MSVRFUkFMKSB7XG4gICAgcmV0dXJuIHByaW50KG5vZGVJbmZvLmhhc093blByb3BlcnR5KCd2YWx1ZScpID8gbm9kZUluZm8udmFsdWUgOiBudWxsKTtcbiAgfVxuICBlbHNlIGlmIChub2RlSW5mby50eXBlID09PSBLLlRZUEVfQVJSQVkpIHtcbiAgICByZXR1cm4gcHJpbnQobm9kZUluZm8uZWxlbWVudHMubWFwKHggPT4gZGVzY3JpYmVOb2RlKHgsIGZhbHNlKSkpO1xuICB9XG4gIGVsc2UgaWYgKG5vZGVJbmZvLnR5cGUgPT09IEsuVFlQRV9PQkpFQ1QpIHtcbiAgICByZXR1cm4gcHJpbnQobm9kZUluZm8ucHJvcGVydGllcy5yZWR1Y2UoZnVuY3Rpb24obWFwLCB4KSB7XG4gICAgICBpZiAoeCkge1xuICAgICAgICBtYXBbeC5rZXldID0gZGVzY3JpYmVOb2RlKHgudmFsdWUsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1hcDtcbiAgICB9LCB7fSkpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIHByZXR0eUpTT04oeCkge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoeCwgbnVsbCwgMik7XG59XG5cbmZ1bmN0aW9uIElkZW50aXR5KHgpIHtcbiAgcmV0dXJuIHg7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvdXRpbHMvZGVzY3JpYmVOb2RlLmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgeyBzdHJpbmcsIGFueSB9ID0gUmVhY3QuUHJvcFR5cGVzO1xuXG5jb25zdCBEb2NHcm91cCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgdGFnTmFtZTogc3RyaW5nLFxuICAgIGxhYmVsOiBzdHJpbmcsXG4gICAgY2xhc3NOYW1lOiBzdHJpbmcsXG4gICAgY2hpbGRyZW46IGFueVxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgIH07XG4gIH0sXG5cbiAgLy8gc2hvdWxkQ29tcG9uZW50VXBkYXRlOiBmdW5jdGlvbihuZXh0UHJvcHMpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbiAhPT0gbmV4dFByb3BzLmNoaWxkcmVuO1xuICAvLyB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBET01UYWcgPSB0aGlzLnByb3BzLnRhZ05hbWU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2MtZ3JvdXBcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImRvYy1ncm91cF9faGVhZGVyXCIgY2hpbGRyZW49e3RoaXMucHJvcHMubGFiZWx9IC8+XG5cbiAgICAgICAgPERPTVRhZyBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9ET01UYWc+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBEb2NHcm91cDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL0RvY0dyb3VwLmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgQ2xhc3NCcm93c2VyID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9DbGFzc0Jyb3dzZXInKTtcbmNvbnN0IHsgYXJyYXksIG9iamVjdCwgc2hhcGUsIGJvb2wsIH0gPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0pTOjpCcm93c2VyT3V0bGV0JyxcbiAgcHJvcFR5cGVzOiB7XG4gICAgZG9jdW1lbnROb2RlOiBvYmplY3QsXG4gICAgbmFtZXNwYWNlTm9kZTogb2JqZWN0LFxuICAgIGRvY3VtZW50RW50aXR5Tm9kZTogb2JqZWN0LFxuICAgICRvdXRsZXRPcHRpb25zOiBzaGFwZSh7XG4gICAgICBmbGF0OiBib29sLFxuICAgICAgbGlua05hbWVzcGFjZXM6IGJvb2wsXG4gICAgICBmaWx0ZXI6IGFycmF5LFxuICAgIH0pXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Q2xhc3NCcm93c2VyXG4gICAgICAgIG5hbWVzcGFjZU5vZGU9e3RoaXMucHJvcHMubmFtZXNwYWNlTm9kZX1cbiAgICAgICAgZG9jdW1lbnROb2RlPXt0aGlzLnByb3BzLmRvY3VtZW50Tm9kZX1cbiAgICAgICAgZG9jdW1lbnRFbnRpdHlOb2RlPXt0aGlzLnByb3BzLmRvY3VtZW50RW50aXR5Tm9kZX1cbiAgICAgICAgd2l0aENvbnRyb2xzPXt0aGlzLnByb3BzLm5hbWVzcGFjZU5vZGUuZW5hYmxlU2lkZWJhckNvbnRyb2xzICE9PSBmYWxzZX1cbiAgICAgICAgZmxhdD17dGhpcy5wcm9wcy4kb3V0bGV0T3B0aW9ucy5mbGF0fVxuICAgICAgICBsaW5rVG9OYW1lc3BhY2VzPXt0aGlzLnByb3BzLiRvdXRsZXRPcHRpb25zLmxpbmtOYW1lc3BhY2VzfVxuICAgICAgICBmaWx0ZXI9e3RoaXMucHJvcHMuJG91dGxldE9wdGlvbnMuZmlsdGVyfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL291dGxldHMvQnJvd3Nlck91dGxldC5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgY29uc29sZSA9IHJlcXVpcmUoXCJjb25zb2xlXCIpO1xuY29uc3QgTGluayA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvTGluaycpO1xuY29uc3QgY2xhc3NTZXQgPSByZXF1aXJlKCd1dGlscy9jbGFzc1NldCcpO1xuY29uc3QgQ2hlY2tib3ggPSByZXF1aXJlKCdjb21wb25lbnRzL0NoZWNrYm94Jyk7XG5jb25zdCBJY29uID0gcmVxdWlyZSgnY29tcG9uZW50cy9JY29uJyk7XG5jb25zdCBIb3RJdGVtSW5kaWNhdG9yID0gcmVxdWlyZSgnY29tcG9uZW50cy9Ib3RJdGVtSW5kaWNhdG9yJyk7XG5jb25zdCB7IHNvcnRCeSB9ID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBvcmRlckF3YXJlU29ydCA9IHJlcXVpcmUoJy4uL3V0aWxzL29yZGVyQXdhcmVTb3J0Jyk7XG5jb25zdCBEb2NDbGFzc2lmaWVyID0gcmVxdWlyZSgnLi4vdXRpbHMvRG9jQ2xhc3NpZmllcicpO1xuY29uc3QgZmlsdGVyRG9jdW1lbnRzID0gcmVxdWlyZSgndXRpbHMvZmlsdGVyRG9jdW1lbnRzJyk7XG5jb25zdCB7IGFycmF5LCBvYmplY3QsIGJvb2wsIH0gPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbnZhciBDbGFzc0Jyb3dzZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHByb3BUeXBlczoge1xuICAgIHdpdGhDb250cm9sczogYm9vbCxcbiAgICBkb2N1bWVudE5vZGU6IG9iamVjdCxcbiAgICBkb2N1bWVudEVudGl0eU5vZGU6IG9iamVjdCxcbiAgICBuYW1lc3BhY2VOb2RlOiBvYmplY3QsXG4gICAgZmxhdDogYm9vbCxcbiAgICBsaW5rTmFtZXNwYWNlczogYm9vbCxcbiAgICBzaG93VHlwZURlZnM6IGJvb2wsXG4gICAgZmlsdGVyOiBhcnJheSxcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNob3dQcml2YXRlTW9kdWxlczogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvd1R5cGVEZWZzOiBmYWxzZSxcbiAgICAgIHdpdGhDb250cm9sczogdHJ1ZSxcbiAgICB9O1xuICB9LFxuXG4gIC8vIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24obmV4dFByb3BzKSB7XG4gIC8vICAgcmV0dXJuIChcbiAgLy8gICAgIG5leHRQcm9wcy5kb2N1bWVudEVudGl0eU5vZGUgIT09IHRoaXMucHJvcHMuZG9jdW1lbnRFbnRpdHlOb2RlIHx8XG4gIC8vICAgICBuZXh0UHJvcHMuZG9jdW1lbnROb2RlICE9PSB0aGlzLnByb3BzLmRvY3VtZW50Tm9kZSB8fFxuICAvLyAgICAgbmV4dFByb3BzLm5hbWVzcGFjZU5vZGUgIT09IHRoaXMucHJvcHMubmFtZXNwYWNlTm9kZVxuICAvLyAgICk7XG4gIC8vIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHJvb3REb2N1bWVudHMgPSB0aGlzLnByb3BzLm5hbWVzcGFjZU5vZGUuZG9jdW1lbnRzO1xuICAgIGNvbnN0IGdlbmVyaWNOYW1lc3BhY2UgPSB7XG4gICAgICBpZDogJ19fZ2VuZXJhbF9fJyxcbiAgICAgIHRpdGxlOiAnW0dlbmVyYWxdJyxcbiAgICAgIGRvY3VtZW50czogW10sXG4gICAgICBtZXRhOiB7fVxuICAgIH07XG5cbiAgICBjb25zdCBoYXNQcml2YXRlTW9kdWxlcyA9IHJvb3REb2N1bWVudHMuc29tZSh4ID0+IHtcbiAgICAgIHJldHVybiB4LmRvY3VtZW50cy5zb21lKHkgPT4gRG9jQ2xhc3NpZmllci5pc1ByaXZhdGUoeS5wcm9wZXJ0aWVzKSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBuYW1lc3BhY2VzID0gcm9vdERvY3VtZW50cy5yZWR1Y2UoZnVuY3Rpb24obGlzdCwgbm9kZSkge1xuICAgICAgaWYgKG5vZGUuZG9jdW1lbnRzLmxlbmd0aCkge1xuICAgICAgICBsaXN0LnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbGlzdFswXS5kb2N1bWVudHMucHVzaChub2RlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfSwgWyBnZW5lcmljTmFtZXNwYWNlIF0pLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgaWYgKGEuaWQgPT09ICdfX2dlbmVyYWxfXycpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGEuaWQgPiBiLmlkID8gMSA6IC0xO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgc2hvdWxkRGlzcGxheU5hbWUgPSBuYW1lc3BhY2VzLmxlbmd0aCA+IDE7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJtZWdhZG9jLWRvY3VtZW50LWJyb3dzZXIgY2xhc3MtYnJvd3Nlcl9fbGlzdGluZ1wiPlxuICAgICAgICB7bmFtZXNwYWNlcy5tYXAodGhpcy5yZW5kZXJOYW1lc3BhY2UuYmluZChudWxsLCBzaG91bGREaXNwbGF5TmFtZSkpfVxuXG4gICAgICAgIHt0aGlzLnByb3BzLndpdGhDb250cm9scyAmJiBoYXNQcml2YXRlTW9kdWxlcyAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGFzcy1icm93c2VyX19jb250cm9sc1wiPlxuICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuc2hvd1ByaXZhdGVNb2R1bGVzfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy50b2dnbGVQcml2YXRlVmlzaWJpbGl0eX1cbiAgICAgICAgICAgICAgY2hpbGRyZW49XCJTaG93IHByaXZhdGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvbmF2PlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyTmFtZXNwYWNlKHNob3VsZERpc3BsYXlOYW1lLCBucykge1xuICAgIGxldCBkb2N1bWVudHMgPSBucy5kb2N1bWVudHM7XG5cbiAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcy5wcm9wcy5uYW1lc3BhY2VOb2RlO1xuICAgIGNvbnN0IHNob3VsZEhpZGVQcml2YXRlTW9kdWxlcyA9IChcbiAgICAgIGNvbmZpZy5oaWRlUHJpdmF0ZVN5bWJvbHMgfHxcbiAgICAgICF0aGlzLnN0YXRlLnNob3dQcml2YXRlTW9kdWxlc1xuICAgICk7XG5cbiAgICBjb25zdCBzaG93VHlwZURlZnMgPSAoXG4gICAgICB0aGlzLnByb3BzLnNob3dUeXBlRGVmcyB8fFxuICAgICAgY29uZmlnLnNob3dUeXBlRGVmc0luQnJvd3NlclxuICAgIClcblxuICAgIGlmIChzaG91bGRIaWRlUHJpdmF0ZU1vZHVsZXMpIHtcbiAgICAgIGRvY3VtZW50cyA9IG5zLmRvY3VtZW50cy5maWx0ZXIoeCA9PiB7XG4gICAgICAgIHJldHVybiAhRG9jQ2xhc3NpZmllci5pc1ByaXZhdGUoeC5wcm9wZXJ0aWVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghc2hvd1R5cGVEZWZzKSB7XG4gICAgICBkb2N1bWVudHMgPSBkb2N1bWVudHMuZmlsdGVyKHggPT4gIURvY0NsYXNzaWZpZXIuaXNUeXBlRGVmKHgucHJvcGVydGllcykpXG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGhhc1NlbGZEb2N1bWVudCA9IG5zLmlkICE9PSAnX19nZW5lcmFsX18nICYmIChcbiAgICAgIG5zLnByb3BlcnRpZXMgfHxcbiAgICAgIChcbiAgICAgICAgY29uZmlnLmxpbmtUb05hbWVzcGFjZXNJbkJyb3dzZXIgfHxcbiAgICAgICAgdGhpcy5wcm9wcy5saW5rTmFtZXNwYWNlc1xuICAgICAgKVxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBrZXk9e25zLmlkfSBjbGFzc05hbWU9XCJjbGFzcy1icm93c2VyX19jYXRlZ29yeVwiPlxuICAgICAgICB7c2hvdWxkRGlzcGxheU5hbWUgJiYgKFxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjbGFzcy1icm93c2VyX19jYXRlZ29yeS1uYW1lXCI+XG4gICAgICAgICAgICB7aGFzU2VsZkRvY3VtZW50ID8gKFxuICAgICAgICAgICAgICA8TGluayB0bz17bnN9IGNoaWxkcmVuPXtucy50aXRsZX0gLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIG5zLnRpdGxlXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvaDM+XG4gICAgICAgICl9XG5cbiAgICAgICAge2hhc1NlbGZEb2N1bWVudCAmJiB0aGlzLnByb3BzLmRvY3VtZW50Tm9kZSA9PT0gbnMgJiYgKFxuICAgICAgICAgIHRoaXMucmVuZGVyTW9kdWxlRW50aXRpZXMobnMuZW50aXRpZXMpXG4gICAgICAgICl9XG5cbiAgICAgICAge3NvcnRCeShkb2N1bWVudHMsICdpZCcpLmZpbHRlcihmaWx0ZXJEb2N1bWVudHModGhpcy5wcm9wcy5maWx0ZXIpKS5tYXAodGhpcy5yZW5kZXJNb2R1bGUpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJNb2R1bGUoZG9jTm9kZSkge1xuICAgIGNvbnN0IGRvYyA9IGRvY05vZGUucHJvcGVydGllcztcbiAgICBjb25zdCB7IGlkIH0gPSBkb2M7XG4gICAgY29uc3QgaXNQcml2YXRlID0gRG9jQ2xhc3NpZmllci5pc1ByaXZhdGUoZG9jKTtcbiAgICBjb25zdCBpc0FjdGl2ZSA9IHRoaXMucHJvcHMuZG9jdW1lbnROb2RlID09PSBkb2NOb2RlO1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzU2V0KHtcbiAgICAgICdjbGFzcy1icm93c2VyX19lbnRyeSc6IHRydWUsXG4gICAgICAnY2xhc3MtYnJvd3Nlcl9fZW50cnktLWFjdGl2ZSc6IGlzQWN0aXZlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBrZXk9e2RvY05vZGUudWlkfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIDxMaW5rIHJlZj17aWR9IHRvPXtkb2NOb2RlfSBjbGFzc05hbWU9XCJjbGFzcy1icm93c2VyX19lbnRyeS1saW5rXCI+XG4gICAgICAgICAge2RvYy5uYW1lfVxuXG4gICAgICAgICAge2lzUHJpdmF0ZSAmJiB0aGlzLnByb3BzLm5hbWVzcGFjZU5vZGUuY29uZmlnLm1hcmtQcml2YXRlTW9kdWxlcyAhPT0gZmFsc2UgJiYgKFxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xhc3MtYnJvd3Nlcl9fZW50cnktbGluay0tcHJpdmF0ZVwiXG4gICAgICAgICAgICAgIHRpdGxlPVwiVGhpcyBtb2R1bGUgaXMgcHJpdmF0ZVwiPiA8SWNvbiBjbGFzc05hbWU9XCJpY29uLWN1YmVcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7ZG9jLmdpdCAmJiA8SG90SXRlbUluZGljYXRvciB0aW1lc3RhbXA9e2RvYy5naXQubGFzdENvbW1pdHRlZEF0fSAvPn1cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIHtpc0FjdGl2ZSAmJiAhdGhpcy5wcm9wcy5mbGF0ICYmIHRoaXMucmVuZGVyTW9kdWxlRW50aXRpZXMoZG9jTm9kZSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlck1vZHVsZUVudGl0aWVzKGRvY3VtZW50Tm9kZSkge1xuICAgIGlmICghZG9jdW1lbnROb2RlLmVudGl0aWVzIHx8ICFkb2N1bWVudE5vZGUuZW50aXRpZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoIWRvY3VtZW50Tm9kZS5wcm9wZXJ0aWVzLnRhZ3MpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd3ZWlyZCBkb2NOb2RlOicsIGRvY3VtZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgY29uc3QgeyBoaWRlUHJpdmF0ZVN5bWJvbHMgfSA9IHRoaXMucHJvcHMubmFtZXNwYWNlTm9kZS5jb25maWdcbiAgICBjb25zdCB2aXNpYmxlID0gZW50aXR5Tm9kZSA9PiAoXG4gICAgICAhaGlkZVByaXZhdGVTeW1ib2xzIHx8ICFEb2NDbGFzc2lmaWVyLmlzUHJpdmF0ZShlbnRpdHlOb2RlLnByb3BlcnRpZXMpXG4gICAgKVxuXG4gICAgY29uc3QgZW50aXR5RG9jdW1lbnRzID0gb3JkZXJBd2FyZVNvcnQuYXNOb2RlcyhcbiAgICAgIGRvY3VtZW50Tm9kZSxcbiAgICAgIGRvY3VtZW50Tm9kZS5lbnRpdGllcy5maWx0ZXIodmlzaWJsZSksXG4gICAgICAnaWQnXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiY2xhc3MtYnJvd3Nlcl9fbWV0aG9kc1wiPlxuICAgICAgICB7ZW50aXR5RG9jdW1lbnRzLm1hcCh0aGlzLnJlbmRlckVudGl0eSl9XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyRW50aXR5KG5vZGUpIHtcbiAgICBjb25zdCBzaG91bGREaXNwbGF5VHlwZURlZlByb3BlcnRpZXMgPSAoXG4gICAgICB0aGlzLnByb3BzLnNob3dUeXBlRGVmUHJvcGVydGllcyB8fFxuICAgICAgdGhpcy5wcm9wcy5uYW1lc3BhY2VOb2RlLmNvbmZpZy5zaG93VHlwZURlZlByb3BlcnRpZXNJbkJyb3dzZXJcbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGtleT17bm9kZS51aWR9IGNsYXNzTmFtZT1cImNsYXNzLWJyb3dzZXJfX21ldGhvZHMtZW50aXR5XCI+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgdG89e25vZGV9XG4gICAgICAgICAgY2hpbGRyZW49eyhub2RlLnByb3BlcnRpZXMuc3ltYm9sIHx8ICcnKSArIG5vZGUucHJvcGVydGllcy5uYW1lfVxuICAgICAgICAgIHRpdGxlPXtub2RlLnRpdGxlfVxuICAgICAgICAvPlxuXG4gICAgICAgIHtzaG91bGREaXNwbGF5VHlwZURlZlByb3BlcnRpZXMgJiYgRG9jQ2xhc3NpZmllci5pc1R5cGVEZWYobm9kZS5wcm9wZXJ0aWVzKSAmJiAoXG4gICAgICAgICAgdGhpcy5yZW5kZXJNb2R1bGVFbnRpdGllcyhub2RlKVxuICAgICAgICApfVxuICAgICAgPC9saT5cbiAgICApO1xuICB9LFxuXG4gIHRvZ2dsZVByaXZhdGVWaXNpYmlsaXR5KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd1ByaXZhdGVNb2R1bGVzOiAhdGhpcy5zdGF0ZS5zaG93UHJpdmF0ZU1vZHVsZXNcbiAgICB9KTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2xhc3NCcm93c2VyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvQ2xhc3NCcm93c2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgPyBjb25zb2xlIDogKHdpbmRvdy5jb25zb2xlIHx8IGdsb2JhbC5jb25zb2xlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLWh0bWwtc2VyaWFsaXplci91aS9zaGFyZWQvY29uc29sZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcImNvbXBvbmVudHMvQ2hlY2tib3hcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJjb21wb25lbnRzL0NoZWNrYm94XFxcIl1cIlxuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1wiY29tcG9uZW50cy9JY29uXCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwiY29tcG9uZW50cy9JY29uXFxcIl1cIlxuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1wiY29tcG9uZW50cy9Ib3RJdGVtSW5kaWNhdG9yXCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwiY29tcG9uZW50cy9Ib3RJdGVtSW5kaWNhdG9yXFxcIl1cIlxuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1widXRpbHMvZmlsdGVyRG9jdW1lbnRzXCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwidXRpbHMvZmlsdGVyRG9jdW1lbnRzXFxcIl1cIlxuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgeyBvYmplY3QsIH0gPSBSZWFjdC5Qcm9wVHlwZXM7XG5jb25zdCBOYW1lc3BhY2VJbmRleCA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvTmFtZXNwYWNlSW5kZXgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnSlM6Ok5hbWVzcGFjZUluZGV4JyxcbiAgcHJvcFR5cGVzOiB7XG4gICAgZG9jdW1lbnROb2RlOiBvYmplY3QsXG4gICAgbmFtZXNwYWNlTm9kZTogb2JqZWN0LFxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE5hbWVzcGFjZUluZGV4XG4gICAgICAgIGRvY3VtZW50Tm9kZT17dGhpcy5wcm9wcy5kb2N1bWVudE5vZGUgfHwgdGhpcy5wcm9wcy5uYW1lc3BhY2VOb2RlfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL291dGxldHMvTmFtZXNwYWNlT3V0bGV0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==