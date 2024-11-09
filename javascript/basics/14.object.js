// 1.assign()
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

// 5. freeze () - 
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

