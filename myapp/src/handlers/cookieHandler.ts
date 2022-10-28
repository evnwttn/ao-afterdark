import { Request, Response, NextFunction } from "express";
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

  if (req.method === "POST") {
    try {
      req.sessionID = id;
      res.send({ message: "saved" }).status(StatusCodes.OK);
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      console.log(req.session);
      res.send({ message: "retrieved" }).status(StatusCodes.OK);
    } catch (error) {
      console.log(error);
    }
  }
}
