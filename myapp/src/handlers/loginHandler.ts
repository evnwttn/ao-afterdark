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

export async function loginHandler(req: Request, res: Response) {
  const validUser = validate(req.body as Partial<UserLoginData>);
  if (!validUser) {
    res.sendStatus(StatusCodes.BAD_REQUEST);
  }

  console.log(req.body);
}
