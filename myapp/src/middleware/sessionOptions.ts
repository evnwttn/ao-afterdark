import session from "express-session";

const FileStore = require("session-file-store")(session);
const filestoreOptions = {};

export const sessionOptions = {
  store: new FileStore(filestoreOptions),
  secret: "shhh",
  retries: 0,
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 2592000000,
    secure: false,
  },
};
