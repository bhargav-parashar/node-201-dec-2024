const express = require("express");
require("dotenv").config();
const connectDB = require("./db/connect");

const currencyRouter = require("./routes/currencies.routes");
const userRouter = require("./routes/users.routes");
const blogRouter = require("./routes/blogs.routes");

const server = express();
const PORT = 8082;

connectDB();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("<h1>Currency Database</h1>");
});

server.use("/currencies", currencyRouter);

server.use("/users", userRouter);

server.use("/blogs", blogRouter);

server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
