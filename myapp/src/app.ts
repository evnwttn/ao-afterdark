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
app.use(cors(corsOptions));
app.use(session(connectPg));
app.set("trust proxy", 1);

app.put("/user", userHandler);
app.post("/user", userHandler);
app.post("/load", loadGridHandler);
app.put("/grid", gridHandler);
app.post("/grid", gridHandler);
app.put("/session", sessionHandler);
app.post("/session", sessionHandler);
app.post("/contact", contactsHandler);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
