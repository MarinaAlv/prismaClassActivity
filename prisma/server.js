const express = require('express');
const app = express();
const PORT = 3000;

app.use('/books', require('./api/books'));

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

app.use((req, res, next) => {
  next({status: 404, message: 'Endpoin not found.'});
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status ?? 500);
  res.json(err.message ?? 'Sorry, something went wrong');
});
