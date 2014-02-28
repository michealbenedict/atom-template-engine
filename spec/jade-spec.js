var WorkspaceView = require('atom').WorkspaceView;
var templateEngine = require('../lib/atom-template-engine');
var trim = require('./helpers').trim;

describe("Template engine", function () {
  var promise = null;
  var editorView, editor;
  
  beforeEach(function() {
    atom.workspaceView = new WorkspaceView;
    atom.workspace = atom.workspaceView.model;
    atom.workspaceView.openSync();
    editorView = atom.workspaceView.getActiveView();
    editor = editorView.getEditor();
    return promise = atom.packages.activatePackage('atom-template-engine');
  });

  describe("when the template-convert-to:jade event is triggered", function() {
    it("converts jade to html", function() {
      editor.setText("div");
      editor.setCursorBufferPosition([0, 0]);
      atom.workspaceView.trigger('template-convert-to:jade');
      
      return waitsForPromise(function() {
        expect(trim(editor.getText())).toBe("<div></div>");
        return promise;
      });
    });
  });
});
