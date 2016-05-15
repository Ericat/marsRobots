'use strict';

var Grid = require('./grid');
var Robot = function(x, y, orientation) {
  this.x = x;
  this.y = y;
  this.orientation = orientation;
  this.isLost = 0;
  this.lastPos;
  this.afterMove;

  if (!this instanceof Robot) {
    return new Robot(x, y, orientation);
  }
};

Robot.prototype.parse = function(command) {
    switch(command) {
      case 'F':
        return this.moveForward();
      case 'R':
        return this._turnRight();
      case 'L':
        return this._turnLeft();
      default:
        throw new Error('Command not recognised');
    }
};

Robot.prototype._turnRight = function() {
  var rightTurns = {
    N: 'E',
    E: 'S',
    S: 'W',
    W: 'N',
  };

  this._updateOrientation(rightTurns, this.orientation);
};

Robot.prototype._turnLeft = function() {
  var leftTurns = {
    N: 'W',
    W: 'S',
    S: 'E',
    E: 'N',
  };

  this._updateOrientation(leftTurns, this.orientation);
};

Robot.prototype._updateOrientation = function(turns, newOrientation) {
  this.orientation = turns[newOrientation];
  if (this.afterMove !== undefined) {
    this.afterMove.orientation = this.orientation;
  }
  if (this.lastPos !== undefined) {
    this.lastPos.orientation = this.orientation;
  }
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
};

Robot.prototype.moveForward = function() {
  if (this.isLost == 1) { return; };
  this.lastPos = {
    x: this.x,
    y: this.y,
    orientation: this.orientation,
  };

  if (Grid.hasScent(this.lastPos)) { return; };

  this._move();

  this.afterMove = {
    x: this.x,
    y: this.y,
    orientation: this.orientation,
  }

  if (!Grid.isInBound(this.x, this.y)) {
    this.isLost = 1;
    Grid.leaveScent(this.lastPos);
    return;
  };
};

module.exports = Robot;
