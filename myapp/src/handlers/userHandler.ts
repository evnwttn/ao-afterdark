import { Request, Response } from "express";
import { FileDatabase } from "../services/database";
import { StatusCodes, UserLoginData } from "../types";

// NEED TO REMOVE ALL INFO FROM RETURNS THAT IS NOT SESSION ID!!!!!!

function validate(body: Partial<UserLoginData>): boolean {
  if (!body.email) {
    return false;
  }

  if (!body.password) {
    return false;
  }

  return true;
}

export async function userHandler(req: Request, res: Response) {
  if (req.method !== "GET") {
    const validUser = validate(req.body as Partial<UserLoginData>);
    if (!validUser) {
      res.sendStatus(StatusCodes.BAD_REQUEST);
    }
  }

  function setSessionId(userId: UserLoginData) {
    if (!req.session.userId) {
      req.session.userId = userId;
    }
  }

  try {
    const db = new FileDatabase();

    if (req.method === "POST") {
      const signUpUser = await db.signUpUser(req.body as UserLoginData);
      setSessionId(signUpUser.id);

      console.log(req.session.userId);

      res.status(StatusCodes.OK).json(signUpUser as UserLoginData);
    } else {
      const logInUser = await db.logInUser(req.body as UserLoginData);
      setSessionId(logInUser.id);

      console.log(req.session.userId);

      res.status(StatusCodes.OK).json(logInUser as UserLoginData);
    }
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
