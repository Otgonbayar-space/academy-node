import express from "express";
import {getTransaction, getBalance, getDeposit, getWithdraw} from "../controllers/bankController.js"
import {auth} from "../index.js";
import { getHistory } from "../services/bankService.js";

const router = express.Router();

router.use(auth);

router.get("/balance", getBalance);

router.get("/deposit", getDeposit);

router.get("/withdraw", getWithdraw);

router.get("/transaction", getTransaction);