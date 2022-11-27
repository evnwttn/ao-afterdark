import { Request, Response } from "express";
import { Grid, StatusCodes } from "../types";
import { db } from "../services/database";

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
    const user = req.session.userId;
    const newGrid: Grid = {
      ...req.body,
      user,
    };

    switch (req.method) {
      case "POST":
        const newGridId = await db.createGrid(newGrid as any);

        const newGridNoUser = {
          ...req.body,
          id: newGridId,
        };

        res.status(StatusCodes.OK).json(newGridNoUser as Grid);

        break;
      case "PUT":
        const updatedGrid = await db.updateGrid(req.body as Grid);

        res.status(StatusCodes.OK).json(req.body as Grid);

        break;
      default:
        break;
    }
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
