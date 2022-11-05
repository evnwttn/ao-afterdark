import { Request, Response } from "express";
import { StatusCodes } from "../types";

export async function cookieHandler(req: Request, res: Response) {
  const _retrieveUser = "hello";

  res.status(StatusCodes.OK).json({ data: _retrieveUser });
}
