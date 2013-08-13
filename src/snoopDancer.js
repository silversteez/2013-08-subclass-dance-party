var SnoopDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

SnoopDancer.prototype = Object.create(Dancer.prototype);
SnoopDancer.prototype.constructor = SnoopDancer;

SnoopDancer.prototype.step = function(){
//  Dancer.prototype.step.call(this);
  this.$node.append('<img src="snoop.gif"/>');
};

SnoopDancer.prototype.lineUp = function() {
  this.$node.animate({
    left: "20px"
  }, 200);
};