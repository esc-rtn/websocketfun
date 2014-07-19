var WebSocket = require('ws');
//start with 1000 connections
for(var i=0;i<1000;i++)
{
var ws = new WebSocket('ws://localhost:8080');
  ws.on('open', function() {
      setInterval(function() {
          ws.send(i);
      }, 1000);
    });
    ws.on('message', function(data, flags) {
  });
}
