// bitshift8to7.js
//
// takes an 8 bit number (0-255) and
// decomposes it into 2 7 bit numbers
// by using the highest 7 bits as the first 
// output and the lowest 7 bits as the second 
// output
//
// example:
// input = 0x10011101
//
// output = 0x1001110 and 0x0011101
// 
// input is x_in. output is x_out, y_out

// inlets and outlets
inlets = 1
outlets = 2

var input, output1, output2;

function msg_int(x_in) {

	input = x_in;

	var x_out, y_out;
	
	x_out = x_in >> 1;
	// mask off highest bit
	y_out = x_in & 127;
	
	output1 = x_out;
	output2 = y_out;
	
	outlet(0, x_out);
	outlet(1, y_out);
	bang();
}

// bang -- post input and outputs to max window for debugging
function bang()
{
//	post("Input: " + input + ". Output: [" + output1 + ", " + output2 + "]");
//	post();
}