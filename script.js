const http = require("http");

const server = http.createServer(function (req, res) {
  res.end("Heelo World!");
});

server.listen(3000);
