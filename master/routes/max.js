var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

var osc = require('node-osc');
var tempoClient = new osc.Client('127.0.0.1', 8080);

router.post('/tempo', function(req, res) {

    tempoClient.send(req.body.theText);
    res.send(200);
});

module.exports = router;
