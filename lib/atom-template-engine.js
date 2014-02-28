/*global atom*/
'use strict'

var plugin = module.exports;
var path = require('path');

var TEMPLATE_DIR = '../template-engines/';

var templateEngines = {
  'jade': require(TEMPLATE_DIR + 'jade'),
  'haml': require(TEMPLATE_DIR + 'haml')
};


function convert(engine) {
  return function () {
    var editor = atom.workspace.getActiveEditor();
    var originalText = editor.getSelectedText();
    var isSelected = true;
    var convertedText = '';

    if (!originalText) {
      originalText = editor.getText();
      isSelected = false;
    }

    // If no original text, simply return
    if (!originalText) {
      return;
    }

    try {
      convertedText = templateEngines[engine].toHTML(originalText);
    } catch (err) {
      console.error(err);
      atom.beep();
    }
    
    if (isSelected) {
      editor.setTextInBufferRange(editor.getSelectedBufferRange(), convertedText);
    } else {
      editor.setText(convertedText);
    }
  }
}

plugin.activate = function () {
  Object.keys(templateEngines)
    .forEach(function (engine) {
      atom.workspaceView.command('template-convert-to:' + engine, convert(engine));
    });
};