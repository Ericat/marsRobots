'use strict';

var fs = require('fs');
var Command = require('./command');
var input = fs.readFileSync('/Users/ericat/marsRobots/test/sampleInput.txt').toString();
var command = new Command();
var results;

command.parse(input);
results = command.execute();
console.log(results);
