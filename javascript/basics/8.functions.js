let prompt=require("prompt-sync")({ sigint: true })
// 1. name function
// example 1 
console.log("The below output are example of name functions ");

function add(){
    console.log("this is name function")
}
add()
// name function
function greeting (a){
    console.log("hello " + a + " this is pysider")
}

let name=prompt("enter the name : ")
greeting(name)
// example 2
console.log("rest or spreed parameter example it can accepts n values as parameter:- ");

function name1 (...res){
    console.log(res);
    // for in 
    for (i in res){
        console.log(res[i]);
    }
    // for of
    for (let i of res){
        console.log(i)
    }
    console.log(...res); // 10 str 20
    
}
name1(10,'str',20)
console.log("------------------------------------------------------------------------");

// // 2. anonymous function
let anonymous = function(){
console.log("this is anonymous function")
}
anonymous()

// // example 2 
let ano = function(name,b='javascript'){
    console.log(`hi, this is  ${name}, I'm good in ${b}`)
}
ano(prompt("enter name: "))
ano('ram','python')

// example 3
// hoisting is not possible in  
let fun1= function(a,b){
    console.log(`value of a: ${a} value of b: ${b}`)
} 
fun1(10,20)
console.log("------------------------------------------------------------------------");
// 3.arrow function
let arrow = () => {
    console.log("this is arrow function")
}
arrow()
//  or method

let arr = () => console.log("this is alternate method")
arr()

let addition =(a,b)=>{
    let result = a+b
    console.log(`addition of ${a} , ${b} = ${result}`)
}
addition(parseInt(prompt("a:")),parseInt(prompt("b:")))


// with return
let sub = (a,b)=>{
    let result=a-b
    return result
}
let output = sub(5,2)
console.log("subration: of 5 , 2 is " , output)
console.log("sub: of 6, 2",sub(6,2))


// 
console.log("program to sum of arguments...");

let func2 = (...res)=>{
    let sum = 0;
    for (i of res){
        sum+=i;
    }
    console.log(sum);
    }
func2(10,20,30,40,50)

console.log("------------------------------------------------------------------------");
// 4.IIFE function
console.log("4.IIFE function ");

let num =parseInt(prompt("enter a number : "));
(function divisible(a){
    if (a %5==0 ){
        console.log("divisible by 5");
    } 
    else
    {
        console.log("not divisible by 5"); 
    }
})(num)
console.log("------------------------------------------------------------------------");
// 5. higher order functions.
console.log("5. higher order functions");

function mainfun(inner){
    console.log("main function:--");
    console.log(inner);
    inner(10); 
}
function inner(a){
    console.log("inner function :--");
    console.log(a);
    
}
mainfun(inner)
