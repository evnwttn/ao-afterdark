import { Request, Response } from 'express';
import { SMTPClient, Message } from 'emailjs';
import * as fs from 'fs/promises';

const client = new SMTPClient({
	user: 'user',
	password: 'password',
	host: 'smtp-mail.gmail.com',
	ssl: true,
});

export async function contactsHandler(req: Request, res: Response) {
  const message = new Message({
    text: 'i hope this works',
    from: 'you <username@outlook.com>',
    to: 'someone <someone@your-email.com>, another <another@your-email.com>',
    cc: 'else <else@your-email.com>',
    subject: 'testing emailjs',
    attachment: [
      { data: '<html>i <i>hope</i> this works!</html>', alternative: true },
      { path: 'path/to/file.zip', type: 'application/zip', name: 'renamed.zip' },
    ],
  });
  
  console.log(JSON.stringify(req.body, null, 4));
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