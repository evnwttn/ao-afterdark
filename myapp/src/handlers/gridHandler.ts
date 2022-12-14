import { Request, Response } from "express";
import { Grid, StatusCodes } from "../types";
import { db } from "../services/database";

// function validate(body: Partial<Grid>): boolean {
//   if (body.tracks?.length ?? 0 > 11) {
//     return false;
//   }

//   if (body.parameters?.length ?? 0 > 10) {
//     return false;
//   }

//   return true;
// }

export async function gridHandler(req: Request, res: Response) {
  // const valid = validate(req.body as Partial<Grid>);
  // if (!valid) {
  //   res.sendStatus(StatusCodes.BAD_REQUEST);
  // }

  try {
    const user = req.session.userId;
    const newGrid: Omit<Grid, "id"> = {
      ...req.body,
      user,
    };

    switch (req.method) {
      case "POST":
        const newGridId = await db.createGrid(newGrid as Omit<Grid, "id">);

        const newGridNoUser = {
          ...req.body,
          id: newGridId,
        };

        res.status(StatusCodes.OK).json(newGridNoUser);

        break;
      case "PUT":
        const updatedGridTracks = await db.updateGridTracks(
          req.body as Omit<Grid, "user">
        );

        res.status(StatusCodes.OK).json(req.body as Omit<Grid, "user">);

        break;
      default:
        break;
    }
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
