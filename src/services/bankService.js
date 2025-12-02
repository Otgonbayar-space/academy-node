import fs from 'fs/promises';

const historyPath = "../../data/history.json";

export const getHistory = () =>{
    const data = fs.readFile(historyPath, "utf-8");
    return JSON.parse(data)
}