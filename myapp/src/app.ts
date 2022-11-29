import * as express from "express";
import cors from "cors";
import session from "express-session";
require("dotenv").config();
import { sessionOptions, corsOptions } from "./middleware";
import {
  userHandler,
  loadGridHandler,
  gridHandler,
  sessionHandler,
  contactsHandler,
} from "./handlers";
import "./services/database/index";

const app = express.default();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors(corsOptions));
app.use(session(sessionOptions));

app.put("/user", userHandler); // login user
app.post("/user", userHandler); // signup user
app.post("/load", loadGridHandler); // load grid list
app.put("/grid", gridHandler); // create grid
app.post("/grid", gridHandler); // update grid
app.put("/session", sessionHandler); // retrieve session
app.post("/session", sessionHandler); // destroy session
app.post("/contact", contactsHandler); // contact email

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
