var GrowingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

GrowingDancer.prototype = Object.create(Dancer.prototype);
GrowingDancer.prototype.constructor = GrowingDancer;

GrowingDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var self = this;
  var grow = function() {
    self.$node.animate({
    borderWidth: "50px"
    }, 200, shrink);
  };
  var shrink = function() {
    self.$node.animate({
    borderWidth: "10px"
    }, 200);
  };
  grow();
};

GrowingDancer.prototype.lineUp = function() {
  this.$node.css({
    left: "20px"
  });
};