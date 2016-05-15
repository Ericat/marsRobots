'use strict';

var _ = require('underscore');
var scented = {
  'N': [],
  'S': [],
  'E': [],
  'W': [],
};
var width;
var height;

var Grid = function(x, y) {
  if (!this._isValidRange(x, y)) {
    return false;
  }
  this.x = width = x;
  this.y = height = y;
  this.spaces = this._makeGrid(width, height);

  if (!this instanceof Grid) {
    return new Grid(x, y);
  }
}

Grid.prototype._makeGrid = function(width, height) {
  var rows = [];
  for (var i=0; i<= height; i++) {
    rows.push(this._makeCell(width));
  };
  return rows;
}

Grid.prototype._makeCell = function(width) {
  return new Array(width).fill(0);
};

Grid.prototype._isValidRange = function(x, y) {
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
}

Grid.hasScent = function(options) {
  var positions = scented[options.orientation] || [];

  if (positions.length == 0) { return false; };
  return _isCoordsMatch(positions, [options.x, options.y]);
}

Grid.isInBound = function(x, y) {
  return x >= 0 && x <= (width) &&
    y >= 0 && y <= (height);
}

module.exports = Grid;
