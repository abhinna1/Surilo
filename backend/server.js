
const DbSetup = require('./DbSetup')
const express = require('express');

const app = express();
let db = new DbSetup();
app.use(express.json());


app.post('/login',(req, res)=>{
    var firstName =req.body.firstName;
    var lastName =req.body.lastName;
    var dob =req.body.dob;
    var gender =req.body.gender;
    var username =req.body.username;
    var email =req.body.email;
    var password =req.body.password;
    try{
        db.insertUser({firstName, lastName, dob, gender, username, email, password});
    }
    catch(e){
        console.log(e);
    }
    
});
app.post('/register',(req, res)=>{
    console.log(req.body.email);
    console.log(req.body.password);
});

app.listen(8000, ()=>{console.log("Server Started On Port 8000!")});