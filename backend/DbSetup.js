

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

    getConnection(){
        return this.con;
    }

    emailValidate(email){
        this.con.connect(function(err) {
            if (err) throw err;
            this.con.query(`SELECT * FROM tbl_customer where email = ${email}`, function (err, result, fields) {
              if (err) throw err;
              console.log(result);
            });
          });
    }

    insertUser(data){
        const sql = `insert into tbl_user (firstName, lastName, username, dob, gender, email, password) values ('${data.firstName}', '${data.lastName}', '${data.username}', '${data.dob}', '${data.gender}', '${data.email}', '${data.password}');`;
            this.con.query(sql, (err, result)=>{
                if(err) console.log(err);
                console.log("New Sign Up Registered.");
        })
    }

    
} 

module.exports = DbSetup;