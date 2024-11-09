// 1. using var
// declaration
var institute ='Pyspiders'
console.log("Institute name: ",institute)
// // re-initilization
institute = 'Qspiders'
console.log("Institute name: ",institute)
// // re-declaration
var institute = 'Jsipder'
console.log("Institute name: ",institute)


var num=100
console.log("number outside",num)
{
    console.log("number inside",num)
    var name1="Dinesh"
    console.log("name inside ",name1)
}
console.log(name1)



// 2. using let 
let number=112
console.log("number outside",num)
{
    console.log("number inside",number)
    let name1="Dinesh"
    console.log("name inside ",name1)
}
// console.log("name inside ",name1) -- ReferenceError: name1 is not defined
// re-initilization
let emerency=112
console.log(emerency)
emerency=108
console.log(emerency)
// let emerency=100 SyntaxError: Identifier 'emerency' has already been declared
console.log(emerency)



// 3.using const
const gravity = 9.8
console.log(gravity)
// gravity=10.5 
// console.log(gravity) TypeError: Assignment to constant variable.
// const gravity = 10.8 // SyntaxError: Identifier 'gravity' has already been declared

