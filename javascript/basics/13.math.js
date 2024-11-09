// 5-11-24
// 1. finding the value of pi 
console.log("the value of pi is ",Math.PI);
// 2. round()
console.log("round of 34.9 : ",Math.round(34.9))
// 3. power()
console.log("power of 3,3 : ",Math.pow(3,3));
// 4. sqrt()
console.log("square root of 225: ",Math.sqrt(225));
// 5. abs() - converts negative number to positive number
console.log("absolute value of -25 and 45 is ",Math.abs(-25),Math.abs(45));
// 6. ceil() - rounded up to next integer number
console.log("ceil value of 4.1 is ",Math.ceil(4.1));
// 7. floor() - it is used to remove the decimal part. 
console.log("floor value of 7.7 is ",Math.floor(7.7));
// 8. max() - it is used to find the maximum of the given value
console.log("maximum number of 4,7,1,23",Math.max(4,7,1,23));
// 9. min() - 
console.log("minimum number of 4,7,1,23",Math.min(4,7,1,23));
// 10. random() - it generate a greater than 0 and less than 1
console.log(Math.random());

// the number is 1000 is responsible of 3 digits random number
// for 100 it is 2 digits.

let randnum=Math.floor(Math.random()*1000)
let randnum1=Math.floor(Math.random()*999)
let randnum2=Math.floor(Math.random()*100)
let randnum3=Math.floor(Math.random()*99)
console.log("three digits random number",randnum);
console.log("three digits random number",randnum1);
console.log("two digits random number",randnum2);
console.log("two digits random number",randnum3);


// let arr = [9,3,8,7,10,11,0]
// valu = arr.sort()
// console.log(valu);

// let s12 = [50,40,10,41,0]
// sort1 = s12.sort()
// console.log(sort1)






