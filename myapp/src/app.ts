import * as express from "express";
import cors from "cors";
import session from "express-session";
require("dotenv").config();
import { connectPg, corsOptions } from "./middleware";
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
app.set("trust proxy", 1);
app.use(cors(corsOptions));
app.use(session(connectPg));

app.put("/user", userHandler); // login user
app.post("/user", userHandler); // signup user
app.post("/load", loadGridHandler); // load grid list
app.put("/grid", gridHandler); // update grid
app.post("/grid", gridHandler); // create grids
app.put("/session", sessionHandler); // retrieve session
app.post("/session", sessionHandler); // destroy session
app.post("/contact", contactsHandler); // contact email

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
