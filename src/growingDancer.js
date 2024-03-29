var GrowingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

GrowingDancer.prototype = Object.create(Dancer.prototype);
GrowingDancer.prototype.constructor = GrowingDancer;

GrowingDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggleClass("grownDancer");
};

GrowingDancer.prototype.lineUp = function() {
  this.setPosition(undefined, 20);
};