'use strict';

var Grid = require('../grid');
var assert = require('assert');

describe('A grid should', function() {
  it('throw if instantiated with invalid coordinates', function() {
    var invalidX = 51;
    var invalidY = 9;
    assert.throws(function() { new Grid(invalidX, invalidY); },
      'Invalid coordinates!'
    );
  });

  it('be initialised with coordinates x and y', function() {
    var marsGrid = new Grid(4, 3);
    assert.equal(marsGrid.x, 4);
    assert.equal(marsGrid.y, 3);
  });

  it('calculate if a set of coords is off-grid', function() {
    var marsGrid = new Grid(4, 3);
    assert.equal(Grid.isInBound(3, 2), true);
    assert.equal(Grid.isInBound(2, -1), false);
    assert.equal(Grid.isInBound(2, 4), false);
    assert.equal(Grid.isInBound(4, 3), true);
    assert.equal(Grid.isInBound(5, 1), false);
    assert.equal(Grid.isInBound(-1, 1), false);
  });

  it('mark coordinates with a scent', function() {
    var marsGrid = new Grid(4, 3);
    var options = {
      x: 1,
      y: 1,
      orientation: 'N',
    }

    Grid.leaveScent(options);
    assert.equal(Grid.hasScent(options), true);
  });
});

