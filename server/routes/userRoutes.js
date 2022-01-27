import express from "express";

import { signUpUser, logInUser } from "../controllers/user.js";

const router = express.Router();

router.post("/user/signup", signUpUser);
router.post("/user/login", logInUser);

export default router;
