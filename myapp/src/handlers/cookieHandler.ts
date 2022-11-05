import { Request, Response } from "express";
import { FileDatabase } from "../services/database";
import { StatusCodes } from "../types";

export async function cookieHandler(req: Request, res: Response) {
  try {
    const db = new FileDatabase();

    const retrieveUser = await db.retrieveUser(req.session.userId as string);

    res.status(StatusCodes.OK).json({ data: retrieveUser });
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }

  const _retrieveUser = "hello";
}
