import fs from "fs/promises";

const users = 
const readUsers=()=>{
    if (!fs.existsSync()) return[];
    return JSON.parse(fs.readFile())
}