// install `npm i mysql`
// import mysql module
let mysql = require('mysql');

// Create connection object
let con = mysql.createConnection({
    user:"root",
    password:"root",
    database:"jsql",
    host:"localhost",
})

// creating connecting with mysql 
con.connect((err)=>{
    if(err){
        console.log("can't able to connnect with mysql",err);
    }
    else{
        console.log("connected to mysql");
    }
    
})
// creating table in mysql database
// let query = "CREATE TABLE car (slno INTEGER(4),name VARCHAR(20),brand VARCHAR(20),model INTEGER(4),color VARCHAR(20))"
// con.query(query,(err,res)=>{
//     if(err){
//         console.log("can't create table");
//     }
//     else{
//         console.log("table created");
//     }
        
// })
// con.query('CREATE TABLE user (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255)')\

// insert data into table
// let data = "INSERT INTO car(slno,name,brand,model,color)VALUES(2,'XUV500','Mahindra',2024,'Black')";
// con.query(data,(err,res)=>{
//     if(err){
//         console.log("can't insert data");
//         }
//         else{
//             console.log("data inserted",res.affectedRows);
//             }
// })
// display the data
let query = "SELECT * FROM car";
con.query(query,(err,res)=>{
    if(err){
        console.log("can't display data");
        }
        else{
            console.log(res);
            }
            })

