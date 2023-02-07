import { NextFunction, Request, Response } from "express";
import fetch from "node-fetch";
import { param, ValidationChain, validationResult } from "express-validator";

export const whoisGetRequestValidation: ValidationChain[] = [
    param("domain").isString()
]

export const get = async ( req: Request, res: Response, next: NextFunction ) => {
    try { 
        //Validate request parameter
        const validationErrors = validationResult(req);
        if(!validationErrors.isEmpty()) {
            res.status(422).json({ errors: validationErrors.array() });
            return;
        }

        const {WHOIS_API_URL, API_KEY } = process.env;

        const domain = req.params.domain;
        //build query for WHOIS api
        const whoisQueryUrl = `${WHOIS_API_URL}?apiKey=${API_KEY}&domainName=${domain}&outputFormat=JSON`;
        //fetch domain/ip data
        const domainResponse = await fetch(whoisQueryUrl);
        const jsonDomainData = await domainResponse.json();

        if(!jsonDomainData) {
            console.error("Error: Domain data not found");
            res.status(404).send({
                error: {
                    name: "NOT_FOUND",
                    message: "Unable to retrieve domain data based on the information provided"
                }
            })
        }

        res.send(jsonDomainData);
    } catch (err) {
        console.error(`Could not fetch domain data: ${err}`);
        next(err);
    }
 
};