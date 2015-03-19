var express = require('express');
var router = express.Router();

// var Leap = require('leapjs');

// function startLeap() {
//     var controllerOptions = { enableGestures: true };
//     Leap.loop(controllerOptions, function(frame) {
//         if (frame.hands.length > 0) {
//             console.log("Position: " + frame.hands[0].palmPosition);
//             console.log("Velocity: " + frame.hands[0].palmVelocity);
//         } else {
//             console.log("Got nothing");
//         }
//     });
// }

// startLeap();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
