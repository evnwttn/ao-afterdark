import * as express from "express";
import { cors } from "./middleware";
import { contactsHandler, newSessionHandler, updateSessionHandler } from "./handlers";

require('dotenv').config()

const app = express.default();
const port = process.env.PORT || 5000;

app.use(cors);
app.use(express.json());

app.post("/contact", contactsHandler);
app.post("/session", newSessionHandler);
app.put("/session", updateSessionHandler);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

// app.post('/session/:id', sessionHandler)
// app.get('/session/:id', sessionHAndler)
// POST /session/0 or /session/abcdfuck

// req.params.id