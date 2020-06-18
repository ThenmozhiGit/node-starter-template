const express = require('express');
const dotenv = require('dotenv');

//Load env vars
dotenv.config({ path: './config/.env' });

const app = express();

app.get('/api/v1/crud', (req, res) => {
	res.status(200).json({ success: true, msg: `Show all api` });
});

app.post('/api/v1/crud', (req, res) => {
	res.status(200).json({ success: true, msg: `Create new` });
});

app.put('/api/v1/crud/:id', (req, res) => {
	res.status(200).json({ success: true, msg: `Update ${req.params.id}` });
});

app.delete('/api/v1/crud/:id', (req, res) => {
	res.status(200).json({ success: true, msg: `Delete ${req.params.id}` });
});
const PORT = process.env.PORT || 5000;
app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
);
