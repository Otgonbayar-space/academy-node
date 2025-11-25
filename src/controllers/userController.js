import fs from "fs";
import { BankService } from "../services/bankService";

const userFile = "./data/users.json";

function readUsers() {
  if (!fs.existsSync(userFile)) return [];
  return JSON.parse(fs.readFileSync(userFile, "utf-8"));
}

function writeUsers(data) {
  fs.writeFileSync(userFile, JSON.stringify(data, null, 2));
}

export const register = (req, res) => {
  const { username, password } = req.body;

  let users = readUsers();

  if (users.find((u) => u.username === username)) {
    return res.status(400).json({ message: "Бүртгэлтэй хэрэглэгч байна!" });
  }

  users.push({ username, password, balance: 0 });
  writeUsers(users);

  res.json({ message: "Амжилттай бүртгэгдлээ" });
};

res.cookie("user", found.email, {
  httpOnly: true,
  secure: false,
  sameSite: "None",
  maxAge: 24 * 60 * 60 * 1000,
});

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const users = await BankService.getUsers();
    console.log("users read from this shit:", users);
    const foundUser = users.find(
      (user) => user.firstName == username && user.password == password
    );

    if (foundUser) {
      res.json({ message: "amjilttai", userId: foundUser.id });
    } else {
      res.status(401).json({ error: "Username or password is wrong" });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
