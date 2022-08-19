import { Request, Response } from 'express';
import * as fs from 'fs/promises';
import emailjs from '@emailjs/browser';

export async function contactsHandler(req: Request, res: Response) {
    console.log(JSON.stringify(req.body, null, 4));
    // console.log(req.body.name)
    // console.log(req.body.email)
    // console.log(req.body.message)
    try {
      await fs.writeFile('test.json', req.body);
      res
        .status(200)
        .json({ message: `yo` });
    } catch (error) {
      res.sendStatus(500)
    }
}