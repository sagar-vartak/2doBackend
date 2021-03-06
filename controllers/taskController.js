const Task = require("../models/taskSchema");
const mongoose = require("mongoose");

const getAlltasks = async (req, res) => {
  let alltasks = await Task.find();
  console.log("alll tasks are:", alltasks);
  //res.render(users);
  res.send(alltasks);
};
const addTask = async (req, res) => {
  try {
    let adTask = await Task.insertMany({ taskName: "NEW TASK" });
    console.log(adTask);
    res.send(adTask);
  } catch (err) {
    console.log(err);
  }
};
const deleteTask = async (req, res) => {
  let delTask = await Task.deleteOne().select({ taskName: "Task name 1" });
  console.log(delTask);
  res.send(delTask);
};
const updateTask = async (req, res) => {
  let uptask = await Task.find({ taskName: "Task name 2" }).updateOne({
    status: "completed",
  });
  console.log(uptask);
  res.send(upTask);
};

module.exports.getAlltasks = getAlltasks;
module.exports.addTask = addTask;
module.exports.deleteTask = deleteTask;
module.exports.updateTask = updateTask;
