import { Request, Response } from "express";
import { StatusCodes, UserLoginData } from "../types";
import { db } from "../services/database";

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
  const validUser = validate(req.body as Partial<UserLoginData>);
  if (!validUser) {
    res.sendStatus(StatusCodes.BAD_REQUEST);
  }

  try {
    switch (req.method) {
      case "POST":
        const signUpUser = await db.signUpUser(req.body as UserLoginData);

        res.status(StatusCodes.OK).send(signUpUser);

        break;
      case "PUT":
        const loginUserId = await db.logInUser(req.body as UserLoginData);

        // if (!req.session.userId) {
        //   req.session.userId = loginUserId;
        // }

        res.status(StatusCodes.OK).send(true);
        break;
      default:
        break;
    }
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
