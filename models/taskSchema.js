const uniqid = require("uniqid");
const mongoose = require("mongoose");
const taskSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.ObjectId,
    },
    taskId: {
      type: String,
    },
    taskName: {
      type: String,
      required: [true, "Please Enter the task"],
      /* validate: {
        validator: function () {
          var chk = /^[a-zA-Z0-9.-]+$/;
          return chk.test(this.taskName);
        },
        message: "Invalid Task",
      }, */
    },
    status: {
      type: String,
      default: "Not Started",
      enum: ["Not Started", "in progress", "completed"],
    },
  },
  {
    timestamps: true,
  }
);

/* 
taskSchema.virtual('').get(function(){
  this.timeTaken = this.completedAt-this.startedAt;
}) */

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
