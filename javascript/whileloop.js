// let n=0
// while (n<=5){
//     console.log(n)
//     n++
// }

// do while loop
// let prompt =require("prompt-sync")({ sigint: true })
// let num=parseInt(prompt("enter number: "))
// do{
//     console.log(num)
//     num++
// }while (num<=20)

let prompt =require("prompt-sync")({ sigint: true })
let num=parseInt(prompt("enter number: "))
const cap={}
for (let i=0 ; i<=num;i++){
    let key= prompt("Enter state :")
    let value = prompt("enter captial :")
    cap[key]=value
}
console.log(cap)
for (let j in cap){
    cap + " is " + cap + " years old.";
}
