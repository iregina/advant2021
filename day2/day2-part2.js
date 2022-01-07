import fs, { readFileSync } from 'fs';

var horizontal = 0; 
var depth = 0; 
var aim = 0; 
var instructions = fs.readFileSync('instructions.txt').toString().split("\n");

for (let i = 0; i < instructions.length; i++) {
	instructions[i] = instructions[i].split(" "); 
    var quantity = Number(instructions[i][1]);
    console.log("------------------------")
    console.log("i is: " + instructions[i]);
    console.log("the horizontal is " + horizontal);
    console.log("the quantity is " + quantity);
    console.log("the aim is " + aim);
    console.log("------------------------")
    if (instructions[i][0] == "forward") {
        horizontal += quantity;
        depth += (aim * quantity);
    } else if (instructions[i][0] == "down"){
        aim += quantity;
    } else {
        aim -= quantity;
    };
}


// testing purposes

console.log("-------------------------");
console.log("horizontal position: " + horizontal);
console.log("depth: " + depth);
console.log("multiply: " + (horizontal * depth));
console.log("aim: " + aim);