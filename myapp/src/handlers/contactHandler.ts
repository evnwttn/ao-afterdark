import { Request, Response } from "express";
import { StatusCodes } from "../types";
import * as emailjs from "@emailjs/browser";

export async function contactsHandler(req: Request, res: Response) {
  const templateParameters = {
    user_name: req.body.name,
    user_email: req.body.email,
    message: req.body.message,
  };

  // add validation ^^^

  // const emailjsUserId = process.env.EMAIL ?? ''
  // if (!emailjsUIserId) throw new Error('')

  try {
    await emailjs.send(
      "contact_service",
      "contact_form",
      templateParameters,
      process.env.EMAILJS_USER_ID
    );
    res.status(StatusCodes.OK);
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
