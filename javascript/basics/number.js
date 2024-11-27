

// 1. toFixed = formats a number to find decimal number 
let decNum = 1.234567
console.log("toFixed()");
console.log("decimal Number",decNum);
console.log("After fixing",decNum.toFixed(2));
console.log('------------------------------------------');

// 2. toString() - convert number into string
console.log("toString()");
let strNum = decNum.toString()
console.log("string Number",strNum);
console.log('------------------------------------------');
// 3. parseInt() - converts a string into number
console.log("parseInt()");
console.log(`string number '${strNum}' to decimal number is ${parseInt(strNum)}`);
console.log('------------------------------------------');
// 4. parserFloat() - converts a string into floating point number
console.log("parserFloat()");
console.log(`string number '${strNum}' to floating number is ${parseFloat(strNum)}`);
console.log('------------------------------------------');
// 5. isNAN() - checks if a value is number or not.Return boolean
console.log("isNAN()");
console.log(`'abc' is not a number , ${isNaN('abc')}`);
console.log(`'123' is not a number , ${isNaN(123)}`);
console.log('------------------------------------------');
// 6. isInterger() - check if a value is an integer
console.log("isInterger()");
console.log(`'abc' is interger, ${Number.isInteger('abc')}`);
console.log(`'100' is interger, ${Number.isInteger(100)}`);

console.log('------------------------------------------');

// write a Js program to check whether each item in array are integer or not

let data = [100,100.11,'100',200]
for (let i of data){
    if (!Number.isInteger(i)){
        console.log(`${i} is not a integer`)
    }
}
console.log('------------------------------------------');

// 7. isFinite() - check if a value is finite
console.log("isFinite()");

console.log('100 is finite number or not',Number.isFinite(100));
console.log('1/0 is finite number or not',Number.isFinite(1/0));
console.log('------------------------------------------');
