import { Document } from "mongoose";
import { Hash } from "crypto";

export interface IUsers {
  email: string;
  password: string;
  name: string;
}
export interface IUsersDocument extends IUsers, Document {
  name: string;
}
