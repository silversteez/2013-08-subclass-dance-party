// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this._top = top;
  this._left = left;
  this._timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');

  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function(){
  var self = this;
  setTimeout(function(){ self.step(); }, this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top || this._top,
    left: left
  };
  this.$node.css(styleSettings);

  this._top = top || this._top;//store positions when setPosition is called via mousemove
  this._left = left;
};

Dancer.prototype.getPosition = function(){
  return {top: this._top, left: this._left};
}