

const mysql = require('mysql'); 
require('dotenv').config();

class DbSetup{
    constructor(){
        this.con = mysql.createConnection({
            host:process.env.HOST,
            user:process.env.USER,
            password:process.env.PASSWORD,
            database:process.env.DATABASE
        })
    }

    insertUser(data){
        const sql = `insert into tbl_user (firstName, lastName, username, dob, gender, email, password) values ('${data.firstName}', '${data.lastName}', '${data.username}', '${data.dob}', '${data.gender}', '${data.email}', '${data.password}');`;
        this.con.connect((err)=>{
            if(err){
                console.log(err);
            }
            this.con.query(sql, (err, result)=>{
                if(err) console.log(err);
                console.log("New Sign Up Registered.");
            })
        })
    }

    
} 

module.exports = DbSetup;