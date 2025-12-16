import { Router } from "express";
import {
  createUser,
  updateUser,
  getUsers,
  deleteUser,
  getUserAccounts,
} from "../controllers/userController.js";

export const userRouters = Router();

//user tei holbootoi post route uud

userRouters.post("/create", createUser);
userRouters.post("/update", updateUser);
userRouters.post("/delete", deleteUser);

//user tei holbootoi get route uud

userRouters.get("/get-users", getUsers);
userRouters.get("/get-user-accounts", getUserAccounts);
