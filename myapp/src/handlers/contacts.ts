import { Request, Response } from 'express';
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
      .json({ message: `email from ${req.body.name} sent` });
  } catch (error) {
    res.sendStatus(500)
  }
}
