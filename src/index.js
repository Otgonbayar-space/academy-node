import express from "express";
import cookieParser from "cookie-parser";
import { userRouters } from "./routers/userRoutes.js";
// import { bankRouters } from "./routers/bankRoutes.js";



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

  next();
});



app.use(express.static("frontEnd"));

const auth = (req, res, next)=>{
  const userId = req.cookies.user;


  if(!userId){
    return res.status(401).json({msg:"hereglegch oldsongui"})
  }

  req.userId= userId;
  next()
}



app.use("/user", userRouters);
// app.use("/bank", bankRouters);

app.listen(port, () => {
  console.log(`express app running at ${port} `);
});
