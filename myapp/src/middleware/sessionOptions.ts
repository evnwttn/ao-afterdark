import session from "express-session";

const FileStore = require("session-file-store")(session);
const filestoreOptions = {};

export const sessionOptions = {
  store: new FileStore(filestoreOptions),
  secret: "shhh",
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 2592000000,
  },
};
