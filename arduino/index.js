var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var rgb = new five.Led.RGB([9, 10, 11]);
  var index = 0;
  var rainbow = ["FF0000", "FF7F00", "FFFF00", "00FF00", "0000FF", "4B0082", "8F00FF"];

  this.loop(1000, function() {
    if (index + 1 === rainbow.length) {
      index = 0;
    }
    rgb.color(rainbow[index++]);
  });
});
