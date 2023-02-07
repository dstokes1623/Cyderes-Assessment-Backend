"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const router_1 = __importDefault(require("./router"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const { PORT } = process.env;
app.use('/v1', router_1.default);
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
