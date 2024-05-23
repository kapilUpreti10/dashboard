import mongoose from "mongoose";
import app from "./app.js";
import customErr from "./utils/customErr.js";

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;

(async (req, res, next) => {
  try {
    if (!DB_URL) {
      return next(customErr("DB_URL is not defined", 500));
    }
    await mongoose.connect(DB_URL);
    console.log("Database connected successfully");
  } catch (err) {
    console.log(err);
  }
})();

app.listen(PORT, (err) => {
  console.log(`Server is running on port ${PORT}`);
});
