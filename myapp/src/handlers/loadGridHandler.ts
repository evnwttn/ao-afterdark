import { Request, Response } from "express";
import { FileDatabase } from "../services/database";
import { Grid, StatusCodes } from "../types";

export async function loadGridHandler(req: Request, res: Response) {
  try {
    const db = new FileDatabase();

    const retrievedGrids = await db.retrieveGrids(req.session.userId as string);

    res.status(StatusCodes.OK).json(retrievedGrids as Grid[]);
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
