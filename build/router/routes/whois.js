"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const whois_1 = require("../../controllers/whois");
const router = (0, express_1.Router)();
router.get("/:domain", whois_1.get);
exports.default = router;
