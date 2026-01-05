import type { Request, Response } from "express";
import { Movies } from "./models.ts";
import mongoose from "mongoose";

const MovieAddController = async (req: Request, res: Response) => {
  const movieadd = await Movies.insertMany({
    title: "Galaxy Quest",
    year: 2023,
    genre: "Sci-Fi and Comedy",
    directors: "Jane Smith",
    cast: "Actor X and Actor Y",
    Imdb: 7.8,
  });
};
