import express from "express";
import userRoutes from "../src/routers/userRoutes.js";
import bankRoutes from "../src/routers/bankRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const port = 8080;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/", (req, res, next) => {
  const userId = req.cookies.user;

  if (userId && req.path === "/index.html") {
    return res.redirect("/tablet.html");
  }

  if (!userId && req.path === "/tablet.html") {
    return res.redirect("/index.html");
  }

  if (userId) {
    const user = {
      email: "admin@gmail.com",
      firstname: "qwerty",
    };

    req.user = user;
  }

  next();
});

app.use(express.static("frontEnd"));

app.use("/users", userRoutes);
app.use("/bank", bankRoutes);

app.listen(port, () => {
  console.log(`Server in the ${port}`);
});

// const apiURL = "http://localhost:8080";

// document.getElementById("loginForm").addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const username = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   const errorBox = document.getElementById("errorMsg");

//   try {
//     const respone = await fetch(`${apiURL}/src/services`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ username, password }),
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       errorBox.innerText = data.message;
//       return;
//     }

//     sessionStorage.setItem("username", username);

//     window.location.href = "tablet.html";
//   } catch (error) {
//     errorBox.innerText = "Server is not responding...";
//   }
// });
