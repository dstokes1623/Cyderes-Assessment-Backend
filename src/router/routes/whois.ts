import { Router } from "express";
import { get } from "../../controllers/whois";

const router = Router();

router.get("/:domain", get);

export default router;