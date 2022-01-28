const express = require("express");
const mysql =require("mysql");
const DbSetup = require("./DbSetup");

const app = express();

app.use(express.json());


app.post('/login',(req,res) => {
    const email= req.body.email;
    const password= req.body.password;

});

const db = new DbSetup();
// db.getConnection();

// db.con.query(
//     "SELECT * FROM users WHERE email = ? AND password = ?",
//     [email,password],
//     (err,result) => {

//         if(err){
//         res.send({err: err});
//         }
        
//             if (result){
//                 res.send(result);
//             }
//             else{
//                 console.log("No User Found")
//             }
//     }
// )


app.listen(3000, () => {
    console.log("running server")
});