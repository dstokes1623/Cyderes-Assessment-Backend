"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_1 = require("./routes");
const router = (0, express_1.Router)();
router.use("/whois/", routes_1.whois);
exports.default = router;
