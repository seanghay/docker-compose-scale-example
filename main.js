import express from 'express';
import os from 'node:os'

const app = express();

app.get("/", (req,res) => {
	res.json({
		id: process.pid,
		host: os.hostname(),
	})
})

app.listen(8080)
