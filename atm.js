import { log } from "console";
import fs from "fs";
import { exit } from "process";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// readUsers(): users.txt-ээс унших


function readUsers() {
    if(!fs.existsSync("users.txt")) return []


  // 👉 Хэрэглэгчийн мэдээллийг унших код
  const data = fs.readFileSync("users.txt", 'utf-8');
  if(!data.trim()) return [];

    return data.split("\n").map((line) => {
        const [username, pin, balance] = line.split(",")
        return {username :username.trim(), pin:pin.trim(), balance:parseInt(balance.trim())};

    })
    
}

// writeUsers(): users.txt-д бичих
function writeUsers(users) {
  // 👉 Хэрэглэгчийн мэдээллийг хадгалах код

    const line = users.map((u) => `${u.username}, ${u.pin}, ${u.balance} `); 

    fs.writeFileSync('users.txt',  line.join("\n"))

   
}

// logTransaction(): transactions.txt-д бичих
function logTransaction(username, type, amount) {
  // 👉 Гүйлгээний лог бичих код
  const log = `${new Date().toLocaleString()} | ${username} | ${type} | ${amount}\n`;
  fs.appendFileSync("transactions.txt", log);
}

// =======================
// Register (шинэ хэрэглэгч)
// =======================
function register() {
  const users= readUsers();
  // 👉 Шинэ хэрэглэгчийн нэр асуух
  // 👉 PIN код асуух
  // 👉 Эхний үлдэгдэл асуух
  // 👉 users.txt-д хадгалах

rl.question("username?", (username ) =>{


   for(const element of users){
    if(element.username === username){
            console.log("burtgeltei username baina");
            return register();
      
    }


   }
  // const user = users.find(user => user.username === username)
  // console.log(user,'user')
    // if(user === username){
    //   console.log("burtgeltei username baina")
    //   return;
   
    // }
  rl.question("password?", (pin)=>{

      rl.question("balance:", (balance)=>{

        const newUser = {username, pin, balance};
          users.push(newUser);
          writeUsers(users);


         login();
      })




  })
})
}

// =======================
// Login + Menu
// =======================
function login() {
    const users = readUsers();
    rl.question("username?", (username)=> {

             const user = users.find(user => user.username === username)

      if(!user){
        console.log("hereglegch oldsongui!");
        return login();
      }

     rl.question("pin:", (pin)=>{
        if(user.pin.trim() !== pin.trim()){
          console.log("Pin buruu baina");
          return login();
        }
        console.log("amjilttai nevterlee");
        showMenu(user);
      })
    })
}


 // console.log(
   // `==== ATM MENU ====
    //1. Үлдэгдэл шалгах
    //2. Мөнгө нэмэх
    //3. Мөнгө авах
    //4. Гарах`
   // );
  
  // 👉 Нэвтрэх нэр асуух
  // 👉 PIN код асуух
  // 👉 Хэрэглэгчийн мэдээллийг шалгах
  // 👉 showMenu дуудаж ажиллуулах


function showMenu(user) {
  console.log(`👉 Menu-г харуулах
   1. Үлдэгдэл шалгах
   2. Мөнгө нэмэх
   3. Мөнгө авах
   4. Гарах
   `)

   rl.question("Сонголтоо оруул:", (choice)=>{
    if(choice === "1"){
      console.log(`Таны үлэгдэл: ${user.balance}
        1.Дуусгах
        2.Дахин үйлдэл хийх`);
        rl.question("Дараагийн үйлдэл:", (inchoice) => {
          if(inchoice === "1"){
           return display();
          } else if(inchoice === "2"){
           return showMenu(user);
          }
        })
      
    } else if(choice === "2"){
      rl.question("Нэмэх дүн:", (amnt)=>{
        const amount = parseInt(amnt);
       console.log(`Таны үлдэгдэл одоо: ${user.balance += amount} боллоо`);
        updateUser(user);
        logTransaction(user.username, "deposit", amount);
        console.log("Amjilttai tseneglelee" 
        );
        console.log(`
          1. Дуусгах
          2. Дахин үйлдэл хийх`)
        rl.question("Daraagiin uildel:", (inchoice)=>{
          if(inchoice==="1"){
            return display();
          }else if(inchoice==="2"){
            return showMenu(user);
          }
        })
        
        

      });
    } else if(choice === "3"){
      rl.question("Татах дүн:", (amnt) => {
        const amount = parseInt(amnt);
        if (amount>user.balance){
          console.log("Үлдэгдэл хүрэлцэхгүй байна");

        }else {
          console.log(`Таны үлдэгдэл одоо:${user.balance -= amount} боллоо`);
          updateUser(user);
          logTransaction(user.username, "withdraw", amount)
          console.log("Амжилттай таталт хийлээ");
        }
        console.log(`
        1.Дуусгах
        2. Дахин үйлдэл хийх`)
          rl.question("Дараагийн үйлдэл:", (inchoice)=>{
            if(inchoice==="1"){
              return display();
            }else if(inchoice==="2"){
              return showMenu(user)
            }
          })
      })
    }
    else if(choice === "4"){
      console.log("Гарах");
      display();
    }
    else {
      console.log("Буруу сонголт")
      showMenu(user);
    }
   })

 
  
  
}

function updateUser(updatedUser){
  const users = readUsers();
  const newUsers = users.map((u) =>
  u.username === updatedUser.username ? updatedUser : u);
  writeUsers(newUsers);
}

// =======================
// Main
// =======================
 function display () {console.log(`
==== ATM SYSTEM ====
1. Нэвтрэх
2. Бүртгүүлэх`
);


rl.question("Сонголтоо оруулна уу: ", (startChoice) => {
  if (startChoice === "1") {
    login();
  } else if (startChoice === "2") {
    register();
  } else {
    console.log("⚠️ Буруу сонголт!");
    display();  
    
  }


})
};

display();