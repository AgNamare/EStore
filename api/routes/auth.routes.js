import express from "express";
import { google, signIn, signup } from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/", signup);
router.post("/signin", signIn)
router.post("/google", google)

export default router;
