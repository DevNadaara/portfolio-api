const express = require("express");
const upload = require("../middleware/upload");

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

router.post("/", upload.single("image"), create);

router.put("/:id", update);

router.delete("/:id", remove);

module.exports = router;
