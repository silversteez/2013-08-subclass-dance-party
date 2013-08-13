var SnoopDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('snoop');
};

SnoopDancer.prototype = Object.create(Dancer.prototype);
SnoopDancer.prototype.constructor = SnoopDancer;

SnoopDancer.prototype.step = function(){
//  Dancer.prototype.step.call(this);
  this.$node.append('<img src="snoop.gif"/>');
};

SnoopDancer.prototype.lineUp = function() {
  this.setPosition(undefined, 20);
};