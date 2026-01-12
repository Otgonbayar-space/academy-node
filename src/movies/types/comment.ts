import { Document } from "mongoose";

export interface IComment {
  name: String;
  email: String;
  text: String;
  date: Date;
  userId: String;
  movie_id: String;
}

export interface ICommentDocument extends IComment, Document {}
