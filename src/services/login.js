import cors from "cors";
app.use(cors());

document.getElementById("SubmitBtn").addEventListener("click", async () => {
  const userUsername = document.getElementById("email");
  const userPassword = document.getElementById("password");
});

const response = await fetch("http://localhost:8080/user/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ username, pass }),
});
