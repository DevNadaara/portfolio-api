const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  image: {
    publicId: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const Project = mongoose.model("Project", projectSchema);

module.exports.Project = Project;
