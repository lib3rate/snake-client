const { IP, PORT, hotkeys } = require('./constants');

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
}

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === hotkeys.moveUp) {
    connection.write("Move: up");
  }
  if (key === hotkeys.moveLeft) {
    connection.write("Move: left");
  }
  if (key === hotkeys.moveDown) {
    connection.write("Move: down");
  }
  if (key === hotkeys.moveRight) {
    connection.write("Move: right");
  }
  if (key === hotkeys.chat1) {
    connection.write("Say: OMG HAAAAI");
  }
  if (key === hotkeys.chat2) {
    connection.write("Say: END IS COMING");
  }
}

let connection;

module.exports = { setupInput }