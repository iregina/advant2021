// How many sums are larger than the previous sum?

import fs, { readFileSync } from 'fs';

var count = 0;
var depths = fs.readFileSync('depths.txt').toString().split("\n").map(Number);



for (let i = 3; i < depths.length; i++) {
	var previous_sum = (depths[i-3] + depths[i-2] + depths[i-1]) ;
	var current_sum = (depths[i-2] + depths[i-1] + depths[i]);
	if (current_sum > previous_sum){
		count++;
	} 
}
console.log("The sum of depth measurement increases " + count + " times.");