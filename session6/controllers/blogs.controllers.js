const BlogService = require("../services/blogs.service");
const BlogServiceInstance = new BlogService();

const createBlog = async (req, res) => {
  try {
    const newBlog = await BlogServiceInstance.create(req.body);
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
    res.send(await BlogServiceInstance.getAll());
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong!", error });
  }
};

const getBlogById = async (req, res) => req.blog;

const updateBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const modifiedBlog = await BlogServiceInstance.updateById(id, req.body);
    res.send(modifiedBlog);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong!", error });
  }
};

const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    await BlogServiceInstance.deleteById(id);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong!", error });
  }
};

const searchBlogs = async (req, res) => {
  const { title, author } = req.query;
  // res.send(await Blog.find({ title: new RegExp(title, "i") }));
  // res.send(
  //   await Blog.find({ title: { $regex: new RegExp(title), $options: "i" } })
  // );
  try {
    res.send(await BlogServiceInstance.search(title, author));
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
  searchBlogs,
};
