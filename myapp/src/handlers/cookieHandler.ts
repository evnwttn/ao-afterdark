import { Request, Response } from "express";
import { FileDatabase } from "../services/database";
import { StatusCodes } from "../types";

export async function cookieHandler(req: Request, res: Response) {
  try {
    const db = new FileDatabase();

    console.log(req.signedCookies);

    const retrieveUser = await db.retrieveUser("hello" as string);

    res.status(StatusCodes.OK).json({ data: retrieveUser });
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
