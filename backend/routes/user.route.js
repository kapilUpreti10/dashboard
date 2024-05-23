import express from "express";
const router = express.Router();

import { getUsers, signup, login } from "../controllers/userAuth.controller.js";

router.route("/getUsers").get(getUsers);
router.route("/user/signup").post(signup);
router.route("/user/login").post(login);

export default router;
