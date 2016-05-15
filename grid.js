'use strict';

var _ = require('underscore');
var Grid = function(width, height) {
  if (!this._isValidRange(width, height)) {
    return false;
  }
  this.width = width;
  this.height = height;
  this.spaces = this._makeGrid(width, height);
  this.scented = {
    'N': [],
    'S': [],
    'E': [],
    'W': [],
  };
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

Grid.prototype.isInBound = function(x, y) {
  return x >= 0 && x <= (this.width) &&
    y >= 0 && y <= (this.height);
}

Grid.prototype._isCoordsMatch  = function (positions, coords) {
  return positions.some(function(position) {
    if (_.isEqual(position, coords)) {
      return true;
    }
  });
}

Grid.prototype.leaveScent = function(coords, orientation) {
  return this.scented[orientation].push(coords);
}

Grid.prototype.hasScent = function(coords, orientation) {
  var positions = this.scented[orientation] || [];

  if (positions.length == 0) { return false; };
  return this._isCoordsMatch(positions, coords);
}

module.exports = Grid;
