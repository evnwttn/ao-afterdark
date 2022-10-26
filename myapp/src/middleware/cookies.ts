import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";

function setExpirationDate(): string {
  let date = new Date();
  date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);

  return date.toUTCString();
}

//@ts-ignore
export function cookies(req: Request, res: Response, next: NextFunction) {
  const id = uuidv4();
  const date = setExpirationDate();

  res.set({
    "Access-Control-Allow-Credentials": "true",
  });

  res.cookie("yeet", "value");

  next();
}
