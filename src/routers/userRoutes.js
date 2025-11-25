import { Router } from "express";
import { register, login } from "../controllers/userController.js";

const userRouter = new Router();

router.post("/register", register);
router.post("/login", login);

export default userRouter;
