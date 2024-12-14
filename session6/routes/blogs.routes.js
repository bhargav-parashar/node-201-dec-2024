const router = require("express").Router();
const {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogById,
} = require("../controllers/blogs.controllers");
const { documentIdValidator } = require("../middlewares/validate");
const findBlogByIdAndAttach = require("../middlewares/findByIdAndAttach");

router.post("/new", createBlog);
router.get("/", getAllBlogs);

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
