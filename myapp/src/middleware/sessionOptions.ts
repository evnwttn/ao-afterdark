import { v4 as uuidv4 } from "uuid";

const secret = uuidv4();

export const sessionOptions = {
  secret: secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: Date.now() + 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};
