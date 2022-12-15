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

  console.log(`gridHandler userId: ${req.session.userId}`);
  console.log(`gridHandler body: ${req.body}`);

  try {
    const user = req.session.userId;
    const newGrid: Omit<Grid, "id"> = {
      ...req.body,
      user,
    };

    switch (req.method) {
      case "POST":
        console.log(`post/grid/ user: ${req.session.userId}`);
        console.log(`post/grid/ grid: ${newGrid}`);

        const newGridId = await db.createGrid(newGrid as Omit<Grid, "id">);

        const newGridNoUser = {
          ...req.body,
          id: newGridId,
        };

        res.status(StatusCodes.OK).json(newGridNoUser);

        break;
      case "PUT":
        console.log(`put/grid/ user: ${req.session.userId}`);
        console.log(`put/grid/ grid: ${req.body}`);

        const updatedGridTracks = await db.updateGridTracks(
          req.body as Omit<Grid, "user">
        );

        res.status(StatusCodes.OK).json(req.body as Omit<Grid, "user">);

        break;
      default:
        break;
    }
  } catch (error) {
    console.log(`error/grid/ user: ${req.session.userId}`);
    console.log(`error/grid/ grid: ${req.body}`);

    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
