import { Request, Response } from "express";
import { FileDatabase } from "../services/database";
import { StatusCodes } from "../types";

export async function sessionHandler(req: Request, res: Response) {
  if (!req.session.userId) {
    return;
  }

  try {
    const db = new FileDatabase();

    switch (req.method) {
      case "POST":
        console.log("allo");

        break;

      case "PUT":
        const retrieveUser = await db.retrieveUser(
          req.session.userId as string
        );
        res.status(StatusCodes.OK).json(retrieveUser);

        break;
      default:
        break;
    }
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
