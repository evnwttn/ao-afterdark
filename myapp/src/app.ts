import * as express from "express";
import { cors } from "./middleware";
import { contactsHandler } from "./handlers";

const app = express.default();
const port = process.env.PORT || 5000;

app.use(cors);
app.use(express.json());

app.post("/contact", contactsHandler);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
