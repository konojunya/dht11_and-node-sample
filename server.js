var express = require("express");
var app = express();
var sensorLib = require('node-dht-sensor');

var sensor = {
  initialize: function() {
    // DHT11なので11で、14番のpinを監視する
    return sensorLib.initialize(11, 14);
  },
  read: function() {
    var readout = sensorLib.read();
    return readout;
  }
};

if (sensor.initialize()) {
  const readout = sensor.read();
} else {
  console.warn('Failed to initialize sensor');
}

app.get("/", function(req, res) {
  res.sendfile("index.html");
})

app.get("/sensor", function(req, res) {
  // if (sensor.initialize()) {
  //   const readout = sensor.read();
  //   res.json(readout);
  // } else {
  //   res.status(500);
  //   res.send("Failed to initialize sensor")
  // }
  res.json({
    hello: new Date().toISOString()
  })
})

app.listen(3000);