import { Request, Response } from "express";
import { FileDatabase } from "../services/database";
import { StatusCodes, UserLoginData } from "../types";

function validate(body: Partial<UserLoginData>): boolean {
  if (!body.email) {
    return false;
  }

  if (!body.password) {
    return false;
  }

  return true;
}

function setExpirationDate(): string {
  let date = new Date();
  date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);

  return date.toUTCString();
}

export async function userHandler(req: Request, res: Response) {
  const validUser = validate(req.body as Partial<UserLoginData>);
  if (!validUser) {
    res.sendStatus(StatusCodes.BAD_REQUEST);
  }

  // res.setHeader("Set-Cookie", ["id=testy", setExpirationDate()]);

  try {
    const db = new FileDatabase();

    if (req.method === "POST") {
      const _user = await db.signUpUser(req.body as UserLoginData);

      res.status(StatusCodes.OK).json(_user as UserLoginData);
    } else {
      const _user = await db.logInUser(req.body as UserLoginData);

      res.status(StatusCodes.OK).json(_user as UserLoginData);
    }
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
