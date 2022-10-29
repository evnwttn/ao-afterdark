import * as express from "express";
import cors from "cors";
import session from "express-session";
import { sessionOptions } from "./middleware";
import {
  userHandler,
  contactsHandler,
  sessionHandler,
  cookieHandler,
} from "./handlers";

require("dotenv").config();

const app = express.default();
const port = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(session(sessionOptions));

app.post("/login", cookieHandler);
app.put("/login", cookieHandler);

// app.post("/login", userHandler);
// app.put("/login", userHandler);
app.post("/contact", contactsHandler);
app.post("/session", sessionHandler);
app.put("/session", sessionHandler);
app.get("/session", sessionHandler);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
