const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      fs.readFile("./index.html", null, function (error, data) {
        if (error) {
          res.writeHead(404);
          res.write("File not found!");
        } else {
          res.write(data);
        }
        res.end();
      });
      break;
    case "/about":
      // Serve about.html, similar to above
      fs.readFile("./about.html", null, function (error, data) {
        if (error) {
          res.writeHead(404);
          res.write("File not found!");
        } else {
          res.write(data);
        }
        res.end();
      });
      break;
    // etc...
    default:
      res.writeHead(404);
      res.write("Route not found");
      res.end();
  }
});

const port = 3000;
server.listen(port, () => console.log(`Server listening on port ${port}`));
