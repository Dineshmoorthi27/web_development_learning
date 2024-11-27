// Higher Order Function
// 14.map() - it is used modify the array. --> it is an higher order function
//  given length and output length of array is same
console.log("map() - it is used modify the array.");

let arra=[10,20,30,40,50]
console.log(arra.map((data)=>{
    return 3+data
}))
console.log(arra.map((x,i)=>x*i))
console.log("-----------------------------------------------------\n");
// 15. filter() - the length of new will be different.
// Creates a new array with all elements that pass the test implemented by the provided function.
console.log("filter() - the length of new will be different.");
let arr=[1,2,3,4,5]
let result=arr.filter((data) =>{
    return data%2==0 
})
console.log(result);
console.log(arr.filter(data=>data%2==0));
console.log("-----------------------------------------------------\n");
// 16. reduce() - used to get single value from the array based on the condition.
// Executes a reducer function on each element and returns a single output.
console.log("reduce() - used to get single value from the array based on the condition");

let arr1=[1,2,3,4,5]
let result1 = arr1.reduce((acc,curr)=>{
    return acc*curr
})
console.log(result1);
console.log("-----------------------------------------------------\n");
// 17. for each()
let a1=[1,2,3,4,5]
let str=""
a1.forEach((data)=>{
    // console.log(data);  
    str += data  
})
console.log(str);
console.log("-----------------------------------------------------\n");

// 18. every() - it checks all the element of array passes a given test or not.
console.log("some() - it checks all the element of array passes a given test or not.");
let arr2=[1,2,3,4,5]
console.log("All the element of arr2 are greater than 0 ",arr2.every((data)=>{return data>0}))
console.log("All the element of arr2 are greater than 3 ",arr2.every((data)=>{return data>3}))

// 19. some () - checks if any of the value passes the given condition
console.log("some() - checks if any of the value passes the given condition");
let arr3=[1,2,3,4,5]
console.log("some() - checks if any of the value passes the given condition",arr3.some((data)=>{return data}))
// take input from user 5 and add it to array and use for each to display it 
console.log("take input from user 5 and add it to array and use for each to display it ");

let prompt = require("prompt-sync")({sigint:true})
let num =parseInt(prompt("enter a length of : "));
let array=[]
for(let i=0;i<num;i++){
    let val=parseInt(prompt(`enter the value ${i+1}: `))
    array.push(val)
}
console.log(array);

console.log("fetching the value using for each");

array.forEach((data)=>{
    console.log(data)
})
// cube of all the value from array
console.log("cube of all the value from array");
let res=array.map((data)=>{
    return data*data*data
})
console.log(res);
// fetch the values only divisible by 6 and 5
console.log("fetch the values only divisible by 6 and 5");
let res1=array.filter((data)=>{
    return data%5==0 && data%6==0
})
console.log(res1);
let max=0
// max of element in array
for (i of res1){
    max<i ? max  : i 
}
console.log(max)

// alternate way

let res3 = (res1.reduce((acc,data)=>{
    return data>acc ? data  : acc 
})
)
console.log(res3)

