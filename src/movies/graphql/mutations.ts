import { Movies, Users } from "../db/models.ts";
import { type IMovie } from "../types/movie.ts";
import { type IUser } from "../types/users.ts";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { IContext } from "../../index.ts";
dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET;

export const movieMutations = {
  addMovie: async (
    _root: any,
    { input }: { input: IMovie },
    { user }: IContext
  ) => {
    const movie = await Movies.insertOne(input, userId:user.id);

    return "Success";
  },
};

export const userMutations = {
  loginUser: async (_root: any, { input }: { input: IUser }) => {
    let { email, password } = input;
    const data = await Users.findOne({
      email,
    });
    if (!data) {
      return "user bhgubn";
    }
    const pass = await bcrypt.compare(password, data.password);
    if (!pass) {
      return "email or pass";
    }

    const token = jwt.sign(
      {
        name: data.name,
        email: data.email,
      },
      SECRET_KEY!,
      { expiresIn: "1h" }
    );

    console.log(token);
    return {
      message: "Login successful",
      token,
    };
  },

  signupUser: async (_root: any, { input }: { input: IUser }) => {
    let { email, password, name } = input;
    console.log(input);
    const hashedPassword = await bcrypt.hash(password, 10);

    const check = await Users.find({
      email: email,
    });

    if (!check) {
      return " bvrtgeltei bn";
    }
    const user = await Users.insertOne({
      name,
      email,
      password: hashedPassword,
    });

    return user.name;
  },
};
