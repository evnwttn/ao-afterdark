import * as express from 'express';
import { logger, corsHandler } from './middleware';

const app = express.default();
const port = 3005;

app.use(logger);
app.use(corsHandler);

app.post("/contact", (req, res) => {
	console.log('here')
	console.log(JSON.stringify(req.body, null, 4))

	res
	.header('Access-Control-Allow-Origin', '*')	 			
	.status(200)	
	.json({ data: 'this should work' });
});


app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});


