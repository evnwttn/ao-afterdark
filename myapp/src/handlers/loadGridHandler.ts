import { Request, Response } from "express";
import { Grid, StatusCodes } from "../types";
import { db } from "../services/database";

export async function loadGridHandler(req: Request, res: Response) {
  try {
    const retrievedGrids = await db.retrieveGrids(req.session.userId as string);

    // issue could be with leak on react side**

    res
      .status(StatusCodes.OK)
      .json(retrievedGrids as Grid[])
      .send({ data: req.session });
  } catch (error) {
    res
      .sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ data: req.session });
  }
}
