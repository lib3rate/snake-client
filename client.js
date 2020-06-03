const net = require('net');
const { IP, PORT, hotkeys } = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding('utf8');
  conn.on("data", data => {
    console.log(data)
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server")
    conn.write("Name: DPE");
    // conn._writableState.length = 50;
    // conn._writableState.ending = true;
    // conn._writableState.ended = true;
    // conn._writableState.writelen = 50;
    // conn._writableState.finalCalled = true;
    // conn._events.end;
    // conn._readableState.length = 50;
    // console.log(conn._writableState.length);
    // conn.write("Move: up");
    // setInterval(() => conn.write("Move: up"), 3000)
  });
  // console.log(conn);
  return conn;
}

module.exports = { connect };