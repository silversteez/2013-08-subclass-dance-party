var ColorfulDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

ColorfulDancer.prototype = Object.create(Dancer.prototype);
ColorfulDancer.prototype.constructor = ColorfulDancer;

ColorfulDancer.prototype.step = function(){
  var randomNum = function() {
    return Math.floor(Math.random() * 255);
  };

  var createRGBColor = function() {
    return "rgb(" + randomNum() + "," + randomNum() + "," + randomNum() +")";
  };
  Dancer.prototype.step.call(this);
  console.log(createRGBColor())
  this.$node.css("border", "10px solid " + createRGBColor());
};