// queueStrings.js
//
// Stores strings as they are fed to it,
// only outputing them when asked for via next().

// inlets and outlets
inlets = 1;
outlets = 3;

// Underlying datastore
var queue = [];

// Message to pop the first item from the queue and return it
function next() {
	var nextStr = "";

	// Is there data in the queue
	if (queue.length > 0) {
		// Pop from the back of the queue (FIFO order)
		nextStr = queue.shift()

		if (queue.length == 0) {
			// Empty message
			outlet(2, 1);
		} else {
			// Still data message
			outlet(1, 1);
		}
		// Return the deleted item
		outlet(0, nextStr);
	} else {
		// Empty message
		outlet(2, 1);
	}
}

// Add an item to the queue
function push(a) {
	queue.push(a);
}