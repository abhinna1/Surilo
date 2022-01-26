
const DbSetup = require('./DbSetup')
const express = require('express');
class Server{
    constructor(){
        this.db = new DbSetup();
        this.app = express();
        
        this.regData = {firstName:"", lastName:"", dob:"", gender:"", username:"", email:"", password:""};

        this.app.use(express.json());
        this.app.listen(8000, ()=>{console.log("Server Started On Port 8000!")});
    }
    getApp(){
        return this.app;
    }
    listenLogin(){
        this.app.post('/login',(req, res)=>{
            this.regData.firstName =req.body.firstName;
            this.regData.lastName =req.body.lastName;
            this.regData.dob =req.body.dob;
            this.regData.gender =req.body.gender;
            this.regData.username =req.body.username;
            this.regData.email =req.body.email;
            this.regData.password =req.body.password;
            try{
                this.db.insertUser(this.regData);
                console.log(this.regData);
            }
            catch(e){
                console.log(e);
            }   
        });
    }
    
}

// function hashPassword(password){
//     const salt = bcrypt.genSalt();
//     salt.hashPassword()
// }



const serv = new Server();
serv.listenLogin();

// app.post('/register',(req, res)=>{
//     console.log(req.body.email);
//     console.log(req.body.password);
// });

