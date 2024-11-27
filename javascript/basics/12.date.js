// 04-11-24
let date = new Date()
console.log("Date : ",date);

// 1. getDay() - 
let day= date.getDay()
console.log("today is ",day);
// let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
// console.log("Today is ",days[day])
switch(day) {
    case 0:
        day = 'Sunday'
        break;
    case 1:
        day = 'Monday'
        break;
    case 2:
        day = 'Tuesday'
        break;
    case 3:
        day = 'Wednesday'
        break;
    case 4:
        day = 'Thursday'
        break;
    case 5:
        day = 'Friday'
        break;
    case 6:
        day = 'Saturday'
        break;
}
// 2. date()
let tdate = date.getDate()
console.log("today is ",tdate);
// 2. month()
let month=date.getMonth()
console.log("today is number ",month);
// switch(month) {
//     case 0:
//         month = 'Jan'
//         break;
//     case 1:
//         month = 'Feb'
//         break;
//     case 2:
//         month = 'Mar'
//         break;
//     case 3:
//         month = 'Apr'
//         break;
//     case 4:
//         month = 'May'
//         break;
//     case 5:
//         month = 'Jun'
//         break;
//     case 6:
//         month = 'Jul'
//         break;
//     case 7:
//         month = 'Aug'
//         break;
//     case 8:
//         month = 'Sep'
//         break;
//     case 9:
//         month = 'Oct'
//         break;
//     case 10:
//         month = 'Nov'
//         break;
//     case 11:
//         month = 'Dec'
//         break;
// }

let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
month = months[month]
console.log(" todays month is ",month);
//  3.year()
let year = date.getFullYear()
console.log("today is ",year);
console.log("formate is :->  Monday - 4th of Nov , 2024");

console.log(`${day} - ${tdate}th of ${month} , ${year}`);


// fetch millisecond 
let millisecond = date.getMilliseconds()
// fetch second 
let second = date.getSeconds()
// fetch minutes
let minutes = date.getMinutes()
// fetch hours 
let hours = date.getHours()

console.log("formate is :-> 05:50:32");
console.log(`${hours}:${minutes}:${second}`)
