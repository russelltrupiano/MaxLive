var Leap = require('leapjs');

function startLeap() {
    var controllerOptions = { enableGestures: true };
    Leap.loop(controllerOptions, function(frame) {
        if (frame.hands.length > 0) {
            console.log("X: " + frame.hands[0].palmPosition[0]);
            console.log("Y: " + frame.hands[0].palmPosition[1]);
            console.log("Z: " + frame.hands[0].palmPosition[2]);
            // console.log("Position: " + frame.hands[0].palmPosition);
            // console.log("Velocity: " + frame.hands[0].palmVelocity);
        }
    });
}

startLeap();