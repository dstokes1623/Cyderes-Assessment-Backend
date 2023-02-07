import { Router } from "express";
import { whois } from "./routes";

const router = Router();

router.use("/whois/", whois);

export default router;