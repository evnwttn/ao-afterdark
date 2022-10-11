import { Request, Response } from "express";
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
    if (req.method === "POST") {
      res.status(StatusCodes.OK).json(req.body as UserLoginData);
      console.log("new user");
    } else {
      res.status(StatusCodes.OK).json(req.body as UserLoginData);
      console.log("returning user");
    }
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
