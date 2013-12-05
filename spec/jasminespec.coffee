describe "Raffler", -> 
  localRaffler = null
  beforeEach ->
    localRaffler = window.Raffler.init()  
  it "can initialize", ->    
    expect(localRaffler.initialize()?).toEqual(true)      
  describe "Router", ->     
    it "can initialize", ->
      expect(localRaffler.router?).toEqual(true)   
  describe "Collection", ->
    testperson1 = null
    coll = null
    it "can add persons", ->
      coll = new Raffler.Collections.Entries()
      testperson1 = coll.create name: 'jatin'
      expect(coll.length).toEqual(1)
    it "can delete persons", ->
      testperson1.destroy()
      expect(coll.length).toEqual(0)
  describe "App View", ->
    testperson12 = null
    it "can initialize", ->
      expect(localRaffler.appView?).toEqual(true)   
    it "can add persons", ->
      currentCount = localRaffler.appView.collection.length
      testperson12 = localRaffler.appView.addPerson('shannon')
      expect(localRaffler.appView.collection.length).toEqual(currentCount+1) 
    it "can select winners", ->
      localRaffler.appView.chooseWinner()
      expect(localRaffler.appView.getWinner().length).toEqual(1)
    it "can delete persons", ->
      currentCount = localRaffler.appView.collection.length
      #localRaffler.appView.collection.at(localRaffler.appView.collection.length-1).destroy()
      testperson12.destroy()
      expect(localRaffler.appView.collection.length).toEqual(currentCount-1)
      
      
      
    
      
    
  
