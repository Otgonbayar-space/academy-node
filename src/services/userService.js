async function readUsers() {
  if (!fs.existsSync("data/users.json")) return [];

  const data = fs.readFileSync("data/users.json", "utf-8");
  if (!data.trim()) return [];
  return data.split("\n").map((line) => {
    const [username, password, balance] = line.split(",");
    return {
      username: username.trim(),
      password: password.trim(),
      balance: parseInt(balance.trim()),
    };
  });
}
