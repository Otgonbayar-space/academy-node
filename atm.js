import fs from "node:fs/promises";
import inquirer from "inquirer";
import { readFile, writeFile } from "node:fs";
import { log } from "node:console";
import { type } from "node:os";

// --- Туслах функцууд ---
async function readJSON() {
  if (!fs.existsSync("users.json")) return [];

  const data = fs.readFileSync("users.json", "utf8");
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

async function writeJSON(users) {
  try {
    const jsonString = JSON.stringify(users);
    await fs.writeFile("users.json", jsonString);
  } catch (error) {
    console.error("error writing file", error);
  }
}

async function logTransaction(username) {}
async function display() {
  while (true) {
    const { choice } = await inquirer.prompt([
      {
        type: "list",
        name: "choice",
        message: "Songoltoo hiine uu",
        choices: ["1.Нэвтрэх", "2.Бүртгүүлэх"],
      },
    ]);
    if (choice.startsWith("1")) {
      login();
    } else if (choice.startsWith("2")) {
      register();
    }
  }
}
display();
async function login(user) {
  const users = readJSON();
  const { username, password } = await inquirer.prompt([
    { type: "input", name: "username", message: "Enter your username" },

    {
      type: "input",
      name: "password",
      message: "Enter your password",
    },
  ]);

  for (const element of users) {
    if (!user) {
      console.log("Username or password is wrong");
      return login();
    } else if (user.password.trim() !== password.trim()) {
      console.log("Username or password is wrong");
      return login();
    }
    console.log("amjilttai nevterlee");
    mainMenu(user);
  }
}

async function register(user) {
  const { username, password } = await inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "Enter your username",
    },
    {
      type: "input",
      name: "password",
      message: "Enter your password",
    },
  ]);
  const users = readJSON();

  for (const element of users) {
    if (element.username === username) {
      console.log("Burtgeltei username baina");
      return register();
    }
  }
  const newUser = { username, password, balance: 0 };

  users.push(newUser);
  writeJSON(users);

  login();
}

// --- Үйлдэл сонгох ---
async function mainMenu() {
  const { action } = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: " What is your next choice?",
      choices: [
        " Deposit",
        "Withdraw",
        " Guilgeenii tuuh",
        "show balance",
        " Exit",
      ],
    },
  ]);

  const history = await readJSON("history.json");
  if (!history[username]) history[username] = [];

  if (action === " Deposit") {
    const { amount } = await inquirer.prompt([
      {
        type: "number",
        name: "amount",
        message: " Hediig hiihiin bro?",
      },
    ]);

    user.balance += amount;
    history[username].push({
      action: "deposit",
      amount,
      date: new Date().toLocaleString(),
    });
    console.log(` ${amount} Amjilttai`);
    mainMenu();
  } else if (action === " Withdraw") {
    const { amount } = await inquirer.prompt([
      {
        type: "number",
        name: "amount",
        message: "Hediig tatah ve bro?",
      },
    ]);

    if (amount > user.balance) {
      console.log(" Mungu chine hurehgui baina!");
      mainMenu();
    } else {
      user.balance -= amount;
      history[username].push({
        action: "withdraw",
        amount,
        date: new Date().toLocaleString(),
      });
      console.log(`${amount} Tatalt amjilttai!`);
      mainMenu();
    }
  } else if (action === "Guilgeenii tuuh") {
    console.log(`\n=== ${username}-ийн guilgeenii tuuh ===`);
    if (history[username].length === 0) {
      console.log("Yuu ch alga ");
      mainMenu();
    } else {
      history[username].forEach((h, i) => {
        console.log(`${i + 1}. [${h.date}] ${h.action} - ${h.amount}₮`);
        mainMenu();
      });
    }
    if (action === "show balance") {
      console.log(`Tanii uldegdel mungu:${user.balance}`);
    }
  }
}

await writeJSON("users.json");
await writeJSON("history.json");
