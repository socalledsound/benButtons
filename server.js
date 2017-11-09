const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const five = require('johnny-five');
const Raspi = require('raspi-io');


const publicPath = path.join(__dirname, '/public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var ioSocket = socketIO(server);

var firstButton, secondButton, thirdButton;


app.use(express.static(publicPath));
server.listen(port, () => {
    console.log(`Server is up on ${port}`);
  });

var board = new five.Board({
  io: new Raspi()
});

board.on("ready", function() {
  firstButton = new five.Button("GPIO4");
  secondButton = new five.Button("GPIO17");
  thirdButton = new five.Button("GPIO27");


  buttons = [firstButton, secondButton, thirdButton];

  board.repl.inject({
    buttons: buttons
  })

})



ioSocket.on('connection', (socket) => {
  console.log('New user connected');


  buttons[0].on("press", function() {
    console.log("first button on");
    socket.emit("firstButtonPress", {
      message: "first pressed"
    })
  });

  buttons[0].on("release", function() {
    console.log("first button off");
    socket.emit("firstButtonRelease", {
      message: "first release"
    })
  });




  buttons[1].on("press", function() {
     console.log("second button on");
     socket.emit("secondButtonPress", {
       message: "second pressed"
     })
   });
  
   buttons[1].on("release", function() {
     console.log("second button off");
     socket.emit("secondButtonRelease", {
       message: "second release"
     })
   });
  
  
   buttons[2].on("press", function() {
     console.log("third button on");
     socket.emit("thirdButtonPress", {
       message: "third pressed"
     })
   });
  
   buttons[2].on("release", function() {
     console.log("third button off");
     socket.emit("thirdButtonRelease", {
       message: "third pressed"
     })
   });


});
