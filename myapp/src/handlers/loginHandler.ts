import { Request, Response } from "express";
import { StatusCodes, UserLoginData } from "../types";

function validate(body: Partial<UserLoginData>): boolean {
  if (!body.email) {
    console.log("no email");
    return false;
  }

  if (!body.password) {
    console.log("no email");
    return false;
  }

  return true;
}

export async function loginHandler(req: Request, res: Response) {
  const sessionInvalid = validate(req.body as Partial<UserLoginData>);
  if (sessionInvalid) {
    res.sendStatus(StatusCodes.BAD_REQUEST);
  }
}
