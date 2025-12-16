import {
  createUserService,
  updateUserService,
  getUsersService,
  getUserByIdService,
  deleteUserService,
  getUserAccountsService,
  getUserTransactionsService,
} from "../services/userService.js";
import type { Request, Response } from "express";

export const createUser = async (req:Request, res:Response):Promise<void> => {
  const { username, email, password } = req.body as {username:string, email:string, password:string};

  const user = await createUserService(username, email, password);

  res.json(user);
};

export const updateUser = async (req:Request, res:Response):Promise<void> => {
  const { id, username, email, password, firstname, lastname } = req.body as {username:string, email:string, password:string, firstname:string, lastname:string, id:number};

  const user = await updateUserService(
    id,
    username,
    email,
    password,
    firstname,
    lastname
  );

  res.json(user);
};

export const getUsers = async (req:Request, res:Response):Promise<void> => {
  const users = await getUsersService();
  res.json(users);
};

export const getUserById = async (req:Request, res:Response):Promise<void> => {
  // interface getUserById {
  //   id:number
  // }
  const { id } = req.query ;
  const user = await getUserByIdService(Number(id));
  res.json(user);
};

export const deleteUser = async (req:Request, res:Response):Promise<void> => {
  const { id } = req.query ;
  const user = await deleteUserService(Number(id));
  res.json(user);
};

export const getUserAccounts = async (req:Request, res:Response):Promise<void> => {
  const { id } = req.query;
  const accounts = await getUserAccountsService(Number(id));
  res.json(accounts);
};
