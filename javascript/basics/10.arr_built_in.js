// build-infunctions.js
let arr=[10,5.6,'a','b']
console.log(arr[0]) // 10

// 1.tostring() - it is used  returns a string with array values separated by commas.
console.log("tostring()");
console.log(arr.toString());
console.log(typeof(arr.toString()));

console.log("-----------------------------------------------------\n");

// 2. join() - it is used returns an array as a string:
let nu = arr.join(" ");
console.log(nu); // 10 5.6 a b
console.log(typeof(nu));

console.log("-----------------------------------------------------\n");
// 3.push() - return type of array is length of array and append value at the end of the array
console.log("push() - append value at the end of the array");
console.log("original array ",arr);
let num1 = arr.push(7,8,9);
console.log(num1);
console.log("after push ",arr);
console.log("-----------------------------------------------------\n");

// 4. pop() - is used to remove the last value from the array 
console.log("pop() -is used to remove the last value from the array");
console.log(arr);
let num2 = arr.pop();
console.log(num2);
console.log(typeof num2);
console.log(arr);
console.log("-----------------------------------------------------\n");

console.log("reverse the array the using pop");
let a1=[10,20,'a','b']
let a2 = []
while(a1.length>0){
    let a = a1.pop()
    a2.push(a)
}
console.log("array before reverse : ",a1);

console.log("array after reverse :",a2);
console.log("-----------------------------------------------------\n");

// 5. shift() - Removes the first element from an array and returns it.
console.log("shift() - Removes the first element from an array and returns it.");
let arr2 = [1, 2, 3];
console.log("array before shifting",arr2);
let first = arr2.shift(); // first = 1, arr = [2, 3]
console.log("shifted element in array is  ",first)
console.log("array after shifting",arr2);
console.log("-----------------------------------------------------\n");
// 6. unshift() - Adds one or more elements to the beginning of an array.
console.log("unshift() - Adds one or more elements to the beginning of an array.");
console.log("original array : ",arr);
console.log("value to unshifted :- ('HHH',100,200)");

res = arr.unshift('HHH',100,200)
console.log("array after unshifting ",arr)

console.log("-----------------------------------------------------\n");
// 7. concat() - it is used to joim two array
console.log("concat() - it is used to join two array");
let c1 = ['csk','rcb']
let c2 = ['mi','kkr']
let res1 = arr.concat(c1,c2)
let result = arr+","+c1+","+c2
console.log(res1)
console.log(result)
console.log("-----------------------------------------------------\n");
// 8. slice() - method returns selected elements in an array, as a new array.
console.log("slice() - method returns selected elements in an array, as a new array.");
let s1 = ['a','b','c','d','e'];
console.log("original array to be sliced is : ",s1);

let slicearr = s1.slice(1,4)
let slicearr2 = s1.slice(1)
console.log("slice(1,4)->",slicearr,"slice(1)", slicearr2)
console.log("-----------------------------------------------------\n");
// 9. splice() - it is used to add or remove elements from an array
console.log("splice() - it is used to add or remove elements from an array");
let sp1 = ['a','b','c','d','e'];
console.log(sp1);
res1 = sp1.splice(2,3)
res2 = sp1.splice(2,3,"csk","rcb","mi","kkr")
console.log("splice(2,3)->",res1)
console.log(sp1)
console.log("-----------------------------------------------------\n");
// 10. delete -
console.log("delete is used to ");

let delvalue=delete arr[0]
console.log(delvalue)
console.log(arr)
console.log("-----------------------------------------------------\n");
// 11.reverse()
console.log("reverse() - it is used to reverse the array");
console.log(arr)
let revarr = arr.reverse()
console.log(revarr)
console.log("-----------------------------------------------------\n");
// 12.sort()
console.log("sort() - it is used to sort the array");

let s12 = [50,40,10,41,0]
sort1 = s12.sort()
console.log(sort1)
console.log("sorting alphabets...");

let a12 = ['a','B','H','h']
resu = a12.sort()
console.log(resu)
console.log("sort using arrow functions...");

let arr3 = [10,65,12,9,356]
res1 = arr3.sort((a,b)=>{
    return a-b
})
console.log(res1)
console.log("-----------------------------------------------------\n");