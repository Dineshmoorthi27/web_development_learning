// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// for (let i=0; i<cars.length;i++)
// {
//     console.log(cars[i])
// }

// iteration over nested loop
// let student = { name: "Rahul", age: 25, city: "Bangalore", contact:{ mobile:8903044661 , gmail:"d@32gmail.com"}};
// for (let i in student)
// {
//     if (typeof student[i] === 'object'){
//         for (let j in student[i])
//         {
//             console.log(student[i][j])
//         }
//     }
//     else{
//         console.log(student[i])
//     }
// }
const car ={
    name:'XUV',
    brand:'motor',
    specfication:{
        color:'red',
        seat:7,
        fuel:'diseal',
        engine:'1.5',
        Transmission:{
            auto:true,
            manual:true,
        }
    }
}
for (let i in car){
    if (typeof car[i] === 'object')
        {
        for(let j in car[i]){
            if (typeof car[i][j]==='object'){
                for (let k in car[i][j]){
                    console.log(car[i][j][k])
                }
            }
            else{
                console.log(car[i][j])
            }
        }
    }
    else{
        console.log(car[i])
    }
}