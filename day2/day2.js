// Calculate the horizontal position and depth you would have after following the planned course. What do you get if you multiply your final horizontal position by your final depth?

import fs, { readFileSync } from 'fs';

var horizontal = 0; // set my horizontal position starts at 0
var depth = 0; // set my vertical position starts at 0

var instructions = fs.readFileSync('instructions.txt').toString().split("\n"); // create array containing all the instructions

for (let i = 0; i < instructions.length; i++) {
	instructions[i] = instructions[i].split(" "); // create sub-arrays separating command and values
    if (instructions[i][0] == "forward") {
        horizontal += Number(instructions[i][1]);
    } else if (instructions[i][0] == "down"){
        depth += Number(instructions[i][1]);
    // } else if (instructions[i][0] == "up"){
    //     depth -= Number(instructions[i][1]);
    } else {
        depth -= Number(instructions[i][1]);
    };
}

// testing purposes

console.log("-------------------------");
// console.log(instructions);
console.log("number of instructions: " + instructions.length);
console.log("horizontal position: " + horizontal);
console.log("depth: " + depth);
console.log("multiply: " + (horizontal * depth));