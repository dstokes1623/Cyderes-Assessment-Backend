import { NextFunction, Request, Response } from "express";

export const get = async ( req: Request, res: Response, next: NextFunction ) => {
    try { 
        console.log("get request");
        res.send(`Success ${req.params.domain}`);
    } catch (err) {
        next(err);
    }
 
};