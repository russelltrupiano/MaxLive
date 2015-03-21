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
inlets = 1
outlets = 3

// Was going to programmatically generate, but 
// chose to hardcode to save processing time.
//  0 - Normal
//  1 - Sharp
// -1 - Flat
// Scales start on the appropriate note 
// 		(e.g. index 3 A major array goes from A to G)

/*
var scales = [
	[0, 0, 0, 0, 0, 0, 0], //0  - C
	[0, 0, 0, 0, 0, 0, 1], //1  - G
	[0, 0, 1, 0, 0, 0, 1], //2  - D
	[0, 0, 1, 0, 0, 1, 1], //3  - A
	[0, 1, 1, 0, 0, 1, 1], //4  - E
	[0, 1, 1, 0, 1, 1, 1], //5  - B
	[1, 1, 1, 0, 1, 1, 1], //6  - F#
	[1, 1, 1, 1, 1, 1, 1], //7  - C#
	[0,   0,  0,  0,  0,  0,  0], //8  - C
	[0,   0,  0, -1,  0,  0,  0], //9  - F
	[-1,  0,  0, -1,  0,  0,  0], //10 - Bb
	[-1,  0,  0, -1, -1,  0,  0], //11 - Eb
	[-1, -1,  0, -1, -1,  0,  0], //12 - Ab
	[-1, -1,  0, -1, -1, -1,  0], //13 - Db
	[-1, -1, -1, -1, -1, -1,  0], //14 - Gb
	[-1, -1, -1, -1, -1, -1, -1]  //15 - Cb
];*/

var scales = [
	/* -------- Keys With Sharps -------- */
//   C     D     E  F     G     A     B
    [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1], // 0   - C
    [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1], // 1   - G
    [0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1], // 2   - D
    [0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1], // 3   - A
    [0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1], // 4   - E
    [0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1], // 5   - B
    [0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1], // 6   - F#
    [1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0], // 7   - C#
	/* -------- Keys With Flats -------- */	
//   C     D     E  F     G     A     B
    [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1], // 8   - C
    [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0], // 9   - F
    [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0], // 10  - Bb
    [1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0], // 11  - Eb
    [1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0], // 12  - Ab
    [1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0], // 13  - Db
    [0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1], // 14  - Gb
    [0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1]  // 15  - Cb
];

var keyStrings = [
	"C","G","D", "A", "E", "B", "F#","C#",
	"C","F","Bb","Eb","Ab","Db","Gb","Cb"
];

function msg_int(index_raw) {
	
	// Mask off everything but lowest 4 bits
	var index = index_raw & 15;
	
	outlet(0, scales[index]);
	outlet(1, index);
	outlet(2, keyStrings[index]);
	bang();
}

// bang -- post input and outputs to max window for debugging
function bang()
{
}