import * as express from "express";
import { cors } from "./middleware";
import { contactsHandler, sessionHandler } from "./handlers";

require('dotenv').config()

const app = express.default();
const port = process.env.PORT || 5000;

app.use(cors);
app.use(express.json());

app.post("/contact", contactsHandler);
app.post("/session/:id", sessionHandler);
app.put("/session/:id", sessionHandler);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});


// POST /session/0 or /session/abcdfuck

// req.params.id