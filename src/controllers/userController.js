import fs from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "node:url";

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

export const login = async (req, res) => {
  const userPath = path.join(_dirname, "../../data/users.json");
  const inputPath = path.join(_dirname, "../../frontEnd/login.js");
  const { email, password } = req.body;
  const userRawData = await fs.readFile(userPath, "utf-8");

  const userData = JSON.parse(userRawData);

  res.cookie("user", userData, {
    httpOnly: true,
    secure: false,
  });
  res.json({
    // user: ["qwe@gmail.com"],
  });
};

export const logout = (req, res) => {
  res.clearCookie("user");

  res.send("Success!");
};
