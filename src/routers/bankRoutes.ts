import express from "express";
import {getTransaction, getBalance, getDeposit, getWithdraw} from "../controllers/bankController.ts"
import {auth} from "../index.ts";
import { getHistory } from "../services/bankService.ts";

const router = express.Router();

router.use(auth);

router.get("/balance", getBalance);

router.get("/deposit", getDeposit);

router.get("/withdraw", getWithdraw);

router.get("/transaction", getTransaction);

export default router;