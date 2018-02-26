const Draft = require('draft-js');
const { assert } = require('chai');
const { drill, Scope } = require('react-drill');
const { Simulate } = require("react-dom/test-utils");
const { convertToRaw } = Draft;

/**
 * @module RCEScope
 * @extends {Scope}
 * @class
 *
 * A drilling scope for manipulating Draft.js **R**ich **C**ontent **E**ditor
 * components.
 *
 * You don't need to instantiate this directly, use [[warpToRCE]] instead.
 *
 * @example
 *
 *     drill(subject)
 *       .warpToRCE()
 *         .setContent('Hello World!')
 *         .select('World')
 *
 *     // assuming there's a button that will apply a BOLD inline style to the
 *     // editor's current selection:
 *     drill(subject)
 *       .find('button', m.hasText('Toggle BOLD'))
 *         .click()
 *
 *     drill(component)
 *       .warpToRCE()
 *         .assertHasInlineStyle('BOLD', { text: 'World' })
 *
 */
function RCEScope() {
  Scope.apply(this, arguments);
}

RCEScope.prototype = Object.create(Scope.prototype);

/**
 * Adjust the text contents of the RCE.
 *
 * @param {String} content
 * @param {?Object} options
 * @param {?Boolean} options.interpretNewlines
 *        Turn this on if you have line-breaks in the content (`\n`) that you
 *        want to turn into RCE breaks (resulting into `<p />` nodes).
 *
 *        This is a convenience option that is equivalent to emitting keyDown
 *        events with the 'Enter' (KC 13) key.
 *
 * @return {RCEScope}
 */
RCEScope.prototype.setContent = function(content, options = {}) {
  if (options.interpretNewlines) {
    const lines = content.split('\n');

    lines.forEach((fragment, index) => {
      this.setContent(fragment);

      if (index !== lines.length - 1) {
        this.insertLineBreak();
      }
    });

    return this;
  }

  const event = document.createEvent('TextEvent');
  event.initTextEvent('textInput', true, true, null, content, 9, "en-US");

  this.node.dispatchEvent(event);

  return this;
};

RCEScope.prototype.addContent = RCEScope.prototype.setContent;

/**
 * Focus the editor.
 */
RCEScope.prototype.focus = function() {
  this.component.focus();

  return this;
};

/**
 * Move focus away from the editor.
 */
RCEScope.prototype.blur = function() {
  this.component.blur();

  return this;
};

/**
 * Insert a line break through a RETURN key-press.
 */
RCEScope.prototype.insertLineBreak = function() {
  this.keyDown(13);

  return this;
};

/**
 * Insert a "soft" line break through a RETURN plus SHIFT key-press.
 */
RCEScope.prototype.insertSoftLineBreak = function() {
  this.keyDown(13, { shiftKey: true });

  return this;
};

/**
 * A version of react-drill's [[Actions.keyDown]] that:
 *
 * 1. supports ctrl/meta/shift modifiers
 * 2. operates on the editor's root node
 * 3. does not focus the node, as it is not necessary here
 *
 * @param {Number} keyCode
 * @param {Object} options
 * @param {Boolean} options.ctrlKey
 * @param {Boolean} options.metaKey
 * @param {Boolean} options.shiftKey
 */
RCEScope.prototype.keyDown = function(keyCode, options = {}) {
  Simulate.keyDown(this.node, {
    keyCode: keyCode,
    key: keyCode,
    which: keyCode,
    ctrlKey: options.ctrlKey === true,
    metaKey: options.metaKey === true,
    shiftKey: options.shiftKey === true,
    getModifierState(state) {
      switch (state) {
        case 'Alt':
          return options.altKey === true;
        case 'Shift':
          return options.shiftKey === true;
        case 'Control':
          return options.ctrlKey === true;
        case 'Meta':
          return options.metaKey === true;
      }

      return false;
    }
  });
};

/**
 * Change the editor's selection to contain the specified text.
 *
 * **TODO** Make it work with multi-block ranges.
 *
 * @param {String} text
 * @param {Object?} options
 * @param {Boolean} [options.forceDOMSelection=false]
 *        Whether we should use the native Browser APIs to simulate the
 *        selection before reaching out to DraftJS's APIs.
 *
 * @return {RCEScope}
 */
RCEScope.prototype.select = function(text, options = {}) {
  if (options.forceDOMSelection) {
    forceDOMSelection(text, this.node);
  }

  const editorState = getEditorState(this);

  let anchorKey, anchorOffset, focusKey, focusOffset;

  // selection across blocks
  if (text.indexOf("\n") !== -1) {
    const parts = text.split("\n");
    const [ anchor ] = getContentBlocksWithText(this, { text: parts[0] });
    const [ focus ] = getContentBlocksWithText(this, { text: parts[parts.length - 1] });
    anchorKey = anchor.key;
    anchorOffset = anchor.text.indexOf(parts[0]);
    focusKey = focus.key;
    focusOffset = focus.text.indexOf(text) + parts[parts.length - 1].length;

  // selection within single block
  } else {
    const [ block ] = getContentBlocksWithText(this, { text });
    anchorKey = block.key;
    anchorOffset = block.text.indexOf(text);
    focusKey = block.key;
    focusOffset = block.text.indexOf(text) + text.length;
  }

  this.component.props.onChange(
    Draft.EditorState.forceSelection(editorState, new Draft.SelectionState({
      anchorKey: anchorKey,
      anchorOffset: anchorOffset,
      focusKey: focusKey,
      focusOffset: focusOffset,
      isBackward: false
    }))
  );

  return this;
};

/**
 * Simulate a range selection.
 *
 * @param {Object} position
 * @param {Number} position.from
 *        The starting index in the editor's textual range.
 * @param {Number} position.to
 *        The ending index in the editor's textual range.
 *
 * @param {Boolean} [focus=true]
 */
RCEScope.prototype.setSelection = function(position, focus = true) {
  const editorState = getEditorState(this);

  if (typeof position === 'object' && position.hasOwnProperty('of')) {
    const text = position.of;
    const blockMap = editorState.getCurrentContent().getBlocksAsArray();
    const targetBlock = blockMap.reduce(function(block, x) {
      if (block) { return block; }

      if (x.text.match(text)) {
        return x;
      }

      return null;
    }, null);

    this.component.props.onChange(
      Draft.EditorState.forceSelection(editorState, new Draft.SelectionState({
        anchorKey: targetBlock.key,
        anchorOffset: targetBlock.text.indexOf(text),
        focusKey: targetBlock.key,
        focusOffset: targetBlock.text.indexOf(text),
        isBackward: false,
        hasFocus: focus,
      }))
    );
  }
  else if (typeof position === 'object' && position.hasOwnProperty('from')) {
    const blockMap = editorState.getCurrentContent().getBlocksAsArray();
    const newSelection = blockMap.reduce(function(context, block) {
      if (context.startBlock && context.endBlock) {
        return context;
      }

      context.offset += block.getLength();

      if (!context.startBlock && context.offset >= position.from) {
        context.startBlock = block;
        context.startBlockOffset = block.getLength() - (context.offset - position.from);
      }

      if (!context.endBlock && context.offset >= position.to) {
        context.endBlock = block;
        context.endBlockOffset = block.getLength() - (context.offset - position.to);
      }

      return context;
    }, { offset: 0, startBlock: null, endBlock: null });

    if (!newSelection.startBlock) {
      throw new Error(
        `OutOfBoundsError: unable to create a selection for text between ` +
        `[${position.from}...${position.to}]
      `);
    }

    const nextSelection = new Draft.SelectionState({
      anchorKey: newSelection.startBlock.key,
      anchorOffset: newSelection.startBlockOffset,
      focusKey: newSelection.endBlock.key,
      focusOffset: newSelection.endBlockOffset,
      isBackward: position.to < position.from,
      hasFocus: focus,
    });

    this.component.props.onChange(
      Draft.EditorState.forceSelection(editorState, nextSelection)
    );
  }
};

/**
 * Get the current selection as reported by the editor's state.
 *
 * @return {DraftJS.SelectionState}
 */
RCEScope.prototype.getSelection = function() {
  return getEditorState(this).getSelection();
};

/**
 * Get the currently selected text as reported by the editor's state.
 *
 * @return {String}
 */
RCEScope.prototype.getSelectedText = function() {
  const editorState = getEditorState(this);
  const selection = editorState.getSelection();
  const contentState = editorState.getCurrentContent();
  const anchorBlock = contentState.getBlockForKey(selection.getAnchorKey());
  const focusBlock = contentState.getBlockForKey(selection.getFocusKey());

  if (anchorBlock === focusBlock) {
    return anchorBlock.getText().slice(selection.getAnchorOffset(), selection.getFocusOffset());
  }
  else {
    throw new Error("Not Implemented");
    // TODO
  }
};

/**
 * Retrieve the _character offset_ of the current selection from the beginning
 * of the editor content.
 *
 * @example
 *
 *     "Hello World!"
 *            ^
 *      0     6
 *
 *     drill(subject).warpToRCE().getCaretPosition() === 6;
 *
 */
RCEScope.prototype.getCaretPosition = function() {
  const editorState = getEditorState(this);
  const selection = editorState.getSelection();
  const contentState = editorState.getCurrentContent();

  const blocks = contentState.getBlocksAsArray();
  const anchorBlock = contentState.getBlockForKey(selection.getStartKey());

  let tally = 0;

  blocks.some(function(block) {
    if (block === anchorBlock) {
      tally += selection.getStartOffset();

      return true;
    }

    tally += block.getLength();

    return false;
  });

  return tally;
};

/**
 * Move the caret to the specified character offset. This generates a collapsed
 * selection.
 *
 * @param {Number} index
 */
RCEScope.prototype.setCaretPosition = function(index) {
  return this.setSelection({ from: index, to: index });
};

/**
 * Retrieve the "[raw state](https://draftjs.org/docs/api-reference-data-
 * conversion.html#converttoraw)" of the editor's current content.
 *
 * @return {Object}
 */
RCEScope.prototype.getRawState = function() {
  return convertToRaw(getEditorState(this).getCurrentContent());
};

/**
 * Assert that the editor content has the specified text with a particular
 * inline style.
 *
 *     drill(component)
 *       .warpToRCE()
 *         .assertHasInlineStyle('BOLD', { text: 'World' })
 *
 * @param {String} style
 * @param {Object} location
 * @param {String} location.text
 *
 * @return {RCEScope}
 *
 * @throws {AssertionError}
 */
RCEScope.prototype.assertHasInlineStyle = function(style, { text }) {
  const contentBlocks = getContentBlocksWithText(this, { text });
  const styledContentBlocks = getContentBlocksWithInlineStyle(this, {
    contentBlocks: contentBlocks,
    style
  });

  assert(styledContentBlocks.length > 0,
    `Expected to find a textNode containing '${text}' styled with '${style}' ` +
    `but found the following styles instead:\n` +
    JSON.stringify(
      contentBlocks
        .reduce((list, x) => list.concat(x.inlineStyleRanges.map(y => y.style)), [])
        .join(', ')
    )
  );

  return this;
};

/**
 * The inverse of [[#assertHasInlineStyle]].
 *
 * @param {String} style
 * @param {Object} location
 * @param {String} location.text
 *
 * @return {RCEScope}
 *
 * @throws {AssertionError}
 */
RCEScope.prototype.assertHasNoInlineStyle = function(style, { text }) {
  const contentBlocks = getContentBlocksWithText(this, { text });
  const styledContentBlocks = getContentBlocksWithInlineStyle(this, {
    contentBlocks: contentBlocks,
    style
  });

  assert(styledContentBlocks.length === 0,
    `Expected textNode containing '${text}' not to be styled with '${style}' ` +
    `but it was:\n` +
    JSON.stringify(
      contentBlocks
        .reduce((list, x) => list.concat(x.inlineStyleRanges.map(y => y.style)), [])
        .join(', ')
    )
  );

  return this;
};

function getContentBlocksWithInlineStyle(scope, { contentBlocks, style }) {
  return contentBlocks.filter(x => {
    return x.inlineStyleRanges.some(y => y.style === style);
  });
}

function getContentBlocksWithText(scope, { text, shouldAssert = true }) {
  const rawContent = convertToRaw(getEditorState(scope).getCurrentContent());

  const blocks = rawContent.blocks.filter(x => {
    return x.text.match(text);
  });

  if (shouldAssert) {
    assert(blocks.length > 0,
      `Expected to find a textNode containing '${text}' but found:\n` +
      JSON.stringify(rawContent.blocks.map(x => x.text).join(' '))
    );
  }

  return blocks;
}

function getEditorState(scope) {
  return scope.component.props.editorState;
}

function forceDOMSelection(text, rootNode) {
  const nodes = []
  const { NodeFilter } = window;
  const otherNodes = [];

  let currentNode;
  let walk = document.createTreeWalker(rootNode, NodeFilter.SHOW_TEXT, null, false);

  while ((currentNode = walk.nextNode())) {
    if (currentNode.nodeValue.match(text)) {
      nodes.push(currentNode);
    }
    else {
      otherNodes.push(currentNode); // for debugging
    }
  }

  assert(nodes.length > 0,
    `Expected to find a textNode containing '${text}' but the nodes available were:\n` +
    JSON.stringify(otherNodes.map(x => x.nodeValue))
  );

  if (nodes.length > 0) {
    const selection = window.getSelection();

    // deselect anything that's been selected
    if (selection.rangeCount > 0) {
      selection.removeAllRanges();
    }

    nodes.forEach(node => {
      const range = document.createRange();
      range.setStart(node, node.nodeValue.indexOf(text));
      range.setEnd(node, node.nodeValue.indexOf(text) + text.length);

      console.log(
        `Selecting "${range.toString()}" {${range.startOffset}..${range.endOffset}} ` +
        `in "${node.nodeValue}" (collapsed? ${range.collapsed})`
      );

      selection.addRange(range);
    });

    console.log(`Selection now contains: "${selection.toString()}"`);
  }
}

/**
 * @module warpToRCE
 *
 * Warp to the closest Draft.js RCE Editor.
 *
 * @return {RCEScope}
 */
drill.registerExtension('warpToRCE', function warpToRCE() {
  const parentScope = this;
  const { component, node } = this.find(Draft.Editor);

  return new RCEScope(component, [
    node.querySelector('[contenteditable]')
  ], [ parentScope, 'Draft.js RCE' ].join(' > '), parentScope);
});

module.exports = RCEScope;