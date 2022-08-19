import { Request, Response } from 'express';
// import * as fs from 'fs/promises';
import * as emailjs from '@emailjs/browser';


export async function contactsHandler(req: Request, res: Response) {
  const templateParams = {
    user_name: req.body.name, 
    user_email: req.body.email, 
    message: req.body.message
  }

  try {
    await emailjs.send("contact_service",
    "contact_form",
    templateParams,
    process.env.EMAILJS_USER_ID)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
    res
      .status(200)
      .json({ message: `yo` });
  } catch (error) {
    res.sendStatus(500)
  }

  console.log(process.env.EMAILJS_USER_ID)

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