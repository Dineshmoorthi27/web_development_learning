let prompt =require("prompt-sync")({ sigint: true })
let n=0
while (n<=5){
    console.log(n)
    n++
}

// do while loop

let number=parseInt(prompt("enter number: "))
do{
    console.log(number)
    number++
}while (number<=20)

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
