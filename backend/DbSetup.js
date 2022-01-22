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
    insertUser(){
        this.con.connect((error)=>{
            if(error){
                console.log("error");
            }
            else{
                console.log("connected");
            }
        })
    }
}
module.exports = DbSetup;