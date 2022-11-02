import express from "express";
import { signup, signin, googleAuth } from "../controllers/auth.js";

const router = express.Router();

// CREATE A USER
router.post("/signup", signup)

// SIGN IN
router.post("/signin", signin)

// GOOGLE AUTH
router.post("/google", googleAuth)

export default router;