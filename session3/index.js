const express = require("express");
require("dotenv").config();
const currencyRouter = require("./routes/currencies.routes");
const userRouter = require("./routes/users.routes");

const server = express();
const PORT = 8082;

server.get("/", (req, res) => {
  res.send("<h1>Currency Database</h1>");
});

server.use("/currencies", currencyRouter);

server.use("/users", userRouter);

// server.get("/users/:userId/posts/:postId", (req, res) => {
//   console.log(req.params);
// });

server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
