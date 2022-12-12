import { Request, Response, NextFunction } from "express";

export function corsHandler(req: Request, res: Response, next: NextFunction) {
  res.set({
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Methods": "GET,PUT,POST,OPTIONS",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Headers":
      "Accept, Content-Type, Referer, sec-ch-ua, sec-ch-ua-mobile, sec-ch-ua-platform, User-Agent",
  });

  next();
}
