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
  const invalid = validate(req.body as Partial<Grid>);
  if (invalid) {
    res.sendStatus(StatusCodes.BAD_REQUEST);
  }

  try {
    const db = new FileDatabase();

    const user = req.session.userId;
    const newGrid: Grid = {
      ...req.body,
      user,
    };

    switch (req.method) {
      case "POST":
        const newGridId = await db.createGrid(newGrid as Grid);

        const _newGrid = {
          ...req.body,
          id: newGridId,
        };

        console.log(_newGrid);

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
