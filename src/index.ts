import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { movieRouter } from "./movies/router.ts";

// Express app
const app = express();
app.use(bodyParser.json());

app.use("/movie", movieRouter);

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://kaobuuu30_db_user:figEDNEj8W$tbgy@cluster0.celbvau.mongodb.net/sample_mflix?appName=Cluster0"
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err: Error) => {
    console.error("MongoDB connection error:", err);
  });

app.listen(3000, () => console.log("Server running on port 3000"));
