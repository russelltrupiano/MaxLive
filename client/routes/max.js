var express = require('express');
var router = express.Router();

var osc = require('node-osc');
var tempoClient = new osc.Client('127.0.0.1', 8080);
var otherClient = new osc.Client('127.0.0.1', 8081);
var otherClient2 = new osc.Client('127.0.0.1', 8082);
var otherClient3 = new osc.Client('127.0.0.1', 8083);
var otherClient4 = new osc.Client('127.0.0.1', 8084);
var vocoderClient = new osc.Client('127.0.0.1', 8085);
var midiClient = new osc.Client('127.0.0.1', 8086);

router.post('/tempo', function(req, res) {

    tempoClient.send(req.body.theText);
    res.sendStatus(200);
});

router.post('/other', function(req, res) {

    otherClient.send(req.body.theText);
    res.sendStatus(200);
});

router.post('/vocoder', function(req, res) {

    vocoderClient.send(req.session.name + ":" + req.body.theText);
    res.sendStatus(200);
});

router.post('/midi', function(req, res) {

    midiClient.send(req.body.theText);
    res.sendStatus(200);
});

module.exports = router;
