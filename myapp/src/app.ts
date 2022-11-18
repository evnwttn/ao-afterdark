import * as express from "express";
import cors from "cors";
import session from "express-session";
require("dotenv").config();
import { sessionOptions, corsOptions } from "./middleware";
import {
  sessionHandler,
  userHandler,
  contactsHandler,
  gridHandler,
  loadGridHandler,
} from "./handlers";
import "./services/database/index";

const app = express.default();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors(corsOptions));
app.use(session(sessionOptions));

app.put("/session", sessionHandler); // retrieve session
app.post("/session", sessionHandler); // destroy session
app.post("/load", loadGridHandler); // load grid list
app.post("/contact", contactsHandler); // contact email
app.put("/user", userHandler); // login user
app.post("/user", userHandler); // signup user

app.put("/grid", gridHandler); // create grid
app.post("/grid", gridHandler); // update grid

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
