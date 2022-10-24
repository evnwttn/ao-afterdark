import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

function setExpirationDate(): string {
  let date = new Date();
  date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);

  return date.toUTCString();
}

export function cookies(req: Request, res: Response) {
  const id = uuidv4();

  res.setHeader("Set-Cookie", [`id=${id}`, setExpirationDate()]);
}
