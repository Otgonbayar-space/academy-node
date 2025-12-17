import { Router } from "express";

import { login } from "../controllers/authController.js";

export const authRouters = Router();

authRouters.post("/login", login);
