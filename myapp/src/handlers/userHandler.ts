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
  const validUser = validate(req.body as Partial<UserLoginData>);
  if (!validUser) {
    res.sendStatus(StatusCodes.BAD_REQUEST);
  }

  try {
    const db = new FileDatabase();

    switch (req.method) {
      case "GET":
        res.status(StatusCodes.OK).json({ data: "hello" });

        break;
      case "POST":
        const signUpUser = await db.signUpUser(req.body as UserLoginData);
        res.status(StatusCodes.OK).json(signUpUser as UserLoginData);

        break;
      case "PUT":
        const logInUser = await db.logInUser(req.body as UserLoginData);

        if (!req.session.userId) {
          req.session.userId = logInUser.id;
        }

        res.status(StatusCodes.OK).json(logInUser as UserLoginData);
        break;
      default:
        break;
    }
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
