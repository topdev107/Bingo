// server.js

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

require("dotenv").config({ path: "./config.env" });

// routes
const client_router = require('./routes/api/v1/client/client_router');
//const client = require("./api/client");

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: false
  }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
//app.use('/api/wallets', wallets);
app.use(client_router);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));

/** Connect db with low level *//**
const dbo = require("./config/conn");
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
*/
