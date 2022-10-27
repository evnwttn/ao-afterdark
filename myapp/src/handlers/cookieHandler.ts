import { Request, Response } from "express";
import { StatusCodes } from "../types";
import { v4 as uuidv4 } from "uuid";

function setExpirationDate(): string {
  let date = new Date();
  date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);

  return date.toUTCString();
}

export async function cookieHandler(req: Request, res: Response) {
  const id = uuidv4();
  const date = setExpirationDate();

  try {
    res.status(StatusCodes.OK).cookie("cookieName", "cookieValue");
  } catch (error) {
    console.log(error);
  }

  console.log(req.cookies["cookie"]);
}
