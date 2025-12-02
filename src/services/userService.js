import fs from 'fs/promises';

const userPath = "../../data/users.json";

export const getUsers = () =>{
    const data =fs.readFile(userPath, "utf-8");
    return JSON.parse(data);
}

export const findEmail = (email)=>{
    const users = getUsers();
    return users.find((u)=>u.email === email)
}