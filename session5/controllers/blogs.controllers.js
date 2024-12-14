const Blog = require("../models/blog.model");

const createBlog = async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    // const newBlog = new Blog(req.body);
    // await newBlog.save();
    res.status(201).send(newBlog);
  } catch (error) {
    if (error.code === 11000)
      return res
        .status(409)
        .send({ message: "A blog with this title already exists!" });
    console.log(error);
    res.status(500).send({ message: "Something went wrong!", error });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    return res.send(await Blog.find({}));
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong!", error });
  }
};

module.exports = { createBlog, getAllBlogs };
