import * as express from "express";
import { cors } from "./middleware";
import { userHandler, contactsHandler, sessionHandler } from "./handlers";

require("dotenv").config();

const app = express.default();
const port = process.env.PORT || 5000;

app.use(cors);
app.use(express.json());

app.post("/login", userHandler);
app.put("/login", userHandler);
app.post("/contact", contactsHandler);
app.post("/session/", sessionHandler);
app.put("/session/", sessionHandler);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
