import { Router, type Request, type Response } from "express";

export const movieRouter = Router();

movieRouter.get("/movies", (req: Request, res: Response) => {
  res.send("test");
});
