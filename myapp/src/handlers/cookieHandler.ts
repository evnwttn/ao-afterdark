import { Request, Response } from "express";
import { StatusCodes } from "../types";

export async function cookieHandler(req: Request, res: Response) {
  try {
    res.status(StatusCodes.OK).json({ data: "hello" });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
