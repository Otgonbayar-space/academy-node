import { Router } from "express";
import { loginUser,logoutUser } from "../controllers/userController.js";

export const userRouters = new Router();

userRouters.post("/login", loginUser);
userRouters.post("/logout", logoutUser);
