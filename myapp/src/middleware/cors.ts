import { Request, Response, NextFunction } from "express";

export function corsHandler(req: Request, res: Response, next: NextFunction) {
  res.set({
    "Access-Control-Allow-Origin": "https://evnwttn.github.io",
    "Access-Control-Allow-Methods": "POST, PUT, GET, OPTIONS",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Headers": "Content-Type",
  });

  next();
}
