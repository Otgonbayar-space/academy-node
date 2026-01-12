import { Document } from "mongoose";
import { Hash } from "node:crypto";

export interface IUser {
  email: string;
  name: string;
  password: string;
}

export interface IUserDocument extends IUser, Document {}
