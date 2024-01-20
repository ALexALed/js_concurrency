const http = require("http");
const process = require('process'); 

console.log(`PID ${process.pid}`)

http
  .createServer((req, res) => {
    res.end("Hello, World!\n");
  })
  .listen(3000);
