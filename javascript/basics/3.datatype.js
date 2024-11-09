// 1.string - '',"",`
// using ' '
let userName = 'Pyspiders'
console.log("UserName: ", userName)

// using " "
let students = " Pysider's students"
console.log("Students: ", students)

// using ` `- backtick
let location = `basavanagudi`
console.log("Location: ", location)
console.log(`loc :: ${location}`)

// check datatype
console.log(` location data type of ${typeof location}`)
console.log("-------------------------------------------------------------------------")
// 2 number
let n1 = 100
let n2 = 2.05
console.log("n1: ", n1)
console.log(`n1 datatype is ${typeof n1}`)
console.log("n2: ", n2)
console.log(`n2 datatype is ${typeof n2}`)
console.log("-------------------------------------------------------------------------")

// 3. big int 
// type 1
let largenum = BigInt("12345678901234567890")
console.log("large number: ", largenum)
console.log(`type of laregnum: ${typeof largenum}`)
// type 2
let largenum2 = 12345678901234567890n
console.log("large number: ", largenum)
console.log(`type of laregnum: ${typeof largenum}`)
console.log("-------------------------------------------------------------------------")
// 4. boolean
let holiday = false
console.log("holiday: ", holiday)
console.log(typeof holiday)
console.log(`holiday datatype is ${typeof holiday}`)
console.log("-------------------------------------------------------------------------")
// 5. undefined data
let age
console.log("age is :", age)
console.log(`datatype of age is :${typeof age}`)
console.log("-------------------------------------------------------------------------")
// 6. null
let address = null
console.log("address: ", address)
console.log(`datatype of address is :${typeof address}`)
console.log("-------------------------------------------------------------------------")
// 7. object 
let person = { name: "Rahul", age: 25, city: "Bangalore", contact:{ mobile:8903044661 , gmail:"d@32gmail.com"}};
console.log("person: ", person)
console.log(`datatype of person is :${typeof person}`)
console.table(person)
// binding console.log 

let cl=console.log.bind()
// fetching object
cl("name of student: ",person["name"])
cl("age of student: ",person.age)
console.log("student contact details",person.contact)
cl("student gmail",person.contact.gmail)
// adding new key and value 
person["country"]="india"
cl("updated of country",person)
// modifying the value
person["country"]='India'
cl("updated of city",person)
console.table(person)
console.log("-------------------------------------------------------------------------")

// freezing object
// 1. using Object.freeze()
let person1 = { name: "Rahul", age: 25, city: "TN"}
console.log("person1: ", person1)
Object.freeze(person1)
console.table(person1)

person1["age"]=22
