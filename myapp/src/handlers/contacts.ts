import { Request, Response } from 'express';
// import * as fs from 'fs/promises';
import * as emailjs from '@emailjs/browser';

require('dotenv').config()

export async function contactsHandler(req: Request, res: Response) {

  try {
    await emailjs.send(
      "contact_service",
      "contact_form",
      req.body,
      process.env.EMAILJS_USER_ID
    );
    res
      .status(200)
      .json({ message: `yo` });
  } catch (error) {
    res.sendStatus(500)
  }

  console.log(process.env.EMAILJS_SERVICE_ID)
}

// export async function contactsHandler(req: Request, res: Response) {
//     console.log(JSON.stringify(req.body, null, 4));
//     // console.log(req.body.name)
//     // console.log(req.body.email)
//     // console.log(req.body.message)
//     try {
//       await fs.writeFile('test.json', req.body);
//       res
//         .status(200)
//         .json({ message: `yo` });
//     } catch (error) {
//       res.sendStatus(500)
//     }
// }