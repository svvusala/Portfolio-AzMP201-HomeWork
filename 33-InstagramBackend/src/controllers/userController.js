const User = require("../models/user.Model");

const getAllUser = async (req, res) => {
  const users = await User.find();
  res.send(users);
};

const postUser = async (req, res) => {
  const obj = req.body;
  const newUser = new User(obj);
  newUser.save();
  res.status(200).send("success");
};

const getUserById = async (req, res) => {
  const getElem = await User.find({ id: req.params.id });
  res.status(200).send(getElem);
};

const deleteUserById = async (req, res) => {
  await User.findOneAndDelete({ id: req.params.id });
  res.status(200).send("deleted");
};

const patchUserById = async (req, res) => {
  const newUser = await User.findOneAndUpdate({ id: req.params.id }, req.body);
  res.status(200).send(newUser);
};

const putUserById = async (req, res) => {
  const newUser = await User.findOneAndReplace({ id: req.params.id }, req.body);
  res.status(200).send(newUser);
};

module.exports = {
  getAllUser,
  postUser,
  getUserById,
  deleteUserById,
  patchUserById,
  putUserById,
};
