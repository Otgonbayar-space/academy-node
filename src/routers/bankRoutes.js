import { Router } from "express";
import {
  balance,
  deposit,
  withdraw,
  getHistory,
} from "../controllers/bankController.js";

const router = Router();

router.get("/balance", balance);
router.post("/deposit", deposit);
router.post("/withdraw", withdraw);
router.get("/history", getHistory);

export default router;
