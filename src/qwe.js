import express from "express";
import fs from "fs";

const app = express();
app.use(express.json());

// ---------- FILE HELPERS ----------
function readUsers() {
  if (!fs.existsSync("users.json")) return [];
  return JSON.parse(fs.readFileSync("users.json", "utf-8") || "[]");
}

function writeUsers(users) {
  fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
}

function logHistory(data) {
  let history = [];
  if (fs.existsSync("history.json")) {
    history = JSON.parse(fs.readFileSync("history.json", "utf-8") || "[]");
  }
  history.push({ date: new Date().toLocaleString(), ...data });
  fs.writeFileSync("history.json", JSON.stringify(history, null, 2));
}

// ---------- API ENDPOINTS ----------

// Register
app.post("/register", (req, res) => {
  const { username, pin, balance } = req.body;
  const users = readUsers();

  if (users.find((u) => u.username === username)) {
    return res.status(400).json({ message: "Username already exists" });
  }

  users.push({ username, pin, balance: Number(balance) });
  writeUsers(users);
  res.json({ message: "Registered successfully" });
});

// Login
app.post("/login", (req, res) => {
  const { username, pin } = req.body;
  const users = readUsers();

  const user = users.find(
    (u) => u.username === username && u.pin === pin
  );

  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  res.json({ message: "Login success", user });
});

// Check Balance
app.get("/balance/:username", (req, res) => {
  const users = readUsers();
  const user = users.find((u) => u.username === req.params.username);
  if (!user) return res.status(404).json({ message: "User not found" });

  res.json({ balance: user.balance });
});

// Deposit
app.post("/deposit", (req, res) => {
  const { username, amount } = req.body;
  const users = readUsers();
  const user = users.find((u) => u.username === username);

  user.balance += Number(amount);
  writeUsers(users);

  logHistory({ username, type: "deposit", amount });
  res.json({ message: "Deposit success", balance: user.balance });
});

// Withdraw
app.post("/withdraw", (req, res) => {
  const { username, amount } = req.body;
  const users = readUsers();
  const user = users.find((u) => u.username === username);

  if (Number(amount) > user.balance) {
    return res.status(400).json({ message: "Insufficient balance" });
  }

  user.balance -= Number(amount);
  writeUsers(users);

  logHistory({ username, type: "withdraw", amount });
  res.json({ message: "Withdraw success", balance: user.balance });
});

// Transfer
app.post("/transfer", (req, res) => {
  const { from, to, amount } = req.body;
  const users = readUsers();

  const sender = users.find((u) => u.username === from);
  const receiver = users.find((u) => u.username === to);

  if (!receiver) return res.status(404).json({ message: "Receiver not found" });
  if (sender.balance < Number(amount))
    return res.status(400).json({ message: "Not enough balance" });

  sender.balance -= Number(amount);
  receiver.balance += Number(amount);

  writeUsers(users);

  logHistory({ username: from, type: "transfer", amount, targetUser: to });

  res.json({ message: "Transfer success" });
});

// Start server
app.listen(3001, () => console.log("ATM API running on port 3001"));
