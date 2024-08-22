//express server
const express = require("express");
const expressWs = require("express-ws");

const app = express();
//decorating app instance with express-ws to implement web sockets
expressWs(app);
//new set to hold each client socket connection
const connections = new Set();
//to add new conn and broadcast msgs and close conn
//ws.on(event,callback);
const wsHandler = (ws) => {
  connections.add(ws);
  ws.on("message", (message) => {
    connections.forEach((cxn) => cxn.send(message));
  });
  ws.on("close", () => {
    connections.delete(ws);
  });
};
//add wsHandler at /chat route
app.ws("/chat", wsHandler);
app.get("/", (req, res) => {
  res.send("Everything is up and working");
});
app.listen(8080,()=>{
  console.log("server is listening...")
});
