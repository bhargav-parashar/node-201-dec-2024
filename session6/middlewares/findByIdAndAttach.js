const BlogService = require("../services/blogs.service");
const BlogServiceInstance = new BlogService();

const findBlogByIdAndAttach = async (req, res, next) => {
  const { id } = req.params;
  const reqBlog = await BlogServiceInstance.getById(id);
  if (!reqBlog)
    return res
      .status(404)
      .send({ message: `Blog with this id: ${id} could not be found.` });
  req.blog = reqBlog;
  next();
};

module.exports = findBlogByIdAndAttach;
