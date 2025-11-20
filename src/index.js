import express from "express";
import userRoutes from "./routes/userRoutes.js";
import bankRoutes from "./routes/bankRoutes.js";

const app = express();
const port = 8080;

app.use(express.json());

app.use("/users", userRoutes);
app.use("/bank", bankRoutes);

app.listen(port, ()=>{
  console.log(`Server in the ${port}`)
})


const apiURL = "http://localhost:8080";

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorBox = document.getElementById("errorMsg");

  try {
    const res = await fetch(`${apiURL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      errorBox.innerText = data.message;
      return;
    }

  
    sessionStorage.setItem("username", username);

    
    window.location.href = "dashboard.html";

  } catch (error) {
    errorBox.innerText = "Server is not responding...";
  }
});
