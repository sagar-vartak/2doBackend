const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Task = require("./models/taskSchema");
const User = require("./models/userSchema");
dotenv.config({ path: "./config.env" });
var express = require("express");
const { getAllUsers, deleteUser } = require("./controllers/userController");
const {
  getAlltasks,
  deleteTask,
  updateTask,
  addTask,
} = require("./controllers/taskController");

const app = express();

app.use("/users", getAllUsers);
app.use("/delete", deleteUser);
app.use("/gettask", getAlltasks);
app.use("/updatetask", updateTask);
app.use("/deletetasks", deleteTask);
app.use("/addtask", addTask);

mongoose.connect(
  process.env.DATABASE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, connection) => {
    if (err) {
      return console.log("error in connecting");
    }

    let newUser = new User({ email: "user@gmail.com", password: " 1234" });
    newUser
      .save()
      .then((user) => {
        console.log("users", user);
      })
      .catch((err) => {
        console.log(err);
      });
  }
);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(4000, () => {
  console.log(`Listeninig on Port 4000`);
});
