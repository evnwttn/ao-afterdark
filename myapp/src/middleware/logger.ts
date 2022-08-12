import { Request } from "express";

//@ts-ignore
export function logger(req: Request, res, next) {
    console.log(`[REQUEST] ${req.path}`);
    console.log(req.body)
    next();
}