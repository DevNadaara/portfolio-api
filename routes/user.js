const { create, update, remove, me } = require("../controllers/userController");

const express = require("express");
const router = express.Router();

router.get("/me", me);

router.post("/", create);

router.put("/:id", update);

router.delete("/:id", remove);

module.exports = router;
