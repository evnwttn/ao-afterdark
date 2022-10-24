import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";

function setExpirationDate(): string {
  let date = new Date();
  date.setTime(date.getTime() + 2 * 24 * 60 * 60 * 1000);

  return date.toUTCString();
}

//@ts-ignore
export function cookies(req: Request, res: Response, next: NextFunction) {
  const id = uuidv4();

  //   res.setHeader("Set-Cookie", [`id=${id}`, setExpirationDate()]);

  console.log(`Set-Cookie, [${id}, ${setExpirationDate()}]`);

  next();
}
