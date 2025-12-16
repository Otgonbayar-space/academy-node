import express from "express";
import {
  createAccount,
  updateAccount,
  getAccountByNumber,
  createTransaction,
  getTransactions,
  getTransactionsByUserId,
  getTransactionsByAccountNumber,
  updateTransaction,
  deleteTransaction,
} from "../controllers/bankController.js";

export const bankRouters = express.Router();

router.post("/createAcc", createAccount);

router.post("/deleteAcc", updateAccount);

router.get("/getAcc", getAccountByNumber);

router.post("/createTrans", createTransaction);

router.get("/getTrans", getTransactions);

router.get("/getTransId", getTransactionsByUserId);

router.get("/getTransNumber", getTransactionsByAccountNumber);

router.post("/updateTrans", updateTransaction);

router.post("/deleteTrans", deleteTransaction);

export default router;
