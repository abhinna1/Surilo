import React from "react";
import axios from "axios";
import {Redirect } from "react-router";
import Home from '../Home/Home'
import { useState } from "react";
import { post } from "jquery";
import AsyncSelect from 'react-select/async';
import Select from 'react-select'
import close from '../img/close.png'
import upload from '../img/upload.png'

import Navbar from '../navbar/Navbar'
import LeftSidebar from '../leftSidebar/LeftSidebar';

export default function AlbumForm(){
    const [album, setAlbum] = useState([]);
    const [genreList, setGenreList] = useState([{value:1, label:'pop'}])
    const [genre, setGenre] = useState('');
    const [songName, setSongName] = useState('');

    const [fileuploaded, setFileUploaded] = useState(false)


    const[title, setTitle] = useState('');
    const artist = JSON.parse(localStorage.getItem('user')).id;
    const[file, setFile] = useState(null);


     async function handleFile(e){
        setFile( e.target.files[0])
        setFileUploaded(true)
    }
    function removeUploadedSong(){
        setFileUploaded(false)
        setFile(null)
        setGenre([]);
        setAlbum([]);
        setTitle('');
    }
    
    function getSongName(){
        if (file == null){
            return;
        }
        else{
            return <div className="uploadTitleCtn d-flex justify-content-between align-items-center"><h6 className="uploadTitle">{file.name}</h6> <button onClick={()=>{removeUploadedSong()}} className="closeBtn"><img src={close} alt="" /></button></div> 
        }
    }
    console.log(fileuploaded)

  
      async function handleSubmit(event){
        event.preventDefault()
        let artist = await axios.get(`/getartistfromusedid/${JSON.parse(localStorage.getItem('user')).id}`)
        let artist_id= artist.data[0].artist_id;
        const formData = new FormData();
        formData.append('title', title)
        formData.append('file', file)
        formData.append('artist', artist_id);
        await axios.post('/addAlbum', formData)
        

    }

    // Stores input data in fieldData. Executed after each time changes are made in input fields
    function handleChange(e){
        setTitle(e.target.value);
        console.log(title);
    }

    if(localStorage.getItem('user')){
    return(
        // <div>
        //     <form  onSubmit={(e)=>{handleSubmit(e)}} method="POST" >
        //         <h3 style={{color:'white'}}>Album name</h3>
        //         <input type="text" name="albumName" onChange={(e)=>{handleChange(e);}}/>
        //         <h3 style={{color:'white'}}>Cover Image</h3>
        //         <input type="file" name="file" accept="image/*" onChange={(e)=>{handleFile(e)}} />
        //         <button type='submit'>Create Album</button>
        //     </form>
        // </div>

        <div className='homeContainer'>
       <div>
           <LeftSidebar></LeftSidebar>
       </div>
            <div className='contentContainer d-flex flex-column'>
                <Navbar></Navbar>
                <div className="innerContainer">
            <div className="form-container">
                <form onSubmit={(e)=>{handleSubmit(e)}}>
                <div className="importMusic">
                
                {fileuploaded?<button className="file-uploaded">Album Cover</button>:<label id="upldMusic" className="custom-file-upload">
                    <input className="uploadSongBtn" type="file" name='file' accept="image/*" onChange={(e)=>{handleFile(e)}}/>
                    <i id="uploadSongLabel" className="fa fa-cloud-upload " style={{color:'black'}}> Select Cover </i>

                </label>}
                </div>
                {getSongName()}
                
                {fileuploaded?<div className="MusicInfo">
                    <div className="trackInfoCtn">
                    <h4>Album Name</h4>

                    <div>

                        <input className="musicTitleInp" placeholder="Album name" type="text" name="albumName" onChange={(e)=>{handleChange(e);}}/>
                    </div>


                    <div>
                        <button class="Uploadbutton">Submit</button>
                    </div>
                </div>
                    </div>:
                <div className="WelcomeCtn">
                    <img src={upload} alt="" />
                    <h3>Create your album</h3>
                    <h5>and uploading your content.</h5>
                </div>}

                
                </form>
            </div>
        </div>
                </div>

                </div>
    )
    }


    
}