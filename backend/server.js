
const DbSetup = require('./DbSetup')
const express = require('express');

const app = express();
let db = new DbSetup();
app.use(express.json());

db.insertUser();

app.post('/login',(req, res)=>{
    console.log(req.body.email);
    console.log(req.body.password);
});
app.post('/register',(req, res)=>{
    console.log(req.body.email);
    console.log(req.body.password);
});

app.listen(8000, ()=>{console.log("Server Started On Port 8000!")});