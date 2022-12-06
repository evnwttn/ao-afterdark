import { Request, Response } from "express";
import { StatusCodes, HttpMethods } from "../types";
import { db } from "../services/database";

export async function sessionHandler(req: Request, res: Response) {
  if (!req.session.userId) {
    return;
  }

  try {
    switch (req.method) {
      case HttpMethods.POST:
        req.session.destroy(() => res.status(StatusCodes.OK));

        break;

      case HttpMethods.PUT:
        const retrieveUser = await db.doesUserExist(
          req.session.userId as string
        );

        res.status(StatusCodes.OK).json(retrieveUser);

        break;
      default:
        res.status(StatusCodes.BAD_REQUEST);

        break;
    }
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
