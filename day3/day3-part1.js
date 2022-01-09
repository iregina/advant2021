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

console.log("gamma rate in binary: " + gamma_rate);
console.log("epsilon rate in binary: " + epsilon_rate);
console.log("gamma rate in decimals: " + gamma_rate_decimal);
console.log("epsilon rate in decimals: " + epsilon_rate_decimal);
console.log("power consumption: " + power_consumption);

// gamma rate in binary: 101110100101
// epsilon rate in binary: 010001011010
// gamma rate in decimals: 2981
// epsilon rate in decimals: 1114
// power consumption: 3320834