import express from "express";
import cookieParser from "cookie-parser";
import { userRouters } from "./routers/userRoutes.js";
import { bankRouters } from "./routers/bankRoutes.js";

// import { email } from "../frontEnd/login.js";
// import { password } from "../frontEnd/login.js";

const app = express();

const port = 8080;

app.use(express.json());
app.use(cookieParser());

app.use("/", async (req, res, next) => {
  const userId = req.cookies.user;
  console.log(userId);

  if (userId && req.path === "/login.html") {
    return res.redirect("/bank.html");
  }

  if (!userId && req.path === "/bank.html") {
    return res.redirect("/login.html");
  }

  if (userId) {
    const user = {
      emai: "admin@gmail.com",
      firstName: "1321",
    };

    req.user = user;
  }

  next();
});

app.use(express.static("frontEnd"));

app.use("/user", userRouters);
app.use("/bank", bankRouters);

app.listen(port, () => {
  console.log(`express app running at ${port} `);
});
