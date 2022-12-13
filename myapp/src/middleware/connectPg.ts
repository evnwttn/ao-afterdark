import session from "express-session";
import pgSession from "connect-pg-simple";

const SessionStore = pgSession(session);
const storeOptions = {};

export const connectPg = {
  store: new SessionStore(storeOptions),
  secret: "shhh",
  retries: 0,
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 2592000000,
    secure: false,
  },
};
