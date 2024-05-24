import jwt from "jsonwebtoken";

import catchAsync from "../utils/catchAsync.js";
import User from "../models/user.model.js";

// creating a token
const createToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// sending the token to cookie
const cookieOptions = {
  httpOnly: true,
};

const sendToken = (user, statusCode, res) => {
  const token = createToken(user.email);
  const { password, ...data } = user._doc;
  res.status(statusCode).cookie("jwt", token, cookieOptions).json({
    status: "success",
    message: "User logged in successfully",
    token,
    data,
  });
};

export const getUsers = catchAsync(async (req, res) => {
  // print all the users
  const users = await User.find();
  res.status(200).json({
    status: "success",
    message: "Get all users",
    users,
  });
});

// signup the users

export const signup = catchAsync(async (req, res) => {
  console.log(req.body);
  const { username, email, password, confirmPassword } = req.body;
  if (!username || !email || !password || !confirmPassword) {
    return res.status(400).json({
      status: "fail",
      message: "Please provide all the required fields",
    });
  }
  const user = await User.create(req.body);
  res.status(201).json({
    status: "success",
    message: "User created successfully",
    user,
  });
});

// login the user

export const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      status: "fail",
      message: "Please provide email and password",
    });
  }
  const user = await User.findOne({ email });
  if (!user || !(await user.checkPassword(password, user.password))) {
    return res.status(401).json({
      status: "fail",
      message: "Incorrect email or password",
    });
  }
  sendToken(user, 200, res);
});
