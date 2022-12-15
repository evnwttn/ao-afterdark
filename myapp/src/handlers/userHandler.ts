import { Request, Response } from "express";
import { StatusCodes, HttpMethods, UserLoginData } from "../types";
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
      case HttpMethods.POST:
        const signUpUser = await db.signUpUser(req.body as UserLoginData);

        res.status(StatusCodes.OK).send(signUpUser);

        break;
      case HttpMethods.PUT:
        const loginUserId = await db.logInUser(req.body as UserLoginData);

        if (!req.session.userId) {
          req.session.userId = loginUserId;
        }

        console.log(`req.session.userId: ${req.session.userId}`);
        //req.session.userId: c5bd16f7-08b9-4cb4-93b7-ed873b2b9073

        res.status(StatusCodes.OK).send(true);

        break;
      default:
        res.status(StatusCodes.BAD_REQUEST);

        break;
    }
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
