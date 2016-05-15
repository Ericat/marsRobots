'use strict';

var Robot = require('../robot');
var Grid = require('../grid');
var assert = require('assert');

describe('A robot should', function() {
  var marsGrid;
  beforeEach(function() {
    marsGrid = new Grid(5, 3);
  });

  it('be instantiated with a set of coords and an orientation', function() {
    var marsRobot = new Robot(2, 3, 'N');
    assert.equal(marsRobot.x, 2);
    assert.equal(marsRobot.y, 3);
    assert.equal(marsRobot.orientation, 'N');
    assert.equal(marsRobot.isLost, 0);
  });

  it('turn right, given a R command', function() {
    var marsRobot = new Robot(2, 3, 'N');
    marsRobot.turn('R');
    assert.equal(marsRobot.orientation, 'E');
  });

  it('turn left, after a L command', function() {
    var marsRobot = new Robot(0, 3, 'W');
    marsRobot.turn('L');
    assert.equal(marsRobot.orientation, 'S');
  });

  it('move forward, given an orientation', function() {
    var marsRobot = new Robot(3, 2, 'N');
    marsRobot.moveForward();

    assert.equal(marsRobot.orientation, 'N');
    assert.equal(marsRobot.x, 3);
    assert.equal(marsRobot.y, 3);
  });

  it('leaves a scent when is lost', function() {
    var marsRobot = new Robot(4, 3, 'N');
    marsRobot.moveForward();
    assert.equal(marsRobot.isLost, 1);
  });

  it('refuse to move on a scented position', function() {
    var marsRobot = new Robot(4, 3, 'N');
    var lastPos = { x: 4, y: 3, orientation: 'N' };
    marsRobot.moveForward();
    assert.deepEqual(marsRobot.lastPos, lastPos);
    assert.equal(marsRobot.isLost, 0);
  });
});
