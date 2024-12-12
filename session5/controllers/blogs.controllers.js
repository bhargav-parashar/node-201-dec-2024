const Blog = require("../models/blog.model");

const createBlog = async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    res.status(201).send(newBlog);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong!", error });
  }
};

module.exports = { createBlog };
