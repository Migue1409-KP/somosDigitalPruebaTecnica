var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.status(200).send('not here, go to /status');
});

router.get('/status', function(req, res, next) {
  res.status(200).json({ status: "ok" });
});

module.exports = router;
