'use strict';

var _ = require('underscore');
var Grid = require('./grid');
var Robot = require('./robot');
var results = [];
var Command = function() {
  this.grid;
  this.robots = [];
  if (!this instanceof Command) {
    return new Command();
  }
};

Command.prototype.parse = function(input) {
  var inputArr = input.split('\n');
  inputArr.pop();

  var gridCoords = inputArr
    .shift()
    .split('')
    .map(function(el) {
      return +(el);
    });

  this.grid = new Grid(gridCoords[0], gridCoords[1]);
  this.robots = this._parseRobots(inputArr);
};

Command.prototype.execute = function() {
  var initialPos = {};
  var instructions;
  var lastPos;
  var robot;

  this.robots.forEach(function(robot, i) {
    initialPos = robot[0].split('');
    instructions = robot[1].split('');
    robot = new Robot(+initialPos[0], +initialPos[1], initialPos[2]);

    for (var i=0, length = instructions.length-1; i<=length; i++) {
      if (Robot.isLost == 1) { break; }
      this._executeCommand(robot, instructions[i]);
    };

    results.push(robot);
  }, this);
  return _formatOutput();
};

Command.prototype._executeCommand = function(robot, command) {
  return robot.parse(command);
};

Command.prototype._parseRobots = function(arr) {
  var n = 0;

  while (n<=(arr.length/2)+1) {
    if (arr.length == 2) {
      this.robots.push(arr);
      break;
    }
    var newRobot = arr.splice(0, 2);
    this.robots.push(newRobot);
    n++;
  }
  return this.robots;
};

function _formatOutput() {
  var printStr = '';
  results.forEach(function(result) {
    if (result.isLost == 1) {
      printStr += (result.lastPos.x).toString() +
        (result.lastPos.y).toString() +
        (result.lastPos.orientation).toString();
      printStr += ' LOST\n';
    } else {
      printStr += (result.afterMove.x).toString() +
        (result.afterMove.y).toString() +
        (result.afterMove.orientation).toString() + '\n';
    }
  });
  return printStr;
}

module.exports = Command;
