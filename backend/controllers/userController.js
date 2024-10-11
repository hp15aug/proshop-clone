import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

import jwt from "jsonwebtoken";

// @desc  Auth user and token
// @route GET /api/users/login
const authUser = asyncHandler(async (req, res) => {
  const {password, email} = req.body;
  
  const user=await User.findOne({email});
  if(user && (await user.matchPassword(password))) {

    const token =jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '30d'});

    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: '30 * 24 * 60 * 60 * 1000'
    })

    res.json({
      _id: user._id,
      name:user.name,
      email:user.email,
      isAdmin:user.isAdmin,
    })}
    else{
      res.status(401);
      throw new Error('Invalid Email or Password');
    }
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
