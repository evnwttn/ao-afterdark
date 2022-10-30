import { v4 as uuidv4 } from "uuid";
import session from "express-session";
const FileStore = require("session-file-store")(session);

const secret = uuidv4();

export const sessionOptions = {
  secret: secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 2592000000,
  },
};
