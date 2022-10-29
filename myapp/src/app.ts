import * as express from "express";
import cors from "cors";
import session from "express-session";
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
app.use(
  session({
    name: "test123",
    secret: "test321",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: Date.now() + 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
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
