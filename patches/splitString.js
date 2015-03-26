// splitString.js
//
// Basic wrapper around the javascript substr
// function to separate strings by a delimeter.
// Given a string and a delimiter output 2 strings
// split at the first instance of that delimeter
//
//
// example:
// input = split "Russell:MaxMSP is awesome"
//
// output = "Russell" and "MaxMSP is awesome"
//

// inlets and outlets
inlets = 1;
outlets = 3;

function split(a) {
	// Not enough args
	if (arguments.length != 2) {
		send_error();
		return;
	}

	var str = arguments[0];
	var delim = arguments[1];

	var index = str.indexOf(delim);

	// Delimeter not found
	if (index == -1) {
		send_error();
		return;
	}

	var left = str.substr(0, index);
	var right = str.substr(index+1, str.length);

	outlet(1, right);
	outlet(0, left);
}

function send_error() {
	outlet(2, 1);
}