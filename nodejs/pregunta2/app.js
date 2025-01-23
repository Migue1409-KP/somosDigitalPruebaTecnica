var express = require('express');

var indexRouter = require('./routes/index');

var app = express();

app.use('/', indexRouter);

// notFound 404
app.use(function(req, res, next) {
  res.status(404).send('Not Found');
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500).send('Unexpected Error');
});

module.exports = app;