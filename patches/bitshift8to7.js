// bitshift8to7.js
//
// takes an 8 bit number (0-255) and
// decomposes it into 2 7 bit numbers
// by using the highest 7 bits as the first
// output and the lowest 7 bits as the second
// output
//
// example:
// byteIn = 0x10011101
//
// output = 0x1001110 and 0x0011101
//
// input is byteIn. output is noteOut, velOut

// inlets and outlets
inlets = 1;
outlets = 2;

function msg_int(byteIn) {

	var noteOut, velOut;

	// shift off lowest bit
	noteOut = byteIn >> 1;
	// mask off highest bit
	velOut = byteIn & 127;

	outlet(1, velOut);
	outlet(0, noteOut);
}