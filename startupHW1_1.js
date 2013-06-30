#!/usr/bin/env node
var fs = require('fs');

var outfile = "Homework1_1.txt"
var outputString = "A startup is a business built to grow rapidly.\n";

fs.writeFileSync(outfile, outputString);
console.log("You Ran the Following Script: " + __filename + "\nWith the Following String: " + outputString + "\nTo the File: "+ outfile);
