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
    if (error.name === "ValidationError")
      return res.status(400).send({ message: error.message });
    console.log(error);
    res.status(500).send({ message: "Something went wrong!", error });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    res.send(await Blog.find({}));
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong!", error });
  }
};

const getBlogById = async (req, res) => req.blog;

const updateBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const modifiedBlog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
      // returnDocument: 'after'
    });
    res.send(modifiedBlog);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong!", error });
  }
};

const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong!", error });
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogById,
};
