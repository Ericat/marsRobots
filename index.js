'use strict';

var fs = require('fs');
var Command = require('./command');
var input = fs.readFileSync('/Users/ericat/marsRobots/test/sampleInput.txt').toString();

var command = new Command();
command.parse(input);
var results = command.execute();
console.log(results);
