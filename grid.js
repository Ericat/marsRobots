'use strict';

var _ = require('underscore');
var width;
var height;
var scented = {
  'N': [],
  'S': [],
  'E': [],
  'W': [],
};

var Grid = function(x, y) {
  if (!_isValidRange(x, y)) {
    throw new Error('Invalid coordinates!');
  }
  this.x = width = x;
  this.y = height = y;
  this.spaces = _makeGrid(width, height);

  if (!this instanceof Grid) {
    return new Grid(x, y);
  }
};

function _makeGrid(width, height) {
  var rows = [];
  for (var i=0; i<= height; i++) {
    rows.push(_makeCell(width));
  };
  return rows;
}

function _makeCell(width) {
  return new Array(width).fill(0);
}

function _isValidRange(x, y) {
  return x > 0 && x <= 50 &&
    y > 0 && y <= 50;
}

function _isCoordsMatch(positions, coords) {
  return positions.some(function(position) {
    if (_.isEqual(position, coords)) {
      return true;
    }
  });
}

Grid.leaveScent = function(options) {
  return scented[options.orientation].push([options.x, options.y]);
};

Grid.hasScent = function(options) {
  var positions = scented[options.orientation] || [];

  if (positions.length == 0) { return false; };
  return _isCoordsMatch(positions, [options.x, options.y]);
};

Grid.isInBound = function(x, y) {
  return x >= 0 && x <= (width) &&
    y >= 0 && y <= (height);
};

module.exports = Grid;
