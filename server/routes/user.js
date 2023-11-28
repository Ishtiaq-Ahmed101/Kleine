const express = require("express");
const {
    getUsers,
    getUser,
    createUser,
    removeUser,
    updateUser,
    logIn
} = require("../controllers/user");
const router = express.Router();

router.route("/").get(getUsers).post(createUser);
router.route("/login").post(logIn);
router.route("/:id").get(getUser).post(createUser).delete(removeUser).put(updateUser)

module.exports = router;