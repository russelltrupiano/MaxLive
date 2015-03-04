var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

var osc = require('node-osc');
var tempoClient = new osc.Client('127.0.0.1', 8080);
var otherClient = new osc.Client('127.0.0.1', 8081);
var vocoderClient = new osc.Client('127.0.0.1', 8085);

router.post('/tempo', function(req, res) {

    tempoClient.send(req.body.theText);
    res.send(200);
});

router.post('/other', function(req, res) {

    otherClient.send(req.body.theText);
    res.send(200);
});

router.post('/vocoder', function(req, res) {

    vocoderClient.send(req.body.theText);
    res.send(200);
});

module.exports = router;
