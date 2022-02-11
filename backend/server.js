const express = require('express');
const DbSetup = require('./DbSetup');
const bcrypt = require('bcrypt');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const app = express();
const db = new DbSetup();
const bodyParser = require('body-parser')
const fs = require('fs');
const { off } = require('process');

app.use(cors());
app.use(bodyParser.json()); // Accept JSON format.
app.use(fileUpload()); 

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
app.post('/register',async (req, res)=>{
    req.body.password = await getHash(req.body.password);
    db.insertUser(req.body);
});

// listening for login
app.post('/login', async(req, res)=>{
    let con = db.getConnection();
    console.log(req.body)
    con.query(`SELECT * FROM tbl_user where email = '${req.body.email}';`, async function (err, result, fields) {
        if (err) throw err;
        const val = result[0];
        try{
        if((req.body.email==val.email) && (await bcrypt.compare(req.body.password, val.password))){
            res.send({found:true, data:{id:val.UID, username: val.username, email: val.email}});
        }
        else { res.send({found:false, data:{}})};
        }
        catch(e){
            res.send({found:false, data:{}});
        }
    }
    
    );
});

// Listening for creating albums.
app.post('/addAlbum', async (req, res)=>{
    try{
        const file = req.files.file;
        const dir = './album_covers/'
        const file_name = Math.random() + file.name.replace(/\s/g, '');
        const file_location = dir + file_name;
        await file.mv(file_location, (er)=>{if(er)res.send(er); else res.send('uploaded')});

        const data = {album_name:req.body.title, artist_id:req.body.artist, cover_image:file_name}
        db.insertAlbum(data);
    }
    catch(e){
        console.log(e)
    }

})

app.get('/getalbum/:id', (req, res)=>{
    let con = db.getConnection();

    con.query(`SELECT * FROM tbl_album WHERE album_name="${req.params.id}";`, function (err, result, fields) {
        if (err) throw err;
        if(result) res.send(result);
        else res.send({});
      });
})

app.get('/getalbummusic/:id', (req, res)=>{
    let con = db.getConnection();
    con.query(`SELECT * FROM tbl_album as a, tbl_music as m where a.album_id = m.album_id where album_id=${req.params.id};`, function (err, result, fields) {
        if (err) throw err;
        if(result) {console.log(result[0]); res.send(result);}
        else res.send({});
      });
})

app.get('/getmusic/:id', (req, res)=>{
    let con = db.getConnection();

    con.query(`SELECT file FROM tbl_music WHERE music_id=${req.params.id};`, function (err, result, fields) {
        if (err) throw err;
        if(result) {console.log(result[0]); res.send(result);}
        else res.send({});
      });
})

app.get('/getpopularartist', (req, res)=>{
    let con = db.getConnection();

    con.query(`SELECT * FROM tbl_artist;`, function (err, result, fields) {
        if (err) throw err;
        if(result) res.send(result);
        else res.send({});
      });
})

app.get('/getweeklyhits', (req, res)=>{
    let con = db.getConnection();
    con.query(`SELECT * FROM tbl_music as m , tbl_album as a where m.album_id= a.album_id;`, function (err, result, fields) {
        if (err) throw err;
        if(result) res.send(result);
        else res.send({});
      });
})

app.post('/addMusic', async (req, res)=>{
    try{
        const file = req.files.file;
        const dir = '../surilo/public/Music_Uploads/'
        const file_name = Math.random() + file.name.replace(/\s/g, '');
        const file_location = dir + file_name;
        console.log(file_location)
        await file.mv(file_location, (er)=>{if(er)res.send(er); else res.send('uploaded')});
        const data = {title:req.body.title, genre_id:req.body.genre_id, album_id:req.body.album_id, file:file_name}
        db.insertMusic(data);
    }
    catch(e){
        console.log(e)
    }
})

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

