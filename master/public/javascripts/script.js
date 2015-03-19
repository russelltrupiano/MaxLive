$(document).ready(function() {

    var leapPosY;

    /* LIBRARY CODE */
    var canvas;
    var ctx;
    var x = 300;
    var y = 300;
    var dx = 3.7;
    var dy = 3.8;
    var WIDTH = 1900;
    var HEIGHT = 1050;
    var intervalID;

    function circle(x,y,r) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI*2, true);
        ctx.fill();
    }

    function rect(x,y,w,h) {
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.closePath();
        ctx.fill();
    }

    function clear() {
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
    }

    function init() {
        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");
    }

    var controllerOptions = { enableGestures: true };

    function draw() {
        // clear();
        // draw_paddles();
        ctx.fillStyle = "#444444";
        // circle(x, y, 10);

        // if (x + dx > (WIDTH-LeftPaddleW) || x + dx < LeftPaddleW){
        //     if( ( y < LeftPaddleY+LeftPaddleH && y > LeftPaddleY) && x < WIDTH/2){
        //         dx = -(1.1)*dx;
        //         dy = (1)*LeftPaddleDY;
        //     }
        //     else if( ( y < RightPaddleY + RightPaddleH) && (y > RightPaddleY) && x > WIDTH/2 ){
        //         dx = -(1.1)*dx;
        //         dy = (1)*RightPaddleDY;
        //     }
        //     else {
        //         setTimeout(function(){
        //             if(x > WIDTH-RightPaddleW){
        //                 leftScore += 1;
        //             }
        //             if(x < RightPaddleW){
        //                 rightScore += 1;
        //             }
        //             x = 300+(Math.random()*20);
        //             y = 300+(Math.random()*20);
        //             dx = 3.7+(Math.random()/2);
        //             dy = 3.8+(Math.random()/2);
        //         }, 200);
        //     }

        // }

        // if (y + dy > HEIGHT || y + dy < 0) {
        //     dy = -dy;
        // }

        // x += dx;
        // y += dy;
    }


    // *** END MOVEMENT    ***

    init();

    /* END LIBRARY CODE */

    Leap.loop(controllerOptions, function(frame) {
        after = {};
        draw();
        if (frame.hands.length > 0) {
          var theHand = frame.hands[0];

          leapPosY = theHand.palmPosition[1];
          $("p#height").html(leapPosY);
          // $.post( "/max/tempo", { theText: leapPosY} );

          circle(500, 500, 100);

        }
    });

});

