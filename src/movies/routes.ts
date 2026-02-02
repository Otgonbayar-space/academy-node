import type { Request, Response } from "express";
import { Router } from "express";
import { Movies } from "./models.ts";

export const movieRouter = Router();

movieRouter.get("/movies", async (req: Request, res: Response) => {
  console.log("movies");
  const movies = await Movies.find({}).limit(100);

  console.log(movies);

  res.json(movies);
});
