import express from "express";
const router = express.Router();

import { getUsers } from "../controllers/userAuth.controller.js";

router.route("/getUsers").get(getUsers);

export default router;
