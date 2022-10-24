import { Request, Response } from "express";

function setExpirationDate(): string {
  let date = new Date();
  date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);

  return date.toUTCString();
}

export function cookies(req: Request, res: Response) {
  res.setHeader("Set-Cookie", ["id=testy", setExpirationDate()]);
}
