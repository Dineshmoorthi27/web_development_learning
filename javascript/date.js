let date = new Date()
console.log(date)
let day= date.getDay()
console.log(day)
let print=console.log.bind()
switch (day){
    case 0:
        print("mon")
        break
    case 1:
        print("tue")
    case 2:
        print("wed")
        
}
