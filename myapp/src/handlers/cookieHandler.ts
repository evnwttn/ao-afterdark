import { Request, Response } from "express";
import { FileDatabase } from "../services/database";
import { StatusCodes } from "../types";

export async function cookieHandler(req: Request, res: Response) {
  if (!req.session.userId) {
    return;
  }

  try {
    const db = new FileDatabase();

    console.log(req.session);

    const retrieveUser = await db.retrieveUser(req.body as object);

    res.status(StatusCodes.OK).json(retrieveUser);
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
