// common JS module syntax on backend
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

const transactions = require('./routes/transactions');

// init express app
const app = express();

// allows us to use body parser
app.use(express.json());

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

// whenever we make a request to this, it should route to the transactions file
app.use('/api/v1/transactions', transactions);

// access global variables using process
const PORT = process.env.PORT || 5000;

// to run server
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold));