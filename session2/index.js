const express = require("express");
const { data } = require("./currencies.json");
const server = express();
const PORT = 8082;

server.get("/", (req, res) => {
  res.send("<h1>Currency Database</h1>");
});

server.get("/currencies", (req, res) => {
  res.send(data);
});

server.get("/currencies/:symbol", (req, res) => {
  const { symbol } = req.params;
  const reqCurrency = data.find((curr) => curr.id === symbol.toUpperCase());
  if (!reqCurrency)
    return res.status(404).send({
      message: `Currency with symbol: '${symbol}' could not be found.`,
    });
  res.send(reqCurrency);
});

// server.get("/users/:userId/posts/:postId", (req, res) => {
//   console.log(req.params);
// });

server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
