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

movieRouter.get("/popular", async (req: Request, res: Response) => {
  try {
    const movies = await Movies.find({}).sort({ year: -1 }).limit(20);

    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch popular movies" });
  }
});

movieRouter.get("/top250", async (req: Request, res: Response) => {
  try {
    const movies = await Movies.find({}).sort({ "imdb.rating": -1 }).limit(20);

    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch top250 movies" });
  }
});
