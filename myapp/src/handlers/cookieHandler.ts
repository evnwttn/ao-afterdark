import { Request, Response } from "express";
import { StatusCodes } from "../types";

export async function cookieHandler(req: Request, res: Response) {
  try {
    const _id = req.session.userId;
    console.log(_id);

    res.status(StatusCodes.OK).json(_id);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
