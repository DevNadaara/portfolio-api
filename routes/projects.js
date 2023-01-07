const express = require("express");

const router = express.Router();

const {
  projects,
  create,
  remove,
  update,
  me,
  getOne,
} = require("../controllers/projectController");

router.get("/", projects);
router.get("/:id", getOne);
router.get("/me", me);

router.post("/", create);

router.put("/:id", update);

router.delete("/:id", remove);

module.exports = router;
