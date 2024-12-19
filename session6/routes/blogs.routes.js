const router = require("express").Router();
const {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogById,
  searchBlogs,
} = require("../controllers/blogs.controllers");
const {
  queryValidator,
  documentIdValidator,
} = require("../middlewares/validate");
const findBlogByIdAndAttach = require("../middlewares/findByIdAndAttach");
const { blogSearchSchema } = require("../validations/blogs.validations");

router.post("/new", createBlog);
router.get("/", getAllBlogs);
router.get("/search", queryValidator(blogSearchSchema), searchBlogs);

router
  .route("/:id")
  .all(documentIdValidator)
  .all(findBlogByIdAndAttach)
  .get(getBlogById)
  .patch(updateBlogById)
  .delete(deleteBlogById);

// router.get("/:id", getBlogById);
// router.patch("/:id", updateBlogById);
// router.delete("/:id", deleteBlogById);

module.exports = router;
