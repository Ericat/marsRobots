'use strict';

var Grid = require('../grid');
var assert = require('assert');

describe('a grid should', function() {
  it.skip('return false if instantiated with invalid coordinates', function() {
    var invalidX = 51;
    var invalidY = 9;
    var EmptyMarsGrid = new Grid(invalidX, invalidY);
    //TO DO fix empty object
    assert.equal(EmptyMarsGrid, false);
  });

  it('be initialised with a width and a height', function() {
    var MarsGrid = new Grid(4, 3);
    //console.log(MarsGrid);
    assert.equal(MarsGrid.width, 4);
    assert.equal(MarsGrid.height, 3);
  });

  it('calculate if a set of coords is off-grid', function() {
    var MarsGrid = new Grid(4, 3);
    assert.equal(MarsGrid.isInBound(3, 2), true);
    assert.equal(MarsGrid.isInBound(2, -1), false);
    assert.equal(MarsGrid.isInBound(2, 4), false);
    assert.equal(MarsGrid.isInBound(4, 3), true);
    assert.equal(MarsGrid.isInBound(5, 1), false);
    assert.equal(MarsGrid.isInBound(-1, 1), false);
  });

  it('mark coordinates with a scent', function() {
    var MarsGrid = new Grid(4, 3);
    var coords = [1, 1];
    var orientation = 'N';

    MarsGrid.leaveScent(coords, orientation);
    assert.equal(MarsGrid.hasScent(coords, orientation), true);
  });
});

