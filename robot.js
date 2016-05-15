'use strict';

var Grid = require('./grid');
var Robot = function(x, y, orientation) {
  this.x = x;
  this.y = y;
  this.orientation = orientation;
  this.isLost = 0;
  this.lastPos;

  if (!this instanceof Robot) {
    return new Robot(x, y, orientation);
  }
}

Robot.prototype.turn = function(command) {
  if (command == 'L') { return this._turnLeft(); };
  if (command == 'R') { return this._turnRight(); };
}

Robot.prototype._turnRight = function(dir) {
  var rightTurns = {
    N: 'E',
    E: 'S',
    S: 'W',
    W: 'N'
  };

  var currentOrientation = this.orientation;
  return this.orientation = rightTurns[currentOrientation];
}

Robot.prototype._turnLeft = function(dir) {
  var leftTurns = {
    N: 'W',
    W: 'S',
    S: 'E',
    E: 'N'
  };
  var currentOrientation = this.orientation;
  return this.orientation = leftTurns[currentOrientation];
};

Robot.prototype._move = function() {
  switch (this.orientation) {
    case 'N':
      return  this.y++;
    case 'E':
      return this.x++;
    case 'S':
      return this.y--;
    case 'W':
      return this.x--;
  }
}

Robot.prototype.moveForward = function() {
  if (this.isLost == 1) {
    console.log('dude, I am lost');
    return;
  };
  this.lastPos = {
    x: this.x,
    y: this.y,
    orientation: this.orientation,
  };

  if (Grid.hasScent(this.lastPos)) {
    console.log('I solemnly refuse to move');
    return;
  };

  this._move();

  if (!Grid.isInBound(this.x, this.y)) {
    this.isLost = 1;
    Grid.leaveScent(this.lastPos);
    return;
  };
};

module.exports = Robot;
