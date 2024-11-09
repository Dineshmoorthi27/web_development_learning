// to get user input
let prompt = require("prompt-sync")({ sigint: true })
let print = console.log.bind()
// .1 if 
let age = 20
if (age >= 18) {
    print("You are an adult")
}

// 2. if else
if (age % 2 == 0) {
    print("Age is even")
}
else {
    print("Age is odd")
}
// 3.else if esle
let num = -3
if (num > 0) {
    print("Number is positive")
}
else if (num == 0) {
    print("number is zero")
}
else {
    print("Number is negative")
}



let number = prompt("enter a number to check +ve or -ve or zero : ")

if (number > 0) {
    print("Number is positive")
}
else if (number == 0) {
    print("number is zero")
}
else {
    print("Number is negative")
}

// 4.switch case
let day = prompt("Enter a day in numbers from 0 to 6 ")
// to find type of input
print(typeof day)
// convert string into number
day = parseInt(day)
print(typeof day)
switch (day) {
    case 0:
        {
            print("Today is Monday")
            break
        }
    case 1:
        {
            print("Today is Tuesday")
            break
        }
    case 2:
        {
            print("Today is Wednesday")
            break
        }
    case 4:
        {
            print("Today is Thursday")
            break
        }
    case 5:
        {
            print("Today is Friday")
            break
        }
    case 6:
        {
            print("Today is Saturday")
            break
        }
    default:
    {
        print("invalid number")
    }
}

// to get input as number from input is:
let val = parseInt(prompt("enter a value:"))
print(val, "type of value is ", typeof (val))
