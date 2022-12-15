import session, { SessionOptions } from "express-session";
import pgSession from "connect-pg-simple";

const SessionStore = pgSession(session);
const storeOptions = {};

export const connectPg: SessionOptions = {
  store: new SessionStore(storeOptions),
  secret: "shhh",
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 2592000000,
    secure: true,
    httpOnly: false,
    sameSite: "none",
  },
};
