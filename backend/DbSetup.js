

const mysql = require('mysql'); 
require('dotenv').config();


class DbSetup{
    constructor(){
        this.con = mysql.createConnection({
            host:process.env.HOST,
            user:process.env.USER,
            password:process.env.PASSWORD,
            database:process.env.DATABASE
        })
    }

    getConnection(){
        return this.con;
    }

    emailValidate(email){
        this.con.connect(function(err) {
            if (err) throw err;
            this.con.query(`SELECT * FROM tbl_customer where email = ${email}`, function (err, result, fields) {
              if (err) throw err;
              console.log(result);
            });
          });
    }

    insertUser(data){
        const sql = `insert into tbl_user (firstName, lastName, username, dob, gender, email, password) values ('${data.firstName}', '${data.lastName}', '${data.username}', '${data.dob}', '${data.gender}', '${data.email}', '${data.password}');`;
            this.con.query(sql, (err, result)=>{
                if(err) console.log(err);
                else console.log("New Sign Up Registered.");
        })
    }

    insertAlbum(data){
        const d = new Date();
        var date = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`
        const sql = `insert into tbl_album (album_name, artist_id, release_date, cover_image) values ("${data.album_name}", ${data.artist_id}, '${date}', '${data.cover_image}');`;
        console.log(sql);
        this.con.query(sql, (err, result)=>{
            if(err) console.log(err);
            else console.log("Album Created.");
        })
    }
    
    insertMusic(data){
        const sql = `insert into tbl_music (title, genre_id, album_id, file) values ("${data.title}", ${data.genre_id}, '${data.album_id}', '${data.file}');`;
        console.log(sql);
        this.con.query(sql, (err, result)=>{
            if(err) console.log(err);
            else console.log("Music Added.");
        })
    }

    insertArtist(data){
        const sql = `insert into tbl_artist (UID, artist_name, document_type, document_image, phone, is_verified) values (?);`;
        const values = [data.user, data.name, data.doctype, data.file, data.phone, 0]
        console.log(sql);
        this.con.query(sql, [values], (err, result)=>{
            if(err) console.log(err);
            else console.log("Album Created.");
        })
        const updateUserQuery = `update tbl_user set is_artist=1 where UID = ${data.user}`;
        this.con.query(updateUserQuery, (err, result)=>{
            if(err) console.log(err);
            else console.log("Album Created.");
        })
        console.log('user table updated');
    }
    
} 

module.exports = DbSetup;