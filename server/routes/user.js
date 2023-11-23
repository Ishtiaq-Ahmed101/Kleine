const express = require("express");
const {
    getUsers,
    getUser,
    createUser,
    removeUser,
    updateUser
} = require("../controllers/user");
const router = express.Router();

router.route("/").get(getUsers).post(createUser);
router.route("/:id").post(createUser).delete(removeUser).put(updateUser)

module.exports = router;