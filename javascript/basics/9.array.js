let arr1=[1,2,3]
let arr2=[10,20,30]
let resultArr=[...arr1,...arr2]
console.log("combined arrray:",[...arr1,...arr2])

console.log("hello")
console.log("___________________________________________________________________________")

// destructuring of array
console.log(arr2[0])       //without destructuring

let [ten,twenty,thirty]=arr2
console.log(ten,twenty)

console.log("___________________________________________________________________________")
let num =[1,2,3,4,5,6,7,8,9]
let resNum=num.map((element)=>{
    return element*10
})
console.log(resNum)
let something = num.map(item=> item *item)
console.log(something)
console.log("___________________________________________________________________________")