let username = 'Pyspiders'
// console.log(username[0]);

// for (let i in username){
//     console.log(i);
//     console.log(username[i]);
//     console.log('\n')
// }

// 1. toUpperCase()
console.log('toUpperCase() ');
console.log(`upperCase of ${username} is ${username.toUpperCase()}`);
console.log("--------------------------------------------------------");
// 2. toLowerCase()
console.log('toLowerCase()');
console.log(`lowerCase of ${username} is ${username.toLowerCase()}`);
console.log("--------------------------------------------------------");
// 3. length
console.log('length() ');
console.log(`lenght of ${username} is ${username.length}`);
console.log("--------------------------------------------------------");
// 4. slice()
console.log('slice()');
console.log(`slice of ${username} start is(2) is ${username.slice(2)}`);
console.log(`slice of ${username} start is(2) and ends with (7) is ${username.slice(2,7)}`);
console.log("--------------------------------------------------------");
// 5. concat()
console.log('concat() ');
let location = 'Basavangudi'
let town = 'Bangalore'
console.log(`Concat of ${username} with ${location} and is ${town} ${username.concat(location,town)}`);
console.log("--------------------------------------------------------");

// 6.replace()
console.log('replace() ');
let str1 = "Pysiders Basvangudi Bangalore"
console.log("orginal string : ",str1);
console.log("replaced string string : ",str1.replace("Bangalore","Bengaluru"));
console.log("--------------------------------------------------------");

// 7. trim() 
console.log('trim() ');
let str2 = "   Pysiders Basvangudi Bangalore   ";
console.log(`trim of ${str2} is ${str2.trim()}`);
console.log("--------------------------------------------------------");
// 8. trimStart()
console.log('trimStart() ');
console.log(`trim start of ${str2} is ${str2.trimStart()}`);
console.log("--------------------------------------------------------");
// 9.trimeEnd()
console.log('trimEnd() ');
console.log(`trim end of ${str2} is ${str2.trimEnd()}`);
console.log("--------------------------------------------------------");
// 10. split() - splits the string into array 
let splited = username.split('')
console.log(splited);
console.log("--------------------------------------------------------");
// 11. padStart() - 
console.log("padStart() - application is authencation like aadhar otp");
let mobile = '9789453361'
let str3 ='3361'
let paddedString = str3.padStart(mobile.length,'*')
console.log(paddedString);
console.log("--------------------------------------------------------");
// 12.padEnd() - 
console.log("padEnd() - application is authencation like email");
let prompt = require("prompt-sync")({sigint:true})
let mailid =prompt("enter a email id ");
console.log(mailid.slice(0,4).padEnd(mailid.length,"*"));
console.log("--------------------------------------------------------");
// 13. indexOf() - return the index of the given character
console.log("indexOf()");
console.log("The index of d in Pyspiders id ",username.indexOf("d"));
console.log("--------------------------------------------------------");
// 14. charAt() - return the character present at the specified index
console.log("charAt()");
console.log("the value present in the 5th index is",username.charAt(5));
console.log("--------------------------------------------------------");
// 15. charCodeAt() - return the unicode value of the character which is present at specified index.
console.log("charCodeAt()");
console.log(username.charCodeAt(5));
console.log("--------------------------------------------------------");
// 16. includes() - Checks whether the given string is part of original string  and it return the boolean.

let insti = "Pysiders Basvangudi Bangalore"
console.log("includes()");
console.log(`check where Basvangudi in ${insti}`,insti.includes("Basvangudi"));
console.log(`check where bang in ${insti}`,insti.includes("bang"));
console.log("--------------------------------------------------------");
// 17. startsWith() - checks whether the original string start with given pattern or not returns boolean
console.log("startsWith()");
console.log(`check where ${insti} startswith Pysiders `,insti.startsWith("Pysiders"))
console.log(`check where ${insti} startswith bang `,insti.startsWith("bang"))
console.log("--------------------------------------------------------");
// 18. endsWith() - checks whether the original string end with given pattern or not returns boolean
console.log("endsWith()");
console.log(`check where ${insti} endswith Pysiders `,insti.endsWith("Pysiders"))
console.log(`check where ${insti} endswith lore `,insti.endsWith("lore"))
console.log("--------------------------------------------------------");
// 19. match () - 

let balayya = "Don't trouble the trouble,if you TROUBLE the trouble, TROUBLE troubles you. Im'not the trouble, I'm the truth"
let searchRes = balayya.match('trou');
console.log(searchRes);
let searchRes1 = balayya.match(/trou/);
console.log(searchRes1);
//  g defines match globally
let searchRes2 = balayya.match(/trouble/g);
console.log(searchRes2);
// gi defines match globally case insenesitive 
let searchRes3 = balayya.match(/trouble/gi)
console.log(searchRes3);
console.log("--------------------------------------------------------");


