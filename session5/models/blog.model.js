const mongoose = require("mongoose");

// const blogSchema = new mongoose.Schema({
//   title: String, //Title is string
//   authors: [String], //Authors is an array of strings
//   content: String, //Content is string
//   publishedAt: Date, //publishedAt is Date
// });

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true }, //Title is string
  authors: { type: [String] }, //Authors is an array of strings
  content: { type: String, default: "" }, //Content is string
  publishedAt: { type: Date, default: null }, //publishedAt is Date
});

const blogModel = mongoose.model("Blog", blogSchema);

module.exports = blogModel;
