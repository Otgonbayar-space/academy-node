import fs, { writeFile } from "fs";
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
  const data = fs.readFileSync("users.txt", 'utf-8').trim();

    return data.split("\n").map((line) => {
        const [username, pin, balance] = line.split(",")
        return {username, pin, balance:parseInt(balance)};

    })
    
}

// writeUsers(): users.txt-д бичих
function writeUsers(users) {
  // 👉 Хэрэглэгчийн мэдээллийг хадгалах код

    const line = users.map((u) => `${u.username}, ${u.pin}, ${u.balance} ` ) 

    fs.writeFileSync('users.txt',  line.join(" \n "))

   
}

// logTransaction(): transactions.txt-д бичих
function logTransaction(username, type, amount) {
  // 👉 Гүйлгээний лог бичих код
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
            console.log("burtgeltei username baina")
      exit();
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


        // login();
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


       rl.question("pin", (pin)=>{

        const pinc = users.find(pinc => pinc.pin === pin);

        if(!pin){
          console.log("pin buruu bn!")
        }



      })
 

      if(!user){
        console.log("hereglegch oldsongui!")
      }showMenu();
    })
     
    
    


}


  console.log(
    `==== ATM MENU ====
    1. Үлдэгдэл шалгах
    2. Мөнгө нэмэх
    3. Мөнгө авах
    4. Гарах`
    );
  
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
   👉 Хэрэглэгчийн сонголтоор switch case ашиглах`)

 
  scndchoice();
  
}

// =======================
// Main
// =======================
console.log(`
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
    rl.close();
  }
});


const scndchoice = () =>{
  rl.question("Дараагийн сонголтоо хий:", (nextchoice)=>{
    if(nextchoice === "1"){
        const blnc = users.find()
    } else if(nextchoice === "2"){

    }
  })
}