const router = require("express").Router();
const {
  getUsers,
  getUsersById,
  searchUsers,
} = require("../controllers/users.controllers");
const authorize = require("../middlewares/authorize");
const { userSearchSchema } = require("../validations/users.validations");
const { queryValidator } = require("../middlewares/validate");

const userSearchMiddleware = queryValidator(userSearchSchema);

router.get("/", authorize, getUsers);

router.get("/search", authorize, userSearchMiddleware, searchUsers);

router.get("/:uuid", getUsersById);

module.exports = router;
