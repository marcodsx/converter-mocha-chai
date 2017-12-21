var converter = require("./app/converter.js");

var redHex   = converter.rgbToHex(255, 0, 0);
var greenHex = converter.rgbToHex(0, 255, 0);
var blueHex  = converter.rgbToHex(0, 0, 255);

console.log("red on Hex is " + redHex);
console.log("green on Hex is " + greenHex);
console.log("blue on Hex is " + blueHex);