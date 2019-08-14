const fs = require('fs');

const START = '@MARKOV@_@CHAIN@_@START@';
const END = '@MARKOV@_@CHAIN@_@END@';

var myMap = new Map();

// Main Loop
fs.readFile('./data.txt', 'utf8', (err, data) => {
	if (err) throw err;
    
	processData(data);
});

function processData(data){
	let previo = START;
	data.split(' ').forEach((element)  => {
		// Let's look for the word
		const state = myMap.get(element);
		// If it does not exist, add it.
		if (!state) {
			myMap.set(element,{value: arr[idx+1], count: 0});
		}
	});
}