import session from "express-session";
const FileStore = require("session-file-store")(session);
import { v4 as uuidv4 } from "uuid";

const secret = uuidv4();
const filestoreOptions = {};

export const sessionOptions = {
  store: new FileStore(filestoreOptions),
  secret: secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 2592000000,
  },
};
