import type { Response, Request } from "express";
import {
  createAccountService,
  getAllAccountsService,
  updateAccountService,
  deleteAccountService,
  getAccountByNumberService,
  createTransactionService,
  getTransactionsService,
  getTransactionsByUserIdService,
  getTransactionsByAccountNumberService,
  updateTransactionService,
  deleteTransactionService,
} from "../services/bankService.js";

// Шинэ данс үүсгэх
export const createAccount = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { user_id, account_number, balance } = req.body;
  const account = await createAccountService(user_id, account_number, balance);
  res.json(account);
};

// Дансны мэдээллийг шинэчлэх
export const updateAccount = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id, user_id, account_number, balance } = req.body;
  const account = await updateAccountService(
    id,
    user_id,
    account_number,
    balance
  );
  res.json(account);
};

// Данс устгах
export const deleteAccount = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.body;
  const account = await deleteAccountService(id);
  res.json(account);
};

// Бүх дансыг авах
export const getAllAccounts = async (
  req: Request,
  res: Response
): Promise<void> => {
  // Хэрвээ хэрэглэгчээр шүүх бол:
  const { user_id } = req.body;
  const account = await getAllAccountsService(user_id);
  res.json(account);
};

// данс авах
export const getAccountByNumber = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { account_number } = req.body;
  const account = await getAccountByNumberService(account_number);
  res.json(account);
};

// Шинэ гүйлгээ үүсгэх

export const createTransaction = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { user_id, amount, transaction_type } = req.body;
  const transaction = await createTransactionService(
    user_id,
    amount,
    transaction_type
  );
  res.json(transaction);
};

// Бүх гүйлгээ авах

export const getTransactions = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { user_id } = req.query;
  const transactions = await getTransactionsService(user_id);
  res.json(transactions);
};

// Хэрэглэгчээр гүйлгээ авах

export const getTransactionsByUserId = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { user_id } = req.query;
  const transactions = await getTransactionsByUserIdService(user_id);
  res.json(transactions);
};

// Дансны дугаараар гүйлгээ авах

export const getTransactionsByAccountNumber = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { account_number } = req.query;
  const transactions = await getTransactionsByAccountNumberService(
    account_number
  );
  res.json(transactions);
};

export const updateTransaction = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id, type, amount, fromaccount, toaccount } = req.body;

  const transaction = await updateTransactionService(
    id,
    type,
    amount,
    fromaccount,
    toaccount
  );
  res.json(transaction);
};

export const deleteTransaction = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.query;
  const transaction = await deleteTransactionService(id);
  res.json(transaction);
};
