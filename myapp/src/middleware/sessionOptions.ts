import session from "express-session";
// import { v4 as uuidv4 } from "uuid";

const secret = "test";
const FileStore = require("session-file-store")(session);
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
