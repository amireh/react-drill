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
	
	exports.KNOWN_TAGS = ['alias', 'async', 'callback', 'class', 'constructor', 'deprecated', 'example', 'export', 'interface', 'lends', 'memberOf', 'method', 'mixes', 'module', 'name', 'namespace', 'param', 'preserveOrder', 'private', 'public', 'property', 'protected', 'return', 'see', 'static', 'throws', 'type', 'typedef'];

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
	  var preserveOrder = doc.tags.some(function (tag) {
	    return tag.type === 'preserveOrder';
	  });
	
	  if (preserveOrder) {
	    return sortBy(array, 'line');
	  } else {
	    return sortBy(array, key);
	  }
	};
	
	module.exports.asNodes = function (documentNode, array, key) {
	  var preserveOrder = documentNode.properties.tags.some(function (tag) {
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
	    return React.createElement(
	      'div',
	      { className: 'js-module-header-outlet' },
	      React.createElement(ModuleHeader, {
	        documentNode: this.props.documentNode || this.props.namespaceNode,
	        showSourcePaths: this.props.$outletOptions.showFilePath !== false,
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
	    if (!this.props.documentNode.properties) {
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
	var Link = __webpack_require__(17);
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
	      this.props.string
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjU4MWFmYTU4ZTIwNTBkYTE3M2EiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvb3V0bGV0cy9JbnNwZWN0b3JPdXRsZXQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwicmVhY3RcXFwiXVwiIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9qc2RvYy1wYXJzZXItZXh0ZW5kZWQvbGliL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9vdXRsZXRzL01vZHVsZU91dGxldC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL01vZHVsZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJtaXhpbnMvSGFzVGl0bGVcXFwiXVwiIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvTW9kdWxlSGVhZGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImNvbXBvbmVudHMvT3V0bGV0XFxcIl1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJjb21wb25lbnRzL0hlYWRpbmdcXFwiXVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImNvbXBvbmVudHMvSGVhZGluZ0FuY2hvclxcXCJdXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwiY29tcG9uZW50cy9IaWdobGlnaHRlZFRleHRcXFwiXVwiIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL3V0aWxzL0RvY0NsYXNzaWZpZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvb3V0bGV0cy9Nb2R1bGVFbnRpdGllc091dGxldC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL0NsYXNzRW50aXR5QnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJjb21wb25lbnRzL0xpbmtcXFwiXVwiIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL3V0aWxzL29yZGVyQXdhcmVTb3J0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImxvZGFzaFxcXCJdXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwiY2xhc3NuYW1lc1xcXCJdXCIiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvb3V0bGV0cy9Nb2R1bGVIZWFkZXJPdXRsZXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvb3V0bGV0cy9Nb2R1bGVJbmRleE91dGxldC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL05hbWVzcGFjZUluZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvTW9kdWxlSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9UYWdzL1R5cGVOYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS91dGlscy9kZXNjcmliZVR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9GdW5jdGlvblNpZ25hdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9vdXRsZXRzL01vZHVsZUJvZHlPdXRsZXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9Nb2R1bGVCb2R5LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvRG9jLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcInV0aWxzL2NsYXNzU2V0XFxcIl1cIiIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL0RvY1RhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9UYWdzL1RhZ0dyb3VwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcIm1peGlucy9Db2xsYXBzaWJsZVxcXCJdXCIiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9UYWdzL1R5cGVEZWZUYWdHcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL1RhZ3MvRXhhbXBsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL1RhZ3MvUGFyYW1UYWcuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9UYWdzL0RlZmF1bHRWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL1RhZ3MvU2VlVGFnLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImNvbXBvbmVudHMvTWFya2Rvd25UZXh0XFxcIl1cIiIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL1RhZ3MvVGhyb3dzVGFnLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvVGFncy9SZXR1cm5UYWcuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9UYWdzL0NhbGxiYWNrVGFnLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvVGFidWxhclRhZ0dyb3VwLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvVGFncy9EZXByZWNhdGVkVGFnLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvT2JqZWN0U3lub3BzaXMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9UYWdzL1Byb3BlcnR5VGFnLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL3V0aWxzL2Rlc2NyaWJlTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL0RvY0dyb3VwLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL291dGxldHMvQnJvd3Nlck91dGxldC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL0NsYXNzQnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLWh0bWwtc2VyaWFsaXplci91aS9zaGFyZWQvY29uc29sZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJjb21wb25lbnRzL0NoZWNrYm94XFxcIl1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJjb21wb25lbnRzL0ljb25cXFwiXVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImNvbXBvbmVudHMvSG90SXRlbUluZGljYXRvclxcXCJdXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwidXRpbHMvZmlsdGVyRG9jdW1lbnRzXFxcIl1cIiIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9vdXRsZXRzL05hbWVzcGFjZU91dGxldC5qcyJdLCJuYW1lcyI6WyJJbnNwZWN0b3JPdXRsZXQiLCJyZXF1aXJlIiwiTW9kdWxlT3V0bGV0IiwiTW9kdWxlRW50aXRpZXNPdXRsZXQiLCJNb2R1bGVIZWFkZXJPdXRsZXQiLCJNb2R1bGVJbmRleE91dGxldCIsIk1vZHVsZUJvZHlPdXRsZXQiLCJCcm93c2VyT3V0bGV0IiwiTmFtZXNwYWNlT3V0bGV0IiwiZXhwb3J0cyIsIm91dGxldHMiLCJuYW1lIiwib3V0bGV0T2NjdXBhbnRzIiwiY29tcG9uZW50IiwiUmVhY3QiLCJLIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJzdHJpbmciLCJtb2R1bGUiLCJjcmVhdGVDbGFzcyIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiZG9jdW1lbnROb2RlIiwicHJvcGVydGllcyIsInN1bW1hcnkiLCJuYW1lc3BhY2VOb2RlIiwidGl0bGUiLCJyZW5kZXIiLCJwcm9wcyIsImRvYyIsImlkIiwidHlwZSIsIlRZUEVfVU5LTk9XTiIsIk5BTUVTUEFDRV9TRVAiLCJTQ09QRV9VTlNDT1BFRCIsInVuZGVmaW5lZCIsIlNDT1BFX0lOU1RBTkNFIiwiU0NPUEVfUFJPVE9UWVBFIiwiU0NPUEVfRkFDVE9SWV9FWFBPUlRTIiwiVFlQRV9PQkpFQ1QiLCJUWVBFX09CSkVDVF9QUk9QRVJUWSIsIlRZUEVfREVGQVVMVF9FWFBPUlRTIiwiVFlQRV9GQUNUT1JZIiwiVFlQRV9GVU5DVElPTiIsIlRZUEVfQ0xBU1MiLCJUWVBFX0FSUkFZIiwiVFlQRV9MSVRFUkFMIiwiVFlQRV9BTExfTElURVJBTCIsIlRZUEVfVU5LTk9XTl9MSVRFUkFMIiwiVFlQRV9VTklPTiIsIlZJU0lCSUxJVFlfUFJPVEVDVEVEIiwiVklTSUJJTElUWV9QUklWQVRFIiwiREVGQVVMVF9GQUNUT1JZX0VYUE9SVFNfSUQiLCJUWVBFX09WRVJSSURJTkdfVEFHUyIsIlRBR1NfV0lUSF9TVFJJTkdTIiwiTk9fREVTQ1JJUFRJT05fVEFHUyIsIktOT1dOX1RBR1MiLCJNb2R1bGUiLCJpc05hbWVzcGFjZURvY3VtZW50Iiwib2JqZWN0IiwiSGFzVGl0bGUiLCJNb2R1bGVIZWFkZXIiLCJPdXRsZXQiLCJtaXhpbnMiLCJpc1JlcXVpcmVkIiwiZG9jdW1lbnRFbnRpdHlOb2RlIiwiY2hpbGRDb250ZXh0VHlwZXMiLCJjb25maWciLCJnZXRDaGlsZENvbnRleHQiLCJtb2R1bGVOb2RlIiwicGFyZW50Tm9kZSIsImxlZ2FjeVBhcmFtcyIsIm1vZHVsZUlkIiwiZW50aXR5Iiwic2hvd1NvdXJjZVBhdGhzIiwic2hvd05hbWVzcGFjZUluTW9kdWxlSGVhZGVyIiwicGFyYW1zIiwicXVlcnkiLCJIZWFkaW5nIiwiSGVhZGluZ0FuY2hvciIsIkhpZ2hsaWdodGVkVGV4dCIsIkRvY0NsYXNzaWZpZXIiLCJib29sIiwiaGVhZGVyTGV2ZWwiLCJnZW5lcmF0ZUFuY2hvciIsInNob3dOYW1lc3BhY2UiLCJnZXREZWZhdWx0UHJvcHMiLCJhbmNob3IiLCJtZXRhIiwiZmlsZVBhdGgiLCJuYW1lc3BhY2UiLCJnZXREaXNwbGF5VHlwZSIsImhhc01peGluVGFyZ2V0cyIsIm1peGluVGFyZ2V0cyIsIm1hcCIsIngiLCJfX2h0bWwiLCJodG1sIiwiaGFzU3VwZXJDbGFzc2VzIiwic3VwZXJDbGFzc2VzIiwiZGVzY3JpcHRpb24iLCJub2RlIiwiQm9vbGVhbiIsImxlbmd0aCIsImlzTWV0aG9kIiwiY3R4Iiwibm9kZUluZm8iLCJzY29wZSIsImlzQ2FsbGJhY2siLCJ0YWdzIiwic29tZSIsImlzVHlwZURlZiIsImlzTW9kdWxlIiwiaXNGYWN0b3J5RXhwb3J0cyIsImlzQ2xhc3NFbnRpdHkiLCJpc1N0YXRpY01ldGhvZCIsImlzRXhwb3J0ZWRTeW1ib2wiLCJpc05hbWVzcGFjZSIsImVudGl0aWVzIiwibiIsImlzUHJvcGVydHkiLCJpc1N0YXRpY1Byb3BlcnR5IiwiaW5kZXhPZiIsImlzTWVtYmVyUHJvcGVydHkiLCJpc1ByaXZhdGUiLCJpc1Byb3RlY3RlZCIsImlzUHVibGljIiwiQ2xhc3NFbnRpdHlCcm93c2VyIiwiTGluayIsIm9yZGVyQXdhcmVTb3J0IiwiY2xhc3NTZXQiLCJzdGFuZGFsb25lIiwiZW50aXR5RG9jdW1lbnRzIiwiYXNOb2RlcyIsInJlbmRlckVudGl0eSIsInVpZCIsInN5bWJvbCIsInNvcnRCeSIsImFycmF5Iiwia2V5IiwicHJlc2VydmVPcmRlciIsInRhZyIsIiRvdXRsZXRPcHRpb25zIiwic2hvd0ZpbGVQYXRoIiwiTmFtZXNwYWNlSW5kZXgiLCJNb2R1bGVJbmRleCIsInNob3dGdW5jdGlvbnMiLCJzaG93UHJvcGVydGllcyIsInNob3dTdGF0aWNNZW1iZXJzIiwiY2xhc3NlcyIsImdldEJ5RGlzcGxheVR5cGUiLCJmdW5jdGlvbnMiLCJuYW1lc3BhY2VzIiwib3RoZXJzIiwiZ2V0UmVtYWluaW5nRG9jdW1lbnRzIiwicmVuZGVyR3JvdXBCeUNvbnRleHRUeXBlIiwiZG9jdW1lbnRzIiwicmVuZGVyR3JvdXAiLCJyZW5kZXJNb2R1bGVTdW1tYXJ5UmVjb3JkIiwidHlwZU5hbWVzIiwiZmlsdGVyIiwibGlzdHMiLCJ1c2VkVUlEcyIsInJlZHVjZSIsImxpc3QiLCJmb3JFYWNoIiwiVHlwZU5hbWVzIiwiRnVuY3Rpb25TaWduYXR1cmUiLCJtZW1iZXJGdWN0aW9ucyIsImdldEJ5Q2xhc3NpZmljYXRpb24iLCJtZW1iZXJQcm9wZXJ0aWVzIiwiZXhwb3J0ZWRTeW1ib2xzIiwic3RhdGljTWVtYmVycyIsInB1YmxpY1N0YXRpY01lbWJlcnMiLCJwcml2YXRlU3RhdGljTWVtYmVycyIsInJlbmRlckV4cG9ydGVkU3ltYm9scyIsInJlbmRlck1ldGhvZEdyb3VwIiwicmVuZGVyUHJvcGVydHlHcm91cCIsInJlbmRlck1ldGhvZFN1bW1hcnlSb3ciLCJyZW5kZXJQcm9wZXJ0eVN1bW1hcnlSb3ciLCJyZXR1cm5WYWx1ZSIsInYiLCJ0eXBlSW5mbyIsInByb3BlcnR5VGFnIiwia2xhc3NpZmllcnMiLCJmbiIsImRlc2NyaWJlVHlwZSIsImNvbnRleHRUeXBlcyIsImV4cGFuZEZ1bmN0aW9uU2lnbmF0dXJlcyIsImNvbnRleHQiLCJleHBhbmRSZXR1cm5lZEZ1bmN0aW9uU2lnbmF0dXJlcyIsIkFQUExfU0VQIiwiQVBQTF9TVEFSVCIsIkFQUExfRU5EIiwicmVuZGVyVHlwZSIsImRpc3BsYXlOYW1lT2YiLCJyZW5kZXJGdW5jdGlvblBhcmFtIiwicGFyYW0iLCJlbGVtZW50cyIsImpvaW4iLCJyZXR1cm5UeXBlIiwiYnVmZmVyIiwibnVsbGFibGUiLCJvcHRpb25hbCIsIndpdGhOYW1lcyIsIndpdGhCcmFjZXMiLCJkZXNjcmliZVR5cGVIVE1MIiwiZGVzY3JpYmVUeXBlVGV4dCIsInBhcmFtVGFncyIsInBhcmFtTGluZXMiLCJwYXJhbVRhZ1RvdGFsTGVuZ3RoIiwibmVlZHNCcmVhayIsImxpbmUiLCJNb2R1bGVCb2R5IiwiZmluZFdoZXJlIiwid2hlcmUiLCJEb2MiLCJPYmplY3RTeW5vcHNpcyIsIlNlZVRhZyIsIkRvY0dyb3VwIiwiUHJvcGVydHlUYWciLCJFeGFtcGxlVGFnIiwiYXJyYXlPZiIsIm1vZHVsZURvY3MiLCJmb2N1c2VkRW50aXR5IiwicmVuZGVyYWJsZVR5cGUiLCJ3aXRob3V0VHlwZURlZnMiLCJ0eXBlZGVmcyIsInJlbmRlckNvbnN0cnVjdG9yIiwicmVuZGVyRXhhbXBsZXMiLCJyZW5kZXJTdGF0aWNNZXRob2RzIiwicmVuZGVyQ2FsbGJhY2tzIiwicmVuZGVyVHlwZURlZnMiLCJyZW5kZXJQcm9wZXJ0aWVzIiwicmVuZGVyTWV0aG9kcyIsInJlbmRlckFkZGl0aW9uYWxSZXNvdXJjZXMiLCJyZW5kZXJFeGFtcGxlVGFnIiwicmVuZGVyU2VlVGFnIiwicHJvcGVydHlEb2NzIiwiZW50aXR5RG9jIiwicmVuZGVyUHJvcGVydHkiLCJnZXRFbnRpdHlBbmNob3IiLCJzdGF0aWNNZXRob2REb2NzIiwicmVuZGVyU3RhdGljTWV0aG9kIiwiY2FsbGJhY2tEb2NzIiwidHlwZWRlZk5vZGVzIiwib3JkZXJlZE5vZGVzIiwidHlwZWRlZkRvYyIsInR5cGVkZWZOb2RlIiwicHJvcGVydHlUYWdzIiwibWVtYmVyUHJvcGVydHlUYWdzIiwiY29uY2F0IiwiT2JqZWN0IiwiYXNzaWduIiwiYWxsUHJvcGVydHlUYWdzIiwiaSIsIm1ldGhvZERvY3MiLCJyZW5kZXJNZXRob2QiLCJEb2NUYWdzIiwiRGVwcmVjYXRlZFRhZyIsIkNvbGxhcHNpYmxlIiwiY2hpbGRyZW4iLCJjb2xsYXBzaWJsZSIsImV4cGFuZGVkIiwiaGVhZGluZ1RhZyIsIndpdGhFeGFtcGxlcyIsIndpdGhUaXRsZSIsIndpdGhEZXNjcmlwdGlvbiIsIndpdGhBZGRpdGlvbmFsUmVzb3VyY2VzIiwiaXNDb2xsYXBzZWQiLCJjbGFzc05hbWUiLCJkZXByZWNhdGVkVGFnIiwidCIsIkhlYWRpbmdUYWciLCJoaWRlUHJpdmF0ZVN5bWJvbHMiLCJ0b2dnbGVDb2xsYXBzZWQiLCJyZW5kZXJDb2xsYXBzZXIiLCJpc0Z1bmN0aW9uIiwicmVuZGVyUmV0dXJuVHlwZSIsImlzQ29uc3RydWN0b3IiLCJUYWdHcm91cCIsIlR5cGVEZWZUYWdHcm91cCIsIlBhcmFtVGFnIiwiVGhyb3dzVGFnIiwiUmV0dXJuVGFnIiwiQ2FsbGJhY2tUYWciLCJUYWJ1bGFyVGFnR3JvdXAiLCJIQU5ETEVEX1RBR1MiLCJjYWxsYmFja3MiLCJyZXR1cm5UYWdzIiwidW5oYW5kbGVkVGFncyIsImhpZGVCbGFua1BhcmFtZXRlcnMiLCJoaWRlQmxhbmtSZXR1cm5zIiwicmVuZGVyVGFnU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsInRhZ05hbWUiLCJ0YWdUeXBlIiwiYWx3YXlzR3JvdXAiLCJyZW5kZXJlciIsImZ1bmMiLCJhbnkiLCJET01UYWciLCJSZW5kZXJlciIsImlzQ29sbGFwc2libGUiLCJEZWZhdWx0VmFsdWUiLCJkZWZhdWx0VmFsdWUiLCJyZXBsYWNlIiwiTWFya2Rvd25UZXh0IiwiaGFzTmFtZSIsImRvY3VtZW50IiwiaGlkZUlmRW1wdHkiLCJldmVyeSIsInRhZ0lzQmxhbmsiLCJyZW5kZXJUYWciLCJ0cmVlIiwiZnJhZ21lbnRzIiwic3BsaXQiLCJwYXJlbnRLZXkiLCJzbGljZSIsInB1c2giLCJjaGlsZFRhZ3MiLCJpbmRleCIsImlzUm9vdCIsImRlc2NyaWJlTm9kZSIsImNvbGxhcHNlZCIsInByaW50IiwicHJldHR5SlNPTiIsIklkZW50aXR5IiwicmVnZXhwIiwiaGFzT3duUHJvcGVydHkiLCJ2YWx1ZSIsImxhYmVsIiwiQ2xhc3NCcm93c2VyIiwiZmxhdCIsImxpbmtOYW1lc3BhY2VzIiwiZW5hYmxlU2lkZWJhckNvbnRyb2xzIiwiY29uc29sZSIsIkNoZWNrYm94IiwiSWNvbiIsIkhvdEl0ZW1JbmRpY2F0b3IiLCJmaWx0ZXJEb2N1bWVudHMiLCJ3aXRoQ29udHJvbHMiLCJzaG93VHlwZURlZnMiLCJnZXRJbml0aWFsU3RhdGUiLCJzaG93UHJpdmF0ZU1vZHVsZXMiLCJyb290RG9jdW1lbnRzIiwiZ2VuZXJpY05hbWVzcGFjZSIsImhhc1ByaXZhdGVNb2R1bGVzIiwieSIsInNvcnQiLCJhIiwiYiIsInNob3VsZERpc3BsYXlOYW1lIiwicmVuZGVyTmFtZXNwYWNlIiwiYmluZCIsInN0YXRlIiwidG9nZ2xlUHJpdmF0ZVZpc2liaWxpdHkiLCJucyIsInNob3VsZEhpZGVQcml2YXRlTW9kdWxlcyIsInNob3dUeXBlRGVmc0luQnJvd3NlciIsImhhc1NlbGZEb2N1bWVudCIsImxpbmtUb05hbWVzcGFjZXNJbkJyb3dzZXIiLCJyZW5kZXJNb2R1bGVFbnRpdGllcyIsInJlbmRlck1vZHVsZSIsImRvY05vZGUiLCJpc0FjdGl2ZSIsIm1hcmtQcml2YXRlTW9kdWxlcyIsImdpdCIsImxhc3RDb21taXR0ZWRBdCIsImxvZyIsInZpc2libGUiLCJlbnRpdHlOb2RlIiwic2hvdWxkRGlzcGxheVR5cGVEZWZQcm9wZXJ0aWVzIiwic2hvd1R5cGVEZWZQcm9wZXJ0aWVzIiwic2hvd1R5cGVEZWZQcm9wZXJ0aWVzSW5Ccm93c2VyIiwic2V0U3RhdGUiLCJ3aW5kb3ciLCJnbG9iYWwiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQSxLQUFNQSxrQkFBa0IsbUJBQUFDLENBQVEsQ0FBUixDQUF4QjtBQUNBLEtBQU1DLGVBQWUsbUJBQUFELENBQVEsQ0FBUixDQUFyQjtBQUNBLEtBQU1FLHVCQUF1QixtQkFBQUYsQ0FBUSxFQUFSLENBQTdCO0FBQ0EsS0FBTUcscUJBQXFCLG1CQUFB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T0FBUCxJQUFrQnlDLE9BQU96QyxPQUF0RixDOzs7Ozs7O0FDQUEsZ0U7Ozs7OztBQ0FBLDREOzs7Ozs7QUNBQSx3RTs7Ozs7O0FDQUEsa0U7Ozs7Ozs7O0FDQUEsS0FBTXBVLFFBQVEsbUJBQUFiLENBQVEsQ0FBUixDQUFkO0tBQ1EyRCxNLEdBQVk5QyxNQUFNRSxTLENBQWxCNEMsTTs7QUFDUixLQUFNcUYsaUJBQWlCLG1CQUFBaEosQ0FBUSxFQUFSLENBQXZCOztBQUVBa0IsUUFBT1YsT0FBUCxHQUFpQkssTUFBTU0sV0FBTixDQUFrQjtBQUNqQ0MsZ0JBQWEsb0JBRG9CO0FBRWpDQyxjQUFXO0FBQ1RDLG1CQUFjcUMsTUFETDtBQUVUbEMsb0JBQWVrQztBQUZOLElBRnNCOztBQU9qQ2hDLFNBUGlDLG9CQU94QjtBQUNQLFlBQ0Usb0JBQUMsY0FBRDtBQUNFLHFCQUFjLEtBQUtDLEtBQUwsQ0FBV04sWUFBWCxJQUEyQixLQUFLTSxLQUFMLENBQVdIO0FBRHRELE9BREY7QUFLRDtBQWJnQyxFQUFsQixDQUFqQixDIiwiZmlsZSI6Im1lZ2Fkb2MtcGx1Z2luLWpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjU4MWFmYTU4ZTIwNTBkYTE3M2EiLCJjb25zdCBJbnNwZWN0b3JPdXRsZXQgPSByZXF1aXJlKCcuL291dGxldHMvSW5zcGVjdG9yT3V0bGV0Jyk7XG5jb25zdCBNb2R1bGVPdXRsZXQgPSByZXF1aXJlKCcuL291dGxldHMvTW9kdWxlT3V0bGV0Jyk7XG5jb25zdCBNb2R1bGVFbnRpdGllc091dGxldCA9IHJlcXVpcmUoJy4vb3V0bGV0cy9Nb2R1bGVFbnRpdGllc091dGxldCcpO1xuY29uc3QgTW9kdWxlSGVhZGVyT3V0bGV0ID0gcmVxdWlyZSgnLi9vdXRsZXRzL01vZHVsZUhlYWRlck91dGxldCcpO1xuY29uc3QgTW9kdWxlSW5kZXhPdXRsZXQgPSByZXF1aXJlKCcuL291dGxldHMvTW9kdWxlSW5kZXhPdXRsZXQnKTtcbmNvbnN0IE1vZHVsZUJvZHlPdXRsZXQgPSByZXF1aXJlKCcuL291dGxldHMvTW9kdWxlQm9keU91dGxldCcpO1xuY29uc3QgQnJvd3Nlck91dGxldCA9IHJlcXVpcmUoJy4vb3V0bGV0cy9Ccm93c2VyT3V0bGV0Jyk7XG5jb25zdCBOYW1lc3BhY2VPdXRsZXQgPSByZXF1aXJlKCcuL291dGxldHMvTmFtZXNwYWNlT3V0bGV0Jyk7XG5cbmV4cG9ydHMub3V0bGV0cyA9IFtcbiAgJ0pTOjpCcm93c2VyJyxcbiAgJ0pTOjpNb2R1bGUnLFxuICAnSlM6Ok1vZHVsZUVudGl0aWVzJyxcbiAgJ0pTOjpNb2R1bGVIZWFkZXInLFxuICAnSlM6Ok1vZHVsZUhlYWRlcjo6VHlwZScsXG4gICdKUzo6TW9kdWxlSW5kZXgnLFxuICAnSlM6Ok1vZHVsZUJvZHknLFxuICAnSlM6Ok5hbWVzcGFjZScsXG4gICdKUzo6VGFnJyxcbiAgJ0pTOjpFeGFtcGxlVGFncycsXG4gICdKUzo6RXhhbXBsZVRhZycsXG5dO1xuXG5leHBvcnRzLm5hbWUgPSAnbWVnYWRvYy1wbHVnaW4tanMnO1xuZXhwb3J0cy5vdXRsZXRPY2N1cGFudHMgPSBbXG4gIHsgbmFtZTogJ0NvcmU6Okluc3BlY3RvcicsIGNvbXBvbmVudDogSW5zcGVjdG9yT3V0bGV0LCB9LFxuICB7IG5hbWU6ICdKUzo6TW9kdWxlJywgY29tcG9uZW50OiBNb2R1bGVPdXRsZXQsIH0sXG4gIHsgbmFtZTogJ0pTOjpNb2R1bGVFbnRpdGllcycsIGNvbXBvbmVudDogTW9kdWxlRW50aXRpZXNPdXRsZXQsIH0sXG4gIHsgbmFtZTogJ0pTOjpNb2R1bGVIZWFkZXInLCBjb21wb25lbnQ6IE1vZHVsZUhlYWRlck91dGxldCwgfSxcbiAgeyBuYW1lOiAnSlM6Ok1vZHVsZUluZGV4JywgY29tcG9uZW50OiBNb2R1bGVJbmRleE91dGxldCwgfSxcbiAgeyBuYW1lOiAnSlM6Ok1vZHVsZUJvZHknLCBjb21wb25lbnQ6IE1vZHVsZUJvZHlPdXRsZXQsIH0sXG4gIHsgbmFtZTogJ0pTOjpCcm93c2VyJywgY29tcG9uZW50OiBCcm93c2VyT3V0bGV0LCB9LFxuICB7IG5hbWU6ICdKUzo6TmFtZXNwYWNlJywgY29tcG9uZW50OiBOYW1lc3BhY2VPdXRsZXQsIH0sXG5dXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvaW5kZXguanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBLID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5jb25zdCB7IHNoYXBlLCBzdHJpbmcgfSA9IFJlYWN0LlByb3BUeXBlcztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnSlM6Okluc3BlY3Rvck91dGxldCcsXG4gIHByb3BUeXBlczoge1xuICAgIGRvY3VtZW50Tm9kZTogc2hhcGUoe1xuICAgICAgcHJvcGVydGllczogc2hhcGUoe1xuICAgICAgICBzdW1tYXJ5OiBzdHJpbmdcbiAgICAgIH0pXG4gICAgfSksXG5cbiAgICBuYW1lc3BhY2VOb2RlOiBzaGFwZSh7XG4gICAgICB0aXRsZTogc3RyaW5nXG4gICAgfSksXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZG9jdW1lbnROb2RlLCBuYW1lc3BhY2VOb2RlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRvYyA9IGRvY3VtZW50Tm9kZS5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbHRpcF9fdGl0bGVcIj5cbiAgICAgICAgICB7ZG9jLmlkfSAoe2RvYy50eXBlICE9PSBLLlRZUEVfVU5LTk9XTiAmJiAoXG4gICAgICAgICAgICA8c3Ryb25nPntkb2MudHlwZX0gPC9zdHJvbmc+XG4gICAgICAgICAgKX1pbiB7bmFtZXNwYWNlTm9kZS50aXRsZX0pXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxwIGNoaWxkcmVuPXtkb2N1bWVudE5vZGUuc3VtbWFyeX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvb3V0bGV0cy9JbnNwZWN0b3JPdXRsZXQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IE1FR0FET0NfUFVCTElDX01PRFVMRVNbXCJyZWFjdFwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcInJlYWN0XFxcIl1cIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL2pzZG9jLXBhcnNlci1leHRlbmRlZC9saWIvY29uc3RhbnRzJyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29uc3RhbnRzLmpzIiwiZXhwb3J0cy5OQU1FU1BBQ0VfU0VQID0gJy4nO1xuXG5leHBvcnRzLlNDT1BFX1VOU0NPUEVEID0gdW5kZWZpbmVkO1xuZXhwb3J0cy5TQ09QRV9JTlNUQU5DRSA9ICdpbnN0YW5jZSc7XG5leHBvcnRzLlNDT1BFX1BST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuZXhwb3J0cy5TQ09QRV9GQUNUT1JZX0VYUE9SVFMgPSAnZmFjdG9yeV9leHBvcnRzJztcblxuZXhwb3J0cy5UWVBFX09CSkVDVCA9ICdPYmplY3QnO1xuZXhwb3J0cy5UWVBFX09CSkVDVF9QUk9QRVJUWSA9ICdPYmplY3RQcm9wZXJ0eSc7XG5leHBvcnRzLlRZUEVfREVGQVVMVF9FWFBPUlRTID0gJ2V4cG9ydHMnO1xuZXhwb3J0cy5UWVBFX0ZBQ1RPUlkgPSAnRmFjdG9yeSc7XG5leHBvcnRzLlRZUEVfRlVOQ1RJT04gPSAnRnVuY3Rpb24nO1xuZXhwb3J0cy5UWVBFX0NMQVNTID0gJ0NsYXNzJztcbmV4cG9ydHMuVFlQRV9BUlJBWSA9ICdBcnJheSc7XG5leHBvcnRzLlRZUEVfVU5LTk9XTiA9ICdVbmtub3duJztcbmV4cG9ydHMuVFlQRV9MSVRFUkFMID0gJ0xpdGVyYWwnO1xuZXhwb3J0cy5UWVBFX0FMTF9MSVRFUkFMID0gJ0FsbExpdGVyYWwnO1xuZXhwb3J0cy5UWVBFX1VOS05PV05fTElURVJBTCA9ICdVbmtub3duTGl0ZXJhbCc7XG5leHBvcnRzLlRZUEVfVU5JT04gPSAnVW5pb24nO1xuXG5leHBvcnRzLlZJU0lCSUxJVFlfUFJPVEVDVEVEID0gJ3Byb3RlY3RlZCc7XG5leHBvcnRzLlZJU0lCSUxJVFlfUFJJVkFURSA9ICdwcml2YXRlJztcblxuZXhwb3J0cy5ERUZBVUxUX0ZBQ1RPUllfRVhQT1JUU19JRCA9ICdkZWZhdWx0X2V4cG9ydHMnO1xuZXhwb3J0cy5UWVBFX09WRVJSSURJTkdfVEFHUyA9IHtcbiAgJ21ldGhvZCc6IHRydWUsXG4gICdwcm9wZXJ0eSc6IHRydWUsXG4gICd0eXBlJzogdHJ1ZSxcbiAgJ2NsYXNzJzogdHJ1ZSxcbiAgJ2V4cG9ydCc6IHRydWUsXG59O1xuXG5leHBvcnRzLlRBR1NfV0lUSF9TVFJJTkdTID0ge1xuICAnZGVwcmVjYXRlZCc6IHRydWUsXG4gICdleGFtcGxlJzogdHJ1ZSxcbn07XG5cbmV4cG9ydHMuTk9fREVTQ1JJUFRJT05fVEFHUyA9IHtcbiAgJ2FsaWFzJzogdHJ1ZSxcbiAgJ2NsYXNzJzogdHJ1ZSxcbiAgJ2NvbnN0cnVjdG9yJzogdHJ1ZSxcbiAgJ2V4dGVuZHMnOiB0cnVlLFxuICAnaW5oZXJpdGRvYyc6IHRydWUsXG4gICdtZW1iZXJPZic6IHRydWUsXG4gICdtZXRob2QnOiB0cnVlLFxuICAnbWl4aW4nOiB0cnVlLFxuICAnbWl4ZXMnOiB0cnVlLFxuICAnbW9kdWxlJzogdHJ1ZSxcbiAgJ25hbWVzcGFjZSc6IHRydWUsXG4gICdwcmVzZXJ2ZU9yZGVyJzogdHJ1ZSxcbiAgJ3ByaXZhdGUnOiB0cnVlLFxuICAncHVibGljJzogdHJ1ZSxcbiAgJ3R5cGUnOiB0cnVlLFxuICAndHlwZWRlZic6IHRydWUsXG59O1xuXG5leHBvcnRzLktOT1dOX1RBR1MgPSBbXG4gICdhbGlhcycsXG4gICdhc3luYycsXG4gICdjYWxsYmFjaycsXG4gICdjbGFzcycsXG4gICdjb25zdHJ1Y3RvcicsXG4gICdkZXByZWNhdGVkJyxcbiAgJ2V4YW1wbGUnLFxuICAnZXhwb3J0JyxcbiAgJ2ludGVyZmFjZScsXG4gICdsZW5kcycsXG4gICdtZW1iZXJPZicsXG4gICdtZXRob2QnLFxuICAnbWl4ZXMnLFxuICAnbW9kdWxlJyxcbiAgJ25hbWUnLFxuICAnbmFtZXNwYWNlJyxcbiAgJ3BhcmFtJyxcbiAgJ3ByZXNlcnZlT3JkZXInLFxuICAncHJpdmF0ZScsXG4gICdwdWJsaWMnLFxuICAncHJvcGVydHknLFxuICAncHJvdGVjdGVkJyxcbiAgJ3JldHVybicsXG4gICdzZWUnLFxuICAnc3RhdGljJyxcbiAgJ3Rocm93cycsXG4gICd0eXBlJyxcbiAgJ3R5cGVkZWYnXG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvanNkb2MtcGFyc2VyLWV4dGVuZGVkL2xpYi9jb25zdGFudHMuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBNb2R1bGUgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL01vZHVsZScpO1xuY29uc3QgeyBpc05hbWVzcGFjZURvY3VtZW50IH0gPSByZXF1aXJlKCcuLi91dGlscy9Eb2NDbGFzc2lmaWVyJyk7XG5jb25zdCB7IG9iamVjdCwgfSA9IFJlYWN0LlByb3BUeXBlcztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnSlM6Ok1vZHVsZScsXG4gIHByb3BUeXBlczoge1xuICAgIGRvY3VtZW50Tm9kZTogb2JqZWN0LFxuICAgIG5hbWVzcGFjZU5vZGU6IG9iamVjdCxcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmRvY3VtZW50Tm9kZSB8fCBpc05hbWVzcGFjZURvY3VtZW50KHRoaXMucHJvcHMuZG9jdW1lbnROb2RlLnByb3BlcnRpZXMpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPE1vZHVsZSB7Li4udGhpcy5wcm9wc30gLz5cbiAgICApO1xuICB9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL291dGxldHMvTW9kdWxlT3V0bGV0LmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgSGFzVGl0bGUgPSByZXF1aXJlKCdtaXhpbnMvSGFzVGl0bGUnKTtcbmNvbnN0IE1vZHVsZUhlYWRlciA9IHJlcXVpcmUoJy4vTW9kdWxlSGVhZGVyJyk7XG5jb25zdCBPdXRsZXQgPSByZXF1aXJlKCdjb21wb25lbnRzL091dGxldCcpO1xuXG5jb25zdCBNb2R1bGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIG1peGluczogW1xuICAgIEhhc1RpdGxlKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZG9jdW1lbnROb2RlLnByb3BlcnRpZXMubmFtZTtcbiAgICB9KVxuICBdLFxuXG4gIHByb3BUeXBlczoge1xuICAgIG5hbWVzcGFjZU5vZGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBkb2N1bWVudE5vZGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBkb2N1bWVudEVudGl0eU5vZGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gIH0sXG5cbiAgY2hpbGRDb250ZXh0VHlwZXM6IHtcbiAgICBjb25maWc6IFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgfSxcblxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5uYW1lc3BhY2VOb2RlLmNvbmZpZ1xuICAgIH1cbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkb2N1bWVudE5vZGUsIG5hbWVzcGFjZU5vZGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjb25maWcgfSA9IG5hbWVzcGFjZU5vZGU7XG4gICAgY29uc3QgbW9kdWxlTm9kZSA9IGRvY3VtZW50Tm9kZS50eXBlID09PSAnRG9jdW1lbnRFbnRpdHknID9cbiAgICAgIGRvY3VtZW50Tm9kZS5wYXJlbnROb2RlIDpcbiAgICAgIGRvY3VtZW50Tm9kZVxuICAgIDtcblxuICAgIGNvbnN0IGxlZ2FjeVBhcmFtcyA9IHtcbiAgICAgIG1vZHVsZUlkOiBtb2R1bGVOb2RlLmlkLFxuICAgICAgZW50aXR5OiBkb2N1bWVudE5vZGUudHlwZSA9PT0gJ0RvY3VtZW50RW50aXR5JyA/IGRvY3VtZW50Tm9kZS5pZCA6IHVuZGVmaW5lZCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xhc3Mtdmlld1wiPlxuICAgICAgICA8TW9kdWxlSGVhZGVyXG4gICAgICAgICAgZG9jdW1lbnROb2RlPXttb2R1bGVOb2RlfVxuICAgICAgICAgIHNob3dTb3VyY2VQYXRocz17Y29uZmlnLnNob3dTb3VyY2VQYXRoc31cbiAgICAgICAgICBzaG93TmFtZXNwYWNlPXtjb25maWcuc2hvd05hbWVzcGFjZUluTW9kdWxlSGVhZGVyfVxuICAgICAgICAgIGdlbmVyYXRlQW5jaG9yPXtmYWxzZX1cbiAgICAgICAgLz5cblxuICAgICAgICA8T3V0bGV0XG4gICAgICAgICAgbmFtZT1cIkpTOjpNb2R1bGVCb2R5XCJcbiAgICAgICAgICBlbGVtZW50UHJvcHM9e3tcbiAgICAgICAgICAgIHBhcmFtczogbGVnYWN5UGFyYW1zLFxuICAgICAgICAgICAgcXVlcnk6IHt9LFxuICAgICAgICAgICAgZG9jdW1lbnROb2RlLFxuICAgICAgICAgICAgZG9jdW1lbnRFbnRpdHlOb2RlOiB0aGlzLnByb3BzLmRvY3VtZW50RW50aXR5Tm9kZSxcbiAgICAgICAgICAgIG5hbWVzcGFjZU5vZGUsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZHVsZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL01vZHVsZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcIm1peGlucy9IYXNUaXRsZVwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcIm1peGlucy9IYXNUaXRsZVxcXCJdXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBPdXRsZXQgPSByZXF1aXJlKCdjb21wb25lbnRzL091dGxldCcpO1xuY29uc3QgSGVhZGluZyA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvSGVhZGluZycpO1xuY29uc3QgSGVhZGluZ0FuY2hvciA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvSGVhZGluZ0FuY2hvcicpO1xuY29uc3QgSGlnaGxpZ2h0ZWRUZXh0ID0gcmVxdWlyZSgnY29tcG9uZW50cy9IaWdobGlnaHRlZFRleHQnKTtcbmNvbnN0IEsgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcbmNvbnN0IERvY0NsYXNzaWZpZXIgPSByZXF1aXJlKCcuLi91dGlscy9Eb2NDbGFzc2lmaWVyJyk7XG5jb25zdCB7IFByb3BUeXBlcyB9ID0gUmVhY3Q7XG5cbmNvbnN0IE1vZHVsZUhlYWRlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgZG9jdW1lbnROb2RlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHNob3dTb3VyY2VQYXRoczogUHJvcFR5cGVzLmJvb2wsXG4gICAgaGVhZGVyTGV2ZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZ2VuZXJhdGVBbmNob3I6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dOYW1lc3BhY2U6IFByb3BUeXBlcy5ib29sLFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGVhZGVyTGV2ZWw6ICcxJyxcbiAgICAgIGdlbmVyYXRlQW5jaG9yOiB0cnVlLFxuICAgIH07XG4gIH0sXG5cbiAgLy8gc2hvdWxkQ29tcG9uZW50VXBkYXRlKHByZXZQcm9wcykge1xuICAvLyAgIHJldHVybiBwcmV2UHJvcHMuZG9jdW1lbnROb2RlICE9PSB0aGlzLnByb3BzLmRvY3VtZW50Tm9kZTtcbiAgLy8gfSxcblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGFuY2hvcjtcblxuICAgIGNvbnN0IHsgZG9jdW1lbnROb2RlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRvYyA9IGRvY3VtZW50Tm9kZS5wcm9wZXJ0aWVzIHx8IHtcbiAgICAgIG5hbWU6IGRvY3VtZW50Tm9kZS50aXRsZSxcbiAgICAgIHR5cGU6IEsuVFlQRV9VTktOT1dOXG4gICAgfTtcblxuICAgIGlmICh0aGlzLnByb3BzLmdlbmVyYXRlQW5jaG9yKSB7XG4gICAgICBhbmNob3IgPSBkb2N1bWVudE5vZGUubWV0YS5hbmNob3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkaW5nXG4gICAgICAgICAgbGV2ZWw9XCIxXCJcbiAgICAgICAgICBwYXJlbnRMZXZlbD17dGhpcy5wcm9wcy5oZWFkZXJMZXZlbH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJjbGFzcy12aWV3X19oZWFkZXIgYW5jaG9yYWJsZS1oZWFkaW5nXCJcbiAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy5zaG93U291cmNlUGF0aHMgPyBkb2MuZmlsZVBhdGggOiB1bmRlZmluZWR9XG4gICAgICAgICAgaWQ9e2FuY2hvcn1cbiAgICAgICAgPlxuICAgICAgICAgIHthbmNob3IgJiYgPEhlYWRpbmdBbmNob3IuQW5jaG9yIGhyZWY9e2FuY2hvcn0gLz59XG4gICAgICAgICAge2FuY2hvciAmJiA8SGVhZGluZ0FuY2hvci5MaW5rIGhyZWY9e2FuY2hvcn0gLz59XG5cbiAgICAgICAgICA8SGVhZGluZ0FuY2hvci5UZXh0IGNsYXNzTmFtZT1cImNsYXNzLXZpZXdfX2hlYWRlci1uYW1lXCI+XG4gICAgICAgICAgICA8c3Bhbj57ZG9jLm5hbWV9PC9zcGFuPlxuICAgICAgICAgIDwvSGVhZGluZ0FuY2hvci5UZXh0PlxuXG4gICAgICAgICAgeycgJ31cblxuICAgICAgICAgIHt0aGlzLnByb3BzLnNob3dOYW1lc3BhY2UgJiYgZG9jLm5hbWVzcGFjZSAmJiAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjbGFzcy12aWV3X19oZWFkZXItbmFtZXNwYWNlXCI+XG4gICAgICAgICAgICAgIHsneyd9e2RvYy5uYW1lc3BhY2V9eyd9J31cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgeycgJ31cblxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNsYXNzLXZpZXdfX2hlYWRlci10eXBlXCI+XG4gICAgICAgICAgICA8T3V0bGV0XG4gICAgICAgICAgICAgIG5hbWU9XCJKUzo6TW9kdWxlSGVhZGVyOjpUeXBlXCJcbiAgICAgICAgICAgICAgdGFnTmFtZT1cInNwYW5cIlxuICAgICAgICAgICAgICBmaXJzdE1hdGNoaW5nRWxlbWVudFxuICAgICAgICAgICAgICBlbGVtZW50UHJvcHM9e3RoaXMucHJvcHN9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuPntEb2NDbGFzc2lmaWVyLmdldERpc3BsYXlUeXBlKGRvY3VtZW50Tm9kZSl9PC9zcGFuPlxuICAgICAgICAgICAgPC9PdXRsZXQ+XG5cbiAgICAgICAgICAgIHtoYXNNaXhpblRhcmdldHMoZG9jdW1lbnROb2RlKSAmJiAoXG4gICAgICAgICAgICAgIGRvY3VtZW50Tm9kZS5wcm9wZXJ0aWVzLm1peGluVGFyZ2V0c1xuICAgICAgICAgICAgICAgIC5tYXAoeCA9PiAoXG4gICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e3gubmFtZX0+LCA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogeC5odG1sIHx8IHgubmFtZX19IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7aGFzU3VwZXJDbGFzc2VzKGRvY3VtZW50Tm9kZSkgJiYgKFxuICAgICAgICAgICAgICBkb2N1bWVudE5vZGUucHJvcGVydGllcy5zdXBlckNsYXNzZXNcbiAgICAgICAgICAgICAgICAubWFwKHggPT4gKFxuICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXt4Lm5hbWV9PiwgPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHguaHRtbCB8fCB4Lm5hbWV9fSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvSGVhZGluZz5cblxuICAgICAgICB7dGhpcy5wcm9wcy5zaG93U291cmNlUGF0aHMgJiYgZG9jdW1lbnROb2RlLmZpbGVQYXRoICYmIChcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjbGFzcy12aWV3X19tb2R1bGUtZmlsZXBhdGhcIj5cbiAgICAgICAgICAgIERlZmluZWQgaW46IDxjb2RlPntkb2N1bWVudE5vZGUuZmlsZVBhdGh9PC9jb2RlPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKX1cblxuICAgICAgICA8SGlnaGxpZ2h0ZWRUZXh0IGtleT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAge2RvYy5kZXNjcmlwdGlvbn1cbiAgICAgICAgPC9IaWdobGlnaHRlZFRleHQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxuZnVuY3Rpb24gaGFzTWl4aW5UYXJnZXRzKG5vZGUpIHtcbiAgcmV0dXJuIEJvb2xlYW4oXG4gICAgbm9kZS5wcm9wZXJ0aWVzICYmXG4gICAgbm9kZS5wcm9wZXJ0aWVzLm1peGluVGFyZ2V0cyAmJlxuICAgIG5vZGUucHJvcGVydGllcy5taXhpblRhcmdldHMubGVuZ3RoID4gMFxuICApO1xufVxuXG5mdW5jdGlvbiBoYXNTdXBlckNsYXNzZXMobm9kZSkge1xuICByZXR1cm4gQm9vbGVhbihcbiAgICBub2RlLnByb3BlcnRpZXMgJiZcbiAgICBub2RlLnByb3BlcnRpZXMuc3VwZXJDbGFzc2VzICYmXG4gICAgbm9kZS5wcm9wZXJ0aWVzLnN1cGVyQ2xhc3Nlcy5sZW5ndGggPiAwXG4gICk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTW9kdWxlSGVhZGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvTW9kdWxlSGVhZGVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1wiY29tcG9uZW50cy9PdXRsZXRcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJjb21wb25lbnRzL091dGxldFxcXCJdXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcImNvbXBvbmVudHMvSGVhZGluZ1wiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImNvbXBvbmVudHMvSGVhZGluZ1xcXCJdXCJcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcImNvbXBvbmVudHMvSGVhZGluZ0FuY2hvclwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImNvbXBvbmVudHMvSGVhZGluZ0FuY2hvclxcXCJdXCJcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcImNvbXBvbmVudHMvSGlnaGxpZ2h0ZWRUZXh0XCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwiY29tcG9uZW50cy9IaWdobGlnaHRlZFRleHRcXFwiXVwiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgSyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5mdW5jdGlvbiBpc01ldGhvZChkb2MpIHtcbiAgdmFyIGN0eCA9IGRvYy5ub2RlSW5mbztcblxuICByZXR1cm4gZG9jLnR5cGUgPT09IEsuVFlQRV9GVU5DVElPTiAmJiAoXG4gICAgY3R4LnNjb3BlID09PSBLLlNDT1BFX0ZBQ1RPUllfRVhQT1JUUyB8fFxuICAgIGN0eC5zY29wZSA9PT0gSy5TQ09QRV9JTlNUQU5DRSB8fFxuICAgIGN0eC5zY29wZSA9PT0gSy5TQ09QRV9QUk9UT1RZUEVcbiAgKTtcbn1cblxuZnVuY3Rpb24gaXNDYWxsYmFjayhkb2MpIHtcbiAgcmV0dXJuIGRvYy50eXBlID09PSBLLlRZUEVfRlVOQ1RJT04gJiYgZG9jLnRhZ3Muc29tZSh4ID0+IHgudHlwZSA9PT0gJ2NhbGxiYWNrJyk7XG59XG5cbmZ1bmN0aW9uIGlzVHlwZURlZihkb2MpIHtcbiAgcmV0dXJuICFkb2MuaXNNb2R1bGUgJiYgZG9jLnRhZ3Muc29tZSh4ID0+IHgudHlwZSA9PT0gJ3R5cGVkZWYnKTtcbn1cblxuZnVuY3Rpb24gaXNGYWN0b3J5RXhwb3J0cyhkb2MpIHtcbiAgcmV0dXJuIGRvYy5ub2RlSW5mby5zY29wZSA9PT0gSy5TQ09QRV9GQUNUT1JZX0VYUE9SVFM7XG59XG5cbmZ1bmN0aW9uIGlzQ2xhc3NFbnRpdHkoZG9jKSB7XG4gIHJldHVybiAoXG4gICAgZG9jLm5vZGVJbmZvLnNjb3BlID09PSBLLlNDT1BFX0lOU1RBTkNFIHx8XG4gICAgZG9jLm5vZGVJbmZvLnNjb3BlID09PSBLLlNDT1BFX1BST1RPVFlQRVxuICApO1xufVxuXG5mdW5jdGlvbiBpc1N0YXRpY01ldGhvZChkb2MpIHtcbiAgcmV0dXJuIGRvYy50eXBlID09PSBLLlRZUEVfRlVOQ1RJT04gJiYgIWlzTWV0aG9kKGRvYykgJiYgIWlzQ2FsbGJhY2soZG9jKTtcbn1cblxuZnVuY3Rpb24gaXNFeHBvcnRlZFN5bWJvbChkb2MpIHtcbiAgcmV0dXJuICEhZG9jLmlzRXhwb3J0ZWRTeW1ib2w7XG59XG5cbmV4cG9ydHMuaXNNZXRob2QgPSBpc01ldGhvZDtcbmV4cG9ydHMuaXNDYWxsYmFjayA9IGlzQ2FsbGJhY2s7XG5leHBvcnRzLmlzU3RhdGljTWV0aG9kID0gaXNTdGF0aWNNZXRob2Q7XG5leHBvcnRzLmlzRmFjdG9yeUV4cG9ydHMgPSBpc0ZhY3RvcnlFeHBvcnRzO1xuZXhwb3J0cy5pc0NsYXNzRW50aXR5ID0gaXNDbGFzc0VudGl0eTtcbmV4cG9ydHMuaXNUeXBlRGVmID0gaXNUeXBlRGVmO1xuZXhwb3J0cy5pc0V4cG9ydGVkU3ltYm9sID0gaXNFeHBvcnRlZFN5bWJvbDtcblxuZXhwb3J0cy5nZXREaXNwbGF5VHlwZSA9IGZ1bmN0aW9uKGRvY3VtZW50Tm9kZSkge1xuICBpZiAoZG9jdW1lbnROb2RlLnR5cGUgPT09ICdOYW1lc3BhY2UnKSB7XG4gICAgcmV0dXJuICdMaWJyYXJ5JztcbiAgfVxuXG4gIGlmIChkb2N1bWVudE5vZGUucHJvcGVydGllcy5pc05hbWVzcGFjZSkge1xuICAgIHJldHVybiAnTmFtZXNwYWNlJztcbiAgfVxuICBlbHNlIGlmIChkb2N1bWVudE5vZGUuZW50aXRpZXMuc29tZShuID0+IGlzQ2xhc3NFbnRpdHkobi5wcm9wZXJ0aWVzKSkpIHtcbiAgICByZXR1cm4gJ0NsYXNzJztcbiAgfVxuICBlbHNlIGlmIChkb2N1bWVudE5vZGUuZW50aXRpZXMuc29tZShuID0+IGlzRmFjdG9yeUV4cG9ydHMobi5wcm9wZXJ0aWVzKSkpIHtcbiAgICByZXR1cm4gJ0ZhY3RvcnknO1xuICB9XG4gIGVsc2UgaWYgKGRvY3VtZW50Tm9kZS5wcm9wZXJ0aWVzLnR5cGUgPT09IEsuVFlQRV9GVU5DVElPTikge1xuICAgIHJldHVybiAnRnVuY3Rpb24nO1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiAnT2JqZWN0JztcbiAgfVxufTtcblxuZXhwb3J0cy5pc1Byb3BlcnR5ID0gZnVuY3Rpb24oZG9jKSB7XG4gIHJldHVybiBkb2MgJiYgZG9jLnRhZ3MgJiYgZG9jLnRhZ3Muc29tZSh4ID0+IHgudHlwZSA9PT0gJ3Byb3BlcnR5Jyk7XG59O1xuXG5leHBvcnRzLmlzU3RhdGljUHJvcGVydHkgPSBmdW5jdGlvbihkb2MpIHtcbiAgcmV0dXJuIGV4cG9ydHMuaXNQcm9wZXJ0eShkb2MpICYmIFtcbiAgICBLLlNDT1BFX1BST1RPVFlQRSxcbiAgICBLLlNDT1BFX0lOU1RBTkNFXG4gIF0uaW5kZXhPZihkb2Mubm9kZUluZm8uc2NvcGUpID09PSAtMTtcbn07XG5cbmV4cG9ydHMuaXNNZW1iZXJQcm9wZXJ0eSA9IGZ1bmN0aW9uKGRvYykge1xuICByZXR1cm4gZXhwb3J0cy5pc1Byb3BlcnR5KGRvYykgJiYgIWV4cG9ydHMuaXNTdGF0aWNQcm9wZXJ0eShkb2MpO1xufTtcblxuZXhwb3J0cy5pc1ByaXZhdGUgPSBmdW5jdGlvbihkb2MpIHtcbiAgcmV0dXJuIGRvYyAmJiBkb2MudGFncyAmJiBkb2MudGFncy5zb21lKHggPT4geC50eXBlID09PSAncHJpdmF0ZScpO1xufTtcblxuZXhwb3J0cy5pc1Byb3RlY3RlZCA9IGZ1bmN0aW9uKGRvYykge1xuICByZXR1cm4gZG9jICYmIGRvYy50YWdzICYmIGRvYy50YWdzLnNvbWUoeCA9PiB4LnR5cGUgPT09ICdwcm90ZWN0ZWQnKTtcbn07XG5cbmV4cG9ydHMuaXNQdWJsaWMgPSBmdW5jdGlvbihkb2MpIHtcbiAgcmV0dXJuIChcbiAgICAhZXhwb3J0cy5pc1ByaXZhdGUoZG9jKSAmJlxuICAgICFleHBvcnRzLmlzUHJvdGVjdGVkKGRvYylcbiAgKTtcbn07XG5cbmV4cG9ydHMuaXNOYW1lc3BhY2VEb2N1bWVudCA9IGZ1bmN0aW9uKGRvYykge1xuICByZXR1cm4gZG9jICYmIGRvYy5pc05hbWVzcGFjZTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS91dGlscy9Eb2NDbGFzc2lmaWVyLmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgQ2xhc3NFbnRpdHlCcm93c2VyID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9DbGFzc0VudGl0eUJyb3dzZXInKTtcbmNvbnN0IHsgb2JqZWN0LCB9ID0gUmVhY3QuUHJvcFR5cGVzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdKUzo6TW9kdWxlRW50aXRpZXMnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGRvY3VtZW50Tm9kZTogb2JqZWN0LFxuICAgIGRvY3VtZW50RW50aXR5Tm9kZTogb2JqZWN0LFxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZG9jdW1lbnROb2RlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENsYXNzRW50aXR5QnJvd3NlclxuICAgICAgICBzdGFuZGFsb25lXG4gICAgICAgIGRvY3VtZW50Tm9kZT17dGhpcy5wcm9wcy5kb2N1bWVudE5vZGV9XG4gICAgICAgIGRvY3VtZW50RW50aXR5Tm9kZT17dGhpcy5wcm9wcy5kb2N1bWVudEVudGl0eU5vZGV9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL291dGxldHMvTW9kdWxlRW50aXRpZXNPdXRsZXQuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IExpbmsgPSByZXF1aXJlKCdjb21wb25lbnRzL0xpbmsnKTtcbmNvbnN0IG9yZGVyQXdhcmVTb3J0ID0gcmVxdWlyZSgnLi4vdXRpbHMvb3JkZXJBd2FyZVNvcnQnKTtcbmNvbnN0IGNsYXNzU2V0ID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuY29uc3QgeyBvYmplY3QsIGJvb2wsIH0gPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbnZhciBDbGFzc0VudGl0eUJyb3dzZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHByb3BUeXBlczoge1xuICAgIHN0YW5kYWxvbmU6IGJvb2wsXG4gICAgZG9jdW1lbnROb2RlOiBvYmplY3QsXG4gICAgZG9jdW1lbnRFbnRpdHlOb2RlOiBvYmplY3QsXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZG9jdW1lbnROb2RlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFkb2N1bWVudE5vZGUuZW50aXRpZXMgfHwgIWRvY3VtZW50Tm9kZS5lbnRpdGllcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGVudGl0eURvY3VtZW50cyA9IG9yZGVyQXdhcmVTb3J0LmFzTm9kZXMoZG9jdW1lbnROb2RlLCBkb2N1bWVudE5vZGUuZW50aXRpZXMsICdpZCcpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDx1bFxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgIGNsYXNzU2V0KFwiY2xhc3MtYnJvd3Nlcl9fbWV0aG9kc1wiLCB7XG4gICAgICAgICAgICAnY2xhc3MtYnJvd3Nlcl9fbWV0aG9kcy0tc3RhbmRhbG9uZSc6IHRoaXMucHJvcHMuc3RhbmRhbG9uZVxuICAgICAgICAgIH0pXG4gICAgICB9PlxuICAgICAgICB7ZW50aXR5RG9jdW1lbnRzLm1hcCh0aGlzLnJlbmRlckVudGl0eSl9XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyRW50aXR5KG5vZGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGtleT17bm9kZS51aWR9IGNsYXNzTmFtZT1cImNsYXNzLWJyb3dzZXJfX21ldGhvZHMtZW50aXR5XCI+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgdG89e25vZGV9XG4gICAgICAgICAgY2hpbGRyZW49eyhub2RlLnByb3BlcnRpZXMuc3ltYm9sIHx8ICcnKSArIG5vZGUucHJvcGVydGllcy5uYW1lfVxuICAgICAgICAgIHRpdGxlPXtub2RlLnRpdGxlfVxuICAgICAgICAvPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9LFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2xhc3NFbnRpdHlCcm93c2VyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvQ2xhc3NFbnRpdHlCcm93c2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1wiY29tcG9uZW50cy9MaW5rXCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwiY29tcG9uZW50cy9MaW5rXFxcIl1cIlxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgeyBzb3J0QnkgfSA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvYywgYXJyYXksIGtleSkge1xuICB2YXIgcHJlc2VydmVPcmRlciA9IGRvYy50YWdzLnNvbWUoZnVuY3Rpb24odGFnKSB7XG4gICAgcmV0dXJuIHRhZy50eXBlID09PSAncHJlc2VydmVPcmRlcic7XG4gIH0pO1xuXG4gIGlmIChwcmVzZXJ2ZU9yZGVyKSB7XG4gICAgcmV0dXJuIHNvcnRCeShhcnJheSwgJ2xpbmUnKTtcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gc29ydEJ5KGFycmF5LCBrZXkpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5hc05vZGVzID0gZnVuY3Rpb24oZG9jdW1lbnROb2RlLCBhcnJheSwga2V5KSB7XG4gIHZhciBwcmVzZXJ2ZU9yZGVyID0gZG9jdW1lbnROb2RlLnByb3BlcnRpZXMudGFncy5zb21lKGZ1bmN0aW9uKHRhZykge1xuICAgIHJldHVybiB0YWcudHlwZSA9PT0gJ3ByZXNlcnZlT3JkZXInO1xuICB9KTtcblxuICBpZiAocHJlc2VydmVPcmRlcikge1xuICAgIHJldHVybiBzb3J0QnkoYXJyYXksICdwcm9wZXJ0aWVzLmxpbmUnKTtcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gc29ydEJ5KGFycmF5LCBrZXkpO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL3V0aWxzL29yZGVyQXdhcmVTb3J0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1wibG9kYXNoXCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwibG9kYXNoXFxcIl1cIlxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1wiY2xhc3NuYW1lc1wiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImNsYXNzbmFtZXNcXFwiXVwiXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBNb2R1bGVIZWFkZXIgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL01vZHVsZUhlYWRlcicpO1xuY29uc3QgeyBvYmplY3QsIHNoYXBlLCBib29sLCB9ID0gUmVhY3QuUHJvcFR5cGVzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdKUzo6TW9kdWxlSGVhZGVyJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBkb2N1bWVudE5vZGU6IG9iamVjdCxcbiAgICBuYW1lc3BhY2VOb2RlOiBvYmplY3QsXG4gICAgJG91dGxldE9wdGlvbnM6IHNoYXBlKHtcbiAgICAgIHNob3dGaWxlUGF0aDogYm9vbCxcbiAgICB9KVxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJqcy1tb2R1bGUtaGVhZGVyLW91dGxldFwiPlxuICAgICAgICA8TW9kdWxlSGVhZGVyXG4gICAgICAgICAgZG9jdW1lbnROb2RlPXt0aGlzLnByb3BzLmRvY3VtZW50Tm9kZSB8fCB0aGlzLnByb3BzLm5hbWVzcGFjZU5vZGV9XG4gICAgICAgICAgc2hvd1NvdXJjZVBhdGhzPXt0aGlzLnByb3BzLiRvdXRsZXRPcHRpb25zLnNob3dGaWxlUGF0aCAhPT0gZmFsc2V9XG4gICAgICAgICAgZ2VuZXJhdGVBbmNob3I9e2ZhbHNlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9vdXRsZXRzL01vZHVsZUhlYWRlck91dGxldC5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IHsgb2JqZWN0LCBzaGFwZSwgYm9vbCwgfSA9IFJlYWN0LlByb3BUeXBlcztcbmNvbnN0IE5hbWVzcGFjZUluZGV4ID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9OYW1lc3BhY2VJbmRleCcpO1xuY29uc3QgTW9kdWxlSW5kZXggPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL01vZHVsZUluZGV4Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0pTOjpNb2R1bGVJbmRleCcsXG4gIHByb3BUeXBlczoge1xuICAgIGRvY3VtZW50Tm9kZTogb2JqZWN0LFxuICAgIG5hbWVzcGFjZU5vZGU6IG9iamVjdCxcbiAgICAkb3V0bGV0T3B0aW9uczogc2hhcGUoe1xuICAgICAgc2hvd0Z1bmN0aW9uczogYm9vbCxcbiAgICAgIHNob3dQcm9wZXJ0aWVzOiBib29sLFxuICAgICAgc2hvd1N0YXRpY01lbWJlcnM6IGJvb2wsXG4gICAgfSksXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmFtZXNwYWNlSW5kZXhcbiAgICAgICAgICB7Li4udGhpcy5wcm9wcy4kb3V0bGV0T3B0aW9uc31cbiAgICAgICAgICBkb2N1bWVudE5vZGU9e3RoaXMucHJvcHMuZG9jdW1lbnROb2RlfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxNb2R1bGVJbmRleFxuICAgICAgICAgIHsuLi50aGlzLnByb3BzLiRvdXRsZXRPcHRpb25zfVxuICAgICAgICAgIGRvY3VtZW50Tm9kZT17dGhpcy5wcm9wcy5kb2N1bWVudE5vZGV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL291dGxldHMvTW9kdWxlSW5kZXhPdXRsZXQuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBMaW5rID0gcmVxdWlyZSgnY29tcG9uZW50cy9MaW5rJyk7XG5jb25zdCBEb2NDbGFzc2lmaWVyID0gcmVxdWlyZSgnLi4vdXRpbHMvRG9jQ2xhc3NpZmllcicpO1xuY29uc3QgeyBvYmplY3QgfSA9IFJlYWN0LlByb3BUeXBlcztcblxuY29uc3QgTmFtZXNwYWNlSW5kZXggPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHByb3BUeXBlczoge1xuICAgIGRvY3VtZW50Tm9kZTogb2JqZWN0LFxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRvY3VtZW50Tm9kZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjbGFzc2VzID0gZ2V0QnlEaXNwbGF5VHlwZShkb2N1bWVudE5vZGUsIFsgJ0NsYXNzJywgJ0ZhY3RvcnknIF0pO1xuICAgIGNvbnN0IGZ1bmN0aW9ucyA9IGdldEJ5RGlzcGxheVR5cGUoZG9jdW1lbnROb2RlLCBbICdGdW5jdGlvbicgXSk7XG4gICAgY29uc3QgbmFtZXNwYWNlcyA9IGdldEJ5RGlzcGxheVR5cGUoZG9jdW1lbnROb2RlLCBbICdOYW1lc3BhY2UnIF0pO1xuICAgIGNvbnN0IG90aGVycyA9IGdldFJlbWFpbmluZ0RvY3VtZW50cyhkb2N1bWVudE5vZGUsIFtcbiAgICAgIGNsYXNzZXMsXG4gICAgICBmdW5jdGlvbnMsXG4gICAgICBuYW1lc3BhY2VzXG4gICAgXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJqcy1kb2N1bWVudC1pbmRleFwiPlxuICAgICAgICB7bmFtZXNwYWNlcy5sZW5ndGggPiAwICYmIHRoaXMucmVuZGVyR3JvdXBCeUNvbnRleHRUeXBlKCdOYW1lc3BhY2VzJywgbmFtZXNwYWNlcyl9XG4gICAgICAgIHtjbGFzc2VzLmxlbmd0aCA+IDAgJiYgdGhpcy5yZW5kZXJHcm91cEJ5Q29udGV4dFR5cGUoJ0NsYXNzZXMnLCBjbGFzc2VzKX1cbiAgICAgICAge2Z1bmN0aW9ucy5sZW5ndGggPiAwICYmIHRoaXMucmVuZGVyR3JvdXBCeUNvbnRleHRUeXBlKCdGdW5jdGlvbnMnLCBmdW5jdGlvbnMpfVxuICAgICAgICB7b3RoZXJzLmxlbmd0aCA+IDAgJiYgdGhpcy5yZW5kZXJHcm91cEJ5Q29udGV4dFR5cGUoJ090aGVyJywgb3RoZXJzKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyR3JvdXBCeUNvbnRleHRUeXBlKHRpdGxlLCBkb2N1bWVudHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImRvYy1ncm91cF9faGVhZGVyXCI+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L2gyPlxuXG4gICAgICAgIHt0aGlzLnJlbmRlckdyb3VwKGRvY3VtZW50cyl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH0sXG5cbiAgcmVuZGVyR3JvdXAoZG9jdW1lbnRzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtkb2N1bWVudHMubWFwKHRoaXMucmVuZGVyTW9kdWxlU3VtbWFyeVJlY29yZCl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyTW9kdWxlU3VtbWFyeVJlY29yZChub2RlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0ciBrZXk9e25vZGUudWlkfT5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxMaW5rIHRvPXtub2RlfT57bm9kZS5wcm9wZXJ0aWVzICYmIG5vZGUucHJvcGVydGllcy5uYW1lIHx8IG5vZGUudGl0bGV9PC9MaW5rPlxuICAgICAgICA8L3RkPlxuXG4gICAgICAgIDx0ZD5cbiAgICAgICAgICB7bm9kZS5zdW1tYXJ5IHx8IDxlbSBjbGFzc05hbWU9XCJ0eXBlLW11dGVcIj5ObyBzdW1tYXJ5IHByb3ZpZGVkLjwvZW0+fVxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICApO1xuICB9XG59KTtcblxuZnVuY3Rpb24gZ2V0QnlEaXNwbGF5VHlwZShkb2N1bWVudE5vZGUsIHR5cGVOYW1lcykge1xuICByZXR1cm4gZG9jdW1lbnROb2RlLmRvY3VtZW50cy5maWx0ZXIoeCA9PiB7XG4gICAgcmV0dXJuIHR5cGVOYW1lcy5pbmRleE9mKERvY0NsYXNzaWZpZXIuZ2V0RGlzcGxheVR5cGUoeCkpID4gLTE7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRSZW1haW5pbmdEb2N1bWVudHMoZG9jdW1lbnROb2RlLCBsaXN0cykge1xuICBjb25zdCB1c2VkVUlEcyA9IGxpc3RzLnJlZHVjZShmdW5jdGlvbihtYXAsIGxpc3QpIHtcbiAgICBsaXN0LmZvckVhY2goeCA9PiB7IG1hcFt4LnVpZF0gPSB0cnVlIH0pO1xuICAgIHJldHVybiBtYXA7XG4gIH0sIHt9KTtcblxuICByZXR1cm4gZG9jdW1lbnROb2RlLmRvY3VtZW50cy5maWx0ZXIoeCA9PiAhKHgudWlkIGluIHVzZWRVSURzKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTmFtZXNwYWNlSW5kZXg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL05hbWVzcGFjZUluZGV4LmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgTGluayA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvTGluaycpO1xuY29uc3QgVHlwZU5hbWVzID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9UYWdzL1R5cGVOYW1lcycpO1xuY29uc3QgRnVuY3Rpb25TaWduYXR1cmUgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL0Z1bmN0aW9uU2lnbmF0dXJlJyk7XG5jb25zdCBEb2NDbGFzc2lmaWVyID0gcmVxdWlyZSgnLi4vdXRpbHMvRG9jQ2xhc3NpZmllcicpO1xuY29uc3QgeyBib29sLCBvYmplY3QsIH0gPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbmNvbnN0IE1vZHVsZUluZGV4ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBwcm9wVHlwZXM6IHtcbiAgICBkb2N1bWVudE5vZGU6IG9iamVjdCxcbiAgICBzaG93RnVuY3Rpb25zOiBib29sLFxuICAgIHNob3dQcm9wZXJ0aWVzOiBib29sLFxuICAgIHNob3dTdGF0aWNNZW1iZXJzOiBib29sLFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvd0Z1bmN0aW9uczogdHJ1ZSxcbiAgICAgIHNob3dQcm9wZXJ0aWVzOiB0cnVlLFxuICAgICAgc2hvd1N0YXRpY01lbWJlcnM6IHRydWUsXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkb2N1bWVudE5vZGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbWVtYmVyRnVjdGlvbnMgPSBnZXRCeUNsYXNzaWZpY2F0aW9uKGRvY3VtZW50Tm9kZSwgWyBEb2NDbGFzc2lmaWVyLmlzTWV0aG9kIF0pO1xuICAgIGNvbnN0IG1lbWJlclByb3BlcnRpZXMgPSBnZXRCeUNsYXNzaWZpY2F0aW9uKGRvY3VtZW50Tm9kZSwgWyBEb2NDbGFzc2lmaWVyLmlzTWVtYmVyUHJvcGVydHkgXSk7XG4gICAgY29uc3QgZXhwb3J0ZWRTeW1ib2xzID0gZ2V0QnlDbGFzc2lmaWNhdGlvbihkb2N1bWVudE5vZGUsIFsgRG9jQ2xhc3NpZmllci5pc0V4cG9ydGVkU3ltYm9sIF0pO1xuICAgIGNvbnN0IHN0YXRpY01lbWJlcnMgPSBnZXRCeUNsYXNzaWZpY2F0aW9uKGRvY3VtZW50Tm9kZSwgW1xuICAgICAgRG9jQ2xhc3NpZmllci5pc1N0YXRpY01ldGhvZCxcbiAgICAgIERvY0NsYXNzaWZpZXIuaXNTdGF0aWNQcm9wZXJ0eSxcbiAgICBdKVxuXG4gICAgY29uc3QgcHVibGljU3RhdGljTWVtYmVycyA9IHN0YXRpY01lbWJlcnNcbiAgICAgIC5maWx0ZXIoeCA9PiBEb2NDbGFzc2lmaWVyLmlzUHVibGljKHgucHJvcGVydGllcykpXG4gICAgO1xuXG4gICAgY29uc3QgcHJpdmF0ZVN0YXRpY01lbWJlcnMgPSBzdGF0aWNNZW1iZXJzXG4gICAgICAuZmlsdGVyKHggPT4gIURvY0NsYXNzaWZpZXIuaXNQdWJsaWMoeC5wcm9wZXJ0aWVzKSlcbiAgICA7XG5cbiAgICBjb25zdCBvdGhlcnMgPSBnZXRSZW1haW5pbmdEb2N1bWVudHMoZG9jdW1lbnROb2RlLCBbXG4gICAgICBzdGF0aWNNZW1iZXJzLFxuICAgICAgbWVtYmVyRnVjdGlvbnMsXG4gICAgICBtZW1iZXJQcm9wZXJ0aWVzLFxuICAgICAgZXhwb3J0ZWRTeW1ib2xzXG4gICAgXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJqcy1kb2N1bWVudC1pbmRleFwiPlxuICAgICAgICB7ZXhwb3J0ZWRTeW1ib2xzLmxlbmd0aCA+IDAgJiYgdGhpcy5yZW5kZXJFeHBvcnRlZFN5bWJvbHMoJ0V4cG9ydGVkIFN5bWJvbHMnLCBleHBvcnRlZFN5bWJvbHMpfVxuICAgICAgICB7bWVtYmVyRnVjdGlvbnMubGVuZ3RoID4gMCAmJiB0aGlzLnJlbmRlck1ldGhvZEdyb3VwKCdQdWJsaWMgRnVuY3Rpb25zJywgbWVtYmVyRnVjdGlvbnMpfVxuICAgICAgICB7bWVtYmVyUHJvcGVydGllcy5sZW5ndGggPiAwICYmIHRoaXMucmVuZGVyUHJvcGVydHlHcm91cCgnUHVibGljIFByb3BlcnRpZXMnLCBtZW1iZXJQcm9wZXJ0aWVzKX1cbiAgICAgICAge3B1YmxpY1N0YXRpY01lbWJlcnMubGVuZ3RoID4gMCAmJiB0aGlzLnJlbmRlck1ldGhvZEdyb3VwKCdQdWJsaWMgU3RhdGljIE1lbWJlcnMnLCBwdWJsaWNTdGF0aWNNZW1iZXJzKX1cbiAgICAgICAge3ByaXZhdGVTdGF0aWNNZW1iZXJzLmxlbmd0aCA+IDAgJiYgdGhpcy5yZW5kZXJNZXRob2RHcm91cCgnUHJpdmF0ZSBTdGF0aWMgTWVtYmVycycsIHByaXZhdGVTdGF0aWNNZW1iZXJzKX1cbiAgICAgICAge290aGVycy5sZW5ndGggPiAwICYmIHRoaXMucmVuZGVyR3JvdXBCeUNvbnRleHRUeXBlKCdPdGhlcicsIG90aGVycyl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlckdyb3VwQnlDb250ZXh0VHlwZSh0aXRsZSwgZG9jdW1lbnRzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJkb2MtZ3JvdXBfX2hlYWRlclwiPlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9oMj5cblxuICAgICAgICB7dGhpcy5yZW5kZXJHcm91cChkb2N1bWVudHMpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9LFxuXG4gIHJlbmRlckdyb3VwKGRvY3VtZW50cykge1xuICAgIHJldHVybiAoXG4gICAgICA8dGFibGU+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7ZG9jdW1lbnRzLm1hcCh0aGlzLnJlbmRlck1vZHVsZVN1bW1hcnlSZWNvcmQpfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlck1vZHVsZVN1bW1hcnlSZWNvcmQobm9kZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8dHIga2V5PXtub2RlLnVpZH0+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8TGluayB0bz17bm9kZX0+e25vZGUucHJvcGVydGllcyA/IG5vZGUucHJvcGVydGllcy5uYW1lIDogbm9kZS50aXRsZX08L0xpbms+XG4gICAgICAgIDwvdGQ+XG5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIHtub2RlLnN1bW1hcnkgfHwgPGVtIGNsYXNzTmFtZT1cInR5cGUtbXV0ZVwiPk5vIHN1bW1hcnkgcHJvdmlkZWQuPC9lbT59XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyTWV0aG9kR3JvdXAodGl0bGUsIGRvY3VtZW50cykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZG9jLWdyb3VwX19oZWFkZXJcIj5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvaDI+XG5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtkb2N1bWVudHMubWFwKHRoaXMucmVuZGVyTWV0aG9kU3VtbWFyeVJvdyl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfSxcblxuICByZW5kZXJNZXRob2RTdW1tYXJ5Um93KGRvY3VtZW50Tm9kZSkge1xuICAgIGlmIChEb2NDbGFzc2lmaWVyLmlzUHJvcGVydHkoZG9jdW1lbnROb2RlLnByb3BlcnRpZXMpKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJQcm9wZXJ0eVN1bW1hcnlSb3coZG9jdW1lbnROb2RlKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXR1cm5WYWx1ZSA9IGRvY3VtZW50Tm9kZS5wcm9wZXJ0aWVzLnRhZ3MucmVkdWNlKCh2LCB4KSA9PiB7XG4gICAgICBpZiAoeC50eXBlID09PSAncmV0dXJuJykge1xuICAgICAgICByZXR1cm4geC50eXBlSW5mby50eXBlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB2O1xuICAgICAgfVxuICAgIH0sIHsgbmFtZTogJ3ZvaWQnIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0ciBrZXk9e2RvY3VtZW50Tm9kZS51aWR9PlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWVudGl0eV9fZnVuY3Rpb24tc2lnbmF0dXJlXCI+XG4gICAgICAgICAgICB7cmV0dXJuVmFsdWUgJiYgPFR5cGVOYW1lcyB0eXBlPXtyZXR1cm5WYWx1ZX0gLz59XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L3RkPlxuXG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8TGluayB0bz17ZG9jdW1lbnROb2RlfSBjbGFzc05hbWU9XCJqcy1kb2N1bWVudC1pbmRleF9fZW50aXR5LW5hbWVcIj5cbiAgICAgICAgICAgIHtkb2N1bWVudE5vZGUucHJvcGVydGllcy5uYW1lfVxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIDxGdW5jdGlvblNpZ25hdHVyZVxuICAgICAgICAgICAgZG9jPXtkb2N1bWVudE5vZGUucHJvcGVydGllc31cbiAgICAgICAgICAgIHdpdGhOYW1lcz17ZmFsc2V9XG4gICAgICAgICAgICB3aXRoQnJhY2VzXG4gICAgICAgICAgLz5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgKVxuICB9LFxuXG4gIHJlbmRlclByb3BlcnR5R3JvdXAodGl0bGUsIGRvY3VtZW50cykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZG9jLWdyb3VwX19oZWFkZXJcIj5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvaDI+XG5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtkb2N1bWVudHMubWFwKHRoaXMucmVuZGVyUHJvcGVydHlTdW1tYXJ5Um93KX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9LFxuXG4gIHJlbmRlclByb3BlcnR5U3VtbWFyeVJvdyhkb2N1bWVudE5vZGUpIHtcbiAgICBjb25zdCBwcm9wZXJ0eVRhZyA9IGRvY3VtZW50Tm9kZS5wcm9wZXJ0aWVzLnRhZ3MuZmlsdGVyKHggPT4geC50eXBlID09PSAncHJvcGVydHknKVswXTtcblxuICAgIHJldHVybiAoXG4gICAgICA8dHIga2V5PXtkb2N1bWVudE5vZGUudWlkfT5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1lbnRpdHlfX2Z1bmN0aW9uLXNpZ25hdHVyZVwiPlxuICAgICAgICAgICAgPFR5cGVOYW1lcyB0eXBlPXtwcm9wZXJ0eVRhZy50eXBlSW5mby50eXBlfSAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC90ZD5cblxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPExpbmsgdG89e2RvY3VtZW50Tm9kZX0gY2xhc3NOYW1lPVwianMtZG9jdW1lbnQtaW5kZXhfX2VudGl0eS1uYW1lXCI+XG4gICAgICAgICAgICB7ZG9jdW1lbnROb2RlLnByb3BlcnRpZXMubmFtZX1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgIClcbiAgfSxcblxuICByZW5kZXJFeHBvcnRlZFN5bWJvbHModGl0bGUsIGRvY3VtZW50cykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZG9jLWdyb3VwX19oZWFkZXJcIj5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvaDI+XG5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPlN5bWJvbDwvdGg+XG4gICAgICAgICAgICAgIDx0aD5EZWZpbml0aW9uPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cblxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtkb2N1bWVudHMubWFwKG5vZGUgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBbIHR5cGVJbmZvIF0gPSBub2RlLnByb3BlcnRpZXMudGFncy5maWx0ZXIoeCA9PiB4LnR5cGUgPT09ICdleHBvcnQnKS5tYXAoeCA9PiB4LnR5cGVJbmZvKTtcblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e25vZGUuaWR9PlxuICAgICAgICAgICAgICAgICAgPHRkPnt0eXBlSW5mby5uYW1lIHx8IG5vZGUucHJvcGVydGllcy5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+PFR5cGVOYW1lcyB0eXBlPXt0eXBlSW5mby50eXBlfSAvPjwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGdldEJ5Q2xhc3NpZmljYXRpb24oZG9jdW1lbnROb2RlLCBrbGFzc2lmaWVycykge1xuICByZXR1cm4gZG9jdW1lbnROb2RlLmVudGl0aWVzLmZpbHRlcih4ID0+IHtcbiAgICByZXR1cm4ga2xhc3NpZmllcnMuc29tZShmbiA9PiBmbih4LnByb3BlcnRpZXMpKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFJlbWFpbmluZ0RvY3VtZW50cyhkb2N1bWVudE5vZGUsIGxpc3RzKSB7XG4gIGNvbnN0IHVzZWRVSURzID0gbGlzdHMucmVkdWNlKGZ1bmN0aW9uKG1hcCwgbGlzdCkge1xuICAgIGxpc3QuZm9yRWFjaCh4ID0+IHtcbiAgICAgIG1hcFt4LnVpZF0gPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hcDtcbiAgfSwge30pO1xuXG4gIHJldHVybiBkb2N1bWVudE5vZGUuZW50aXRpZXMuZmlsdGVyKHggPT4gISh4LnVpZCBpbiB1c2VkVUlEcykpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZHVsZUluZGV4O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9Nb2R1bGVJbmRleC5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IGRlc2NyaWJlVHlwZSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2Rlc2NyaWJlVHlwZScpO1xuXG5jb25zdCBUeXBlTmFtZXMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGNvbnRleHRUeXBlczoge1xuICAgIGNvbmZpZzogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB9LFxuXG4gIHByb3BUeXBlczoge1xuICAgIHR5cGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW5cbiAgICAgICAgY2xhc3NOYW1lPVwianMtdHlwZS1uYW1lc1wiXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgX19odG1sOiBkZXNjcmliZVR5cGUoe1xuICAgICAgICAgICAgaHRtbDogdHJ1ZSxcbiAgICAgICAgICAgIGV4cGFuZEZ1bmN0aW9uU2lnbmF0dXJlczogdGhpcy5jb250ZXh0LmNvbmZpZy5leHBhbmRSZXR1cm5lZEZ1bmN0aW9uU2lnbmF0dXJlc1xuICAgICAgICAgIH0pKHRoaXMucHJvcHMudHlwZSlcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfSxcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFR5cGVOYW1lcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvVGFncy9UeXBlTmFtZXMuanMiLCJjb25zdCBLID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5jb25zdCBBUFBMX1NFUCA9ICcgfCAnXG5jb25zdCBBUFBMX1NUQVJUID0gJy4mbHQ7J1xuY29uc3QgQVBQTF9FTkQgICA9ICcmZ3Q7J1xuXG5tb2R1bGUuZXhwb3J0cyA9ICh7IGh0bWwsIGV4cGFuZEZ1bmN0aW9uU2lnbmF0dXJlcyB9KSA9PiBmdW5jdGlvbiByZW5kZXJUeXBlKHR5cGUpIHtcbiAgaWYgKCF0eXBlKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgY29uc3QgZGlzcGxheU5hbWVPZiA9IHggPT4gaHRtbCAmJiB4Lmh0bWwgfHwgeC5uYW1lO1xuICBjb25zdCBkaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lT2YodHlwZSk7XG4gIGNvbnN0IHJlbmRlckZ1bmN0aW9uUGFyYW0gPSBwYXJhbSA9PiAoXG4gICAgZGlzcGxheU5hbWVPZihwYXJhbSlcbiAgKVxuXG4gIGlmICh0eXBlLm5hbWUgPT09IEsuVFlQRV9VTklPTikge1xuICAgIHJldHVybiB0eXBlLmVsZW1lbnRzLm1hcChyZW5kZXJUeXBlKS5qb2luKEFQUExfU0VQKTtcbiAgfVxuICBlbHNlIGlmICh0eXBlLm5hbWUgPT09IEsuVFlQRV9BUlJBWSAmJiB0eXBlLmVsZW1lbnRzKSB7XG4gICAgcmV0dXJuIGBBcnJheSR7QVBQTF9TVEFSVH1gICsgdHlwZS5lbGVtZW50cy5tYXAocmVuZGVyVHlwZSkuam9pbihBUFBMX1NFUCkgKyBBUFBMX0VORDtcbiAgfVxuICBlbHNlIGlmICh0eXBlLm5hbWUgJiYgdHlwZS5lbGVtZW50cykge1xuICAgIHJldHVybiBgJHtkaXNwbGF5TmFtZX0ke0FQUExfU1RBUlR9JHt0eXBlLmVsZW1lbnRzLm1hcChyZW5kZXJUeXBlKS5qb2luKEFQUExfU0VQKX0ke0FQUExfRU5EfWA7XG4gIH1cbiAgLy8gZnVuY3Rpb24gd2l0aCBwYXJhbXMgYW5kIHJldHVybiB0eXBlXG4gIGVsc2UgaWYgKGV4cGFuZEZ1bmN0aW9uU2lnbmF0dXJlcyAmJiB0eXBlLm5hbWUgPT09IEsuVFlQRV9GVU5DVElPTiAmJiB0eXBlLnBhcmFtcyAmJiB0eXBlLnJldHVyblR5cGUpIHtcbiAgICByZXR1cm4gYCgke3R5cGUucGFyYW1zLm1hcChyZW5kZXJGdW5jdGlvblBhcmFtKS5qb2luKCcsICcpfSkgLT4gJHtkaXNwbGF5TmFtZU9mKHR5cGUucmV0dXJuVHlwZSl9YFxuICB9XG4gIC8vIGZ1bmN0aW9uIHdpdGggcmV0dXJuIHR5cGUgb25seVxuICBlbHNlIGlmIChleHBhbmRGdW5jdGlvblNpZ25hdHVyZXMgJiYgdHlwZS5uYW1lID09PSBLLlRZUEVfRlVOQ1RJT04gJiYgdHlwZS5yZXR1cm5UeXBlKSB7XG4gICAgcmV0dXJuIGAoKSAtPiAke2Rpc3BsYXlOYW1lT2YodHlwZS5yZXR1cm5UeXBlKX1gXG4gIH1cbiAgLy8gZnVuY3Rpb24gd2l0aCBwYXJhbXMgb25seVxuICBlbHNlIGlmIChleHBhbmRGdW5jdGlvblNpZ25hdHVyZXMgJiB0eXBlLm5hbWUgPT09IEsuVFlQRV9GVU5DVElPTiAmJiB0eXBlLnBhcmFtcykge1xuICAgIHJldHVybiBgKCR7dHlwZS5wYXJhbXMubWFwKHJlbmRlckZ1bmN0aW9uUGFyYW0pLmpvaW4oJywgJyl9KSAtPiA/YFxuICB9XG4gIGVsc2UgaWYgKHR5cGUubmFtZSA9PT0gSy5UWVBFX0FMTF9MSVRFUkFMKSB7XG4gICAgcmV0dXJuICcqJztcbiAgfVxuXG4gIHZhciBidWZmZXIgPSBkaXNwbGF5TmFtZTtcblxuICBpZiAodHlwZS5udWxsYWJsZSA9PT0gZmFsc2UpIHtcbiAgICBidWZmZXIgKz0gJyEnO1xuICB9XG5cbiAgaWYgKHR5cGUubnVsbGFibGUgPT09IHRydWUpIHtcbiAgICBidWZmZXIgKz0gJz8nO1xuICB9XG5cbiAgaWYgKHR5cGUub3B0aW9uYWwpIHtcbiAgICBidWZmZXIgKz0gJz0nO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZmZlcjtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS91dGlscy9kZXNjcmliZVR5cGUuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCB7IGJvb2wsIG9iamVjdCwgfSA9IFJlYWN0LlByb3BUeXBlcztcbmNvbnN0IGRlc2NyaWJlVHlwZSA9IHJlcXVpcmUoJy4uL3V0aWxzL2Rlc2NyaWJlVHlwZScpO1xuXG5jb25zdCBGdW5jdGlvblNpZ25hdHVyZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgY29udGV4dFR5cGVzOiB7XG4gICAgY29uZmlnOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIH0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgZG9jOiBvYmplY3QsXG4gICAgd2l0aE5hbWVzOiBib29sLFxuICAgIHdpdGhCcmFjZXM6IGJvb2wsXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB3aXRoTmFtZXM6IHRydWUsXG4gICAgICB3aXRoQnJhY2VzOiB0cnVlXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB3aXRoTmFtZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZGVzY3JpYmVUeXBlSFRNTCA9IGRlc2NyaWJlVHlwZSh7XG4gICAgICBleHBhbmRGdW5jdGlvblNpZ25hdHVyZXM6IHRoaXMuY29udGV4dC5jb25maWcuZXhwYW5kUmV0dXJuZWRGdW5jdGlvblNpZ25hdHVyZXMsXG4gICAgICBodG1sOiB0cnVlLFxuICAgIH0pXG4gICAgY29uc3QgZGVzY3JpYmVUeXBlVGV4dCA9IGRlc2NyaWJlVHlwZSh7XG4gICAgICBleHBhbmRGdW5jdGlvblNpZ25hdHVyZXM6IHRoaXMuY29udGV4dC5jb25maWcuZXhwYW5kUmV0dXJuZWRGdW5jdGlvblNpZ25hdHVyZXMsXG4gICAgICBodG1sOiBmYWxzZSxcbiAgICB9KVxuXG4gICAgY29uc3QgcGFyYW1UYWdzID0gdGhpcy5wcm9wcy5kb2MudGFncy5maWx0ZXIoZnVuY3Rpb24odGFnKSB7XG4gICAgICByZXR1cm4gdGFnLnR5cGUgPT09ICdwYXJhbScgJiYgKHRhZy50eXBlSW5mby5uYW1lIHx8ICc/JykuaW5kZXhPZignLicpID09PSAtMTtcbiAgICB9KVxuXG4gICAgY29uc3QgcGFyYW1MaW5lcyA9IHBhcmFtVGFncy5tYXAoZnVuY3Rpb24ocGFyYW0pIHtcbiAgICAgIGlmICh3aXRoTmFtZXMgJiYgcGFyYW0udHlwZUluZm8ubmFtZSkge1xuICAgICAgICByZXR1cm4gJzxlbT4nICsgKHBhcmFtLnR5cGVJbmZvLm5hbWUgfHwgJz8nKSArICc8L2VtPjogJyArIGRlc2NyaWJlVHlwZUhUTUwocGFyYW0udHlwZUluZm8udHlwZSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVHlwZUhUTUwocGFyYW0udHlwZUluZm8udHlwZSk7XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIGl0J3MgMzo0MiBBTSBhbmQgaSBjYW4ndCBzbGVlcFxuICAgIGNvbnN0IHBhcmFtVGFnVG90YWxMZW5ndGggPSBwYXJhbVRhZ3MubWFwKHRhZyA9PiB7XG4gICAgICBpZiAod2l0aE5hbWVzICYmIHRhZy50eXBlSW5mby5uYW1lKSB7XG4gICAgICAgIHJldHVybiB0YWcudHlwZUluZm8ubmFtZSArICc6ICcgKyBkZXNjcmliZVR5cGVUZXh0KHRhZy50eXBlSW5mby50eXBlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZGVzY3JpYmVUeXBlVGV4dCh0YWcudHlwZUluZm8udHlwZSk7XG4gICAgICB9XG4gICAgfSkuam9pbignLCAnKS5sZW5ndGhcblxuICAgIGNvbnN0IG5lZWRzQnJlYWsgPSBwYXJhbVRhZ1RvdGFsTGVuZ3RoID49IDQwXG4gICAgY29uc3QgaHRtbCA9IHBhcmFtTGluZXNcbiAgICAgIC5tYXAobGluZSA9PiB7XG4gICAgICAgIHJldHVybiBuZWVkc0JyZWFrID8gYDxiciAvPiZuYnNwOyZuYnNwOyR7bGluZX1gIDogbGluZVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcsICcpICsgKG5lZWRzQnJlYWsgPyAnPGJyIC8+JyA6ICcnKVxuICAgIDtcblxuICAgIHJldHVybiAoXG4gICAgICA8c3BhblxuICAgICAgICBjbGFzc05hbWU9XCJkb2MtZW50aXR5X19mdW5jdGlvbi1zaWduYXR1cmVcIlxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgIF9faHRtbDogdGhpcy5wcm9wcy53aXRoQnJhY2VzID8gYCgke2h0bWx9KWAgOiBodG1sXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZ1bmN0aW9uU2lnbmF0dXJlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9GdW5jdGlvblNpZ25hdHVyZS5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IE1vZHVsZUJvZHkgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL01vZHVsZUJvZHknKTtcbmNvbnN0IHsgb2JqZWN0LCB9ID0gUmVhY3QuUHJvcFR5cGVzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdKUzo6TW9kdWxlQm9keScsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgZG9jdW1lbnROb2RlOiBvYmplY3QsXG4gICAgbmFtZXNwYWNlTm9kZTogb2JqZWN0LFxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZG9jdW1lbnROb2RlLnByb3BlcnRpZXMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiA8TW9kdWxlQm9keSB7Li4udGhpcy5wcm9wc30gLz47XG4gIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvb3V0bGV0cy9Nb2R1bGVCb2R5T3V0bGV0LmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgeyBmaW5kV2hlcmUsIHdoZXJlIH0gPSByZXF1aXJlKFwibG9kYXNoXCIpO1xuY29uc3QgT3V0bGV0ID0gcmVxdWlyZSgnY29tcG9uZW50cy9PdXRsZXQnKTtcbmNvbnN0IExpbmsgPSByZXF1aXJlKCdjb21wb25lbnRzL0xpbmsnKTtcbmNvbnN0IERvYyA9IHJlcXVpcmUoJy4vRG9jJyk7XG5jb25zdCBPYmplY3RTeW5vcHNpcyA9IHJlcXVpcmUoJy4vT2JqZWN0U3lub3BzaXMnKTtcbmNvbnN0IFNlZVRhZyA9IHJlcXVpcmUoJy4vVGFncy9TZWVUYWcnKTtcbmNvbnN0IERvY0dyb3VwID0gcmVxdWlyZSgnLi9Eb2NHcm91cCcpO1xuY29uc3QgUHJvcGVydHlUYWcgPSByZXF1aXJlKCcuL1RhZ3MvUHJvcGVydHlUYWcnKTtcbmNvbnN0IEV4YW1wbGVUYWcgPSByZXF1aXJlKCcuL1RhZ3MvRXhhbXBsZVRhZycpO1xuY29uc3Qgb3JkZXJBd2FyZVNvcnQgPSByZXF1aXJlKCcuLi91dGlscy9vcmRlckF3YXJlU29ydCcpO1xuY29uc3QgRG9jQ2xhc3NpZmllciA9IHJlcXVpcmUoJy4uL3V0aWxzL0RvY0NsYXNzaWZpZXInKTtcbmNvbnN0IEsgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcbmNvbnN0IHsgc3RyaW5nLCBvYmplY3QsIGFycmF5T2YgfSA9IFJlYWN0LlByb3BUeXBlcztcblxuY29uc3QgTW9kdWxlQm9keSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgZG9jdW1lbnROb2RlOiBvYmplY3QsXG4gICAgbmFtZXNwYWNlTm9kZTogb2JqZWN0LFxuICAgIGRvYzogb2JqZWN0LFxuICAgIG1vZHVsZURvY3M6IGFycmF5T2Yob2JqZWN0KSxcbiAgICBmb2N1c2VkRW50aXR5OiBzdHJpbmcsXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZG9jdW1lbnROb2RlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRvYyA9IGRvY3VtZW50Tm9kZS5wcm9wZXJ0aWVzO1xuICAgIGNvbnN0IG1vZHVsZURvY3MgPSBkb2N1bWVudE5vZGUuZW50aXRpZXMubWFwKHggPT4geC5wcm9wZXJ0aWVzKTtcbiAgICBjb25zdCByZW5kZXJhYmxlVHlwZSA9IERvY0NsYXNzaWZpZXIuZ2V0RGlzcGxheVR5cGUoZG9jdW1lbnROb2RlKTtcbiAgICBjb25zdCB3aXRob3V0VHlwZURlZnMgPSBtb2R1bGVEb2NzLmZpbHRlcih4ID0+ICFEb2NDbGFzc2lmaWVyLmlzVHlwZURlZih4KSlcbiAgICBjb25zdCB0eXBlZGVmcyA9IGRvY3VtZW50Tm9kZS5lbnRpdGllcy5maWx0ZXIoeCA9PiBEb2NDbGFzc2lmaWVyLmlzVHlwZURlZih4LnByb3BlcnRpZXMpKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtyZW5kZXJhYmxlVHlwZSA9PT0gJ0ZhY3RvcnknICYmIChcbiAgICAgICAgICB0aGlzLnJlbmRlckNvbnN0cnVjdG9yKGRvYywgXCJJbnN0YW5jZSBDb25zdHJ1Y3RvclwiKVxuICAgICAgICApfVxuXG4gICAgICAgIHtyZW5kZXJhYmxlVHlwZSA9PT0gJ0NsYXNzJyAmJiAoXG4gICAgICAgICAgdGhpcy5yZW5kZXJDb25zdHJ1Y3Rvcihkb2MsIFwiQ29uc3RydWN0b3JcIilcbiAgICAgICAgKX1cblxuICAgICAgICB7cmVuZGVyYWJsZVR5cGUgPT09ICdGdW5jdGlvbicgJiYgKFxuICAgICAgICAgIHRoaXMucmVuZGVyQ29uc3RydWN0b3IoZG9jLCBcIlNpZ25hdHVyZVwiKVxuICAgICAgICApfVxuXG4gICAgICAgIHt0aGlzLnJlbmRlckV4YW1wbGVzKGRvYyl9XG4gICAgICAgIHt0aGlzLnJlbmRlclN0YXRpY01ldGhvZHMoZG9jLCB3aXRob3V0VHlwZURlZnMpfVxuICAgICAgICB7dGhpcy5yZW5kZXJDYWxsYmFja3MoZG9jLCB3aXRob3V0VHlwZURlZnMpfVxuICAgICAgICB7dGhpcy5yZW5kZXJUeXBlRGVmcyhkb2MsIHR5cGVkZWZzKX1cbiAgICAgICAge3RoaXMucmVuZGVyUHJvcGVydGllcyhcbiAgICAgICAgICBkb2MsXG4gICAgICAgICAgd2l0aG91dFR5cGVEZWZzLFxuICAgICAgICAgIChzY29wZSkgPT4gIWlzU3RhdGljUHJvcGVydHkoc2NvcGUpLFxuICAgICAgICAgIFwiSW5zdGFuY2UgUHJvcGVydGllc1wiXG4gICAgICAgICl9XG5cbiAgICAgICAge3RoaXMucmVuZGVyUHJvcGVydGllcyhcbiAgICAgICAgICBkb2MsXG4gICAgICAgICAgd2l0aG91dFR5cGVEZWZzLFxuICAgICAgICAgIGlzU3RhdGljUHJvcGVydHksXG4gICAgICAgICAgXCJTdGF0aWMgUHJvcGVydGllc1wiXG4gICAgICAgICl9XG5cbiAgICAgICAge3RoaXMucmVuZGVyTWV0aG9kcyhkb2MsIHdpdGhvdXRUeXBlRGVmcyl9XG4gICAgICAgIHt0aGlzLnJlbmRlckFkZGl0aW9uYWxSZXNvdXJjZXMoZG9jKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyQ29uc3RydWN0b3IoZG9jLCB0aXRsZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZG9jLWdyb3VwX19oZWFkZXJcIj57dGl0bGV9PC9oMj5cblxuICAgICAgICA8RG9jXG4gICAgICAgICAgd2l0aERlc2NyaXB0aW9uPXtmYWxzZX1cbiAgICAgICAgICB3aXRoRXhhbXBsZXM9e2ZhbHNlfVxuICAgICAgICAgIHdpdGhBZGRpdGlvbmFsUmVzb3VyY2VzPXtmYWxzZX1cbiAgICAgICAgICBjb2xsYXBzaWJsZT17ZmFsc2V9XG4gICAgICAgICAgZG9jPXtkb2N9XG4gICAgICAgICAgY29uZmlnPXt0aGlzLnByb3BzLm5hbWVzcGFjZU5vZGUuY29uZmlnfVxuICAgICAgICAgIGhlYWRpbmdUYWc9XCJoM1wiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlckV4YW1wbGVzKGRvYykge1xuICAgIGNvbnN0IHRhZ3MgPSB3aGVyZShkb2MudGFncywgeyB0eXBlOiAnZXhhbXBsZScgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPE91dGxldCBuYW1lPVwiSlM6OkV4YW1wbGVUYWdzXCIgZWxlbWVudFByb3BzPXt7dGFnc319PlxuICAgICAgICB7dGFncy5sZW5ndGggPT09IDEgJiYgKHRoaXMucmVuZGVyRXhhbXBsZVRhZyh0YWdzWzBdKSl9XG5cbiAgICAgICAge3RhZ3MubGVuZ3RoID4gMSAmJiAoXG4gICAgICAgICAgPERvY0dyb3VwIGxhYmVsPVwiRXhhbXBsZXNcIiBhbHdheXNHcm91cD17ZmFsc2V9PlxuICAgICAgICAgICAge3RhZ3MubWFwKHRoaXMucmVuZGVyRXhhbXBsZVRhZyl9XG4gICAgICAgICAgPC9Eb2NHcm91cD5cbiAgICAgICAgKX1cbiAgICAgIDwvT3V0bGV0PlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyRXhhbXBsZVRhZyh0YWcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE91dGxldFxuICAgICAgICBrZXk9e3RhZy5zdHJpbmd9XG4gICAgICAgIG5hbWU9XCJKUzo6RXhhbXBsZVRhZ1wiXG4gICAgICAgIGVsZW1lbnRQcm9wcz17e1xuICAgICAgICAgIHRhZyxcbiAgICAgICAgICBkb2N1bWVudE5vZGU6IHRoaXMucHJvcHMuZG9jdW1lbnROb2RlXG4gICAgICAgIH19XG4gICAgICAgIGZpcnN0TWF0Y2hpbmdFbGVtZW50XG4gICAgICA+XG4gICAgICAgIDxFeGFtcGxlVGFnIHN0cmluZz17dGFnLnN0cmluZ30gdHlwZUluZm89e3RhZy50eXBlSW5mb30gLz5cbiAgICAgIDwvT3V0bGV0PlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyQWRkaXRpb25hbFJlc291cmNlcyhkb2MpIHtcbiAgICBjb25zdCB0YWdzID0gd2hlcmUoZG9jLnRhZ3MsIHsgdHlwZTogJ3NlZScgfSk7XG5cbiAgICBpZiAoIXRhZ3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPERvY0dyb3VwIGxhYmVsPVwiQWRkaXRpb25hbCByZXNvdXJjZXNcIiBjbGFzc05hbWU9XCJjbGFzcy12aWV3X19zZWVzXCIgdGFnTmFtZT1cInVsXCI+XG4gICAgICAgIHt0YWdzLm1hcCh0aGlzLnJlbmRlclNlZVRhZyl9XG4gICAgICA8L0RvY0dyb3VwPlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyU2VlVGFnKHRhZykge1xuICAgIHJldHVybiAoXG4gICAgICA8U2VlVGFnIGtleT17dGFnLnR5cGVJbmZvLm5hbWV9IHsuLi50YWd9IC8+XG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJQcm9wZXJ0aWVzKGRvYywgbW9kdWxlRG9jcywgc2NvcGUgPSBudWxsLCB0aXRsZSA9ICdQcm9wZXJ0aWVzJykge1xuICAgIGNvbnN0IHByb3BlcnR5RG9jcyA9IG9yZGVyQXdhcmVTb3J0KFxuICAgICAgZG9jLFxuICAgICAgbW9kdWxlRG9jcy5maWx0ZXIoZnVuY3Rpb24oZW50aXR5RG9jKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAoc2NvcGUgPyBzY29wZShlbnRpdHlEb2Mubm9kZUluZm8uc2NvcGUpIDogdHJ1ZSkgJiZcbiAgICAgICAgICAoXG4gICAgICAgICAgICBlbnRpdHlEb2Mubm9kZUluZm8udHlwZSA9PT0gSy5UWVBFX0xJVEVSQUwgfHxcbiAgICAgICAgICAgIGVudGl0eURvYy50YWdzLnNvbWUoeCA9PiB4LnR5cGUgPT09ICdwcm9wZXJ0eScpXG4gICAgICAgICAgKSAmJiBlbnRpdHlEb2Muc3ltYm9sICE9PSAnfidcbiAgICAgICAgKTtcbiAgICAgIH0pLFxuICAgICAgJ2lkJ1xuICAgICk7XG5cbiAgICBpZiAoIXByb3BlcnR5RG9jcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8RG9jR3JvdXAgbGFiZWw9e3RpdGxlfSB0YWdOYW1lPVwiZGl2XCIgY2xhc3NOYW1lPVwianMtZG9jLWVudGl0eV9fcHJvcGVydHktdGFnc1wiPlxuICAgICAgICB7cHJvcGVydHlEb2NzLm1hcCh0aGlzLnJlbmRlclByb3BlcnR5KX1cbiAgICAgIDwvRG9jR3JvdXA+XG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJQcm9wZXJ0eShkb2MpIHtcbiAgICBjb25zdCB0YWcgPSAoXG4gICAgICBmaW5kV2hlcmUoZG9jLnRhZ3MsIHsgdHlwZTogJ3Byb3BlcnR5JyB9KSB8fFxuICAgICAgZmluZFdoZXJlKGRvYy50YWdzLCB7IHR5cGU6ICd0eXBlJyB9KSB8fCB7XG4gICAgICAgIHR5cGVJbmZvOiB7XG4gICAgICAgICAgbmFtZTogZG9jLm5hbWUsXG4gICAgICAgICAgdHlwZTogeyBuYW1lOiBkb2MudHlwZSB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuXG4gICAgaWYgKGRvYy50eXBlICYmIGRvYy50eXBlID09PSBLLlRZUEVfT0JKRUNUICYmICEhdGFnLnR5cGVJbmZvLm5hbWUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxPYmplY3RTeW5vcHNpc1xuICAgICAgICAgIGtleT17ZG9jLmlkfVxuICAgICAgICAgIGRvYz17ZG9jfVxuICAgICAgICAgIGFuY2hvcj17dGhpcy5nZXRFbnRpdHlBbmNob3IoZG9jKX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQcm9wZXJ0eVRhZ1xuICAgICAgICBrZXk9e2RvYy5pZH1cbiAgICAgICAgdHlwZUluZm89e3RhZy50eXBlSW5mb31cbiAgICAgICAgYW5jaG9yPXt0aGlzLmdldEVudGl0eUFuY2hvcihkb2MpfVxuICAgICAgICBkb2M9e2RvY31cbiAgICAgID5cbiAgICAgICAge2RvYy50eXBlICYmIGRvYy50eXBlID09PSBLLlRZUEVfRlVOQ1RJT04gJiYgKFxuICAgICAgICAgIDxEb2NcbiAgICAgICAgICAgIHdpdGhUaXRsZT17ZmFsc2V9XG4gICAgICAgICAgICBjb2xsYXBzaWJsZT17ZmFsc2V9XG4gICAgICAgICAgICBkb2M9e2RvY31cbiAgICAgICAgICAgIGNvbmZpZz17dGhpcy5wcm9wcy5uYW1lc3BhY2VOb2RlLmNvbmZpZ31cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9Qcm9wZXJ0eVRhZz5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlclN0YXRpY01ldGhvZHMoZG9jLCBtb2R1bGVEb2NzKSB7XG4gICAgY29uc3Qgc3RhdGljTWV0aG9kRG9jcyA9IG9yZGVyQXdhcmVTb3J0KFxuICAgICAgZG9jLFxuICAgICAgbW9kdWxlRG9jcy5maWx0ZXIoRG9jQ2xhc3NpZmllci5pc1N0YXRpY01ldGhvZCksXG4gICAgICAnaWQnXG4gICAgKTtcblxuICAgIGlmICghc3RhdGljTWV0aG9kRG9jcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8RG9jR3JvdXAgbGFiZWw9XCJTdGF0aWMgTWV0aG9kc1wiIHRhZ05hbWU9XCJ1bFwiIGNsYXNzTmFtZT1cImNsYXNzLXZpZXdfX21ldGhvZC1saXN0XCI+XG4gICAgICAgIHtzdGF0aWNNZXRob2REb2NzLm1hcCh0aGlzLnJlbmRlclN0YXRpY01ldGhvZCl9XG4gICAgICA8L0RvY0dyb3VwPlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyQ2FsbGJhY2tzKGRvYywgbW9kdWxlRG9jcykge1xuICAgIGNvbnN0IGNhbGxiYWNrRG9jcyA9IG9yZGVyQXdhcmVTb3J0KFxuICAgICAgZG9jLFxuICAgICAgbW9kdWxlRG9jcy5maWx0ZXIoRG9jQ2xhc3NpZmllci5pc0NhbGxiYWNrKSxcbiAgICAgICdpZCdcbiAgICApO1xuXG4gICAgaWYgKCFjYWxsYmFja0RvY3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPERvY0dyb3VwIGxhYmVsPVwiQ2FsbGJhY2sgRGVmaW5pdGlvbnNcIiB0YWdOYW1lPVwidWxcIiBjbGFzc05hbWU9XCJjbGFzcy12aWV3X19tZXRob2QtbGlzdFwiPlxuICAgICAgICB7Y2FsbGJhY2tEb2NzLm1hcCh0aGlzLnJlbmRlclN0YXRpY01ldGhvZCl9XG4gICAgICA8L0RvY0dyb3VwPlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyVHlwZURlZnMoZG9jLCB0eXBlZGVmTm9kZXMpIHtcbiAgICBpZiAoIXR5cGVkZWZOb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IG9yZGVyZWROb2RlcyA9IG9yZGVyQXdhcmVTb3J0LmFzTm9kZXMoeyBwcm9wZXJ0aWVzOiBkb2MgfSwgdHlwZWRlZk5vZGVzLCAnaWQnKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8RG9jR3JvdXAgbGFiZWw9XCJUeXBlIERlZmluaXRpb25zXCIgdGFnTmFtZT1cInVsXCIgY2xhc3NOYW1lPVwiY2xhc3Mtdmlld19fdHlwZS1kZWYtbGlzdFwiPlxuICAgICAgICB7b3JkZXJlZE5vZGVzLm1hcCh0eXBlZGVmTm9kZSA9PiB7XG4gICAgICAgICAgY29uc3QgdHlwZWRlZkRvYyA9IHR5cGVkZWZOb2RlLnByb3BlcnRpZXNcbiAgICAgICAgICBjb25zdCBwcm9wZXJ0eVRhZ3MgPSB0eXBlZGVmRG9jLnRhZ3MuZmlsdGVyKHggPT4geC50eXBlID09PSAncHJvcGVydHknKVxuICAgICAgICAgIGNvbnN0IG1lbWJlclByb3BlcnR5VGFncyA9ICh0eXBlZGVmTm9kZS5lbnRpdGllcyB8fCBbXSkucmVkdWNlKChsaXN0LCBlbnRpdHkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBsaXN0LmNvbmNhdChcbiAgICAgICAgICAgICAgZW50aXR5LnByb3BlcnRpZXMudGFncy5maWx0ZXIoeCA9PiB4LnR5cGUgPT09ICdwcm9wZXJ0eScpLm1hcChwcm9wZXJ0eVRhZyA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByb3BlcnR5VGFnLCB7IGFuY2hvcjogZW50aXR5Lm1ldGEuYW5jaG9yIH0pXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSwgW10pXG5cbiAgICAgICAgICBjb25zdCBhbGxQcm9wZXJ0eVRhZ3MgPSBwcm9wZXJ0eVRhZ3MuY29uY2F0KG1lbWJlclByb3BlcnR5VGFncylcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RG9jXG4gICAgICAgICAgICAgIGtleT17dHlwZWRlZkRvYy5pZH1cbiAgICAgICAgICAgICAgZG9jPXt0eXBlZGVmRG9jfVxuICAgICAgICAgICAgICBhbmNob3I9e3RoaXMuZ2V0RW50aXR5QW5jaG9yKHR5cGVkZWZEb2MpfVxuICAgICAgICAgICAgICBjb25maWc9e3RoaXMucHJvcHMubmFtZXNwYWNlTm9kZS5jb25maWd9XG4gICAgICAgICAgICAgIGhlYWRpbmdUYWc9XCJoM1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHthbGxQcm9wZXJ0eVRhZ3MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRhZy1ncm91cF9faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICB7XCJQcm9wZXJ0aWVzXCJ9XG4gICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICB7YWxsUHJvcGVydHlUYWdzLm1hcCgodGFnLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxQcm9wZXJ0eVRhZ1xuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgIHR5cGVJbmZvPXt0YWcudHlwZUluZm99XG4gICAgICAgICAgICAgICAgICAgIGFuY2hvcj17dGFnLmFuY2hvcn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvRG9jPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L0RvY0dyb3VwPlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyU3RhdGljTWV0aG9kKGRvYykge1xuICAgIHJldHVybiAoXG4gICAgICA8RG9jXG4gICAgICAgIGtleT17ZG9jLmlkfVxuICAgICAgICBkb2M9e2RvY31cbiAgICAgICAgYW5jaG9yPXt0aGlzLmdldEVudGl0eUFuY2hvcihkb2MpfVxuICAgICAgICBjb25maWc9e3RoaXMucHJvcHMubmFtZXNwYWNlTm9kZS5jb25maWd9XG4gICAgICAgIGhlYWRpbmdUYWc9XCJoM1wiXG4gICAgICAvPlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyTWV0aG9kcyhkb2MsIG1vZHVsZURvY3MpIHtcbiAgICBjb25zdCBtZXRob2REb2NzID0gb3JkZXJBd2FyZVNvcnQoXG4gICAgICBkb2MsXG4gICAgICBtb2R1bGVEb2NzLmZpbHRlcihEb2NDbGFzc2lmaWVyLmlzTWV0aG9kKSxcbiAgICAgICdpZCdcbiAgICApO1xuXG4gICAgaWYgKCFtZXRob2REb2NzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEb2NHcm91cCBsYWJlbD1cIkluc3RhbmNlIE1ldGhvZHNcIiB0YWdOYW1lPVwidWxcIiBjbGFzc05hbWU9XCJjbGFzcy12aWV3X19tZXRob2QtbGlzdFwiPlxuICAgICAgICB7bWV0aG9kRG9jcy5tYXAodGhpcy5yZW5kZXJNZXRob2QpfVxuICAgICAgPC9Eb2NHcm91cD5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlck1ldGhvZChkb2MpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPERvY1xuICAgICAgICBrZXk9e2RvYy5pZH1cbiAgICAgICAgZG9jPXtkb2N9XG4gICAgICAgIGFuY2hvcj17dGhpcy5nZXRFbnRpdHlBbmNob3IoZG9jKX1cbiAgICAgICAgY29uZmlnPXt0aGlzLnByb3BzLm5hbWVzcGFjZU5vZGUuY29uZmlnfVxuICAgICAgICBoZWFkaW5nVGFnPVwiaDNcIlxuICAgICAgLz5cbiAgICApO1xuICB9LFxuXG4gIGdldEVudGl0eUFuY2hvcihkb2MpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5kb2N1bWVudE5vZGUuZW50aXRpZXMuZmlsdGVyKHggPT4geC5wcm9wZXJ0aWVzID09PSBkb2MpWzBdLm1ldGEuYW5jaG9yO1xuICB9LFxufSk7XG5cbmZ1bmN0aW9uIGlzU3RhdGljUHJvcGVydHkoc2NvcGUpIHtcbiAgcmV0dXJuIFtcbiAgICBLLlNDT1BFX1BST1RPVFlQRSxcbiAgICBLLlNDT1BFX0lOU1RBTkNFXG4gIF0uaW5kZXhPZihzY29wZSkgPT09IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZHVsZUJvZHk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9Nb2R1bGVCb2R5LmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgY2xhc3NTZXQgPSByZXF1aXJlKCd1dGlscy9jbGFzc1NldCcpO1xuY29uc3QgSGlnaGxpZ2h0ZWRUZXh0ID0gcmVxdWlyZSgnY29tcG9uZW50cy9IaWdobGlnaHRlZFRleHQnKTtcbmNvbnN0IERvY1RhZ3MgPSByZXF1aXJlKCcuL0RvY1RhZ3MnKTtcbmNvbnN0IEZ1bmN0aW9uU2lnbmF0dXJlID0gcmVxdWlyZSgnLi9GdW5jdGlvblNpZ25hdHVyZScpO1xuY29uc3QgVHlwZU5hbWVzID0gcmVxdWlyZSgnLi9UYWdzL1R5cGVOYW1lcycpO1xuY29uc3QgRGVwcmVjYXRlZFRhZyA9IHJlcXVpcmUoJy4vVGFncy9EZXByZWNhdGVkVGFnJyk7XG5jb25zdCBLID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5jb25zdCBEb2NDbGFzc2lmaWVyID0gcmVxdWlyZSgnLi4vdXRpbHMvRG9jQ2xhc3NpZmllcicpO1xuY29uc3QgQ29sbGFwc2libGUgPSByZXF1aXJlKCdtaXhpbnMvQ29sbGFwc2libGUnKTtcbmNvbnN0IHsgb2JqZWN0LCBib29sLCBzdHJpbmcgfSA9IFJlYWN0LlByb3BUeXBlcztcbmNvbnN0IEhlYWRpbmdBbmNob3IgPSByZXF1aXJlKCdjb21wb25lbnRzL0hlYWRpbmdBbmNob3InKTtcblxuY29uc3QgRG9jID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBtaXhpbnM6IFsgQ29sbGFwc2libGUgXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBhbmNob3I6IHN0cmluZyxcbiAgICBjaGlsZHJlbjogUmVhY3QuUHJvcFR5cGVzLm5vZGUsXG4gICAgZG9jOiBvYmplY3QuaXNSZXF1aXJlZCxcbiAgICBjb25maWc6IG9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGNvbGxhcHNpYmxlOiBib29sLFxuICAgIGV4cGFuZGVkOiBib29sLFxuICAgIGhlYWRpbmdUYWc6IHN0cmluZyxcbiAgICB3aXRoRXhhbXBsZXM6IGJvb2wsXG4gICAgd2l0aFRpdGxlOiBib29sLFxuICAgIHdpdGhEZXNjcmlwdGlvbjogYm9vbCxcbiAgICB3aXRoQWRkaXRpb25hbFJlc291cmNlczogYm9vbCxcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoZWFkaW5nVGFnOiAnaDQnLFxuICAgICAgd2l0aFRpdGxlOiB0cnVlLFxuICAgICAgd2l0aERlc2NyaXB0aW9uOiB0cnVlLFxuICAgICAgd2l0aEV4YW1wbGVzOiB0cnVlXG4gICAgfTtcbiAgfSxcblxuICAvLyBzaG91bGRDb21wb25lbnRVcGRhdGU6IGZ1bmN0aW9uKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gIC8vICAgcmV0dXJuIChcbiAgLy8gICAgIG5leHRQcm9wcy5kb2MgIT09IHRoaXMucHJvcHMuZG9jIHx8XG4gIC8vICAgICBuZXh0U3RhdGUuY29sbGFwc2VkICE9PSB0aGlzLnN0YXRlLmNvbGxhcHNlZCB8fFxuICAvLyAgICAgbmV4dFByb3BzLmV4cGFuZGVkICE9PSB0aGlzLnByb3BzLmV4cGFuZGVkXG4gIC8vICAgKTtcbiAgLy8gfSxcblxuICByZW5kZXIoKSB7XG4gICAgdmFyIGlzQ29sbGFwc2VkID0gdGhpcy5pc0NvbGxhcHNlZCgpO1xuICAgIHZhciBjbGFzc05hbWUgPSBjbGFzc1NldCh7XG4gICAgICAnZG9jLWVudGl0eSc6IHRydWUsXG4gICAgICAnY29sbGFwc2libGUnOiAhIXRoaXMucHJvcHMuY29sbGFwc2libGUsXG4gICAgICAnY29sbGFwc2libGUtLWV4cGFuZGVkJzogIWlzQ29sbGFwc2VkLFxuICAgICAgJ2NvbGxhcHNpYmxlLS1jb2xsYXBzZWQnOiBpc0NvbGxhcHNlZCxcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgZG9jLCBhbmNob3IgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2MuZGVzY3JpcHRpb247XG4gICAgY29uc3QgZGVwcmVjYXRlZFRhZyA9IGRvYy50YWdzLmZpbHRlcigodCkgPT4gdC50eXBlID09PSAnZGVwcmVjYXRlZCcpWzBdO1xuICAgIGNvbnN0IGlzUHJpdmF0ZSA9IERvY0NsYXNzaWZpZXIuaXNQcml2YXRlKGRvYylcbiAgICBjb25zdCBIZWFkaW5nVGFnID0gdGhpcy5wcm9wcy5oZWFkaW5nVGFnIHx8ICdoNCdcblxuICAgIGlmIChpc1ByaXZhdGUgJiYgdGhpcy5wcm9wcy5jb25maWcuaGlkZVByaXZhdGVTeW1ib2xzKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAge3RoaXMucHJvcHMud2l0aFRpdGxlICYmIChcbiAgICAgICAgICA8SGVhZGluZ1RhZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgY2xhc3NTZXQoe1xuICAgICAgICAgICAgICAgIFwiZG9jLWVudGl0eV9faGVhZGVyXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJjb2xsYXBzaWJsZS1oZWFkZXJcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImFuY2hvcmFibGUtaGVhZGluZ1wiOiAhIWFuY2hvclxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVDb2xsYXBzZWR9XG4gICAgICAgICAgICB0aXRsZT17ZG9jLm5hbWV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RoaXMucmVuZGVyQ29sbGFwc2VyKCl9XG4gICAgICAgICAgICB7YW5jaG9yICYmIDxIZWFkaW5nQW5jaG9yLkFuY2hvciBocmVmPXthbmNob3J9IC8+fVxuICAgICAgICAgICAge2FuY2hvciAmJiA8SGVhZGluZ0FuY2hvci5MaW5rIGhyZWY9e2FuY2hvcn0gLz59XG5cbiAgICAgICAgICAgIDxIZWFkaW5nQW5jaG9yLlRleHQgY2xhc3NOYW1lPVwiZG9jLWVudGl0eV9fbmFtZVwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb2MtZW50aXR5X19uYW1lLWZyYWdtZW50XCI+XG4gICAgICAgICAgICAgICAge2RvYy5uYW1lfVxuICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAge2lzRnVuY3Rpb24oZG9jKSAmJiAoXG4gICAgICAgICAgICAgICAgPEZ1bmN0aW9uU2lnbmF0dXJlIGRvYz17ZG9jfSAvPlxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgIHt0aGlzLnJlbmRlclJldHVyblR5cGUoKX1cblxuICAgICAgICAgICAgICB7ZG9jLmlzQ29uc3RydWN0b3IgJiYgKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1lbnRpdHlfX21vZGlmaWVyXCI+Q09OU1RSVUNUT1I8L3NwYW4+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAge0RvY0NsYXNzaWZpZXIuaXNQcm90ZWN0ZWQoZG9jKSAmJiAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWVudGl0eV9fbW9kaWZpZXIgZG9jLWVudGl0eV9fcHJvdGVjdGVkXCI+UFJPVEVDVEVEPC9zcGFuPlxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgIHtpc1ByaXZhdGUgJiYgKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1lbnRpdHlfX21vZGlmaWVyIGRvYy1lbnRpdHlfX3ByaXZhdGVcIj5QUklWQVRFPC9zcGFuPlxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgIHtkb2MudGFncy5zb21lKCh0KSA9PiB0LnR5cGUgPT09ICdhc3luYycpICYmIChcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb2MtZW50aXR5X19tb2RpZmllciBkb2MtZW50aXR5X19hc3luY1wiPkFTWU5DPC9zcGFuPlxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgIHtkZXByZWNhdGVkVGFnICYmIChcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb2MtZW50aXR5X19tb2RpZmllciBkb2MtZW50aXR5X19hc3luY1wiPkRFUFJFQ0FURUQ8L3NwYW4+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0hlYWRpbmdBbmNob3IuVGV4dD5cbiAgICAgICAgICA8L0hlYWRpbmdUYWc+XG4gICAgICAgICl9XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2MtZW50aXR5X19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgIHtkZXByZWNhdGVkVGFnICYmIGRlcHJlY2F0ZWRUYWcuc3RyaW5nLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgPERlcHJlY2F0ZWRUYWcgc3RyaW5nPXtkZXByZWNhdGVkVGFnLnN0cmluZ30gLz5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge3RoaXMucHJvcHMud2l0aERlc2NyaXB0aW9uICYmIGRlc2NyaXB0aW9uICYmIGRlc2NyaXB0aW9uLmxlbmd0aCA+IDAgJiYgIWlzQ29sbGFwc2VkICYmIChcbiAgICAgICAgICAgIDxIaWdobGlnaHRlZFRleHQ+XG4gICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIDwvSGlnaGxpZ2h0ZWRUZXh0PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHshaXNDb2xsYXBzZWQgJiYgZG9jLnRhZ3MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPERvY1RhZ3NcbiAgICAgICAgICAgIHRhZ3M9e2RvYy50YWdzfVxuICAgICAgICAgICAgZG9jPXtkb2N9XG4gICAgICAgICAgICBjb25maWc9e3RoaXMucHJvcHMuY29uZmlnfVxuICAgICAgICAgICAgd2l0aEV4YW1wbGVzPXt0aGlzLnByb3BzLndpdGhFeGFtcGxlc31cbiAgICAgICAgICAgIHdpdGhBZGRpdGlvbmFsUmVzb3VyY2VzPXt0aGlzLnByb3BzLndpdGhBZGRpdGlvbmFsUmVzb3VyY2VzfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgeyFpc0NvbGxhcHNlZCAmJiB0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJSZXR1cm5UeXBlKCkge1xuICAgIGNvbnN0IFsgdGFnIF0gPSB0aGlzLnByb3BzLmRvYy50YWdzLmZpbHRlcih0ID0+IHQudHlwZSA9PT0gJ3JldHVybicpO1xuXG4gICAgaWYgKCF0YWcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb2MtZW50aXR5X19tZXRob2QtcGFyYW1zXCI+XG4gICAgICAgIHsnIC0+ICd9XG4gICAgICAgIDxUeXBlTmFtZXMgdHlwZT17dGFnLnR5cGVJbmZvLnR5cGV9IC8+XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oZG9jKSB7XG4gIHJldHVybiBkb2MudHlwZSA9PT0gSy5UWVBFX0ZVTkNUSU9OO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERvYztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL0RvYy5qcyIsIm1vZHVsZS5leHBvcnRzID0gTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcInV0aWxzL2NsYXNzU2V0XCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwidXRpbHMvY2xhc3NTZXRcXFwiXVwiXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFRhZ0dyb3VwID0gcmVxdWlyZSgnLi9UYWdzL1RhZ0dyb3VwJyk7XG52YXIgVHlwZURlZlRhZ0dyb3VwID0gcmVxdWlyZSgnLi9UYWdzL1R5cGVEZWZUYWdHcm91cCcpO1xudmFyIEV4YW1wbGVUYWcgPSByZXF1aXJlKCcuL1RhZ3MvRXhhbXBsZVRhZycpO1xudmFyIFBhcmFtVGFnID0gcmVxdWlyZSgnLi9UYWdzL1BhcmFtVGFnJyk7XG52YXIgU2VlVGFnID0gcmVxdWlyZSgnLi9UYWdzL1NlZVRhZycpO1xudmFyIFRocm93c1RhZyA9IHJlcXVpcmUoJy4vVGFncy9UaHJvd3NUYWcnKTtcbnZhciBSZXR1cm5UYWcgPSByZXF1aXJlKCcuL1RhZ3MvUmV0dXJuVGFnJyk7XG52YXIgQ2FsbGJhY2tUYWcgPSByZXF1aXJlKCcuL1RhZ3MvQ2FsbGJhY2tUYWcnKTtcbnZhciBUYWJ1bGFyVGFnR3JvdXAgPSByZXF1aXJlKCcuL1RhYnVsYXJUYWdHcm91cCcpO1xudmFyIHsgd2hlcmUgfSA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuXG5jb25zdCBIQU5ETEVEX1RBR1MgPSBbXG4gICdhbGlhcycsXG4gICdhc3luYycsXG4gICdjYWxsYmFjaycsXG4gICdjbGFzcycsXG4gICdjb25zdHJ1Y3RvcicsXG4gICdkZXByZWNhdGVkJyxcbiAgJ2V4YW1wbGUnLFxuICAnZXh0ZW5kcycsXG4gICdtZW1iZXJPZicsXG4gICdtZXRob2QnLFxuICAnbW9kdWxlJyxcbiAgJ25hbWUnLFxuICAnbmFtZXNwYWNlJyxcbiAgJ3BhcmFtJyxcbiAgJ3ByZXNlcnZlT3JkZXInLFxuICAncHJpdmF0ZScsXG4gICdwcm9wZXJ0eScsXG4gICdwcm90ZWN0ZWQnLFxuICAncmV0dXJuJyxcbiAgJ3NlZScsXG4gICdzdGF0aWMnLFxuICAndGhyb3dzJyxcbiAgJ3R5cGUnLFxuICAndHlwZWRlZidcbl07XG5cbnZhciBEb2NUYWdzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0RvY1RhZ3MnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGNvbmZpZzogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHRhZ3M6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcbiAgICBjYWxsYmFja3M6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcbiAgICB3aXRoRXhhbXBsZXM6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIHdpdGhBZGRpdGlvbmFsUmVzb3VyY2VzOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRhZ3M6IFtdLFxuICAgICAgY2FsbGJhY2tzOiBbXSxcbiAgICAgIHdpdGhFeGFtcGxlczogdHJ1ZSxcbiAgICAgIHdpdGhBZGRpdGlvbmFsUmVzb3VyY2VzOiB0cnVlXG4gICAgfTtcbiAgfSxcblxuICAvLyBzaG91bGRDb21wb25lbnRVcGRhdGU6IGZ1bmN0aW9uKG5leHRQcm9wcykge1xuICAvLyAgIHJldHVybiB0aGlzLnByb3BzLnRhZ3MgIT09IG5leHRQcm9wcy50YWdzO1xuICAvLyB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgcGFyYW1UYWdzID0gd2hlcmUodGhpcy5wcm9wcy50YWdzLCB7IHR5cGU6ICdwYXJhbScgfSk7XG4gICAgdmFyIHJldHVyblRhZ3MgPSB3aGVyZSh0aGlzLnByb3BzLnRhZ3MsIHsgdHlwZTogJ3JldHVybicgfSk7XG4gICAgdmFyIHVuaGFuZGxlZFRhZ3MgPSB0aGlzLnByb3BzLnRhZ3MuZmlsdGVyKGZ1bmN0aW9uKHRhZykge1xuICAgICAgcmV0dXJuIEhBTkRMRURfVEFHUy5pbmRleE9mKHRhZy50eXBlKSA9PT0gLTE7XG4gICAgfSk7XG4gICAgY29uc3QgeyBjb25maWcgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2MtZW50aXR5X190YWdzXCI+XG4gICAgICAgIDxUYWJ1bGFyVGFnR3JvdXBcbiAgICAgICAgICBhbHdheXNHcm91cFxuICAgICAgICAgIHRhZ05hbWU9XCJkaXZcIlxuICAgICAgICAgIHRhZ3M9e3BhcmFtVGFnc31cbiAgICAgICAgICByZW5kZXJlcj17UGFyYW1UYWd9XG4gICAgICAgICAgaGlkZUlmRW1wdHk9e2NvbmZpZy5oaWRlQmxhbmtQYXJhbWV0ZXJzfVxuICAgICAgICA+XG4gICAgICAgICAgUGFyYW1ldGVycyAoe3BhcmFtVGFncy5sZW5ndGh9KVxuICAgICAgICA8L1RhYnVsYXJUYWdHcm91cD5cblxuICAgICAgICA8VGFidWxhclRhZ0dyb3VwXG4gICAgICAgICAgYWx3YXlzR3JvdXBcbiAgICAgICAgICB0YWdOYW1lPVwiZGl2XCJcbiAgICAgICAgICB0YWdzPXtyZXR1cm5UYWdzfVxuICAgICAgICAgIHRhZ1R5cGU9XCJyZXR1cm5cIlxuICAgICAgICAgIHJlbmRlcmVyPXtSZXR1cm5UYWd9XG4gICAgICAgICAgaGlkZUlmRW1wdHk9e2NvbmZpZy5oaWRlQmxhbmtSZXR1cm5zfVxuICAgICAgICA+XG4gICAgICAgICAge3JldHVyblRhZ3MubGVuZ3RoID4gMSA/ICdSZXR1cm4gVmFsdWVzJyA6ICdSZXR1cm4gVmFsdWUnfVxuICAgICAgICA8L1RhYnVsYXJUYWdHcm91cD5cblxuICAgICAgICB7dGhpcy5wcm9wcy53aXRoRXhhbXBsZXMgJiYgKFxuICAgICAgICAgIDxUYWdHcm91cCBhbHdheXNHcm91cCB0YWdzPXt0aGlzLnByb3BzLnRhZ3N9IHRhZ1R5cGU9XCJleGFtcGxlXCIgcmVuZGVyZXI9e0V4YW1wbGVUYWd9IHRhZ05hbWU9XCJ1bFwiPlxuICAgICAgICAgICAgRXhhbXBsZXNcbiAgICAgICAgICA8L1RhZ0dyb3VwPlxuICAgICAgICApfVxuXG4gICAgICAgIDxUYWdHcm91cCBhbHdheXNHcm91cCB0YWdOYW1lPVwidWxcIiB0YWdzPXt0aGlzLnByb3BzLnRhZ3N9IHRhZ1R5cGU9XCJ0aHJvd3NcIiByZW5kZXJlcj17VGhyb3dzVGFnfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0eXBlLWF0dGVudGlvblwiPkV4Y2VwdGlvbnM8L3NwYW4+XG4gICAgICAgIDwvVGFnR3JvdXA+XG5cbiAgICAgICAgPFR5cGVEZWZUYWdHcm91cCBhbHdheXNHcm91cCB0YWdOYW1lPVwidWxcIiBkb2N1bWVudHM9e3RoaXMucHJvcHMuY2FsbGJhY2tzfSByZW5kZXJlcj17Q2FsbGJhY2tUYWd9PlxuICAgICAgICAgIENhbGxiYWNrIERlZmluaXRpb25zXG4gICAgICAgIDwvVHlwZURlZlRhZ0dyb3VwPlxuXG4gICAgICAgIHt0aGlzLnByb3BzLndpdGhBZGRpdGlvbmFsUmVzb3VyY2VzICYmIChcbiAgICAgICAgICA8VGFnR3JvdXAgYWx3YXlzR3JvdXAgdGFncz17dGhpcy5wcm9wcy50YWdzfSB0YWdUeXBlPVwic2VlXCIgcmVuZGVyZXI9e1NlZVRhZ30gdGFnTmFtZT1cInVsXCI+XG4gICAgICAgICAgICBTdWdnZXN0ZWQgUmVhZGluZ1xuICAgICAgICAgIDwvVGFnR3JvdXA+XG4gICAgICAgICl9XG5cbiAgICAgICAge3VuaGFuZGxlZFRhZ3MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgdW5oYW5kbGVkVGFncy5tYXAodGhpcy5yZW5kZXJUYWdTdHJpbmcpXG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlclRhZ1N0cmluZyh0YWcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBrZXk9e3RhZy5zdHJpbmd9IGNsYXNzTmFtZT1cInR5cGUtYXR0ZW50aW9uXCI+XG4gICAgICAgIDxwcmU+e1wiVW5rbm93biB0YWc6XFxuXCIgKyBKU09OLnN0cmluZ2lmeSh0YWcsIG51bGwsIDIpfTwvcHJlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRG9jVGFncztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL0RvY1RhZ3MuanMiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIHsgd2hlcmUgfSA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xudmFyIENvbGxhcHNpYmxlID0gcmVxdWlyZSgnbWl4aW5zL0NvbGxhcHNpYmxlJyk7XG52YXIgY2xhc3NTZXQgPSByZXF1aXJlKCd1dGlscy9jbGFzc1NldCcpO1xuXG52YXIgVGFnR3JvdXAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIG1peGluczogWyBDb2xsYXBzaWJsZSBdLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHRhZ05hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGFnVHlwZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhbHdheXNHcm91cDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgdGFnczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuXG4gICAgcmVuZGVyZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIGNsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGlsZHJlbjogUmVhY3QuUHJvcFR5cGVzLmFueSxcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0YWdOYW1lOiAnZGl2JyxcbiAgICAgIGFsd2F5c0dyb3VwOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBET01UYWcgPSB0aGlzLnByb3BzLnRhZ05hbWU7XG4gICAgdmFyIHRhZ3MgPSB0aGlzLnByb3BzLnRhZ1R5cGUgP1xuICAgICAgd2hlcmUodGhpcy5wcm9wcy50YWdzLCB7IHR5cGU6IHRoaXMucHJvcHMudGFnVHlwZSB9KSA6XG4gICAgICB0aGlzLnByb3BzLnRhZ3NcbiAgICA7XG4gICAgdmFyIFJlbmRlcmVyID0gdGhpcy5wcm9wcy5yZW5kZXJlcjtcbiAgICB2YXIgaXNDb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCk7XG4gICAgdmFyIGNsYXNzTmFtZTtcblxuICAgIGlmICh0YWdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRhZ3MubGVuZ3RoID09PSAxICYmICF0aGlzLnByb3BzLmFsd2F5c0dyb3VwKSB7XG4gICAgICByZXR1cm4gPFJlbmRlcmVyIHdpdGhUaXRsZSB7Li4udGFnc1swXX0gLz47XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY2xhc3NOYW1lID0gY2xhc3NTZXQoe1xuICAgICAgICAndGFnLWdyb3VwJzogdHJ1ZSxcbiAgICAgICAgJ3RhZy1ncm91cC0tY29sbGFwc2VkJzogaXNDb2xsYXBzZWQsXG4gICAgICAgICdjb2xsYXBzaWJsZSc6IHRoaXMuaXNDb2xsYXBzaWJsZSgpLFxuICAgICAgICAnY29sbGFwc2libGUtLWNvbGxhcHNlZCc6IGlzQ29sbGFwc2VkLFxuICAgICAgICAndGFnLWdyb3VwLS1zaW5nbGUtY2hpbGQnOiB0YWdzLmxlbmd0aCA9PT0gMVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxET01UYWcgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9ICR7dGhpcy5wcm9wcy5jbGFzc05hbWV8fCcnfWB9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVuICYmIChcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0YWctZ3JvdXBfX2hlYWRlciBjb2xsYXBzaWJsZS1oZWFkZXJcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUNvbGxhcHNlZH0+XG4gICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNvbGxhcHNlcigpfVxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHshaXNDb2xsYXBzZWQgJiYgdGFncy5tYXAoZnVuY3Rpb24odGFnLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gPFJlbmRlcmVyIGtleT17aX0gd2l0aFRpdGxlPXtmYWxzZX0gey4uLnRhZ30gLz47XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvRE9NVGFnPlxuICAgICAgKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRhZ0dyb3VwO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvVGFncy9UYWdHcm91cC5qcyIsIm1vZHVsZS5leHBvcnRzID0gTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcIm1peGlucy9Db2xsYXBzaWJsZVwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcIm1peGlucy9Db2xsYXBzaWJsZVxcXCJdXCJcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQ29sbGFwc2libGUgPSByZXF1aXJlKCdtaXhpbnMvQ29sbGFwc2libGUnKTtcbnZhciBjbGFzc1NldCA9IHJlcXVpcmUoJ3V0aWxzL2NsYXNzU2V0Jyk7XG5cbnZhciBUeXBlRGVmVGFnR3JvdXAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIG1peGluczogWyBDb2xsYXBzaWJsZSBdLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHRhZ05hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWx3YXlzR3JvdXA6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGRvY3VtZW50czogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuXG4gICAgcmVuZGVyZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIGNsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGlsZHJlbjogUmVhY3QuUHJvcFR5cGVzLmFueSxcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0YWdOYW1lOiAnZGl2JyxcbiAgICAgIGFsd2F5c0dyb3VwOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBET01UYWcgPSB0aGlzLnByb3BzLnRhZ05hbWU7XG4gICAgdmFyIGRvY3VtZW50cyA9IHRoaXMucHJvcHMuZG9jdW1lbnRzO1xuICAgIHZhciBSZW5kZXJlciA9IHRoaXMucHJvcHMucmVuZGVyZXI7XG4gICAgdmFyIGlzQ29sbGFwc2VkID0gdGhpcy5pc0NvbGxhcHNlZCgpO1xuICAgIHZhciBjbGFzc05hbWU7XG5cbiAgICBpZiAoZG9jdW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50cy5sZW5ndGggPT09IDEgJiYgIXRoaXMucHJvcHMuYWx3YXlzR3JvdXApIHtcbiAgICAgIHJldHVybiA8UmVuZGVyZXIgd2l0aFRpdGxlIGRvY3VtZW50PXtkb2N1bWVudHNbMF19IC8+O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNsYXNzTmFtZSA9IGNsYXNzU2V0KHtcbiAgICAgICAgJ3RhZy1ncm91cCc6IHRydWUsXG4gICAgICAgICd0YWctZ3JvdXAtLWNvbGxhcHNlZCc6IGlzQ29sbGFwc2VkLFxuICAgICAgICAnY29sbGFwc2libGUnOiB0aGlzLmlzQ29sbGFwc2libGUoKSxcbiAgICAgICAgJ2NvbGxhcHNpYmxlLS1jb2xsYXBzZWQnOiBpc0NvbGxhcHNlZCxcbiAgICAgICAgJ3RhZy1ncm91cC0tc2luZ2xlLWNoaWxkJzogZG9jdW1lbnRzLmxlbmd0aCA9PT0gMVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxET01UYWcgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9ICR7dGhpcy5wcm9wcy5jbGFzc05hbWV8fCcnfWB9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVuICYmIChcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0YWctZ3JvdXBfX2hlYWRlciBjb2xsYXBzaWJsZS1oZWFkZXJcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUNvbGxhcHNlZH0+XG4gICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNvbGxhcHNlcigpfVxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHshaXNDb2xsYXBzZWQgJiYgZG9jdW1lbnRzLm1hcChmdW5jdGlvbih0YWcsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiA8UmVuZGVyZXIga2V5PXtpfSB3aXRoVGl0bGU9e2ZhbHNlfSBkb2N1bWVudD17dGFnfSAvPjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9ET01UYWc+XG4gICAgICApO1xuICAgIH1cbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVHlwZURlZlRhZ0dyb3VwO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvVGFncy9UeXBlRGVmVGFnR3JvdXAuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IEhpZ2hsaWdodGVkVGV4dCA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvSGlnaGxpZ2h0ZWRUZXh0Jyk7XG5cbmNvbnN0IHsgc2hhcGUsIHN0cmluZyB9ID0gUmVhY3QuUHJvcFR5cGVzO1xuXG5jb25zdCBFeGFtcGxlVGFnID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogXCJFeGFtcGxlVGFnXCIsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgc3RyaW5nOiBzdHJpbmcsXG4gICAgdHlwZUluZm86IHNoYXBlKHtcbiAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gICAgfSlcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBkZXNjcmlwdGlvbiwgfSA9IHRoaXMucHJvcHMudHlwZUluZm87XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGFtcGxlLXRhZ1wiPlxuICAgICAgICB7bmFtZSAmJiAoXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IG5hbWUgfX0gLz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICl9XG5cbiAgICAgICAgPEhpZ2hsaWdodGVkVGV4dCBjbGFzc05hbWU9XCJleGFtcGxlLXRhZ19fY29kZVwiPlxuICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgPC9IaWdobGlnaHRlZFRleHQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBFeGFtcGxlVGFnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvVGFncy9FeGFtcGxlVGFnLmpzIiwidmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIEhpZ2hsaWdodGVkVGV4dCA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvSGlnaGxpZ2h0ZWRUZXh0Jyk7XG52YXIgVHlwZU5hbWVzID0gcmVxdWlyZSgnLi9UeXBlTmFtZXMnKTtcbnZhciBEZWZhdWx0VmFsdWUgPSByZXF1aXJlKCcuL0RlZmF1bHRWYWx1ZScpO1xuXG52YXIgUGFyYW1UYWcgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiBcIlBhcmFtVGFnXCIsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgd2l0aFRpdGxlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICB0eXBlSW5mbzogUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHR5cGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgICBuYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgZGVmYXVsdFZhbHVlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgZGVzY3JpcHRpb246IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbiAgICB9KVxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpdGhUaXRsZTogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHR5cGVJbmZvIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJwYXJhbS10YWdcIj5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJwYXJhbS10YWdfX2hlYWRlclwiPlxuICAgICAgICAgIHt0aGlzLnByb3BzLndpdGhUaXRsZSAmJiA8c3Ryb25nPlBhcmFtZXRlcnsnICd9PC9zdHJvbmc+fVxuXG4gICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwicGFyYW0tdGFnX19uYW1lXCI+e3R5cGVJbmZvLm5hbWV9PC9jb2RlPlxuXG4gICAgICAgICAge3R5cGVJbmZvLnR5cGUgJiYgKFxuICAgICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwicGFyYW0tdGFnX190eXBlc1wiPlxuICAgICAgICAgICAgICB7JzogJ31cblxuICAgICAgICAgICAgICA8VHlwZU5hbWVzIHR5cGU9e3R5cGVJbmZvLnR5cGV9IC8+XG4gICAgICAgICAgICA8L2NvZGU+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAge3R5cGVJbmZvLmRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICA8SGlnaGxpZ2h0ZWRUZXh0IGNsYXNzTmFtZT1cInBhcmFtLXRhZ19fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIHt0eXBlSW5mby5kZXNjcmlwdGlvbi5yZXBsYWNlKC9bIF17NCx9L2csICcnKX1cbiAgICAgICAgICA8L0hpZ2hsaWdodGVkVGV4dD5cbiAgICAgICAgKX1cblxuICAgICAgICA8RGVmYXVsdFZhbHVlIGRlZmF1bHRWYWx1ZT17dHlwZUluZm8uZGVmYXVsdFZhbHVlfSAvPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYXJhbVRhZztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL1RhZ3MvUGFyYW1UYWcuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBEZWZhdWx0VmFsdWUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHByb3BUeXBlczoge1xuICAgIGRlZmF1bHRWYWx1ZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkZWZhdWx0VmFsdWUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIWRlZmF1bHRWYWx1ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxwIGNsYXNzTmFtZT1cInByb3BlcnR5LXRhZ19fZGVmYXVsdC12YWx1ZVwiPlxuICAgICAgICBEZWZhdWx0cyB0bzogPGNvZGU+e2RlZmF1bHRWYWx1ZX08L2NvZGU+XG4gICAgICA8L3A+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGVmYXVsdFZhbHVlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9UYWdzL0RlZmF1bHRWYWx1ZS5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgTWFya2Rvd25UZXh0ID0gcmVxdWlyZSgnY29tcG9uZW50cy9NYXJrZG93blRleHQnKTtcbmNvbnN0IHsgc2hhcGUsIHN0cmluZyB9ID0gUmVhY3QuUHJvcFR5cGVzO1xuXG5jb25zdCBTZWVUYWcgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHByb3BUeXBlczoge1xuICAgIHR5cGVJbmZvOiBzaGFwZSh7XG4gICAgICBuYW1lOiBzdHJpbmcuaXNSZXF1aXJlZFxuICAgIH0pXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPVwic2VlLXRhZ1wiPlxuICAgICAgICA8TWFya2Rvd25UZXh0IHRhZ05hbWU9XCJzcGFuXCI+e3RoaXMucHJvcHMudHlwZUluZm8ubmFtZX08L01hcmtkb3duVGV4dD5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2VlVGFnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvVGFncy9TZWVUYWcuanMiLCJtb2R1bGUuZXhwb3J0cyA9IE1FR0FET0NfUFVCTElDX01PRFVMRVNbXCJjb21wb25lbnRzL01hcmtkb3duVGV4dFwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImNvbXBvbmVudHMvTWFya2Rvd25UZXh0XFxcIl1cIlxuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBIaWdobGlnaHRlZFRleHQgPSByZXF1aXJlKCdjb21wb25lbnRzL0hpZ2hsaWdodGVkVGV4dCcpO1xuY29uc3QgVHlwZU5hbWVzID0gcmVxdWlyZSgnLi9UeXBlTmFtZXMnKTtcblxuY29uc3QgeyBzaGFwZSwgc3RyaW5nLCBvYmplY3QgfSA9IFJlYWN0LlByb3BUeXBlcztcblxuY29uc3QgVGhyb3dzVGFnID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBwcm9wVHlwZXM6IHtcbiAgICB0eXBlSW5mbzogc2hhcGUoe1xuICAgICAgdHlwZTogb2JqZWN0LFxuICAgICAgZGVzY3JpcHRpb246IHN0cmluZyxcbiAgICB9KSxcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJ0aHJvd3MtdGFnXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPlxuICAgICAgICAgIDxUeXBlTmFtZXMgdHlwZT17dGhpcy5wcm9wcy50eXBlSW5mby50eXBlfSAvPlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgeycgLSAnfVxuXG4gICAgICAgIDxIaWdobGlnaHRlZFRleHRcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIlxuICAgICAgICAgIGNoaWxkcmVuPXt0aGlzLnByb3BzLnR5cGVJbmZvLmRlc2NyaXB0aW9ufVxuICAgICAgICAvPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUaHJvd3NUYWc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9UYWdzL1Rocm93c1RhZy5qcyIsInZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBIaWdobGlnaHRlZFRleHQgPSByZXF1aXJlKCdjb21wb25lbnRzL0hpZ2hsaWdodGVkVGV4dCcpO1xudmFyIFR5cGVOYW1lcyA9IHJlcXVpcmUoJy4vVHlwZU5hbWVzJyk7XG5cbnZhciBSZXR1cm5UYWcgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiBcIlJldHVyblRhZ1wiLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHdpdGhUaXRsZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgdHlwZUluZm86IFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgICB0eXBlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgICAgbmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGRlZmF1bHRWYWx1ZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGRlc2NyaXB0aW9uOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG4gICAgfSlcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICB3aXRoVGl0bGU6IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0eXBlSW5mbyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBoYXNOYW1lID0gQm9vbGVhbih0eXBlSW5mby5uYW1lKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPVwicmV0dXJuLXRhZ1wiPlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInJldHVybi10YWdfX2hlYWRlclwiPlxuICAgICAgICAgIHt0aGlzLnByb3BzLndpdGhUaXRsZSAmJiAoXG4gICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICBSZXR1cm5zXG4gICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge2hhc05hbWUgJiYgPGNvZGUgY2xhc3NOYW1lPVwicmV0dXJuLXRhZ19fbmFtZVwiPnt0eXBlSW5mby5uYW1lfTwvY29kZT59XG5cbiAgICAgICAgICB7dHlwZUluZm8udHlwZSAmJiAoXG4gICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJyZXR1cm4tdGFnX190eXBlc1wiPlxuICAgICAgICAgICAgICB7aGFzTmFtZSAmJiAnOiAnfVxuXG4gICAgICAgICAgICAgIDxUeXBlTmFtZXMgdHlwZT17dHlwZUluZm8udHlwZX0gLz5cblxuICAgICAgICAgICAgICB7dHlwZUluZm8uZGVmYXVsdFZhbHVlICYmIChcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYXJhbS10YWdfX2RlZmF1bHQtdmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgIHsnICgnfWRlZmF1bHRzIHRvOiA8Y29kZT57dHlwZUluZm8uZGVmYXVsdFZhbHVlfTwvY29kZT4pXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9jb2RlPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgIHt0eXBlSW5mby5kZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgPEhpZ2hsaWdodGVkVGV4dCBjbGFzc05hbWU9XCJyZXR1cm4tdGFnX19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAge3R5cGVJbmZvLmRlc2NyaXB0aW9uLnJlcGxhY2UoL1sgXXs1LDh9L2csICcnKX1cbiAgICAgICAgICA8L0hpZ2hsaWdodGVkVGV4dD5cbiAgICAgICAgKX1cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmV0dXJuVGFnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvVGFncy9SZXR1cm5UYWcuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IERvYyA9IHJlcXVpcmUoJy4uL0RvYycpO1xuXG5jb25zdCB7IHNoYXBlLCBzdHJpbmcsIG9iamVjdCB9ID0gUmVhY3QuUHJvcFR5cGVzO1xuXG5jb25zdCBDYWxsYmFja1RhZyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgc3RyaW5nOiBzdHJpbmcsXG4gICAgdHlwZUluZm86IHNoYXBlKHtcbiAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gICAgfSksXG4gICAgZG9jdW1lbnQ6IG9iamVjdC5pc1JlcXVpcmVkLFxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxsYmFjay10YWdcIj5cbiAgICAgICAgPERvYyBkb2M9e3RoaXMucHJvcHMuZG9jdW1lbnR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYWxsYmFja1RhZztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL1RhZ3MvQ2FsbGJhY2tUYWcuanMiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIHsgd2hlcmUgfSA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xudmFyIENvbGxhcHNpYmxlID0gcmVxdWlyZSgnbWl4aW5zL0NvbGxhcHNpYmxlJyk7XG52YXIgY2xhc3NTZXQgPSByZXF1aXJlKCd1dGlscy9jbGFzc1NldCcpO1xudmFyIFR5cGVOYW1lcyA9IHJlcXVpcmUoJy4vVGFncy9UeXBlTmFtZXMnKTtcbnZhciBEZWZhdWx0VmFsdWUgPSByZXF1aXJlKCcuL1RhZ3MvRGVmYXVsdFZhbHVlJyk7XG52YXIgSGlnaGxpZ2h0ZWRUZXh0ID0gcmVxdWlyZSgnY29tcG9uZW50cy9IaWdobGlnaHRlZFRleHQnKTtcblxudmFyIFRhYnVsYXJUYWdHcm91cCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgbWl4aW5zOiBbIENvbGxhcHNpYmxlIF0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgdGFnTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0YWdUeXBlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFsd2F5c0dyb3VwOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICB0YWdzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gICAgaGlkZUlmRW1wdHk6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuXG4gICAgcmVuZGVyZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIGNsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGlsZHJlbjogUmVhY3QuUHJvcFR5cGVzLmFueSxcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0YWdOYW1lOiAnZGl2JyxcbiAgICAgIGFsd2F5c0dyb3VwOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBET01UYWcgPSB0aGlzLnByb3BzLnRhZ05hbWU7XG4gICAgdmFyIHRhZ3MgPSB0aGlzLnByb3BzLnRhZ1R5cGUgP1xuICAgICAgd2hlcmUodGhpcy5wcm9wcy50YWdzLCB7IHR5cGU6IHRoaXMucHJvcHMudGFnVHlwZSB9KSA6XG4gICAgICB0aGlzLnByb3BzLnRhZ3NcbiAgICA7XG4gICAgdmFyIFJlbmRlcmVyID0gdGhpcy5wcm9wcy5yZW5kZXJlcjtcbiAgICB2YXIgaXNDb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCk7XG4gICAgdmFyIGNsYXNzTmFtZTtcblxuICAgIGlmICh0YWdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucHJvcHMuaGlkZUlmRW1wdHkgJiYgdGFncy5ldmVyeSh0YWdJc0JsYW5rKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRhZ3MubGVuZ3RoID09PSAxICYmICF0aGlzLnByb3BzLmFsd2F5c0dyb3VwKSB7XG4gICAgICByZXR1cm4gPFJlbmRlcmVyIHdpdGhUaXRsZSB7Li4udGFnc1swXX0gLz47XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY2xhc3NOYW1lID0gY2xhc3NTZXQodGhpcy5wcm9wcy5jbGFzc05hbWUsIHtcbiAgICAgICAgJ3RhZy1ncm91cCc6IHRydWUsXG4gICAgICAgICd0YWctZ3JvdXAtLXRhYnVsYXInOiB0cnVlLFxuICAgICAgICAndGFnLWdyb3VwLS1jb2xsYXBzZWQnOiBpc0NvbGxhcHNlZCxcbiAgICAgICAgJ2NvbGxhcHNpYmxlJzogdGhpcy5pc0NvbGxhcHNpYmxlKCksXG4gICAgICAgICdjb2xsYXBzaWJsZS0tY29sbGFwc2VkJzogaXNDb2xsYXBzZWQsXG4gICAgICAgICd0YWctZ3JvdXAtLXNpbmdsZS1jaGlsZCc6IHRhZ3MubGVuZ3RoID09PSAxXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPERPTVRhZyBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW4gJiYgKFxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRhZy1ncm91cF9faGVhZGVyIGNvbGxhcHNpYmxlLWhlYWRlclwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQ29sbGFwc2VkfT5cbiAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ29sbGFwc2VyKCl9XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgeyFpc0NvbGxhcHNlZCAmJiAoXG4gICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICB7dGFncy5tYXAodGhpcy5yZW5kZXJUYWcpfVxuICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICApfVxuICAgICAgICA8L0RPTVRhZz5cbiAgICAgICk7XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlclRhZyh0YWcsIGkpIHtcbiAgICBjb25zdCB7IHR5cGVJbmZvIH0gPSB0YWc7XG4gICAgY29uc3QgaGFzTmFtZSA9IEJvb2xlYW4odHlwZUluZm8ubmFtZSAmJiB0eXBlSW5mby5uYW1lLmxlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0ciBrZXk9e2l9IGNsYXNzTmFtZT1cInBhcmFtLXRhZ1wiPlxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFnLWdyb3VwX19wcmltYXJ5LWNvbHVtblwiPlxuICAgICAgICAgIHtoYXNOYW1lICYmIChcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicGFyYW0tdGFnX19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwicGFyYW0tdGFnX19uYW1lXCI+e3R5cGVJbmZvLm5hbWV9PC9jb2RlPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC90ZD5cblxuICAgICAgICA8dGQ+XG4gICAgICAgICAge3R5cGVJbmZvLnR5cGUgJiYgKFxuICAgICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwicGFyYW0tdGFnX190eXBlc1wiPlxuICAgICAgICAgICAgICA8VHlwZU5hbWVzIHR5cGU9e3R5cGVJbmZvLnR5cGV9IC8+XG4gICAgICAgICAgICA8L2NvZGU+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHt0eXBlSW5mby5kZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgICA8SGlnaGxpZ2h0ZWRUZXh0IGNsYXNzTmFtZT1cInBhcmFtLXRhZ19fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAge3R5cGVJbmZvLmRlc2NyaXB0aW9uLnJlcGxhY2UoL1sgXXs0LH0vZywgJycpfVxuICAgICAgICAgICAgPC9IaWdobGlnaHRlZFRleHQ+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxEZWZhdWx0VmFsdWUgZGVmYXVsdFZhbHVlPXt0eXBlSW5mby5kZWZhdWx0VmFsdWV9IC8+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgICk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB0YWdJc0JsYW5rKHsgc3RyaW5nIH0pIHtcbiAgcmV0dXJuICFzdHJpbmcgfHwgIXN0cmluZy5sZW5ndGggPT09IDBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUYWJ1bGFyVGFnR3JvdXA7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9UYWJ1bGFyVGFnR3JvdXAuanMiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgRGVwcmVjYXRlZFRhZyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgc3RyaW5nOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxibG9ja3F1b3RlIGNsYXNzTmFtZT1cImJsb2NrcXVvdGUtLXdhcm5pbmdcIj5cbiAgICAgICAgPHA+PHN0cm9uZz5EZXByZWNhdGVkPC9zdHJvbmc+PC9wPlxuXG4gICAgICAgIHt0aGlzLnByb3BzLnN0cmluZ31cbiAgICAgIDwvYmxvY2txdW90ZT5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBEZXByZWNhdGVkVGFnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvVGFncy9EZXByZWNhdGVkVGFnLmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUHJvcGVydHlUYWcgPSByZXF1aXJlKCcuL1RhZ3MvUHJvcGVydHlUYWcnKTtcbmNvbnN0IHsgYXNzaWduIH0gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbmNvbnN0IHsgUHJvcFR5cGVzLCB9ID0gUmVhY3Q7XG5cbmNvbnN0IE9iamVjdFN5bm9wc2lzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIHByb3BUeXBlczoge1xuICAgIGRvYzogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBhbmNob3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYW5jaG9yLCBkb2MgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdGFncyA9IHRoaXMucHJvcHMuZG9jLnRhZ3MuZmlsdGVyKHRhZyA9PiB0YWcudHlwZSA9PT0gJ3Byb3BlcnR5Jyk7XG5cbiAgICBjb25zdCB0cmVlID0gdGFnc1xuICAgICAgLnJlZHVjZSgobWFwLCB0YWcpID0+IHtcbiAgICAgICAgY29uc3QgZnJhZ21lbnRzID0gdGFnLnR5cGVJbmZvLm5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgY29uc3QgcGFyZW50S2V5ID0gZnJhZ21lbnRzLnNsaWNlKDAsIC0xKS5qb2luKCcuJyk7XG5cbiAgICAgICAgaWYgKCFtYXBbcGFyZW50S2V5XSkge1xuICAgICAgICAgIG1hcFtwYXJlbnRLZXldID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBtYXBbcGFyZW50S2V5XS5wdXNoKHRhZylcblxuICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgfSwge30pXG4gICAgO1xuXG4gICAgY29uc3QgcmVuZGVyID0ga2V5ID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkVGFncyA9IHRyZWVba2V5XTtcblxuICAgICAgaWYgKCFjaGlsZFRhZ3MgfHwgIWNoaWxkVGFncy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIGNoaWxkVGFncy5tYXAoKHRhZywgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHJlbmRlcih0YWcudHlwZUluZm8ubmFtZSlcbiAgICAgICAgICBjb25zdCBpc1Jvb3QgPSB0YWcudHlwZUluZm8ubmFtZSA9PT0gZG9jLm5hbWU7XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2Ake2tleX1fXyR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgIDxQcm9wZXJ0eVRhZ1xuICAgICAgICAgICAgICAgIGFuY2hvcj17aXNSb290ICYmIGFuY2hvciB8fCBudWxsfVxuICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlPXtpc1Jvb3R9XG4gICAgICAgICAgICAgICAgdHlwZUluZm89e2Fzc2lnbih7fSwgdGFnLnR5cGVJbmZvLCB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiB0YWcudHlwZUluZm8ubmFtZS5zcGxpdCgnLicpLnNsaWNlKC0xKS5qb2luKCcuJylcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgPC9Qcm9wZXJ0eVRhZz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJqcy1vYmplY3Qtc3lub3BzaXNcIj5cbiAgICAgICAge3JlbmRlcignJyl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3RTeW5vcHNpcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvT2JqZWN0U3lub3BzaXMuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IEhpZ2hsaWdodGVkVGV4dCA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvSGlnaGxpZ2h0ZWRUZXh0Jyk7XG5jb25zdCBIZWFkaW5nQW5jaG9yID0gcmVxdWlyZSgnY29tcG9uZW50cy9IZWFkaW5nQW5jaG9yJyk7XG5jb25zdCBUeXBlTmFtZXMgPSByZXF1aXJlKCcuL1R5cGVOYW1lcycpO1xuY29uc3QgRGVmYXVsdFZhbHVlID0gcmVxdWlyZSgnLi9EZWZhdWx0VmFsdWUnKTtcbmNvbnN0IGRlc2NyaWJlTm9kZSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2Rlc2NyaWJlTm9kZScpO1xuY29uc3QgRG9jQ2xhc3NpZmllciA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL0RvY0NsYXNzaWZpZXInKTtcbmNvbnN0IENvbGxhcHNpYmxlID0gcmVxdWlyZSgnbWl4aW5zL0NvbGxhcHNpYmxlJyk7XG5jb25zdCBjbGFzc1NldCA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcbmNvbnN0IHsgc2hhcGUsIHN0cmluZywgb2JqZWN0LCBub2RlIH0gPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbmNvbnN0IFByb3BlcnR5VGFnID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBtaXhpbnM6IFsgQ29sbGFwc2libGUgXSxcblxuICBkaXNwbGF5TmFtZTogXCJQcm9wZXJ0eVRhZ1wiLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGNoaWxkcmVuOiBub2RlLFxuICAgIGFuY2hvcjogc3RyaW5nLFxuICAgIHR5cGVJbmZvOiBzaGFwZSh7XG4gICAgICB0eXBlOiBvYmplY3QsXG4gICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICBkZWZhdWx0VmFsdWU6IHN0cmluZyxcbiAgICAgIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgICB9KSxcblxuICAgIGRvYzogb2JqZWN0LFxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFuY2hvciwgdHlwZUluZm8sIGRvYyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHR5cGVJbmZvLmRlc2NyaXB0aW9uIHx8IGRvYyAmJiBkb2MuZGVzY3JpcHRpb247XG4gICAgY29uc3QgZGVmYXVsdFZhbHVlID0gdHlwZUluZm8uZGVmYXVsdFZhbHVlIHx8IGRvYyAmJiBkZXNjcmliZU5vZGUoZG9jLm5vZGVJbmZvKTtcbiAgICBjb25zdCBjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCk7XG4gICAgY29uc3QgY29sbGFwc2libGUgPSB0aGlzLmlzQ29sbGFwc2libGUoKSAmJiAoZGVzY3JpcHRpb24gJiYgZGVzY3JpcHRpb24ubGVuZ3RoKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc1NldChcInByb3BlcnR5LXRhZ1wiLCB7XG4gICAgICAgICdjb2xsYXBzaWJsZSc6IGNvbGxhcHNpYmxlLFxuICAgICAgICAnY29sbGFwc2libGUtLWNvbGxhcHNlZCc6IHRoaXMuaXNDb2xsYXBzZWQoKSxcbiAgICAgIH0pfT5cbiAgICAgICAgPGhlYWRlclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXQoXCJwcm9wZXJ0eS10YWdfX2hlYWRlciBhbmNob3JhYmxlLWhlYWRpbmdcIiwge1xuICAgICAgICAgICAgXCJjb2xsYXBzaWJsZS1oZWFkZXJcIjogY29sbGFwc2libGVcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZUNvbGxhcHNlZH1cbiAgICAgICAgPlxuICAgICAgICAgIHtjb2xsYXBzaWJsZSAmJiB0aGlzLnJlbmRlckNvbGxhcHNlcigpfVxuICAgICAgICAgIHthbmNob3IgJiYgPEhlYWRpbmdBbmNob3IuQW5jaG9yIGhyZWY9e3RoaXMucHJvcHMuYW5jaG9yfSAvPn1cbiAgICAgICAgICB7YW5jaG9yICYmIDxIZWFkaW5nQW5jaG9yLkxpbmsgaHJlZj17dGhpcy5wcm9wcy5hbmNob3J9IC8+fVxuXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvcGVydHktdGFnX19uYW1lXCI+XG4gICAgICAgICAgICB7dHlwZUluZm8ubmFtZSB8fCBkb2MgJiYgZG9jLm5hbWV9XG5cbiAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICB7JzogJ31cblxuICAgICAgICAgIDxjb2RlPjxUeXBlTmFtZXMgdHlwZT17dHlwZUluZm8udHlwZX0gLz48L2NvZGU+XG5cbiAgICAgICAgICB7ZG9jICYmIERvY0NsYXNzaWZpZXIuaXNQcml2YXRlKGRvYykgJiYgKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWVudGl0eV9fbW9kaWZpZXIgZG9jLWVudGl0eV9fcHJpdmF0ZVwiPlBSSVZBVEU8L3NwYW4+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgeyFjb2xsYXBzZWQgJiYgZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgIDxIaWdobGlnaHRlZFRleHQgY2xhc3NOYW1lPVwicHJvcGVydHktdGFnX19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvSGlnaGxpZ2h0ZWRUZXh0PlxuICAgICAgICApfVxuXG4gICAgICAgIHshY29sbGFwc2VkICYmIGRlZmF1bHRWYWx1ZSAmJiAoXG4gICAgICAgICAgPERlZmF1bHRWYWx1ZSBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX0gLz5cbiAgICAgICAgKX1cblxuICAgICAgICB7IWNvbGxhcHNlZCAmJiB0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvcGVydHlUYWc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9UYWdzL1Byb3BlcnR5VGFnLmpzIiwiY29uc3QgSyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5vZGVJbmZvKSB7XG4gIHJldHVybiBkZXNjcmliZU5vZGUobm9kZUluZm8sIHRydWUpO1xufTtcblxuZnVuY3Rpb24gZGVzY3JpYmVOb2RlKG5vZGVJbmZvLCBzdHJpbmdpZnkpIHtcbiAgY29uc3QgcHJpbnQgPSBzdHJpbmdpZnkgPyBwcmV0dHlKU09OIDogSWRlbnRpdHk7XG5cbiAgaWYgKCFub2RlSW5mby50eXBlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGlmIChub2RlSW5mby50eXBlID09PSBLLlRZUEVfTElURVJBTCAmJiBub2RlSW5mby5yZWdleHApIHtcbiAgICByZXR1cm4gbm9kZUluZm8uaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgPyBub2RlSW5mby52YWx1ZSA6IG51bGw7XG4gIH1cbiAgZWxzZSBpZiAobm9kZUluZm8udHlwZSA9PT0gSy5UWVBFX0xJVEVSQUwpIHtcbiAgICByZXR1cm4gcHJpbnQobm9kZUluZm8uaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgPyBub2RlSW5mby52YWx1ZSA6IG51bGwpO1xuICB9XG4gIGVsc2UgaWYgKG5vZGVJbmZvLnR5cGUgPT09IEsuVFlQRV9BUlJBWSkge1xuICAgIHJldHVybiBwcmludChub2RlSW5mby5lbGVtZW50cy5tYXAoeCA9PiBkZXNjcmliZU5vZGUoeCwgZmFsc2UpKSk7XG4gIH1cbiAgZWxzZSBpZiAobm9kZUluZm8udHlwZSA9PT0gSy5UWVBFX09CSkVDVCkge1xuICAgIHJldHVybiBwcmludChub2RlSW5mby5wcm9wZXJ0aWVzLnJlZHVjZShmdW5jdGlvbihtYXAsIHgpIHtcbiAgICAgIGlmICh4KSB7XG4gICAgICAgIG1hcFt4LmtleV0gPSBkZXNjcmliZU5vZGUoeC52YWx1ZSwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWFwO1xuICAgIH0sIHt9KSk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gcHJldHR5SlNPTih4KSB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeSh4LCBudWxsLCAyKTtcbn1cblxuZnVuY3Rpb24gSWRlbnRpdHkoeCkge1xuICByZXR1cm4geDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS91dGlscy9kZXNjcmliZU5vZGUuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCB7IHN0cmluZywgYW55IH0gPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbmNvbnN0IERvY0dyb3VwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBwcm9wVHlwZXM6IHtcbiAgICB0YWdOYW1lOiBzdHJpbmcsXG4gICAgbGFiZWw6IHN0cmluZyxcbiAgICBjbGFzc05hbWU6IHN0cmluZyxcbiAgICBjaGlsZHJlbjogYW55XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGFnTmFtZTogJ2RpdicsXG4gICAgfTtcbiAgfSxcblxuICAvLyBzaG91bGRDb21wb25lbnRVcGRhdGU6IGZ1bmN0aW9uKG5leHRQcm9wcykge1xuICAvLyAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuICE9PSBuZXh0UHJvcHMuY2hpbGRyZW47XG4gIC8vIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IERPTVRhZyA9IHRoaXMucHJvcHMudGFnTmFtZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvYy1ncm91cFwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZG9jLWdyb3VwX19oZWFkZXJcIiBjaGlsZHJlbj17dGhpcy5wcm9wcy5sYWJlbH0gLz5cblxuICAgICAgICA8RE9NVGFnIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L0RPTVRhZz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERvY0dyb3VwO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvRG9jR3JvdXAuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBDbGFzc0Jyb3dzZXIgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL0NsYXNzQnJvd3NlcicpO1xuY29uc3QgeyBhcnJheSwgb2JqZWN0LCBzaGFwZSwgYm9vbCwgfSA9IFJlYWN0LlByb3BUeXBlcztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnSlM6OkJyb3dzZXJPdXRsZXQnLFxuICBwcm9wVHlwZXM6IHtcbiAgICBkb2N1bWVudE5vZGU6IG9iamVjdCxcbiAgICBuYW1lc3BhY2VOb2RlOiBvYmplY3QsXG4gICAgZG9jdW1lbnRFbnRpdHlOb2RlOiBvYmplY3QsXG4gICAgJG91dGxldE9wdGlvbnM6IHNoYXBlKHtcbiAgICAgIGZsYXQ6IGJvb2wsXG4gICAgICBsaW5rTmFtZXNwYWNlczogYm9vbCxcbiAgICAgIGZpbHRlcjogYXJyYXksXG4gICAgfSlcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDbGFzc0Jyb3dzZXJcbiAgICAgICAgbmFtZXNwYWNlTm9kZT17dGhpcy5wcm9wcy5uYW1lc3BhY2VOb2RlfVxuICAgICAgICBkb2N1bWVudE5vZGU9e3RoaXMucHJvcHMuZG9jdW1lbnROb2RlfVxuICAgICAgICBkb2N1bWVudEVudGl0eU5vZGU9e3RoaXMucHJvcHMuZG9jdW1lbnRFbnRpdHlOb2RlfVxuICAgICAgICB3aXRoQ29udHJvbHM9e3RoaXMucHJvcHMubmFtZXNwYWNlTm9kZS5lbmFibGVTaWRlYmFyQ29udHJvbHMgIT09IGZhbHNlfVxuICAgICAgICBmbGF0PXt0aGlzLnByb3BzLiRvdXRsZXRPcHRpb25zLmZsYXR9XG4gICAgICAgIGxpbmtUb05hbWVzcGFjZXM9e3RoaXMucHJvcHMuJG91dGxldE9wdGlvbnMubGlua05hbWVzcGFjZXN9XG4gICAgICAgIGZpbHRlcj17dGhpcy5wcm9wcy4kb3V0bGV0T3B0aW9ucy5maWx0ZXJ9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvb3V0bGV0cy9Ccm93c2VyT3V0bGV0LmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBjb25zb2xlID0gcmVxdWlyZShcImNvbnNvbGVcIik7XG5jb25zdCBMaW5rID0gcmVxdWlyZSgnY29tcG9uZW50cy9MaW5rJyk7XG5jb25zdCBjbGFzc1NldCA9IHJlcXVpcmUoJ3V0aWxzL2NsYXNzU2V0Jyk7XG5jb25zdCBDaGVja2JveCA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvQ2hlY2tib3gnKTtcbmNvbnN0IEljb24gPSByZXF1aXJlKCdjb21wb25lbnRzL0ljb24nKTtcbmNvbnN0IEhvdEl0ZW1JbmRpY2F0b3IgPSByZXF1aXJlKCdjb21wb25lbnRzL0hvdEl0ZW1JbmRpY2F0b3InKTtcbmNvbnN0IHsgc29ydEJ5IH0gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbmNvbnN0IG9yZGVyQXdhcmVTb3J0ID0gcmVxdWlyZSgnLi4vdXRpbHMvb3JkZXJBd2FyZVNvcnQnKTtcbmNvbnN0IERvY0NsYXNzaWZpZXIgPSByZXF1aXJlKCcuLi91dGlscy9Eb2NDbGFzc2lmaWVyJyk7XG5jb25zdCBmaWx0ZXJEb2N1bWVudHMgPSByZXF1aXJlKCd1dGlscy9maWx0ZXJEb2N1bWVudHMnKTtcbmNvbnN0IHsgYXJyYXksIG9iamVjdCwgYm9vbCwgfSA9IFJlYWN0LlByb3BUeXBlcztcblxudmFyIENsYXNzQnJvd3NlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgd2l0aENvbnRyb2xzOiBib29sLFxuICAgIGRvY3VtZW50Tm9kZTogb2JqZWN0LFxuICAgIGRvY3VtZW50RW50aXR5Tm9kZTogb2JqZWN0LFxuICAgIG5hbWVzcGFjZU5vZGU6IG9iamVjdCxcbiAgICBmbGF0OiBib29sLFxuICAgIGxpbmtOYW1lc3BhY2VzOiBib29sLFxuICAgIHNob3dUeXBlRGVmczogYm9vbCxcbiAgICBmaWx0ZXI6IGFycmF5LFxuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvd1ByaXZhdGVNb2R1bGVzOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzaG93VHlwZURlZnM6IGZhbHNlLFxuICAgICAgd2l0aENvbnRyb2xzOiB0cnVlLFxuICAgIH07XG4gIH0sXG5cbiAgLy8gc2hvdWxkQ29tcG9uZW50VXBkYXRlOiBmdW5jdGlvbihuZXh0UHJvcHMpIHtcbiAgLy8gICByZXR1cm4gKFxuICAvLyAgICAgbmV4dFByb3BzLmRvY3VtZW50RW50aXR5Tm9kZSAhPT0gdGhpcy5wcm9wcy5kb2N1bWVudEVudGl0eU5vZGUgfHxcbiAgLy8gICAgIG5leHRQcm9wcy5kb2N1bWVudE5vZGUgIT09IHRoaXMucHJvcHMuZG9jdW1lbnROb2RlIHx8XG4gIC8vICAgICBuZXh0UHJvcHMubmFtZXNwYWNlTm9kZSAhPT0gdGhpcy5wcm9wcy5uYW1lc3BhY2VOb2RlXG4gIC8vICAgKTtcbiAgLy8gfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgcm9vdERvY3VtZW50cyA9IHRoaXMucHJvcHMubmFtZXNwYWNlTm9kZS5kb2N1bWVudHM7XG4gICAgY29uc3QgZ2VuZXJpY05hbWVzcGFjZSA9IHtcbiAgICAgIGlkOiAnX19nZW5lcmFsX18nLFxuICAgICAgdGl0bGU6ICdbR2VuZXJhbF0nLFxuICAgICAgZG9jdW1lbnRzOiBbXSxcbiAgICAgIG1ldGE6IHt9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhc1ByaXZhdGVNb2R1bGVzID0gcm9vdERvY3VtZW50cy5zb21lKHggPT4ge1xuICAgICAgcmV0dXJuIHguZG9jdW1lbnRzLnNvbWUoeSA9PiBEb2NDbGFzc2lmaWVyLmlzUHJpdmF0ZSh5LnByb3BlcnRpZXMpKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG5hbWVzcGFjZXMgPSByb290RG9jdW1lbnRzLnJlZHVjZShmdW5jdGlvbihsaXN0LCBub2RlKSB7XG4gICAgICBpZiAobm9kZS5kb2N1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIGxpc3QucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsaXN0WzBdLmRvY3VtZW50cy5wdXNoKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGlzdDtcbiAgICB9LCBbIGdlbmVyaWNOYW1lc3BhY2UgXSkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICBpZiAoYS5pZCA9PT0gJ19fZ2VuZXJhbF9fJykge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gYS5pZCA+IGIuaWQgPyAxIDogLTE7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBzaG91bGREaXNwbGF5TmFtZSA9IG5hbWVzcGFjZXMubGVuZ3RoID4gMTtcblxuICAgIHJldHVybiAoXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm1lZ2Fkb2MtZG9jdW1lbnQtYnJvd3NlciBjbGFzcy1icm93c2VyX19saXN0aW5nXCI+XG4gICAgICAgIHtuYW1lc3BhY2VzLm1hcCh0aGlzLnJlbmRlck5hbWVzcGFjZS5iaW5kKG51bGwsIHNob3VsZERpc3BsYXlOYW1lKSl9XG5cbiAgICAgICAge3RoaXMucHJvcHMud2l0aENvbnRyb2xzICYmIGhhc1ByaXZhdGVNb2R1bGVzICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsYXNzLWJyb3dzZXJfX2NvbnRyb2xzXCI+XG4gICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5zaG93UHJpdmF0ZU1vZHVsZXN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZVByaXZhdGVWaXNpYmlsaXR5fVxuICAgICAgICAgICAgICBjaGlsZHJlbj1cIlNob3cgcHJpdmF0ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9uYXY+XG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJOYW1lc3BhY2Uoc2hvdWxkRGlzcGxheU5hbWUsIG5zKSB7XG4gICAgbGV0IGRvY3VtZW50cyA9IG5zLmRvY3VtZW50cztcblxuICAgIGNvbnN0IHsgY29uZmlnIH0gPSB0aGlzLnByb3BzLm5hbWVzcGFjZU5vZGU7XG4gICAgY29uc3Qgc2hvdWxkSGlkZVByaXZhdGVNb2R1bGVzID0gKFxuICAgICAgY29uZmlnLmhpZGVQcml2YXRlU3ltYm9scyB8fFxuICAgICAgIXRoaXMuc3RhdGUuc2hvd1ByaXZhdGVNb2R1bGVzXG4gICAgKTtcblxuICAgIGNvbnN0IHNob3dUeXBlRGVmcyA9IChcbiAgICAgIHRoaXMucHJvcHMuc2hvd1R5cGVEZWZzIHx8XG4gICAgICBjb25maWcuc2hvd1R5cGVEZWZzSW5Ccm93c2VyXG4gICAgKVxuXG4gICAgaWYgKHNob3VsZEhpZGVQcml2YXRlTW9kdWxlcykge1xuICAgICAgZG9jdW1lbnRzID0gbnMuZG9jdW1lbnRzLmZpbHRlcih4ID0+IHtcbiAgICAgICAgcmV0dXJuICFEb2NDbGFzc2lmaWVyLmlzUHJpdmF0ZSh4LnByb3BlcnRpZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCFzaG93VHlwZURlZnMpIHtcbiAgICAgIGRvY3VtZW50cyA9IGRvY3VtZW50cy5maWx0ZXIoeCA9PiAhRG9jQ2xhc3NpZmllci5pc1R5cGVEZWYoeC5wcm9wZXJ0aWVzKSlcbiAgICB9XG5cbiAgICBpZiAoZG9jdW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgaGFzU2VsZkRvY3VtZW50ID0gbnMuaWQgIT09ICdfX2dlbmVyYWxfXycgJiYgKFxuICAgICAgbnMucHJvcGVydGllcyB8fFxuICAgICAgKFxuICAgICAgICBjb25maWcubGlua1RvTmFtZXNwYWNlc0luQnJvd3NlciB8fFxuICAgICAgICB0aGlzLnByb3BzLmxpbmtOYW1lc3BhY2VzXG4gICAgICApXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGtleT17bnMuaWR9IGNsYXNzTmFtZT1cImNsYXNzLWJyb3dzZXJfX2NhdGVnb3J5XCI+XG4gICAgICAgIHtzaG91bGREaXNwbGF5TmFtZSAmJiAoXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNsYXNzLWJyb3dzZXJfX2NhdGVnb3J5LW5hbWVcIj5cbiAgICAgICAgICAgIHtoYXNTZWxmRG9jdW1lbnQgPyAoXG4gICAgICAgICAgICAgIDxMaW5rIHRvPXtuc30gY2hpbGRyZW49e25zLnRpdGxlfSAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgbnMudGl0bGVcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgKX1cblxuICAgICAgICB7aGFzU2VsZkRvY3VtZW50ICYmIHRoaXMucHJvcHMuZG9jdW1lbnROb2RlID09PSBucyAmJiAoXG4gICAgICAgICAgdGhpcy5yZW5kZXJNb2R1bGVFbnRpdGllcyhucy5lbnRpdGllcylcbiAgICAgICAgKX1cblxuICAgICAgICB7c29ydEJ5KGRvY3VtZW50cywgJ2lkJykuZmlsdGVyKGZpbHRlckRvY3VtZW50cyh0aGlzLnByb3BzLmZpbHRlcikpLm1hcCh0aGlzLnJlbmRlck1vZHVsZSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlck1vZHVsZShkb2NOb2RlKSB7XG4gICAgY29uc3QgZG9jID0gZG9jTm9kZS5wcm9wZXJ0aWVzO1xuICAgIGNvbnN0IHsgaWQgfSA9IGRvYztcbiAgICBjb25zdCBpc1ByaXZhdGUgPSBEb2NDbGFzc2lmaWVyLmlzUHJpdmF0ZShkb2MpO1xuICAgIGNvbnN0IGlzQWN0aXZlID0gdGhpcy5wcm9wcy5kb2N1bWVudE5vZGUgPT09IGRvY05vZGU7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NTZXQoe1xuICAgICAgJ2NsYXNzLWJyb3dzZXJfX2VudHJ5JzogdHJ1ZSxcbiAgICAgICdjbGFzcy1icm93c2VyX19lbnRyeS0tYWN0aXZlJzogaXNBY3RpdmVcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGtleT17ZG9jTm9kZS51aWR9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgPExpbmsgcmVmPXtpZH0gdG89e2RvY05vZGV9IGNsYXNzTmFtZT1cImNsYXNzLWJyb3dzZXJfX2VudHJ5LWxpbmtcIj5cbiAgICAgICAgICB7ZG9jLm5hbWV9XG5cbiAgICAgICAgICB7aXNQcml2YXRlICYmIHRoaXMucHJvcHMubmFtZXNwYWNlTm9kZS5jb25maWcubWFya1ByaXZhdGVNb2R1bGVzICE9PSBmYWxzZSAmJiAoXG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGFzcy1icm93c2VyX19lbnRyeS1saW5rLS1wcml2YXRlXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJUaGlzIG1vZHVsZSBpcyBwcml2YXRlXCI+IDxJY29uIGNsYXNzTmFtZT1cImljb24tY3ViZVwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHtkb2MuZ2l0ICYmIDxIb3RJdGVtSW5kaWNhdG9yIHRpbWVzdGFtcD17ZG9jLmdpdC5sYXN0Q29tbWl0dGVkQXR9IC8+fVxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICAge2lzQWN0aXZlICYmICF0aGlzLnByb3BzLmZsYXQgJiYgdGhpcy5yZW5kZXJNb2R1bGVFbnRpdGllcyhkb2NOb2RlKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyTW9kdWxlRW50aXRpZXMoZG9jdW1lbnROb2RlKSB7XG4gICAgaWYgKCFkb2N1bWVudE5vZGUuZW50aXRpZXMgfHwgIWRvY3VtZW50Tm9kZS5lbnRpdGllcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICghZG9jdW1lbnROb2RlLnByb3BlcnRpZXMudGFncykge1xuICAgICAgY29uc29sZS5sb2coJ3dlaXJkIGRvY05vZGU6JywgZG9jdW1lbnROb2RlKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGhpZGVQcml2YXRlU3ltYm9scyB9ID0gdGhpcy5wcm9wcy5uYW1lc3BhY2VOb2RlLmNvbmZpZ1xuICAgIGNvbnN0IHZpc2libGUgPSBlbnRpdHlOb2RlID0+IChcbiAgICAgICFoaWRlUHJpdmF0ZVN5bWJvbHMgfHwgIURvY0NsYXNzaWZpZXIuaXNQcml2YXRlKGVudGl0eU5vZGUucHJvcGVydGllcylcbiAgICApXG5cbiAgICBjb25zdCBlbnRpdHlEb2N1bWVudHMgPSBvcmRlckF3YXJlU29ydC5hc05vZGVzKFxuICAgICAgZG9jdW1lbnROb2RlLFxuICAgICAgZG9jdW1lbnROb2RlLmVudGl0aWVzLmZpbHRlcih2aXNpYmxlKSxcbiAgICAgICdpZCdcbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJjbGFzcy1icm93c2VyX19tZXRob2RzXCI+XG4gICAgICAgIHtlbnRpdHlEb2N1bWVudHMubWFwKHRoaXMucmVuZGVyRW50aXR5KX1cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJFbnRpdHkobm9kZSkge1xuICAgIGNvbnN0IHNob3VsZERpc3BsYXlUeXBlRGVmUHJvcGVydGllcyA9IChcbiAgICAgIHRoaXMucHJvcHMuc2hvd1R5cGVEZWZQcm9wZXJ0aWVzIHx8XG4gICAgICB0aGlzLnByb3BzLm5hbWVzcGFjZU5vZGUuY29uZmlnLnNob3dUeXBlRGVmUHJvcGVydGllc0luQnJvd3NlclxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8bGkga2V5PXtub2RlLnVpZH0gY2xhc3NOYW1lPVwiY2xhc3MtYnJvd3Nlcl9fbWV0aG9kcy1lbnRpdHlcIj5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICB0bz17bm9kZX1cbiAgICAgICAgICBjaGlsZHJlbj17KG5vZGUucHJvcGVydGllcy5zeW1ib2wgfHwgJycpICsgbm9kZS5wcm9wZXJ0aWVzLm5hbWV9XG4gICAgICAgICAgdGl0bGU9e25vZGUudGl0bGV9XG4gICAgICAgIC8+XG5cbiAgICAgICAge3Nob3VsZERpc3BsYXlUeXBlRGVmUHJvcGVydGllcyAmJiBEb2NDbGFzc2lmaWVyLmlzVHlwZURlZihub2RlLnByb3BlcnRpZXMpICYmIChcbiAgICAgICAgICB0aGlzLnJlbmRlck1vZHVsZUVudGl0aWVzKG5vZGUpXG4gICAgICAgICl9XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH0sXG5cbiAgdG9nZ2xlUHJpdmF0ZVZpc2liaWxpdHkoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93UHJpdmF0ZU1vZHVsZXM6ICF0aGlzLnN0YXRlLnNob3dQcml2YXRlTW9kdWxlc1xuICAgIH0pO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDbGFzc0Jyb3dzZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9DbGFzc0Jyb3dzZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyA/IGNvbnNvbGUgOiAod2luZG93LmNvbnNvbGUgfHwgZ2xvYmFsLmNvbnNvbGUpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtaHRtbC1zZXJpYWxpemVyL3VpL3NoYXJlZC9jb25zb2xlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1wiY29tcG9uZW50cy9DaGVja2JveFwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImNvbXBvbmVudHMvQ2hlY2tib3hcXFwiXVwiXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IE1FR0FET0NfUFVCTElDX01PRFVMRVNbXCJjb21wb25lbnRzL0ljb25cIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJjb21wb25lbnRzL0ljb25cXFwiXVwiXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IE1FR0FET0NfUFVCTElDX01PRFVMRVNbXCJjb21wb25lbnRzL0hvdEl0ZW1JbmRpY2F0b3JcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJjb21wb25lbnRzL0hvdEl0ZW1JbmRpY2F0b3JcXFwiXVwiXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IE1FR0FET0NfUFVCTElDX01PRFVMRVNbXCJ1dGlscy9maWx0ZXJEb2N1bWVudHNcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJ1dGlscy9maWx0ZXJEb2N1bWVudHNcXFwiXVwiXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCB7IG9iamVjdCwgfSA9IFJlYWN0LlByb3BUeXBlcztcbmNvbnN0IE5hbWVzcGFjZUluZGV4ID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9OYW1lc3BhY2VJbmRleCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdKUzo6TmFtZXNwYWNlSW5kZXgnLFxuICBwcm9wVHlwZXM6IHtcbiAgICBkb2N1bWVudE5vZGU6IG9iamVjdCxcbiAgICBuYW1lc3BhY2VOb2RlOiBvYmplY3QsXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TmFtZXNwYWNlSW5kZXhcbiAgICAgICAgZG9jdW1lbnROb2RlPXt0aGlzLnByb3BzLmRvY3VtZW50Tm9kZSB8fCB0aGlzLnByb3BzLm5hbWVzcGFjZU5vZGV9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvb3V0bGV0cy9OYW1lc3BhY2VPdXRsZXQuanMiXSwic291cmNlUm9vdCI6IiJ9