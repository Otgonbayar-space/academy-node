import type { Request, Response } from "express";
import { Router } from "express";
import { Movies } from "./models.ts";

export const movieRouter = Router();

movieRouter.get("/movies", async (req: Request, res: Response) => {
  console.log("sasadas");
  const { genre } = req.query;

  const query = {} as any;

  if (genre) {
    query.genres = genre;
  }

  const movies = await Movies.find(query).limit(100);

  res.json(movies);
});
