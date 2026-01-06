import { Document } from "mongoose";
import { Hash } from "crypto";

export interface IUsers {
  email: string;
  password: string;
  username: string;
}
export interface IUserDocument extends IUsers, Document {}
