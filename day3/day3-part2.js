import fs, { readFileSync } from 'fs';

var inputs = fs.readFileSync('input.txt').toString().split("\n");
var gamma_rate = "";
var epsilon_rate = "";
// go through each row of numbers and count number of 0 and 1 


for (let position = 0; position < inputs[0].length; position++){
    var count = 0;
    for (let i = 0; i < inputs.length; i++) {
        
        if (inputs[i][position] == "1"){
            count ++;
        }
    };

    if (count > (inputs.length / 2)){
        gamma_rate += 1;
        epsilon_rate += 0;
    } else {
        gamma_rate += 0;
        epsilon_rate += 1;
    }
}


var gamma_rate_decimal = parseInt(gamma_rate, 2)
var epsilon_rate_decimal = parseInt(epsilon_rate, 2)
var power_consumption = gamma_rate_decimal * epsilon_rate_decimal;

// console.log("gamma rate in binary: " + gamma_rate);
// console.log("epsilon rate in binary: " + epsilon_rate);
// console.log("gamma rate in decimals: " + gamma_rate_decimal);
// console.log("epsilon rate in decimals: " + epsilon_rate_decimal);
// console.log("power consumption: " + power_consumption);

// gamma rate in binary: 101110100101
// epsilon rate in binary: 010001011010
// gamma rate in decimals: 2981
// epsilon rate in decimals: 1114
// power consumption: 3320834

// ------------------------------------------------

// Find oxygen generator rating:
// 1) start with position 1
// 2) determine the most common value
// 3) if 0 is the most common value, delete all the numbers that have 1 as its value
// 4) repeat with the next position unless there is only one number left

// Find CO2 scrubber rating:
// 1) start with position 1
// 2) determine the least common value
// 3) if 0 is the least common value, delete all the numbers that have 1 as its value
// 4) repeat with the next position unless there is only one number left

// gamma_rate in binary: 101110100101
// epsilon_rate in binary: 010001011010

// 1. go through first number in gamma_rate. If it's 1, then add all numbers starting with 1 into variable and likewise
// for the other variable. 

// for (let i = 0; i < gamma_rate.length; i++){
//     var oxygen = inputs;
//     var co2 = inputs;

//     if (oxygen[x][i] != gamma_rate[i]){
//         oxygen.slice(x);
//     }

// }

// go through each number in gamma rate
// then go through all the inputs
// go through next number in gamma rate
// if there are more than 1 items in the inputs, go through all inputs
// repeat 

var oxygen = inputs;
var co2 = inputs;

console.log("Original: " + oxygen.length);

let i = 0;
while (i < 10) {
    if (oxygen[i][0] != gamma_rate[0]){
        console.log(oxygen[i]);
        oxygen.splice(i,1);
    }
    i++;
}

console.log("After: " + oxygen.length);
