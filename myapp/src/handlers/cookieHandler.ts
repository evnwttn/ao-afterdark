import { Request, Response } from "express";
import { StatusCodes } from "../types";

// NEED TO REMOVE ALL INFO FROM RETURNS THAT IS NOT SESSION ID!!!!!!

export async function cookieHandler(req: Request, res: Response) {
  try {
    console.log(req.session.userId);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
