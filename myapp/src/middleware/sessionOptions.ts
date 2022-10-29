import { v4 as uuidv4 } from "uuid";

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
