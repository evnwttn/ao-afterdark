import { v4 as uuidv4 } from "uuid";

function setExpirationDate(): any {
  let date = new Date();
  date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);

  return date;
}

const secret = uuidv4();
const maxAge = setExpirationDate();

export const sessionOptions = {
  secret: secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: maxAge,
    httpOnly: true,
  },
};
