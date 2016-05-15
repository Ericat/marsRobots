'use strict';

var Grid = require('./grid');
var Robot = require('./robot');

function Command(input) {
  this.lines = input.split('\n');
  this.gridCoords;
  this.robot;
  this.instructions;
  this.marsGrid;
  this.marsRobot;
}

Command.prototype.parse = function() {
};

//Command.prototype.sendInstruction = function(instruction) {
  //switch (instruction) {
    //case 'F':
      //return this.marsRobot.moveForwards();
    //case 'R':
      //return this.marsRobot.turnRight(this.marsRobot.orientation);
    //case 'L':
      //return this.marsRobot.turnLeft(this.marsRobot.orientation);
    //default:
      //'Not a valid command!';
  //}
//};

module.exports = Command;
