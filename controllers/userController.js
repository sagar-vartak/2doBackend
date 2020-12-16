const User = require("../models/userSchema");

const getAllUsers = async (req, res) => {
  let users = await User.find().select("email");
  console.log(users);
  res.send("users fetched", users);
};
const deleteUser = async (req, res) => {
  let users = await User.deleteOne().select("email");
  console.log(users);
  res.send("deleted the user", users);
};

module.exports.getAllUsers = getAllUsers;
module.exports.deleteUser = deleteUser;
