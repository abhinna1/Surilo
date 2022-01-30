const express = require('express');
const DbSetup = require('./DbSetup');
const bcrypt = require('bcrypt');

const app = express();
const db = new DbSetup();
app.use(express.json()); // Accept JSON format.

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

// listening for registering
app.post('/register', async (req, res)=>{
    req.body.password = await getHash(req.body.password);
    db.insertUser(req.body);
});

app.post('/login', async(req, res)=>{
    let con = db.getConnection();
    // req.body.password = await getHash(req.body.password);
    con.query(`SELECT email, password FROM tbl_user where email = '${req.body.email}';`, async function (err, result, fields) {
        if (err) throw err;
        const val = result[0];
        if(req.body.email==val.email && await bcrypt.compare(req.body.password, val.password))res.send(true);
        else res.send(false);
        // if(result[0]) res.send(true);
        // else res.send(false);
    });
});

// listening for email validation.
app.post('/emailvalidate', (req, res)=>{
    let con = db.getConnection();
    let email = req.body.email;

    con.query(`SELECT email FROM tbl_user where email = '${email}'`, function (err, result, fields) {
        if (err) throw err;
        if(result[0]) res.send(true);
        else res.send(false);
      });
})

app.listen(process.env.PORT, (err)=>{if(err)console.log(err); else console.log(`Successfully connected to port ${process.env.PORT}.`)});

