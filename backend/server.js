const express = require('express');
const DbSetup = require('./DbSetup');
const bcrypt = require('bcrypt');

const app = express();
const db = new DbSetup();

// Password Hashing Algorithm
async function getHash(password, saltRounds = 10){
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        return await bcrypt.hash(password, salt);
    
    } catch (error) {
        console.log(error);
    }
    return null;
};

app.use(express.json());


app.post('/register', async (req, res)=>{
    console.log(`Password: ${req.body.password}`);
    req.body.password = await getHash(req.body.password);
    db.insertUser(req.body);
    console.log(`Hashed Password: ${req.body.password}`);

});

app.listen(process.env.PORT, (err)=>{if(err)console.log(err); else console.log(`Successfully connected to port ${process.env.PORT}.`)});

