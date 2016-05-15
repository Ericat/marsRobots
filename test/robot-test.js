'use strict';

var Robot = require('../robot');
var assert = require('assert');

describe('a robot should', function() {
  var marsRobot = new Robot(2, 3, 'N');
  it.skip('be instantiated with a set of coords and an orientation', function() {
    assert.equal(marsRobot.x, 2);
    assert.equal(marsRobot.y, 3);
    assert.equal(marsRobot.orientation, 'N');
  });

  it.skip('be able to turn right, given an orientation', function() {
  });

  it.skip('be able to turn left, given an orientation', function() {

  });
});
