import { Request, Response } from "express";
import { FileDatabase } from "../services/database";
import { Session } from "../types";
import { StatusCodes } from "../types";

function validate(body: Partial<Session>): boolean {

  // validates there are less than 11 tracks
  if (body.tracks?.length ?? 0 > 11) {
    return false
  }

  // validates there are less than 10 session parameters 
  if (body.parameters?.length ?? 0 > 10) {
    return false
  }

  return true;
}

export async function sessionHandler(req: Request, res: Response) {
  const sessionInvalid = validate(req.body as Partial<Session>);
  if (sessionInvalid) {
    res.sendStatus(StatusCodes.BAD_REQUEST);
  }

  try {
    const db = new FileDatabase();

    if (req.method === "POST") {
      await db.createSession(req.body as Session)
      .then((_session) => res.status(StatusCodes.OK).json(_session as Session))
    } else {
      await db.updateSession(req.body as Session);
    }
    // res.status(StatusCodes.OK).json(req.body as Session);
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
