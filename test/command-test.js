'use strict';

var fs = require('fs');
var assert = require('assert');
var assertChai = require('chai').assert;
//var sinon = require('sinon');

//var gridSpy = sinon.spy(Grid, "init");
//assert.equal(Command.getRobots().length, 3);
//assert.equal(gridSpy.calledOnce, true);
//gridSpy.reset();

var Command = require('../command');
var Grid = require('../grid');
var Robot = require('../robot');

describe('a command should', function() {
  var input;
  var command;

  beforeEach(function() {
    input= fs.readFileSync('/Users/ericat/marsRobots/test/sampleInput.txt')
    .toString();
    command = new Command();
  });

  it('parse a line separated input', function() {
    command.parse(input);
    assertChai.instanceOf(command.grid, Grid);
    assertChai.isArray(command.robots);
  });

  it('executes instructions', function() {
    command.parse(input);
    command.execute();
  });

});
