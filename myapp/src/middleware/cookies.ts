import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";

function setExpirationDate(): string {
  let date = new Date();
  date.setTime(date.getTime() + 2 * 24 * 60 * 60 * 1000);

  return date.toUTCString();
}

function setId(): string {
  const id = uuidv4();

  return id;
}

//@ts-ignore
export function cookies(req: Request, res: Response, next: NextFunction) {
  //   res.setHeader("Set-Cookie", [setId(), setExpirationDate()]);

  console.log(`Set-Cookie, [${setId()}, ${setExpirationDate()}]`);

  next();
}
