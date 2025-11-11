import fs from "node:fs/promises";
import inquirer from "inquirer";

// --- Туслах функцууд ---
async function readJSON(file) {
  try {
    const data = await fs.readFile(file, "utf8");
    return JSON.parse(data);
  } catch {
    // Хэрвээ файл байхгүй бол шинээр үүсгэнэ
    await fs.writeFile(file, "{}");
    return {};
  }
}

async function writeJSON(file, data) {
  await fs.writeFile(file, JSON.stringify(data, null, 2));
}

// --- Гол програм ---
async function main() {
  const { username, password } = await inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "Enter your username:",
    },
    {
      type: "password",
      name: "password",
      message: "Enter your password:",
    },
  ]);

  const users = await readJSON("users.json");

  let user = users[username];

  // Хэрвээ хэрэглэгч байхгүй бол бүртгэх
  if (!user) {
    console.log("Signing up new user...");
    user = { password, balance: 0 };
    users[username] = user;
    await writeJSON("users.json", users);
  } else {
    // Нууц үг шалгах
    if (user.password !== password) {
      console.log("Username or password ir wrong!");
      process.exit();
    }
  }

  console.log(`Сайн байна уу, ${username}!  Таны баланс: ${user.balance}`);

  // --- Үйлдэл сонгох ---
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

  async function mainMenu() {
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
    }
  }

  await writeJSON("users.json", users);
  await writeJSON("history.json", history);

  console.log("\nБаярлалаа, дахин ирээрэй! ");
  process.exit();
}

// --- Програм эхлүүлэх ---
main();
