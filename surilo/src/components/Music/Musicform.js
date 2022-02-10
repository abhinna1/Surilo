import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import AsyncSelect from 'react-select/async';
import Select from 'react-select'
export default function MusicForm(){
    const [title, setTitle] = useState('');
    const [album, setAlbum] = useState([]);
    const [genreList, setGenreList] = useState([{value:1, label:'pop'}])
    const [file, setFile] = useState(null);
    const [genre, setGenre] = useState('');

    function onGenreChange(e){
        setGenre(e.value);
    }

    function onTitleChange(e){
        setTitle(e.target.value);
    }

    async function onAlbumChange(e){
        setAlbum(e.value);
    }
    function handleFile(e){
        setFile(e.target.files[0]);
        console.log(file)
    }

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
        formData.append('file', file)

        axios.post('/addMusic', formData)
    }

    return(
        <div>
            <div className="container">
                <form onSubmit={(e)=>{handleSubmit(e)}}>
                    <h5 style={{color:'white'}}>Select Genre</h5>
                    <input type="text" name="title" onChange={onTitleChange}/>
                    <h5 style={{color:'white'}}>Select Genre</h5>
                    <Select options={genreList} onChange={onGenreChange} name="genreSelect"/>
                    <h5 style={{color:'white'}}>Search Album</h5>
                    <AsyncSelect value={album.album} name="albumSelect" onChange={(e)=>{onAlbumChange(e)}} placeholder="Select Album" loadOptions={loadOptions}/>
                    <h5 style={{color:'white'}}>Add Music File</h5>
                    <input type="file" name='file' accept="audio/*" onChange={(e)=>{handleFile(e)}}/><br />
                    <input type="submit" className="btn btn-success"/>
                </form>
            </div>
        </div>
    )
        
    
}