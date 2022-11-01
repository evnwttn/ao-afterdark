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

    switch (req.method) {
      case "GET":
        const retrieveUser = await db.retrieveUser(req.session.userId);

        res.status(StatusCodes.OK).json(retrieveUser as UserLoginData);

        break;
      case "POST":
        const signUpUser = await db.signUpUser(req.body as UserLoginData);
        setSessionId(signUpUser.id);

        res.status(StatusCodes.OK).json(signUpUser as UserLoginData);

        break;
      case "PUT":
        const logInUser = await db.logInUser(req.body as UserLoginData);
        setSessionId(logInUser.id);

        res.status(StatusCodes.OK).json(logInUser as UserLoginData);

        break;
      default:
        break;
    }
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
