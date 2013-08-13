var ColorfulDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
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
  this.$node.css("border", "10px solid " + createRGBColor());
};

ColorfulDancer.prototype.lineUp = function() {
  this.$node.css({
    left: "20px"
  });
};