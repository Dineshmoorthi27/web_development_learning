// // .1 if 
// let print=console.log.bind()
// let age=20
// if (age>=18){
//     print("You are an adult")
// }

// // 2. if else
// if (age%2==0)
// {
//     print("Age is even")
// }
// else{
//     print("Age is odd")
// }
// // 3.else if esle
// let num=-3
// if (num>0){
//     print("Number is positive")
// }
// else if(num==0){
//     print("number is zero")
// }
// else{
//     print("Number is negative")
// }

// to get user input
let prompt = require("prompt-sync")({ sigint: true })
let print = console.log.bind()
// let num = prompt("enter a number: ")

// if (num > 0) {
//     print("Number is positive")
// }
// else if (num == 0) {
//     print("number is zero")
// }
// else {
//     print("Number is negative")
// }

// 4.switch case
let day = prompt("Enter a day ")
// to find type of input
print(typeof day ) 
// convert string into number
day=parseInt(day)
print(typeof day ) 
switch (day) {
    case '1':
        {
            print("Today is Monday")
            break
        }
    case '2':
        {
            print("Today is tuesay")
            break
        }
    
}

// to get input as number from input is:
let val= parseInt(prompt("enter a value:"))
print(val,"type of value is ",typeof(val))
