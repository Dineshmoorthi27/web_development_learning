// create nested function
let math = (a,b)=>{
    let add=(a,b)=>{
console.log(`addition of ${a} and ${b} is ${a+b}`);
         }
    let subtract=(a,b)=>{
        console.log(`substraction of ${a} and ${b} is ${a-b}`);
    }
    let mul =()=>{
        console.log(`multiplication of ${a} and ${b} is ${a*b}`);
    }
    add(a,b)
    subtract(a,b)
    mul(a,b)
}
math(30,20)