'use strict';

function Robot(x, y, orientation) {
  this.x = x;
  this.y = y;
  this.orientation = orientation;
  this.isLost = 0;
}

Robot.prototype.turnRight = function(dir) {
  var rightTurns = {
    N: 'E',
    E: 'S',
    S: 'W',
    W: 'N'
  };

  return this.orientation = rightTurns[dir];
}

Robot.prototype.turnLeft = function(dir) {
  var leftTurns = {
    N: 'W',
    W: 'S',
    S: 'E',
    E: 'N'
  };

  return this.orientation = leftTurns[dir];
};

Robot.prototype.moveForwards = function(dir) {
  //switch case
};

module.exports = Robot;
