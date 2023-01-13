const { User } = require("../models/user");
const { Project } = require("../models/projects");

const cloudinary = require("../middleware/cloudinary");

exports.me = async (req, res) => {
  const projects = await Project.find({ email: req.user.email });

  res.send(projects);
};

exports.getOne = async (req, res) => {
  const projects = await Project.findById(req.params.id);
  res.send(projects);
};

exports.projects = async (req, res) => {
  const project = await Project.find();
  res.send(project);
};
exports.create = async (req, res) => {
  const user = await User.find({ email: req.body.user });

  if (!user) return res.status(404).send("user is not found in the db");

  const image = req.file;

  if (!image) return res.status(400).send("add image");

  const post = new Project({
    title: req.body.title,
    description: req.body.description,
    user: user._id,
  });

  if (image) {
    const upload = await cloudinary.uploader.upload(req.file.path);
    post.image = {
      publicId: upload.public_id,
      url: upload.secure_url,
    };
  }

  const result = await post.save();

  res.send(result);
};

exports.update = async (req, res) => {
  const project = await Project.findByIdAndUpdate(
    { _id: req.params.id },
    {
      title: req.body.title,
      description: req.body.description,
    },
    { new: true }
  );

  if (!project) return res.status(404).send("project is not found in the db");

  res.send(project);
};

exports.remove = async (req, res) => {
  const project = await Project.findByIdAndRemove(req.params.id);
  if (!project) return res.status(404).send("user is not found in the db");

  res.send(project);
};
