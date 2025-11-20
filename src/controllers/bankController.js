import fs, { writeFileSync } from "fs";

const userFile = "./data/users.json";
const historyFile = "./data/history.json";

function readUsers(){
    return JSON.parse(fs.readFileSync(userFile, "utf-8"));
}

function writeUsers(){
    return writeFileSync(userFile, JSON.stringify(data, null, 2));
}

function readHistory (){
    if(!fs.existsSync(historyFile)) return[];
    return JSON.parse(fs.readFileSync(historyFile, "utf-8"));
}

function writeHistory () {
    fs.writeFileSync(historyFile, JSON.stringify(data, null, 2));
}

export const balance = (req, res) =>{
     const username = req.params.username;

    const users = readUsers();
    const user = users.find(u=>u.username===username);

    res.json({balance:user.balance});
};

export const deposit = (req, res) =>{
    const { username, amount} = req.body;

    const users =readUsers();
    const user = users.find(u=>u.username===username);

    user.balance+=amount;
    writeUsers(users);

    let history= readHistory();
    history.push({
        username,
        type:"deposit",
        amount,
        date: new Date()
    }) ;

    writeHistory(history);

    res.json({message:"Цэнэглэлт амжилттай", balance: user.balance});
};

export const withdraw = (req, res)=>{
    const {username, amount} =req.body;

    const users= readUsers();
    const user = users.find(u=>u.username===username);

    if(amount>user.balance){
        return res.status(404).json({message:"Үлдэгдэл хүрэлцэхгүй байна!"});
    }

    user.balance-=amount;
    writeUsers(users);

    let history= readHistory();
    history.push({
        username,
        type:"withdraw",
        amount,
        date: new Date()
    });

    writeHistory(history);

    res.json({message:"Таталт амжилттай", balance:user.balance});
};

router.get("/history/:username", getHistory);

export const getHistory = (req, res) => {
    const username = req.params.username;
    const history = readHistory().filter(h => h.username === username);
    res.json(history);
}
