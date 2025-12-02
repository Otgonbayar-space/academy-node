import express from "express";
import { userRouters } from "./routers/userRoutes.js";
import { bankRouters } from "./routers/bankRoutes.js";
import { connectDb } from "./db.js";

const app = express();

app.use(express.json());

app.use("/user", userRouters);
app.use("/bank", bankRouters);

await connectDb();

app.listen(3001, () => {
  console.log("express app running at 3001");
});
