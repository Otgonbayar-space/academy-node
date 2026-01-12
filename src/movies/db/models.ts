import { Schema, model } from "mongoose";
import {
  type ITomatoesDocument,
  type IMoviesDocument,
} from "../types/movie.ts";
import { type IUserDocument } from "../types/user.ts";
import { type ICommentDocument } from "../types/comment.ts";

const TomatoesSchema: Schema<ITomatoesDocument> = new Schema(
  {
    viewer: {
      rating: { type: Number },
      numReviews: { type: Number },
      meter: { type: Number },
    },
    critic: {
      rating: { type: Number },
      numReviews: { type: Number },
      meter: { type: Number },
    },
    rotten: Number,
    lastUpdated: Date,
  },
  { _id: false }
);

const MovieSchema: Schema<IMoviesDocument> = new Schema({
  userId: { type: String, required: false },
  plot: { type: String, required: false },
  genre: { type: [String], required: false },
  title: { type: String, required: true },
  year: { type: Number, required: false },
  runtime: { type: Number, required: false },
  cast: { type: [String], required: false },
  poster: { type: String, required: false },
  fullpolt: { type: String, required: false },
  relased: { type: Date, required: false, default: new Date() },
  languages: { type: [String], required: false },
  directors: { type: [String], required: false },
  awards: [
    {
      wins: { type: Number },
      nominations: { type: Number },
      text: { type: String },
    },
  ],
  tomatoes: TomatoesSchema,
});

const CommentSchema: Schema<ICommentDocument> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: Date },
  movie_id: { type: String, required: false },
  userId: { type: String, required: false },
});

const UserSchema: Schema<IUserDocument> = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
});

export const Movies = model<IMoviesDocument>("movies", MovieSchema);

export const Users = model<IUserDocument>("user", UserSchema);

export const Comments = model<ICommentDocument>("comment", CommentSchema);
