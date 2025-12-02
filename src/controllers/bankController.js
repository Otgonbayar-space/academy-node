import fs from "fs/promises";

const users = r;
const readUsers = () => {
  if (!fs.existsSync()) return [];
  return JSON.parse(fs.readFile());
};
