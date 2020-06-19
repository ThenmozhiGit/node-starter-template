const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
//Route files
const customRouter = require('./routes/router');
//Load env vars
dotenv.config({ path: './config/.env' });

const app = express();

//Dev logging middleware
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('default'));
}
//Mount routers
app.use('/api/v1', customRouter);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
);
