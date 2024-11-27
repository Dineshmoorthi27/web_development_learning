let prompt = require("prompt-sync")({sigint:true})
let num =parseInt(prompt("enter a length of : "));
let array=[]
for(let i=0;i<num;i++){
    // let val=parseInt(prompt(`enter the value ${i+1}: `))
    array.push(i+1)
}
console.log(array)
