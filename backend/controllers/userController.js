import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

// @desc  Auth user and token
// @route GET /api/users/login
const authUser = asyncHandler(async (req, res) => {
  res.send("Auth user");
});

// @desc  Register User
// @route POST /api/users
const registerUser = asyncHandler(async (req, res) => {
  res.send("Register user");
});

// @desc  Logout user and clear cookie
// @route POST /api/users/logout
const logoutUser = asyncHandler(async (req, res) => {
  res.send("Logout user");
});

// @desc  Get user profile
// @route GET /api/users/login
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("Get User Profile");
});

// @desc  Update user Profile
// @route PUT /api/users/profile
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user profile");
});

// @desc  get Users
// @route GET /api/users
const getUsers = asyncHandler(async (req, res) => {
  res.send("get users");
});

// @desc  get User by Id
// @route GET /api/users/:id
const getUserById = asyncHandler(async (req, res) => {
  res.send("get user by id");
});

// @desc  delete users
// @route DELETE /api/users/:id
const deleteUsers = asyncHandler(async (req, res) => {
  res.send("delete users");
});

// @desc  Update Users
// @route PUT /api/users/:id
const updateUser = asyncHandler(async (req, res) => {
  res.send("update users");
});

export {
  authUser,
  logoutUser,
  getUsers,
  getUserProfile,
  getUserById,
  updateUser,
  updateUserProfile,
  registerUser,
  deleteUsers,
};
