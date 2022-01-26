const bcrypt = require('bcrypt');
class DbSetup{
    constructor(){
        const mysql = require('mysql');
        this.con = mysql.createConnection({
            host:"localhost",
            user:"Abhinna",
            password:"abhi123",
            database:"dbsurilo"
        }
        );
    }
    getConnection(){
        return this.con;
    }
    insertUser(data){
        this.con.connect((error)=>{
            if(error){
                console.log(error);
            }
            else{
                console.log("connected");
                var sql = "insert into tbl_user(firstName, lastName, dob, gender, username, email, password) values ?";
                var values=[[data.firstName, data.lastName, data.dob, data.gender, data.username, data.email, data.password]];
                this.con.query(sql, [values], function (err, result) {
                    if (err) throw err;
                    console.log("Number of records inserted: " + result.affectedRows);
                  });   
            }
        })
    }
}
module.exports = DbSetup;