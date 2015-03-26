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
inlets = 1;
outlets = 3;

var MIDI_LOWER_BOUND = 24;

// Emulates Max's scale object
function scale(oldLow, oldHigh, newLow, newHigh, toScale) {
	return (((toScale - oldLow) * (newHigh - newLow)) / (oldHigh - oldLow)) + newLow;
}

function list(val) {
	var params = arrayfromargs("list", arguments);

	// The note
	var byte = params[0];
	// 1's and 0's representing which notes are in key
	var scaleArray = params.slice(1, 13);
	// Offset of scale from C
 	var startIndex = params[13];

	// Grab the higher order 7 bits for note and lower order 7 bits for velocity
	var midiNoteIndex = byte >> 1;
	var velocity = byte & 127;

	// Index of chord in 4 octave scale
	midiNoteIndex = scale(0, 127, 0, 27, midiNoteIndex);
	velocity = scale(0, 127, 60, 127, velocity);

	// Will store how many notes to offset to play the chord (ex. 4,7 for major)
	var chordPartials = [];

	// Think of the space of notes as a 4x7 array.
	// This puts the MIDI note into that space
	var scaleIndex = Math.floor(midiNoteIndex % 7);
	var scaleOctave = Math.floor(midiNoteIndex / 7);

	var count = -1;
	var chordStart;

	// Iterate until the scaleIndex'th 1
	for (var i = startIndex; i < startIndex + 12; i++) {
		// Note is in key
		if (scaleArray[i % 12] === 1) {
			count++;
		}
		// Once we find the starting note of the chord move on
		if (count === scaleIndex) {
			chordStart = i;
			break;
		}
	}

	// Detect if minor or diminished chords are in key
	if (scaleArray[(3 + chordStart) % 12] === 1) {
 		chordPartials.push(3);
	} else {
		chordPartials.push(4);
	}

	if (scaleArray[(6 + chordStart) % 12] === 1) {
		chordPartials.push(6);
	} else {
		chordPartials.push(7);
	}

	// And finally take all of that data and translate it to an actual MIDI value
	var midiNoteValue = MIDI_LOWER_BOUND + startIndex + chordStart + (scaleOctave * 12);

	outlet(2, chordPartials);
	outlet(1, velocity);
	outlet(0, midiNoteValue);
}
