// queueStrings.js
//
// Stores strings as they are fed to it, 
// only outputing them when asked for one at a time

// inlets and outlets
inlets = 1;
outlets = 3;

var queue = [];

function next() {
	post(queue.length);
	post();
	var nextStr = "";
	if (queue.length > 0) {
		nextStr = queue.shift()
		if (queue.length == 0) {
			outlet(2, 1);
		} else {
			outlet(1, 1);
		}
	} else {
		outlet(2, 1);
	}
	outlet(0, nextStr);
	bang();
}

function push(a) {
	queue.push(a);
	post("Pushing " + a);
	post();
}

// bang -- post input and outputs to max window for debugging
function bang()
{
}