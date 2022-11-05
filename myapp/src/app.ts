import * as express from "express";
import cors from "cors";
import session from "express-session";
import { sessionOptions } from "./middleware";
import {
  cookieHandler,
  userHandler,
  contactsHandler,
  sessionHandler,
} from "./handlers";

require("dotenv").config();
const app = express.default();
const port = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(session(sessionOptions));

app.post("/cookies", cookieHandler); // cookies
app.post("/login", userHandler); // sign up
app.put("/login", userHandler); // login
app.post("/contact", contactsHandler); // contact email
app.get("/session", sessionHandler); // load sessions
app.post("/session", sessionHandler); // create sessions
app.put("/session", sessionHandler); // update sessions

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
