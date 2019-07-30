const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.BACKEND_PORT || 5000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/status', function (req, res) {
	if(req.body.username === "leman" && req.body.code === "russ") {
		res.status(200);
		res.json({
			traffic: Math.floor(Math.random() * 10 + 1),
			minutes: Math.floor(Math.random() * 10 + 1)
		});
	} else {
		res.status(401);
		res.end();
	}
});

app.listen(port, function () {
	console.log(`Running on port ${port}!`);
});