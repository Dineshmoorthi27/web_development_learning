// 1.assign() - copy the properties of two or more objects and return new object
let std ={
    name :"dinesh",
    place: "bangalore",
    qualification:"B.TECH"
}
let stdupdate = {
    contact : 9789453361,
    gender : "Male",
    mailid : "dineshmoorthi27@gmail.com"
}
let updatestd = Object.assign(std,stdupdate)
console.log(updatestd);
console.log("----------------------------------------------------------------");

// 2. entries() - returns an array of key and value pair in object 
console.log(Object.entries(updatestd));
console.log("----------------------------------------------------------------"); 
// 3. values () - return an array of all the values which are present in object
console.log("the values which are present in updatestd is : ",Object.values(updatestd))
// 4. keys () - return an array of all the keys which are present in object
console.log("the key which are present in updatestd is : ",Object.keys(updatestd));
console.log("----------------------------------------------------------------"); 
// 5. freeze () - Prevent modification to an object property
const std1={
    name :"dinesh",
    place: "bangalore",
    qualification:"B.TECH"
}
console.log(std1);

std1["name"]="ram"
console.log(std1);
Object.freeze(std1)
std1["qualification"] = "BBA"
console.log(std1);
console.log("----------------------------------------------------------------"); 
// 6 . fromEntries
let fruitBasket = [['apple',100],['orange',120]]
let basket = Object.fromEntries(fruitBasket)
console.log(basket);

// JSON 
// 1. stringify - object into json string
let jsonStr = JSON.stringify(updatestd)
console.log("Original :",updatestd);

console.log("JSON string :",jsonStr);
console.log(typeof(jsonStr));

// 2. parse() - converts JSON into Object
let stringJSON = '{"name1":"pyspider","course":"MERN","during":"5-6 months"}';
let obj = JSON.parse(stringJSON);
console.log(obj);


