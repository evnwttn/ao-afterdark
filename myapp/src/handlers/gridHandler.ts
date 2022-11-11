import { Request, Response } from "express";
import { FileDatabase } from "../services/database";
import { Grid, StatusCodes } from "../types";

function validate(body: Partial<Grid>): boolean {
  if (body.tracks?.length ?? 0 > 11) {
    return false;
  }

  if (body.parameters?.length ?? 0 > 10) {
    return false;
  }

  return true;
}

export async function gridHandler(req: Request, res: Response) {
  if (req.method !== "GET") {
    const invalid = validate(req.body as Partial<Grid>);
    if (invalid) {
      res.sendStatus(StatusCodes.BAD_REQUEST);
    }
  }

  try {
    const db = new FileDatabase();

    switch (req.method) {
      case "GET":
        const retrievedGrids = await db.retrieveGrids(req.query.id as string);
        res.status(StatusCodes.OK).json(retrievedGrids as Grid[]);

        break;
      case "POST":
        const newGrid = await db.createGrid(req.body as Grid);
        res.status(StatusCodes.OK).json(newGrid as Grid);

        break;
      case "PUT":
        const updatedGrid = await db.updateGrid(req.body as Grid);
        res.status(StatusCodes.OK).json(updatedGrid as Grid);

        break;
      default:
        break;
    }
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
