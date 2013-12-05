// Generated by CoffeeScript 1.6.3
(function() {
  describe("Raffler", function() {
    var localRaffler;
    localRaffler = null;
    beforeEach(function() {
      return localRaffler = window.Raffler.init();
    });
    it("can initialize", function() {
      return expect(localRaffler.initialize() != null).toEqual(true);
    });
    describe("Router", function() {
      return it("can initialize", function() {
        return expect(localRaffler.router != null).toEqual(true);
      });
    });
    describe("Collection", function() {
      var coll, testperson1;
      testperson1 = null;
      coll = null;
      it("can add persons", function() {
        coll = new Raffler.Collections.Entries();
        testperson1 = coll.create({
          name: 'jatin'
        });
        return expect(coll.length).toEqual(1);
      });
      return it("can delete persons", function() {
        testperson1.destroy();
        return expect(coll.length).toEqual(0);
      });
    });
    return describe("App View", function() {
      var testperson12;
      testperson12 = null;
      it("can initialize", function() {
        return expect(localRaffler.appView != null).toEqual(true);
      });
      it("can add persons", function() {
        var currentCount;
        currentCount = localRaffler.appView.collection.length;
        testperson12 = localRaffler.appView.addPerson('shannon');
        return expect(localRaffler.appView.collection.length).toEqual(currentCount + 1);
      });
      it("can select winners", function() {
        localRaffler.appView.chooseWinner();
        return expect(localRaffler.appView.getWinner().length).toEqual(1);
      });
      return it("can delete persons", function() {
        var currentCount;
        currentCount = localRaffler.appView.collection.length;
        testperson12.destroy();
        return expect(localRaffler.appView.collection.length).toEqual(currentCount - 1);
      });
    });
  });

}).call(this);