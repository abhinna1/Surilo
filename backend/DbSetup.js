const bcrypt = require('bcrypt');
class DbSetup{
    constructor(){
        const mysql = require('mysql');
        this.con = mysql.createConnection({
            host:"localhost",
            user:"root",
            password:"#J@v@978",
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
                this.con.query(sql, [values], 
                    function (err, result) {
                    if (err) throw err;
                    console.log("Number of records inserted: " + result.affectedRows);
                  });   
            }
        })
    }


    async loginValidate(data){
        let found = false ;
        this.con.query(
            "SELECT * FROM tbl_user WHERE email = ? AND password = ?",
            [data.email,data.password],
            (err,result) => {
        
            if(err){
                console.log(err);
                console.log("hiii");
                found = false;
            }
            else{

            
            
            if (result.length == 1){
                console.log(result.length);
                
                found = true;
                }
            else{
                // console.log(result.RowDataPacket);
                console.log("No User Found");
                found = false;
            }
        }
            
            });
        console.log("huuu");
        return found;
        

    }
}
module.exports = DbSetup;