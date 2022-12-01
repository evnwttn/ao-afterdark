import session from "express-session";
import filestore from "session-file-store";

const FileStore = filestore(session);
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
