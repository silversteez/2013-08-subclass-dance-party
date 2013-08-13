describe("growingDancer", function() {

  var growingDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    growingDancer = new GrowingDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(growingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that calls its node's animate function", function() {
    sinon.spy(growingDancer.$node, 'animate');
    growingDancer.step();
    expect(growingDancer.$node.animate.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(growingDancer, "step");
      expect(growingDancer.step.callCount).to.be.equal(0)
      clock.tick(timeBetweenSteps);

      expect(growingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(growingDancer.step.callCount).to.be.equal(2);
    });
    
  });
});
