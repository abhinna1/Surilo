import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useState, useEffect } from "react";
import AsyncSelect from 'react-select/async';
import Select from 'react-select'

import Navbar from '../navbar/Navbar'
import LeftSidebar from '../leftSidebar/LeftSidebar';
import SongDisplay from '../songDisplay/SongDisplay';

import upload from '../img/upload.png'
import close from '../img/close.png'

import './MusicForm.css'


export default function MusicForm(){

    const [title, setTitle] = useState('');
    const [album, setAlbum] = useState([]);
    const [genreList, setGenreList] = useState([{value:1, label:'pop'}])
    const [fileze, setFileze] = useState(null);
    const [genre, setGenre] = useState('');
    const [songName, setSongName] = useState('');

    const [fileuploaded, setFileUploaded] = useState(false)

    function onGenreChange(e){
        setGenre(e.value);
    }

    function onTitleChange(e){
        setTitle(e.target.value);
    }

    async function onAlbumChange(e){
        setAlbum(e.value);
    }

     async function handleFile(e){
        setFileze( e.target.files[0])
        setFileUploaded(true)
    }
    function removeUploadedSong(){
        setFileUploaded(false)
        setFileze(null)
        setGenre([]);
        setAlbum([]);
        setTitle('');
    }
    
    function getSongName(){
        if (fileze == null){
        }
        else{
            return <div className="uploadTitleCtn d-flex justify-content-between align-items-center"><h6 className="uploadTitle">{fileze.name}</h6> <button onClick={()=>{removeUploadedSong()}} className="closeBtn"><img src={close} alt="" /></button></div> 
        }
        return null
    }
    console.log(fileuploaded)
    
    async function loadOptions(inputText, callback){
        const request = await axios.get(`/getalbum/${inputText}`)
        console.log(request)
        let json = request.data;
        callback(json.map(i=>({label: i.album_name, value:i.album_id})))
    }
  
      function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData();
        formData.append('title', title)
        formData.append('genre_id', genre)
        formData.append('album_id', album)
        formData.append('file', fileze)

        axios.post('/addMusic', formData)
    }



    return(

        
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
                
                {fileuploaded?<button className="file-uploaded" disabled>File Uploaded</button>:<label id="upldMusic" className="custom-file-upload">
                    <input className="uploadSongBtn" type="file" name='file' accept="audio/*" onChange={(e)=>{handleFile(e)}}/>
                    <i id="uploadSongLabel" className="fa fa-cloud-upload "></i> Select File

                </label>}
                </div>
                {getSongName()}
                
                {fileuploaded?<div className="MusicInfo">
                    <div className="trackInfoCtn">
                    <h4>Song Description</h4>

                    <div>

                        <input className="musicTitleInp" placeholder="Song name" type="text" name="title" onChange={onTitleChange}/>
                    </div>

                    <div>

                        <Select className="selectInp" options={genreList} placeholder="Song Genre" onChange={onGenreChange} name="genreSelect"/>
                    </div>

                    <div>

                        <AsyncSelect className="selectInp" value={album.album} name="albumSelect" placeholder="Song Album" onChange={(e)=>{onAlbumChange(e)}} placeholder="Select Album" loadOptions={loadOptions}/>
                    </div>


                    <div>
                        <button class="Uploadbutton">Submit</button>
                    </div>
                </div>
                    </div>:
                <div className="WelcomeCtn">
                    <img src={upload} alt="" />
                    <h3>Hi, Welcome to Surilo!</h3>
                    <h5>Start uploading your songs right here.</h5>
                </div>}

                
                </form>
            </div>
        </div>
                </div>

                </div>

       
    )    
}
