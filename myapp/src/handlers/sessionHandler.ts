import { Request, Response } from "express";
import { StatusCodes } from "../types";
import { db } from "../services/database";

export async function sessionHandler(req: Request, res: Response) {
  if (!req.session.userId) {
    return;
  }

  try {
    switch (req.method) {
      case "POST":
        req.session.destroy(() => {
          res.status(StatusCodes.OK).send(true);
        });

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
