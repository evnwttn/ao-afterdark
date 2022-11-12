import * as express from "express";
import cors from "cors";
import session from "express-session";
import { sessionOptions, corsOptions } from "./middleware";
import {
  sessionHandler,
  userHandler,
  contactsHandler,
  gridHandler,
} from "./handlers";

require("dotenv").config();
const app = express.default();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors(corsOptions));
app.use(session(sessionOptions));

app.put("/session", sessionHandler);
app.post("/user", userHandler);
app.put("/user", userHandler);
app.post("/contact", contactsHandler);
app.get("/grid", gridHandler);
app.post("/grid", gridHandler);
app.put("/grid", gridHandler);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
