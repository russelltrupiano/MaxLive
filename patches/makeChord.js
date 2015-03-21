// chordProg.js
//
// Given 8 bits, choose the appropriate
// key signature and output formatted as 
// an array of sharps, flats, and normals


// , and from that data, 
// playChord.js will output the chord 
// associated with a given (7bit) index 
// and (7bit) velocity in the scale's 
// progression


//
// example:
// input = 0x1001[0101] (5)
// 
// output = [0,1,1,0,1,1,1] 5 "B"
// 
// input is index. output is scale and index

// inlets and outlets
inlets = 3
outlets = 3

//emulates Max's scale object
function scale(oldLow, oldHigh, newLow, newHigh, toScale) {
	return (((toScale - oldLow) * (newHigh - newLow)) / (oldHigh - oldLow)) + newLow;
}

function msg_int(byte, scaleArray, rotation) {
	
	var midiNoteIndex = byte >> 1;
	var velocity = byte & 127;
	
	midiNoteIndex = scale(0, 127, 24, 95, midiNoteIndex);
	velocity = scale(0, 127, 60, 127, velocity);
	
	var chordPartials = [];
	
	outlet(0, midiNoteIndex);
	outlet(1, velocity);
	outlet(2, chordPartials);
	bang();
}

// bang -- post input and outputs to max window for debugging
function bang()
{
}