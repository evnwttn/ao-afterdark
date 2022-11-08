import { Request, Response, NextFunction } from "express";

//@ts-ignore
export function additionalCors(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.set({
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Methods": "POST, PUT, GET, OPTIONS",
    "Access-Control-Allow-Headers":
      "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
    "Access-Control-Allow-Credentials": "true",
  });

  next();
}
