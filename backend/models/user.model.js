import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: [3, "Username must be atleast 3 characters long"],
      maxlength: [20, "Username must be atmost 20 characters long"],
      validate: [
        validator.isAlphanumeric,
        "Username must contain only letters and numbers",
      ],
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validator.isEmail, "Please provide a valid email"],
      trim: true,
    },
    profilePic: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    password: {
      type: String,
      required: true,
      minlength: [8, "Password must be atleast 8 characters long"],
    },
    confirmPassword: {
      type: String,
      required: true,
      validate: {
        validator: function (val) {
          return val === this.password;
        },
        message: "Please enter the same password as above",
      },
    },
  },
  {
    timestamps: true, // this will give us createdAt and updatedAt timestamps
  }
);

//  hashing the password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

//instance method to check password for login
userSchema.methods.checkPassword = async function (password, hashedPass) {
  return await bcrypt.compare(password, hashedPass);
};

const User = mongoose.model("User", userSchema, "users");

export default User;
