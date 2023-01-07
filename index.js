const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

require("dotenv").config();

const users = require("./routes/user");
const projects = require("./routes/projects");
const auth = require("./routes/auth");

const app = express();

app.use(cors());

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DB)
  .then(console.log("connected to blog db"))
  .catch((err) => console.error("could not connected to mangodb..", err));

app.use(express.json());

app.use("/api/users", users);
app.use("/api/projects", projects);
app.use("/api/auth", auth);

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

const port = 4000;

app.listen(port, () => console.log(`listening on port ${port} `));
