import { Request, Response } from "express";
import { Grid, StatusCodes } from "../types";
import { db } from "../services/database";

export async function loadGridHandler(req: Request, res: Response) {
  try {
    const retrievedGrids = await db.retrieveGrids(req.session.userId as string);

    res.status(StatusCodes.OK).json(retrievedGrids as Grid[]);
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
