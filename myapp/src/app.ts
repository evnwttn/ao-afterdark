import * as express from "express";
import session from "express-session";
// import cookieParser from "cookie-parser";
import { cors } from "./middleware";
import {
  userHandler,
  contactsHandler,
  sessionHandler,
  cookieHandler,
} from "./handlers";

require("dotenv").config();

const app = express.default();
const port = process.env.PORT || 5000;

app.use(cors);
app.use(express.json());
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "session",
    cookie: {
      maxAge: 1000 * 60 * 60,
      sameSite: "none",
      secure: true,
    },
  })
);

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
