// // import fs from "node:fs/promises";
// // import readline from "readline/promises";

// // const rl = readline.createInterface({
// //   input: process.stdin,
// //   output: process.stdout,
// // });

// // function display() {
// //   console.log(`
// // ==== ATM SYSTEM ====
// // 1. Нэвтрэх
// // 2. Бүртгүүлэх`);

// //   rl.question("Сонголтоо оруулна уу: ", (startChoice) => {
// //     if (startChoice === "1") {
// //       login();
// //     } else if (startChoice === "2") {
// //       register();
// //     } else {
// //       console.log("⚠️ Буруу сонголт!");
// //       display();
// //     }
// //   });
// // }

// // display();

// // function readUsers() {
// //   if (!fs.existsSync("users.json")) return [];

// //   // 👉 Хэрэглэгчийн мэдээллийг унших код
// //   const data = fs.readFileSync("users.json", "utf-8");
// //   if (!data.trim()) return [];

// //   return data.split("\n").map((line) => {
// //     const [username, pin, balance] = line.split(",");
// //     return {
// //       username: username.trim(),
// //       pin: pin.trim(),
// //       balance: parseInt(balance.trim()),
// //     };
// //   });
// // }

// // function writeUsers(users) {
// //   // 👉 Хэрэглэгчийн мэдээллийг хадгалах код

// //   const line = users.map((u) => `${u.username}, ${u.pin}, ${u.balance} `);

// //   fs.writeFileSync("users.json", line.join("\n"));
// // }

// // function logTransaction(username, type, amount) {
// //   // 👉 Гүйлгээний лог бичих код
// //   const log = `${new Date().toLocaleString()} | ${username} | ${type} | ${amount}\n`;
// //   fs.appendFileSync("transactions.json", log);
// // }

// // function register() {
// //   const users = readUsers();

// //   const usernames =
// //     ("Username:",
// //     (username) => {
// //       console.log(username, "asdasd");
// //       // for (const element of users) {
// //       //   if (element.username === username) {
// //       //     console.log("Burtgeltei username baina");
// //       //     return register();
// //       //   }
// //       // }
// //     });
// // }

// import fs from "node:fs/promises";
// import inquirer from "inquirer";

// function display = async()=>{
//   console.log(`
// ==== ATM SYSTEM ====
// 1. Нэвтрэх
// 2. Бүртгүүлэх`);

// const {username, password} = await inquirer.prompt([
//   {
//     type:"input",
//     name:"username"
//   }
// ])

// }

// display();

// const { username, password } = await inquirer.prompt([
//   {
//     type: "input",
//     name: "username",
//     message: "Neree oruulna uu",
//   },
//   {
//     type: "password",
//     name: "password",
//     message: "password oruulna uu",
//   },
//   // {
//   //   type: "select",
//   //   name: "action",
//   //   choices: ["Deposit", "Withdraw"],
//   //   message: "Ymar uildel hiih we"
//   // }
// ]);

// const userRawData = await fs.readFile("users.json", "utf8");

// const users = JSON.parse(userRawData);

// const user = users.find((value) => {
//   return value.name == username && value.password == password;
// });

// if (!user) {
//   console.log("ner eswel nuuts ug buruu bn!");

//   process.exit();
// }

// const historyRawData = await fs.readFile("history.json", "utf8");

// const history = JSON.parse(historyRawData);

// if (!history[user.name]) {
//   history[user.name] = [];
// }

// history[user.name].push({ amount: 1000, action: "deposit" });

// const historyString = JSON.stringify(history);

// fs.writeFile("history.json", historyString)
//   .then(() => {
//     console.log("Amjilttai bayrtai!");
//     process.exit();
//   })
//   .catch((e) => {
//     console.log(e);
//     console.log("aldaa garlaa");
//   });
