const express = require('express');
const dotenv = require('dotenv');

//Load env vars
dotenv.config({ path: './config/.env' });

const app = express();

app.get('/api/v1/crud', (req, res) => {
	res.status(200).json({ success: true, msg: `Show all api` });
});

const PORT = process.env.PORT || 5000;
app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
);
