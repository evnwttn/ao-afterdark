import { Request, Response } from 'express';
import { SMTPClient } from 'emailjs';
// import * as fs from 'fs/promises';

const client = new SMTPClient({
	user: 'user',
	password: 'password',
	host: 'smtp-mail.gmail.com',
	ssl: true,
});


export async function contactsHandler(req: Request, res: Response) {
  console.log(JSON.stringify(req.body, null, 4));

  try {
    const message = await client.sendAsync({
      text: 'testing from ev to ev',
      from: 'you <username@gmail.com>',
      to: 'Evan <evnwttn@gmail.com>',
      subject: 'testing emailjs',
    });
    console.log(message);
  } catch (err) {
    console.error(err);
  }
}

// export async function contactsHandler(req: Request, res: Response) {
//     console.log(JSON.stringify(req.body, null, 4));
//     try {
//       await fs.writeFile('test.json', req.body);
//       res
//         .status(200)
//         .json({ message: `yo` });
//     } catch (error) {
//       res.sendStatus(500)
//     }

// }