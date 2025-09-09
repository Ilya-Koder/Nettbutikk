import express from "express";
import { login } from "../controllers/login.js";

let router = express.Router();

// Login
// router.post("/register", createLogin);
router.post("/login", login);

export default router;
