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

    switch (req.method) {
      case "GET":
        if (req.session.userId) {
          res
            .status(StatusCodes.OK)
            .json({ message: `welcome back ${req.session.userId}` });
        } else {
          res.status(StatusCodes.OK).json({ message: `no user active` });
        }

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
        res.sendStatus(StatusCodes.BAD_REQUEST);
    }
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
