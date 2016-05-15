'use strict';

var _ = require('underscore');
var Grid = require('./grid');
var Robot = require('./robot');
var results = [];
var Command = function() {
  this.grid;
  this.robots = [];
//
}

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
  //console.log(this.grid);
  this.robots = this._parseRobots(inputArr);
  //console.log(this.robots);
};

Command.prototype.execute = function() {
  var initialPos = {};
  var instructions;
  var lastPos;
  var robot;

  initialPos = this.robots[2][0].split('');
  instructions = this.robots[2][1].split('');
  console.log(initialPos, instructions);
  robot = new Robot(+initialPos[0], +initialPos[1], initialPos[2]);

  for (var i=0, length = instructions.length-1; i<=length; i++) {
    if (Robot.isLost == 1) { break; }
    this._executeCommand(robot, instructions[i]);
  };

  results.push(robot);
  return console.log(this._formatOutput());

  //TO DO
  //for (var i=0, length = this.robots.length; i<length; i++) {
    //initialPos = this.robots[i][0].split('');
    //instructions = this.robots[i][1].split('');

    //robot = new Robot(+initialPos[0], +initialPos[1], initialPos[2]);

    //for (var i=0, length = instructions.length-1; i<=length; i++) {
      //if (Robot.isLost == 1) { break; }
      //this._executeCommand(robot, instructions[i]);
    //};

    //results.push(robot);
  //};

  //this._formatOutput();
};

Command.prototype._executeCommand = function(robot, command) {
    switch(command) {
      case 'F':
        return robot.moveForward();
      case 'R':
        return robot.turn(command);
      case 'L':
        return robot.turn(command);
      default:
        throw new Error('Command not recognised');
    }
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

Command.prototype._formatOutput = function() {
  var printStr = '';
  results.forEach(function(result) {
    if (result.isLost == 1) {
      printStr += (result.lastPos.x).toString() +
        (result.lastPos.y).toString() +
        (result.lastPos.orientation).toString();
      printStr += ' LOST';
    }
  });
  return printStr;
}

module.exports = Command;
