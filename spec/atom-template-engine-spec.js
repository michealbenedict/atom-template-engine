describe("AtomTemplateEngine", function() {
  var activationPromise;
  activationPromise = null;
  beforeEach(function() {
    atom.workspaceView = new WorkspaceView;
    return activationPromise = atom.packages.activatePackage('atomTemplateEngine');
  });
  return describe("when the template-convert-to:haml event is triggered", function() {
    return it("attaches and then detaches the view", function() {
      expect(atom.workspaceView.find('.atom-template-engine')).not.toExist();
      atom.workspaceView.trigger('template-convert-to:haml');
      waitsForPromise(function() {
        return activationPromise;
      });
      return runs(function() {
        expect(atom.workspaceView.find('.atom-template-engine')).toExist();
        atom.workspaceView.trigger('atom-template-engine:toggle');
        return expect(atom.workspaceView.find('.atom-template-engine')).not.toExist();
      });
    });
  });
});
