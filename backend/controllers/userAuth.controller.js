import catchAsync from "../utils/catchAsync.js";
import User from "../models/user.model.js";

export const getUsers = catchAsync(async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    status: "success",
    message: "Get all users",
    users,
  });
});
