const http = require("node:http");
const currenciesJson = require("./currencies.json");
const PORT = 8082;

const server = http.createServer((req, res) => {
  //   console.log("request received");
  //   res.write("hello");
  //   res.write("\nfrom");
  //   res.end("\nserver");
  //   res.end("hello from server");

  //   if (req.url === "/") {
  //     res.writeHead(200, {
  //       "content-type": "text/html",
  //     });
  //     res.end("<h1>Hello</h1>");
  //   } else if (req.url === "/info") {
  //     const serverInfo = {
  //       name: "crio-server",
  //       description: "Nice server for session 1",
  //     };
  //     res.writeHead(200, {
  //       "content-type": "application/json",
  //     });
  //     res.end(JSON.stringify(serverInfo));
  //   } else {
  //     res.writeHead(404, {
  //       "content-type": "application/json",
  //     });
  //     res.end({ message: "Resource doesn't exist" });
  //   }

  //   switch (req.url) {
  //     case "/":
  //       res.writeHead(200, {
  //         "content-type": "text/html",
  //       });
  //       res.end("<h1>Hello</h1>");
  //       break;
  //     case "/info":
  //       const serverInfo = {
  //         name: "crio-server",
  //         description: "Nice server for session 1",
  //       };
  //       res.writeHead(200, {
  //         "content-type": "application/json",
  //       });
  //       res.end(JSON.stringify(serverInfo));
  //       break;
  //     default:
  //       res.writeHead(404, {
  //         "content-type": "application/json",
  //       });
  //       res.end({ message: "Resource doesn't exist" });
  //   }

  switch (req.url) {
    case "/":
      res.writeHead(200, {
        "content-type": "text/html",
      });
      res.end("<h1>Currency Database</h1>");
      break;
    case "/currencies":
      res.writeHead(200, {
        "content-type": "application/json",
      });
      res.end(JSON.stringify(currenciesJson));
      break;
    default:
      res.writeHead(404, {
        "content-type": "application/json",
      });
      res.end(JSON.stringify({ message: "Resource doesn't exist" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
