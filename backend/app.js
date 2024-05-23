import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import globalErrorHandler from "./utils/globalErrHandler.js";
import customErr from "./utils/customErr.js";
import userRouter from "./routes/user.route.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));

app.use((req, res, next) => {
  console.log("Middleware is running");
  next();
});

app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
  next(customErr(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(globalErrorHandler);

export default app;
