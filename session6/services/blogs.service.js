const Blog = require("../models/blog.model");

class BlogService {
  create = (payload) => Blog.create(payload);

  getAll = () => Blog.find({});

  getById = (id) => Blog.findById(id);

  updateById = (id, payload) =>
    Blog.findByIdAndUpdate(id, payload, { new: true });

  deleteById = (id) => Blog.findByIdAndDelete(id);

  search = (title, author) => {
    const titleQuery = { title: { $regex: new RegExp(title), $options: "i" } };
    const authorQuery = { authors: { $elemMatch: { email: author } } };
    if (title && author)
      return Blog.find({
        $and: [titleQuery, authorQuery],
      });
    if (title) return Blog.find(titleQuery);
    if (author) return Blog.find(authorQuery);
  };
}

module.exports = BlogService;
