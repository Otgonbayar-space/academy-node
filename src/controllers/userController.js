import fs from "fs";

const userFile = "./data/users.json";

function readUsers() {
    if (!fs.existsSync(userFile)) return[];
    return JSON.parse(fs.readFileSync(userFile, "utf-8"));
};

function writeUsers (data) {
fs.writeFileSync(userFile, JSON.stringify(data, null, 2));
};

export const register = (req, res) =>{
    const {username, password} = req.body;

    let users = readUsers();

    if(users.find(u=> u.username===username)){
        return res.status(400).json({message:"Бүртгэлтэй хэрэглэгч байна!"})
    }

    users.push({username, password, balance:0});
    writeUsers(users);

    res.json({message:"Амжилттай бүртгэгдлээ"})
};

export const login = (req, res) =>{
    const {username, password} = req.body;
        
    let users = readUsers();

    const user = users.find(u.username===username && u.password===password);

    if(!user)
        return res.status(400).json({message:"Username эсвэл password буруу байна!"});

    res.json({message:"Амжилттай нэвтэрлээ", username});
};



