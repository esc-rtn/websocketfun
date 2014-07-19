 //var redis = require('redis');
 var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({port: 8080});
  console.log("Socket server started...");

  //var rc = redis.createClient(6379, 'localhost');
  wss.on('connection', function(ws) {

       ws.on('message', function(message) {
        console.log('Client Ping: %s', message);
       });
  });
