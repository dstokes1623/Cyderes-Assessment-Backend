import { Router } from "express";
import { get, whoisGetRequestValidation } from "../../controllers/whois";

const router = Router();

router.get("/:domain", whoisGetRequestValidation, get);

export default router;