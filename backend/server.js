
const DbSetup = require('./DbSetup')
const express = require('express');

const dotenv = require('dotenv');
const path = require('path');
const { OAuth2Client } = require('google-auth-library');

class Server{
    constructor(){
        this.db = new DbSetup();
        this.app = express();
        
        this.regData = {firstName:"", lastName:"", dob:"", gender:"", username:"", email:"", password:""};
        this.logData = {email:"",password:""};

        this.app.use(express.json());
        this.app.listen(8000, ()=>{console.log("Server Started On Port 8000!")});
    }
    getApp(){
        return this.app;
    }
    listenRegister(){
        this.app.post('/register',(req, res)=>{
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

    listenLogin(){
        this.app.post('/login',(req, res)=>{
            this.logData.email =req.body.email;
            this.logData.password =req.body.password;
            try{
                let verified = this.db.loginValidate(this.logData);
                console.log(verified);
            }
            catch(e){
                console.log(e);
            }   
        });

    }
}
    


// //dotenv.config();
// const client = new OAuth2Client('570589698753-g28a852qp3gr9cgrli2g7p4cotj7p89n.apps.googleusercontent.com');

// const app = express();
// app.use(express.json());

// const users = [];

// function upsert(array, item) {
//   const i = array.findIndex((_item) => _item.email === item.email);
//   if (i > -1) array[i] = item;
//   else array.push(item);
// }

// app.post('/api/google-login', async (req, res) => {
//   const { token } = req.body;
//   const ticket = await client.verifyIdToken({
//     idToken: token,
//     audience: 570589698753-g28a852qp3gr9cgrli2g7p4cotj7p89n.apps.googleusercontent.com,
//   });
//   const { name, email, picture } = ticket.getPayload();
//   upsert(users, { name, email, picture });
//   res.status(201);
//   res.json({ name, email, picture });
// });

// app.use(express.static(path.join(__dirname, '/build')));
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, '/build/index.html'))
// );




// function hashPassword(password){
//     const salt = bcrypt.genSalt();
//     salt.hashPassword()
// }



const serv = new Server();
serv.listenRegister();

serv.listenLogin();




// app.post('/register',(req, res)=>{
//     console.log(req.body.email);
//     console.log(req.body.password);
// });
