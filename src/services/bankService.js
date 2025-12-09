import { db } from "../db.js";

export const createAccountService = async (Number, userid, balance) => {
  const response = await db.query(
    `INSERT INTO account (number, userid, balance) VALUES ($1, $2, $3) RETURNING *`,
    [Number, userid, balance]
  );
  return response.rows[0];
};

export const getAllAccountsService = async () => {
  const response = await db.query("SELECT * FROM users");
  return response.rows;
};

export const updateAccountService = async (Number, userid, balance) => {
  const response = await db.query(
    `UPDATE users SET number = ${number}, userid = ${userid}, balance = ${balance} RETURNING* `
  );
  return response.rows[0];
};
