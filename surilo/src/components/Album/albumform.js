import React from "react";
import axios from "axios";
import {Redirect } from "react-router";
import Home from '../Home/Home'
import { useState } from "react";
import { post } from "jquery";
export default function AlbumForm(){
    const[title, setTitle] = useState('');
    const[artist, setArtist] = useState(JSON.parse(localStorage.getItem('user')).id);
    const[file, setFile] = useState(null);
    const[hasFile, setHasFile] = useState(false);

    // Stores input data in fieldData. Executed after each time changes are made in input fields
    function handleChange(e){
        setTitle(e.target.value);
        console.log(title);
    }

    function handleFile(e){
        setFile(e.target.files[0]);
    }

    // Send input data to express server on submit.

    function  handleSubmit(event){
        event.preventDefault()
        const formData = new FormData();
        formData.append('title', title)
        formData.append('artist', artist)
        formData.append('file', file)

        console.log(file)
        axios.post('/addAlbum', formData)
    }

    return(
        <div>
            <form  onSubmit={(e)=>{handleSubmit(e)}} method="POST" >
                <h3 style={{color:'white'}}>Album name</h3>
                <input type="text" name="albumName" onChange={(e)=>{handleChange(e);}}/>
                <h3 style={{color:'white'}}>Cover Image</h3>
                <input type="file" name="file" accept="image/*" onChange={(e)=>{handleFile(e)}} />
                <button type='submit'>Create Album</button>
            </form>
        </div>
    )
        
    
}