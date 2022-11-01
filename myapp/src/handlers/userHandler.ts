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

export async function userHandler(req: Request, res: Response) {
  function setSessionId(userId: UserLoginData) {
    if (!req.session.userId) {
      req.session.userId = userId;
    }
  }

  const validUser = validate(req.body as Partial<UserLoginData>);

  if (!validUser) {
    res.sendStatus(StatusCodes.BAD_REQUEST);
  }

  try {
    const db = new FileDatabase();

    if (req.method === "POST") {
      const _user = await db.signUpUser(req.body as UserLoginData);
      setSessionId(_user.id);

      res.status(StatusCodes.OK).json(_user as UserLoginData);
      console.log(req.session.userId);
    } else {
      const _user = await db.logInUser(req.body as UserLoginData);
      setSessionId(_user.id);

      res.status(StatusCodes.OK).json(_user as UserLoginData);
      console.log(req.session.userId);
    }
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
