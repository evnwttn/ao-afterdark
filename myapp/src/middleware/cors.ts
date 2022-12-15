import { Request, Response, NextFunction } from "express";

export function corsHandler(req: Request, res: Response, next: NextFunction) {
  // console.log(JSON.stringify(req.headers));
  // console.log(req.method);
  // console.log(req.path);

  res.set({
    "Access-Control-Allow-Origin": "https://evnwttn.github.io",
    "Access-Control-Allow-Methods": "POST, PUT, GET, OPTIONS",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Headers": "Content-Type",
  });

  next();
}

// cors middleware package w ^^^^^
// Access-Control-Max-Age
// chrome & firefox
// postman / test end point
// swap out axios
