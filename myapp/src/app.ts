import * as express from 'express';
import { logger, corsHandler } from './middleware';

const app = express.default();
const port = process.env.PORT || 5000;

app.use(logger);
app.use(corsHandler);
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.post("/contact", (req, res) => {
	console.log(JSON.stringify(req.body, null, 4))
	res
	.status(200)
	.json({ data: `yo` })
})

app.listen(port, () => {
	console.log(`app listening on port ${port}`);
  });
    


