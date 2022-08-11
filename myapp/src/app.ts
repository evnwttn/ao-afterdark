import * as express from 'express';

const app = express.default();
const port = 3005;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

// Import middleware
// import { logger, corsHandler } from './middleware';

// Init express app

// Register middlewares
// app.use(logger);
// app.use(corsHandler);

// app.post("/contact", (req, res) => {
// 	console.log('here')
// 	console.log(JSON.stringify(req.body, null, 4))

// 	res
// 	.header('Access-Control-Allow-Origin', '*')	 			
// 	.status(200)	
// 	.json({ data: 'this should work' });
// });

// Start our server and listen on port 3005
// app.listen(port, () => console.log("server listening @ 3005"));