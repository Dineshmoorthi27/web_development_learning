let prompt=require("prompt-sync")({ sigint: true })
// 1. name function
// function add(){
//     console.log("this is name function")
// }
// add()
// name function
// function greeting (a){
//     console.log("hello " + a + " this is pysider")
// }

// let name=prompt("enter the name : ")
// greeting(name)

// 2. anonymous function
// let anonymous = function(){
// console.log("this is anonymous function")
// }
// anonymous()

// 
// let ano = function(name,b='javascript'){
//     console.log(`hi, this is  ${name}, I'm good in ${b}`)
// }
// ano(prompt("enter name: "))
// ano('ram','python')


// 3.arrow function
let arrow = () => {
    console.log("this is arrow function")
}
arrow()
//  or method

let arr = () => console.log("this is alternate method")
arr()

let add =(a,b)=>{
    let result = a+b
    console.log(`addition of ${a} , ${b} = ${result}`)
}
add(parseInt(prompt("a:")),parseInt(prompt("b:")))


// with return
let sub = (a,b)=>{
    let result=a-b
    return result
}
let output = sub(5,2)
console.log("subration: of 5 , 2 is " , output)
console.log("sub: of 6, 2",sub(6,2))
