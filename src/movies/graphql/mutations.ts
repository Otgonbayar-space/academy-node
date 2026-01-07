import { Movies, Users } from "../db/models.ts";
import { type IMovie } from "../types/movie.ts";
import {type IUsers} from "../types/users.ts";

export const movieMutations = {
  addMovie: async (_root: any, { input }: { input: IMovie }) => {
    const movie = await Movies.insertOne(input);

    return "Success";
  },

  signupUser: async (_root: any, {input} : {input: IUsers})=>{
    let {email, password, name}=input;

    const user = await Users.insertOne({
      name,
      email,
      password
    });

    return user.name;
  }
};

export const loginMutations = {
  loginUser: async (_root: any, {input} : {input: IUsers})=>{
    let{email, password}=input;
    const data = await Users.find({
      email,
      password
    });
    return "login succesfull"
  }
}


