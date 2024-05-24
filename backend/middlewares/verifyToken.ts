// middleware/verifyToken.js
import catchAsync from "../utils/catchAsync";
import customErr from "../utils/customErr";
import jwt from "jsonwebtoken";
import User from "../models/user.model";

const verifyToken = catchAsync(async (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    return next(
      customErr(404, "You are not logged in. Please login to update.")
    );
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decodedToken) => {
    if (err) {
      return next(customErr(401, "Unauthorized user."));
    }

    try {
      // Fetch user from database excluding the password field
      const user = await User.findOne({ email: decodedToken.email }).select(
        "-password"
      );
      console.log(user);
      if (!user) {
        return next(customErr(404, "User not found."));
      }

      req.verifiedUser = user;
      next();
    } catch (error) {
      return next(customErr(500, "Internal Server Error."));
    }
  });
});

export default verifyToken;
