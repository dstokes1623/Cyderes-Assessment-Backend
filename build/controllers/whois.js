"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.whoisGetRequestValidation = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const express_validator_1 = require("express-validator");
exports.whoisGetRequestValidation = [
    (0, express_validator_1.param)("domain").isString()
];
const get = async (req, res, next) => {
    try {
        //Validate request parameter
        const validationErrors = (0, express_validator_1.validationResult)(req);
        if (!validationErrors.isEmpty()) {
            res.status(422).json({ errors: validationErrors.array() });
            return;
        }
        const { WHOIS_API_URL, API_KEY } = process.env;
        const domain = req.params.domain;
        //build query for WHOIS api
        const whoisQueryUrl = `${WHOIS_API_URL}?apiKey=${API_KEY}&domainName=${domain}&outputFormat=JSON`;
        //fetch domain/ip data
        const domainResponse = await (0, node_fetch_1.default)(whoisQueryUrl);
        const jsonDomainData = await domainResponse.json();
        if (!jsonDomainData) {
            console.error("Error: Domain data not found");
            res.status(404).send({
                error: {
                    name: "NOT_FOUND",
                    message: "Unable to retrieve domain data based on the information provided"
                }
            });
        }
        res.send(jsonDomainData);
    }
    catch (err) {
        console.error(`Could not fetch domain data: ${err}`);
        next(err);
    }
};
exports.get = get;
