import express from "express";
import { signIn, signup } from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/", signup);
router.post("/signin", signIn)

export default router;
