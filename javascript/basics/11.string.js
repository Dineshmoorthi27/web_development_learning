//Strings
let s = "ind vs nz"
// for(i of s){
//     console.log(i)
// }
// for (let i in s){
//     console.log(s[i])
// }
// for(let i = 0; i < s.length; i++) {
//     console.log(s[i])
// }

// for (let i = s.length-1; i >= 0; i--) {
//     console.log(s[i])
// }
// const strrev = s.split('').reverse().join('')
// console.log(strrev)
//1.toUpperCase()
console.log(s.toUpperCase())
//2.toLowerCase()
console.log(s.toLowerCase())
//3.conCat()
let s2 = " test cricket"
console.log(s.concat(s2))
//4.replace()
console.log(s.replace("Nz","Aus"))
console.log(s.replace("nz","Aus"))
//5.slice()
console.log(s.slice(0,9))
//6.split()
console.log(s.split(""))

let res = 'Tanush Karthikeyan'
const strrev = s.split('').reverse().join('')
console.log(strrev)


// 7.length()
let userName='dhinesh'
console.log("Length of username:", userName.length)

// 8.trim()-remove white space from string
let str1='    coimbatiore'
console.log(str1)
let trimmedstr  = str1.trim()
console.log(trimmedstr)

// 9.trimStart()

// 10.trimEnd()

// 11.padStar()
let lang='Ravi'
let filledstr = lang.padStart(11,'Dhinesh')
let filledstr2 = lang.padStart(15,'Dhinesh')
console.log(filledstr)
console.log(filledstr2)

// 12.padEnd

// 13.charAt() - returns the charcter which is present at specified index
console.log("character present at index 4 is :",userName.charAt(4))
console.log("character present at index 4 is :",userName.charAt(20))  //no op


// 14. indexOf() return the index number of specfied character
console.log(userName.indexOf('s'))
console.log(userName.indexOf('z'))

// 14.charCodeAt() -Returns the unicode value of character which is present at specified index
console.log("ASCII value of the  character in 4th index :",userName.charCodeAt(4)) 

// 15.includes() return bool 
let new_str="pyspiders Basavanagudi Bangalore"
console.log(new_str.includes("py"))
console.log(new_str.includes("Pysp"))
console.log(new_str.includes("Ba",11))
console.log(new_str.includes("i",11))
console.log('\n');
// 16.startswith()
console.log("startsWith")
console.log(new_str.startsWith('Py'));
console.log(new_str.startsWith('py'));

// 17. endswith()
console.log("endsWith")
console.log(new_str.endsWith("ore"))
console.log(new_str.endsWith("e"))
console.log(new_str.endsWith("a"))


// 18. lastIndexof()
console.log("lastIndexof()");

let new_str2="development"
console.log(new_str2.lastIndexOf('e'))
console.log(new_str2.lastIndexOf('a'))

// 19. reverse a string
let prompt = require("prompt-sync")({sigint: true}) 
let name1=prompt("enter the string : ")
console.log("original string ",name1);

console.log("reversed string ",name1.split("").reverse().join(""));

