import { Router } from "express";
import { registerUser } from "../controllers/authController.js";

export const router = Router();
router.route("/register").post(registerUser);
