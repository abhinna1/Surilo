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
        res.send(error);
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
    con.query(`SELECT * FROM tbl_user where email = '${req.body.email}';`, async function (err, result, fields) {
        if (err) throw err;
        const val = result[0];
        try{
        if((req.body.email==val.email) && (await bcrypt.compare(req.body.password, val.password))){
            res.send({found:true, data:{id:val.UID, username: val.username, email: val.email, firstname: val.firstName, lastName: val.lastName, dob: val.dob, profilepic: val.profile_picture, is_artist: val.is_artist, is_admin: val.is_admin}});
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
        const dir = '../surilo/public/album_covers/'
        const file_name = Math.random() + file.name.replace(/\s/g, '');
        const file_location = dir + file_name;
        await file.mv(file_location, (er)=>{if(er)res.send(er); else res.send('uploaded')});

        const data = {album_name:req.body.title, artist_id:req.body.artist, cover_image:file_name}
        db.insertAlbum(data);
    }
    catch(e){
        res.send(e);
    }

})

app.get('/getalbum/:id/:artist', (req, res)=>{
    let con = db.getConnection();
    let artistid = parseInt(req.params.artist) 
    con.query(`SELECT * FROM tbl_album WHERE album_name="${req.params.id}" and artist_id = ${artistid};`, function (err, result, fields) {
        if (err) throw err;
        if(result) res.send(result);
        else res.send({});
      });
})

app.get('/getalbummusic/:id', (req, res)=>{
    let con = db.getConnection();
    con.query(`SELECT * FROM tbl_album as a, tbl_music as m where a.album_id = m.album_id where album_id=${req.params.id};`, function (err, result, fields) {
        if (err) throw err;
        if(result) {res.send(result);}
        else res.send({});
      });
})

app.get('/getmusic/:id', (req, res)=>{
    let con = db.getConnection();

    con.query(`SELECT file FROM tbl_music WHERE music_id=${req.params.id};`, function (err, result) {
        if (err) throw err;
        if(result) {res.send(result);}
        else res.send({});
      });
})

app.get('/gethitmusic/:id', (req, res)=>{
    let con = db.getConnection();

    con.query(`SELECT * tbl_music as m WHERE m.music_id=${req.params.id} ;`, function (err, result) {
        if (err) throw err;
        if(result) {res.send(result);}
        else res.send({});
      });
})

app.get('/addtohits/:id', (req, res)=>{
    let con = db.getConnection();

    con.query(`insert into weekly_hits(music_id) values(${req.params.id});`, function (err, result) {
        if (err) throw err;
        if(result) {res.send(result);}
        else res.send({});
      });
})

app.get('/getartistverified/:id', (req, res)=>{
    let con = db.getConnection();

    con.query(`SELECT is_verified FROM tbl_artist  WHERE  artist_id=${req.params.id};`, function (err, result, fields) {
        if (err) throw err;
        if(result) { res.send(result);}
        else res.send({});
      });
})

app.get('/getartistdata/:id', (req, res)=>{
    let con = db.getConnection();

    con.query(`SELECT * FROM tbl_artist as a, tbl_user as u  WHERE u.UID = a.UID and a.artist_id=${req.params.id};`, function (err, result, fields) {
        if (err) throw err;
        if(result) { res.send(result);}
        else res.send({});
      });
})

app.get('/getartistfromusedid/:id', (req, res)=>{
    let con = db.getConnection();

    con.query(`SELECT artist_id FROM tbl_artist as a, tbl_user as u  WHERE u.UID = a.UID and a.UID=${req.params.id};`, function (err, result, fields) {
        if (err) throw err;
        if(result) { res.send(result);}
        else res.send({});
      });
})



app.get('/getArtistMusics/:id', (req, res)=>{
    let con = db.getConnection();

    con.query(`SELECT * FROM tbl_music as m, tbl_album as a WHERE a.album_id = m.album_id and a.artist_id=${req.params.id};`, function (err, result, fields) {
        if (err) throw err;
        if(result) { res.send(result);}
        else res.send({});
      });
})

app.post('/getplaylists', (req, res)=>{
    let con = db.getConnection();
    con.query(`SELECT * from tbl_playlist as p where p.UID = ${req.body.user}`, function (err, result, fields) {
        if (err) throw err;
        if(result) { res.send(result);}
        else res.send({});
      });
})

app.get('/getplaylistmusics/:playlist', (req, res)=>{
    let con = db.getConnection();
    console.log(`SELECT * FROM tbl_music as m, tbl_playlist as p, playlist_music as pm, tbl_album as a WHERE m.music_id = pm.music_id and p.playlist_id = pm.playlist_id and a.album_id = m.album_id and pm.playlist_id = ${req.params.playlist}`)
    con.query(`SELECT * FROM tbl_music as m, tbl_playlist as p, playlist_music as pm, tbl_album as a WHERE m.music_id = pm.music_id and p.playlist_id = pm.playlist_id and a.album_id = m.album_id and pm.playlist_id = ${req.params.playlist}`, function (err, result, fields) {
        if (err) throw err;
        if(result) {res.send(result);}
        else res.send({});
      });
})

app.get('/getplaylistdata/:id', (req, res)=>{
    let con = db.getConnection();

    con.query(`SELECT * FROM tbl_playlist WHERE playlist_id=${req.params.id};`, function (err, result, fields) {
        if (err) throw err;
        if(result) {console.log(result); res.send(result);}
        else res.send({});
      });
})

app.get('/getUserData', (req, res)=>{
    let con = db.getConnection();

    con.query(`SELECT * FROM tbl_user;`, function (err, result, fields) {
        if (err) throw err;
        if(result) {console.log(result); res.send(result);}
        else res.send({});
      });
})
app.get('/getArtistData', (req, res)=>{
    let con = db.getConnection();

    con.query(`SELECT * FROM tbl_artist;`, function (err, result, fields) {
        if (err) throw err;
        if(result) {console.log(result); res.send(result);}
        else res.send({});
      });
})
app.get('/getMusicData', (req, res)=>{
    let con = db.getConnection();
    // , tbl_genre as g where m.genre_id= g.genre_id
    con.query(`SELECT * FROM tbl_music as m , tbl_album as a where m.album_id= a.album_id;`, function (err, result, fields) {
        if (err) throw err;
        if(result) {console.log(result); res.send(result);}
        else res.send({});
      });
})
app.get('/getAlbumData', (req, res)=>{
    let con = db.getConnection();
    // , tbl_genre as g where m.genre_id= g.genre_id
    con.query(`SELECT * FROM tbl_album as m , tbl_artist as a where m.artist_id= a.artist_id;`, function (err, result, fields) {
        if (err) throw err;
        if(result) {console.log(result); res.send(result);}
        else res.send({});
      });
})

app.get('/getpopularartist', (req, res)=>{
    let con = db.getConnection();

    con.query(`SELECT * FROM tbl_artist as a, tbl_user as u where a.UID = u.UID and a.is_verified=1;`, function (err, result, fields) {
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
        await file.mv(file_location, (er)=>{if(er)res.send(er); else res.send('uploaded')});
        const data = {title:req.body.title, genre_id:req.body.genre_id, album_id:req.body.album_id, file:file_name}
        db.insertMusic(data);
    }
    catch(e){
        res.send(e)
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

app.post('/setartistverifiedstate', (req, res)=>{
    console.log('got request')
    let id = req.body.artist_id;
    let is_verified = req.body.is_verified;
    db.toggleartistVerify({id:id, is_verified:is_verified});
    res.redirect('/admin/artistpanel');
})

// Listening for creating albums.
app.post('/submitalbumform', async(req, res)=>{
    try{
        const file = req.files.file;
        const dir = '../surilo/public/artist_documents/'
        const file_name = Math.random() + file.name.replace(/\s/g, '');
        const file_location = dir + file_name;
        await file.mv(file_location, (er)=>{if(er)res.send(er); else res.send('uploaded')});

        const data = {name:req.body.name, phone:req.body.phone, doctype:req.body.doctype, file: file_name, user:req.body.user}
        db.insertArtist(data);
    }
    catch(e){
        res.send(e);
    }

})

app.post('/updateUser', async(req, res)=>{
    try{
        const file = req.files.file;
        const dir = '../surilo/public/artist_profiles/'
        const file_name = Math.random() + file.name.replace(/\s/g, '');
        const file_location = dir + file_name;
        await file.mv(file_location, (er)=>{if(er)res.send(er); else res.send('uploaded')});

        const data = {id: req.body.id, username:req.body.username, email: req.body.email, file: file_name}
        db.updateUser(data);
    }
    catch(e){
        res.send(e);
    }
    
})


app.get('/searchartist/:tag', (req, res)=>{
    let con = db.getConnection();
    con.query(`SELECT * FROM tbl_artist as a, tbl_user as u WHERE artist_name like "${req.params.tag}%" and a.UID = u.UID;`, function (err, result, fields) {
        if (err) throw err;
        if(result) res.send(result);
        else res.send({});
      });
})

app.get('/searchmusic/:tag', (req, res)=>{
    let con = db.getConnection();
    console.log(`SELECT * FROM tbl_music as m, tbl_album as a WHERE title like "${req.params.tag}%" and m.album_id = a.album_id`);
    con.query(`SELECT * FROM tbl_music as m, tbl_album as a WHERE title like "${req.params.tag}%" and m.album_id = a.album_id`, function (err, result, fields) {
        if (err) throw err;
        if(result) res.send(result);
        else res.send({});
      });
})





app.listen(process.env.PORT, (err)=>{if(err)console.log(err); else console.log(`Successfully connected to port ${process.env.PORT}.`)});

