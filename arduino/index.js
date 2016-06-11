var five = require("johnny-five");
var board = new five.Board();
var firebase = require("firebase");
var firebaseDB;
var myFirebaseRef;
var colors = {
	'red': 'FF0000',
	'orange': 'FF7F00',
	'yellow': 'FFFF00',
	'green': '00FF00',
	'blue': '0000FF',
	'indigo': '4B0082',
	'violet': '8B00FF'
};

board.on("ready", function() {
  var rgb = new five.Led.RGB([9, 10, 11]);

  firebase.initializeApp({
	databaseURL: "https://iot-project-2d8c5.firebaseio.com",
	serviceAccount: "IoT Project-5de2f8ef7beb.json"
  });

  firebaseDB = firebase.database();
  myFirebaseRef = firebaseDB.ref("color");

  myFirebaseRef.on("value", function(snapshot) {
	var color = snapshot.val();
	console.log(color);

	if (colors[color]) {
	  rgb.color(colors[color]);
	}
  });
});
