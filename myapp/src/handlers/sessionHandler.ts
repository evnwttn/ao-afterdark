import { Request, Response } from "express";
import { FileDatabase } from "../services/database";
import { Session, StatusCodes } from "../types";

function validate(body: Partial<Session>): boolean {
  if (body.tracks?.length ?? 0 > 11) {
    return false;
  }

  if (body.parameters?.length ?? 0 > 10) {
    return false;
  }

  return true;
}

export async function sessionHandler(req: Request, res: Response) {
  if (req.method !== "GET") {
    const sessionInvalid = validate(req.body as Partial<Session>);
    if (sessionInvalid) {
      res.sendStatus(StatusCodes.BAD_REQUEST);
    }
  }

  try {
    const db = new FileDatabase();

    switch (req.method) {
      case "POST":
        const newSession = await db.createSession(req.body as Session);
        res.status(StatusCodes.OK).json(newSession as Session);

        break;
      case "PUT":
        const updatedSession = await db.updateSession(req.body as Session);
        res.status(StatusCodes.OK).json(updatedSession as Session);

        break;
      case "GET":
        console.log(req.body);

        break;
      default:
        break;
    }
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
