const router = require("express").Router();
const {
  getUsers,
  getUsersById,
  searchUsers,
} = require("../controllers/users.controllers");

router.get("/", getUsers);

router.get("/search", searchUsers);

router.get("/:uuid", getUsersById);

module.exports = router;
