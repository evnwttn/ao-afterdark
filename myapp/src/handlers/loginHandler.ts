import { Request, Response } from "express";
import { StatusCodes, UserLoginData } from "../types";

function validate(body: Partial<UserLoginData>): boolean {
  if (!body.email) {
    return false;
    console.log("no email");
  }

  if (!body.password) {
    return false;
    console.log("no email");
  }

  return true;
}

export async function loginHandler(req: Request, res: Response) {}
