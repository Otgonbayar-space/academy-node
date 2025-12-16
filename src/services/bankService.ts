import { db } from "../db.ts";

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

export const deleteAccountService = async (number)=>{
  const response = await db.query(`DELETE FROM account WHERE number= ${number} RETURNING * `)
  return response.rows[0];
}

export const getAccountByNumberService = async (number)=>{
  const response = await db.query(`SELECT FROM account WHERE number = ${number} RETURNING *` );
  return response.rows[0];
}

export const createTransactionService = async (user_id, amount, transaction_type)=>{
  const response = await db.
}
