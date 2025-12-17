import { db } from "../db.js";

export const createAccountService = async (
  number: string,
  userid: number,
  balance: number
) => {
  const response = await db.query(
    `INSERT INTO account (number, userid, balance) VALUES ($1, $2, $3) RETURNING *`,
    [number, userid, balance]
  );
  return response.rows[0];
};

export const getAllAccountsService = async (user_id: any) => {
  const response = await db.query("SELECT * FROM accounts");
  return response.rows;
};

export const updateAccountService = async (
  number: string,
  userid: number,
  balance: number
) => {
  const response = await db.query(
    `UPDATE accounts SET number = ${number}, userid = ${userid}, balance = ${balance} RETURNING* `
  );
  return response.rows[0];
};

export const deleteAccountService = async (number: string) => {
  const response = await db.query(
    `DELETE FROM account WHERE number= ${number} RETURNING * `
  );
  return response.rows[0];
};

export const getAccountByNumberService = async (number: string) => {
  const response = await db.query(
    `SELECT FROM account WHERE number = ${number} RETURNING *`
  );
  return response.rows[0];
};

export const createTransactionService = async (
  user_id: number,
  amount: number,
  transaction_type: string
) => {
  const response = await db.query(
    `INSERT INTO transaction (user_id, amount, transaction_type) VALUES ($1, $2, $3) RETURNING * `,
    [user_id, amount, transaction_type]
  );
};

export const getTransactionsService = async (user_id: number) => {
  const response = await db.query(`SELECT FROM * transactions`);
  return response.rows;
};

export const getTransactionsByUserIdService = async (user_id: number) => {
  const response = await db.query(
    `SELECT FROM transactions WHERE user_id = ${user_id} RETURNING *`
  );
  return response.rows;
};

export const getTransactionsByAccountNumberService = async (
  account_number: string
) => {
  const response = await db.query(
    `SELECT FROM transactions WHERE account_number=${account_number} RETURNING *`
  );
  return response.rows;
};

export const updateTransactionService = async (
  id: number,
  type: string,
  amount: number,
  fromaccount: string,
  toaccount: string
) => {
  const response = await db.query(
    `UPDATE transactions SET id=${id}, type=${type}, amount=${amount}, fromaccount=${fromaccount}, toaccount=${toaccount} RETURNING * `
  );
};

export const deleteTransactionService = async (id: number) => {
  const response = await db.query(
    `DELETE FROM transaction WHERE id=${id} RETURNING *`
  );
};
